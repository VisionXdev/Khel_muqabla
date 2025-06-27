window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const featureBoxes = document.querySelectorAll(".feature-box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

featureBoxes.forEach((box) => {
  observer.observe(box);
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".li-about-cha");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".statistic");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  stats.forEach((stat) => {
    observer.observe(stat);
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const statistics = document.querySelectorAll(".statistic");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    statistics.forEach((stat) => {
      const statTop = stat.getBoundingClientRect().top;

      if (statTop < triggerBottom) {
        stat.classList.add("visible");
      } else {
        stat.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
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
