using API.Core.Entity.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Sarthak",
                    Email = "psarthak1993@gmail.com",
                    UserName = "psarthak1993@gmail.com",
                    Address = new Address
                    {
                        FirstName = "Sarthak",
                        LastName = "Pradhan",
                        Street = "Bangalore, India",
                        City = "Bangalore",
                        State = "Karnataka",
                        Zipcode = "721144"
                    }
                };

                await userManager.CreateAsync(user, "Password");
            }
        }
    }
}
