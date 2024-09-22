namespace FriendsManager.Domain.Entities;

/// <summary>
/// Represents a Friend entity within the Domain layer.
/// </summary>
public class Friend
{
    #region Properties

    public Guid Id { get; set; }

    public string Name { get; set; } = "";

    public int DesiredContactFrequency { get; set; }

    public DateTime LastContactDate { get; set; }

    public string LastContactType { get; set; } = "";

    public Category? Category { get; set; }

    #endregion
}

