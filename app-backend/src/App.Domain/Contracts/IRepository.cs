using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domain.Contracts
{
    public interface IRepository<TEntity> where TEntity : class, IEntity
    {
        Task<List<TEntity>> ToListAsync();
        Task<TEntity> FindAsync(int id);
        Task AddAsync(TEntity entity);
        Task SaveChangesAsync();
    }
}