using back.Models;

namespace back.business.Abstract
{
    public interface IUserManager : IValidator<User>
    {
        Task<User?> GetById(int id);
        Task<List<User>> GetAll();
        Task<List<User>> Create(User entity);
        bool Update(User entity);
        bool Delete(User entity);
    }
}