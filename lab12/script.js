// Select elements
const mainImage = document.getElementById("main-image");
const planetTitle = document.getElementById("planet-title");
const planetDescription = document.getElementById("planet-description");
const planetThumbnails = document.querySelectorAll(".planet-thumbnail");

// Add event listeners to planet thumbnails
planetThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const newImage = thumbnail.getAttribute("data-image");
    const newTitle = thumbnail.getAttribute("data-title");
    const newDescription = thumbnail.getAttribute("data-description");

    // Update main slide
    mainImage.src = newImage;
    planetTitle.textContent = newTitle;
    planetDescription.textContent = newDescription;
  });
});