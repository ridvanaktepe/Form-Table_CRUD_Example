using back.Models;

namespace back.business.Abstract
{
    public interface IUserManager : IValidator<User>
    {
        Task<User?> GetById(string id);
        Task<List<User>> GetAll();
        Task<bool> Create(User entity);
        bool Update(User entity);
        bool Delete(User entity);
    }
}