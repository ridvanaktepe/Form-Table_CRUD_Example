
namespace back.Database.Abstract
{
    public interface IUnitOfWork : IDisposable
    {
        public IUserRepository Users { get;}
        Task<int> Save();
    }
}