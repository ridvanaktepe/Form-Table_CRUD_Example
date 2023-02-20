using back.business.Abstract;
using back.Database.Abstract;
using back.Models;

namespace back.business.Concrete
{
    public class UserManager : IUserManager
    {
        public string _errorMessage { get; set; } = "";
        private readonly IUnitOfWork _unitofwork;

        public UserManager(IUnitOfWork unitofwork)
        {

            _unitofwork = unitofwork;
        }

        public async Task<List<User>> Create(User entity)
        {
            if (Validation(entity))
            {
                await _unitofwork.Users.Create(entity);
                await _unitofwork.Save();
            }
            return await _unitofwork.Users.GetAll();
        }

        public bool Delete(User entity)
        {
            if (Validation(entity))
            {
                _unitofwork.Users.Delete(entity);
                _unitofwork.Save();
                return true;
            }
            return false;
        }

        public bool Update(User entity)
        {
            if (Validation(entity))
            {
                _unitofwork.Users.Update(entity);
                _unitofwork.Save();
                return true;
            }
            return false;
        }

        public async Task<List<User>> GetAll()
        {
            return await _unitofwork.Users.GetAll();
        }

        public async Task<User?> GetById(int id)
        {
            return await _unitofwork.Users.GetById(id);
        }


        public bool Validation(User entity)
        {
            var isValid = true;

            if (string.IsNullOrEmpty(entity.UserName))
            {
                _errorMessage += "Missing information.\n";
                isValid = false;
            }

            return isValid;
        }

    }
}