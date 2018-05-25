using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using JWTSimpleServer;
using JWTSimpleServer.Abstractions;
using Microsoft.AspNetCore.Identity;

namespace Host.Configuration
{
    public class JwtAuthenticationProvider : IAuthenticationProvider
    {
        private readonly UserManager<IdentityUser> _userManager;

        public JwtAuthenticationProvider(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task ValidateClientAuthentication(JwtSimpleServerContext context)
        {
            var success = false;

            var user = await _userManager.FindByNameAsync(context.UserName);
            
            if (user != null)
            {
                success = await _userManager.CheckPasswordAsync(user, context.Password);
            }

            if (success)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.Name, user.UserName)
                };

                context.Success(claims);
            }
            else
            {
                context.Reject("Invalid user authentication.");
            }
        }
    }
}