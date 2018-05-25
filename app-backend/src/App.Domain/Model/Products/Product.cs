using Domain.Contracts;

namespace Domain.Model.Products
{
    public class Product : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}