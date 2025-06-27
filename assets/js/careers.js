const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("cv");
const fileName = document.getElementById("fileName");

dropzone.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;
  } else {
    fileName.textContent = "No file selected";
  }
});

// Drag events
["dragenter", "dragover"].forEach((evt) =>
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.add("dragover");
  })
);

["dragleave", "drop"].forEach((evt) =>
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove("dragover");
  })
);

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
    fileName.textContent = files[0].name;
  }
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
