// script.js

// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
const hero = document.querySelector('.hero');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Optionally, adjust hero overlay for dark mode
    if (document.body.classList.contains('dark-mode')) {
        hero.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('../assets/images/hero-background.jpg')";
    } else {
        hero.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../assets/images/hero-background.jpg')";
    }
});

// Modal Functionality
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// Open Modal when button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Close Modal when 'x' is clicked
span.onclick = function() {
    modal.style.display = "none";
}

// Close Modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
