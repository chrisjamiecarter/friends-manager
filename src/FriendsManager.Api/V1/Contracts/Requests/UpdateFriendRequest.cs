using FriendsManager.Domain.Entities;

namespace FriendsManager.Api.V1.Contracts.Requests;

public class UpdateFriendRequest
{
    #region Properties

    public required string Name { get; set; }

    public required int DesiredContactFrequency { get; set; }

    public required DateTime LastContactDate { get; set; }

    public required string LastContactType { get; set; }

    public required Guid CategoryId { get; set; }

    #endregion
}
