using back.Models;
using back.Database.Abstract;

namespace back.Database.Concrete
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {   
        private DatabaseContext Dbcontext;
        public UserRepository(DatabaseContext dbcontext): base(dbcontext)
        {
            Dbcontext = dbcontext;
        }

    }
}