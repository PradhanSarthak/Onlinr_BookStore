using API.Data;
using API.Entity;
using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace API.Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.ProductBrands.Any())
                {
                    var brandsData = File.ReadAllText(@"G:\BookSote\BookStore\API\Infrastructure\Data\SeedData\brands.json");
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                foreach (var item in brands)
                    {
                        context.ProductBrands.Add(item);
                    }
                    await context.SaveChangesAsync();
            }

                if (!context.ProductTypes.Any())
                {
                    var typeData = File.ReadAllText(@"G:\BookSote\BookStore\API\Infrastructure\Data\SeedData\types.json");
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typeData);
                    foreach (var type in types)
                    {
                        context.ProductTypes.Add(type);
                    }
                    await context.SaveChangesAsync();
                }
                if (!context.Products.Any())
                    {
                        var productsData = File.ReadAllText(@"..\SeedData\product.json");
                        var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                        foreach (var type in products)
                        {
                            context.Products.Add(type);
                        }
                        await context.SaveChangesAsync();
                    }


                }
            catch(Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}
