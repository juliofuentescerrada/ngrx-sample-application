using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Application.Requests.Products;
using Domain.Contracts;
using Domain.Model.Products;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;

namespace Api.Controllers
{
    [Route("api/products")]
    public class ProductsController : Controller
    {
        private readonly IRepository<Product> _productRepository;

        public ProductsController(IRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        [SwaggerResponse(HttpStatusCode.OK, typeof(List<ProductReponse>))]
        public async Task<IActionResult> GetProductList()
        {
            var products = await _productRepository.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id:int}")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(ProductReponse))]
        public async Task<IActionResult> GetProduct([FromRoute] int id)
        {
            var product = await _productRepository.FindAsync(id);
            return Ok(product);
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProduct request)
        {
            var product = new Product {Name = request.Name};
            await _productRepository.AddAsync(product);
            await _productRepository.SaveChangesAsync();
            return Ok();
        }
    }

    public class ProductReponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}