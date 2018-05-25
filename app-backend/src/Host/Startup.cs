using Api.Controllers;
using DataAccess;
using Domain.Contracts;
using Host.Configuration;
using JWTSimpleServer.Abstractions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NSwag.AspNetCore;

namespace Host
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(o => o.UseInMemoryDatabase("App"));
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddIdentity<IdentityUser, IdentityRole>().AddEntityFrameworkStores<AppDbContext>();

            services
                .AddScoped<IAuthenticationProvider, JwtAuthenticationProvider>()
                .AddJwtSimpleServer(setup => setup.IssuerSigningKey = Configuration["Jwt:IssuerSigningKey"])
                .AddJwtInMemoryRefreshTokenStore();

            services.AddCors(e =>e.AddPolicy("allow", builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            
            app.UseCors("allow")
                .UseSwagger(typeof(ProductsController).Assembly)
                .UseSwaggerUi3(typeof(ProductsController).Assembly)
                .UseJwtSimpleServer(setup => setup.IssuerSigningKey = Configuration["Jwt:IssuerSigningKey"])
                .UseMvc();
        }
    }
}
