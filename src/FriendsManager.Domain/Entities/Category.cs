namespace FriendsManager.Domain.Entities;

/// <summary>
/// Represents a Category entity within the Domain layer.
/// </summary>
public class Category
{
    #region Properties

    public Guid Id { get; set; }

    public string Name { get; set; } = "";

    #endregion
}
