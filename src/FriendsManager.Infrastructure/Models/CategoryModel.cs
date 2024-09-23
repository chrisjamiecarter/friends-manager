using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendsManager.Infrastructure.Models;

/// <summary>
/// Represents a Category entity in the infrastructure layer.
/// </summary>
[Table("Category")]
internal class CategoryModel
{
    #region Constructors

    #endregion
    #region Properties

    [Key]
    public required Guid Id { get; set; }

    [Required]
    public required string Name { get; set; }

    public required List<FriendModel> Friends { get; set; }

    #endregion
    #region Methods

    #endregion
}
