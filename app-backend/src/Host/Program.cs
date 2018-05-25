using System.Collections.Generic;
using DataAccess;
using Domain.Model.Products;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace Host
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Seed().Run();
        }

        public static IWebHost BuildWebHost(string[] args) => WebHost.CreateDefaultBuilder(args).UseStartup<Startup>().Build();
    }

    public static class WebHostExtensions
    {
        public static IWebHost Seed(this IWebHost webHost)
        {
            using (var scope = webHost.Services.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

                var adminRole = new IdentityRole { Name = "admin" };
                var userRole = new IdentityRole { Name = "user" };
                var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                roleManager.CreateAsync(adminRole).Wait();
                roleManager.CreateAsync(userRole).Wait();
                context.SaveChanges();

                var admin = new IdentityUser { UserName = "jfuentes" };
                var userManager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();
                userManager.CreateAsync(admin, "P@$$w0rd1").Wait();
                context.SaveChanges();

                userManager.AddToRolesAsync(admin, new[] { adminRole.Name, userRole.Name }).Wait();

                context.Products.AddRange(new List<Product>
                {
                    new Product { Name = "Product 1"},
                    new Product { Name = "Product 2"},
                    new Product { Name = "Product 3"}
                });

                context.SaveChanges();
            }

            return webHost;
        }
    }
}
