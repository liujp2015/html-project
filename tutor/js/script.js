document.addEventListener("DOMContentLoaded", function () {
  const toggleElement = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenuElement = document.querySelector(
    ".navbar .mobile-menu-items"
  );
  toggleElement.addEventListener("click", function () {
    mobileMenuElement.classList.toggle("active");
  });
});
