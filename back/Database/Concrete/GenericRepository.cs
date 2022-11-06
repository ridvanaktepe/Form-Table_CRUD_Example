using System.Collections.Generic;
using back.Database.Abstract;
using Microsoft.EntityFrameworkCore;

namespace back.Database.Concrete
{
    public class GenericRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {

        protected readonly DatabaseContext _dbcontext;
        public GenericRepository(DatabaseContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task Create(TEntity entity)
        {
            await _dbcontext.Set<TEntity>().AddAsync(entity);
        }

        public void Delete(TEntity entity)
        {
            _dbcontext.Set<TEntity>().Remove(entity);
        }

        public void Update(TEntity entity)
        {
            _dbcontext.Set<TEntity>().Update(entity);
        }

        public async Task<List<TEntity>> GetAll()
        {
            return await _dbcontext.Set<TEntity>().ToListAsync();
        }

        public async Task<TEntity?> GetById(string id)
        {
            return await _dbcontext.Set<TEntity>().FindAsync(id);
        }

    }
}
