// =========
//=====Gallery====//
document.addEventListener("DOMContentLoaded", function () {
  // Gets all gallery images
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Add click functionality to each image
  galleryImages.forEach((img) => {
    // Add hover effect
    img.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });

    // Remove hover effect
    img.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });

    // Show alert on click
    img.addEventListener("click", function () {
      alert(
        "✨ Want to visit this amazing place? Contact us to plan your trip!"
      );
    });
  });
});
