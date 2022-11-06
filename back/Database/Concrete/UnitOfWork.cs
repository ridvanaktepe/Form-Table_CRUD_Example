using back.Database.Abstract;

namespace back.Database.Concrete
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DatabaseContext _dbcontext;

        public UnitOfWork(DatabaseContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        private UserRepository? _userRepository;

        public IUserRepository Users => _userRepository = _userRepository ?? new UserRepository(_dbcontext);

        public void Dispose()
        {
            _dbcontext.Dispose();
        }

        public async Task<int> Save()
        {
            return await _dbcontext.SaveChangesAsync();
        }
    }
}