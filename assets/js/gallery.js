window.addEventListener("load", function () {
  document.querySelector(".loader").style.display = "none";
});

const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navItems = document.querySelectorAll(".nav-li");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    navItems.forEach((item, i) => {
      item.style.animation = `slideDown 0.4s ease forwards`;
      item.style.animationDelay = `${i * 0.08}s`;
    });
  } else {
    navItems.forEach((item) => {
      item.style.animation = "none";
    });
  }
});
