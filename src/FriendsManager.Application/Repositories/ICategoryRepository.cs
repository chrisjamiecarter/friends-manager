using FriendsManager.Domain.Entities;

namespace FriendsManager.Application.Repositories;

public interface ICategoryRepository
{
    Task CreateAsync(Category category);
    Task DeleteAsync(Category category);
    Task<IEnumerable<Category>> ReturnAsync();
    Task<Category?> ReturnAsync(Guid id);
    Task UpdateAsync(Category category);
}
