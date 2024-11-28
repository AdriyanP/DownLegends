// Show and hide the orange box on Menu click
document.getElementById('menu-link').addEventListener('click', function() {
    var menuBox = document.getElementById('menu-box');
    menuBox.classList.toggle('hidden'); // Toggle visibility
});

// Smooth scroll to About section
document.getElementById('about-button').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById('menu-box').classList.add('hidden'); // Hide the menu after clicking
});

// Navigate to Berita (News)
document.getElementById('news-button').addEventListener('click', function() {
    window.location.href = "https://dhafidwk.github.io/MobaMaster/"; // Replace with the actual news link
});

// Smooth scroll to About section from the black menu
document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    var menuBox = document.getElementById('menu-box');
    var headerHeight = document.querySelector('.header').offsetHeight; // Tinggi header

    if (window.pageYOffset > headerHeight) {
        menuBox.classList.add('sticky');
    } else {
        menuBox.classList.remove('sticky');
    }
});

