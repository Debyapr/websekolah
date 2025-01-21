const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const hamburgerOpenIcon = document.getElementById('hamburger-open');
const hamburgerCloseIcon = document.getElementById('hamburger-close');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');  // Toggling the menu visibility
    hamburgerOpenIcon.classList.toggle('hidden');  // Hide the open icon
    hamburgerCloseIcon.classList.toggle('hidden');  // Show the close icon
});

/// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');
        
// Menampilkan tombol saat menggulir
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Mengatur fungsi klik untuk tombol
scrollToTopButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// Modal Function
function openModal(title, content, image) {
    const modal = document.querySelector('.modal');
    modal.__x.$data.open = true;
    modal.__x.$data.title = title;
    modal.__x.$data.content = content;
    modal.__x.$data.image = image;
}