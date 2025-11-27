document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  let isOpen = false;

  toggler.addEventListener("click", function (event) {
    event.stopPropagation();
    isOpen = !isOpen;

    if (isOpen) {
      navbarNav.classList.remove("collapse");
      navbarNav.classList.add("show");
      toggler.setAttribute("aria-expanded", "true");
    } else {
      navbarNav.classList.add("collapse");
      navbarNav.classList.remove("show");
      toggler.setAttribute("aria-expanded", "false");
    }
  });

  // Closes the nav button
  document.addEventListener("click", function (event) {
    if (
      !navbarNav.contains(event.target) &&
      !toggler.contains(event.target) &&
      isOpen
    ) {
      navbarNav.classList.add("collapse");
      navbarNav.classList.remove("show");
      toggler.setAttribute("aria-expanded", "false");
      isOpen = false;
    }
  });
});


