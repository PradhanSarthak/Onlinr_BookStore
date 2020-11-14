using API.Core.Entity.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace API.Core.Inteface
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
