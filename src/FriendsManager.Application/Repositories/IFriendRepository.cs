using FriendsManager.Domain.Entities;

namespace FriendsManager.Application.Repositories;

public interface IFriendRepository
{
    Task CreateAsync(Friend friend);
    Task DeleteAsync(Friend friend);
    Task<IEnumerable<Friend>> ReturnAsync();
    Task<Friend?> ReturnAsync(Guid id);
    Task UpdateAsync(Friend friend);
}
