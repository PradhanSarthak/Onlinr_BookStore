using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class RegisterDto
    {
        public string DisplayName { get; internal set; }
        public string Email { get; internal set; }
        public string Password { get; internal set; }
    }
}
