using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Contracts;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity: class , IEntity
    {
        private readonly AppDbContext _context;

        public Repository(AppDbContext context)
        {
            _context = context;
        }

        public Task<List<TEntity>> ToListAsync()
        {
            return _context.Set<TEntity>().ToListAsync();
        }

        public Task<TEntity> FindAsync(int id)
        {
            return _context.Set<TEntity>().FindAsync(id);
        }

        public Task AddAsync(TEntity entity)
        {
            return _context.Set<TEntity>().AddAsync(entity);
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }
    }
}