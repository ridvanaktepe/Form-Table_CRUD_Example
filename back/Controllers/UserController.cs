using back.business.Abstract;
using back.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace back.Controllers
{
    // localhost:4201/api/user/
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private IUserManager _userManager;

        public UserController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        //http://localhost:4201/api/user/getall
        [HttpGet("getall")]
        public async Task<IActionResult> GetUsers()
        {
            var _users = await _userManager.GetAll();

            foreach (User i in _users)
            {
                Console.WriteLine("=============================================getall" +i.UserName);
                Console.WriteLine(i.GetType());
            }
            
            return Ok(JsonConvert.SerializeObject(_users));
        }

        //http://localhost:4201/api/user/getbyid
        [HttpGet("getbyid")]
        public async Task<IActionResult> GetUser(User user)
        {
            var _user = await _userManager.GetById(user.UserId!);
            Console.WriteLine(_user);
            if (_user == null)
            {
                return NotFound();
            }
            return Ok(_user);
        }

        //http://localhost:4201/api/user/create
        [HttpPost("create")]
        public async Task<IActionResult> CreateUser(User user)
        {
            var state = await _userManager.Create(user);

            if (!state)
            {
                return NotFound();
            }
            return Ok();
        }

        //http://localhost:4201/api/user/update
        [HttpPut("update")]
        public async Task<IActionResult> UpdateUser(User user)
        {
            var state = await Task.Run(() => _userManager.Update(user));

            if (!state)
            {
                return NotFound();
            }
            return Ok();
        }

        //http://localhost:4201/api/user/delete
        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteUser(User user)
        {
            var state = await Task.Run(() => _userManager.Delete(user));

            if (!state)
            {
                return NotFound();
            }
            return Ok();
        }

    }
}