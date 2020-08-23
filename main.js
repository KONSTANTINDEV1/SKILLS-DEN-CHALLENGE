const hamburgerMenu = document.querySelector(".hamburger-menu");
function toggleHamburger() {
  hamburgerMenu.classList.toggle("active");
}

hamburgerMenu.addEventListener("click", toggleHamburger);
