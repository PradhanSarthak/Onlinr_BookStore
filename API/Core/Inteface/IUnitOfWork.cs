using API.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Core.Inteface
{
   public  interface IUnitOfWork
    {
        public interface IUnitOfWork : IDisposable
        {
            IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
            Task<int> Complete();
        }

        object Repository<T>();
        Task Complete();
    }
}
