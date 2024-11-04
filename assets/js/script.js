//navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");

  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbarFixed");
  } else {
    navbar.classList.remove("navbarFixed");
  }
});

//navButton
navButton.addEventListener("click", () => {
  const navButton = document.getElementById("navButton");
  const navMenu = document.getElementById("navMenu");
  navButton.classList.toggle("navButtonActive");
  navMenu.classList.toggle("hidden");
});
