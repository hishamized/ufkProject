document.addEventListener("DOMContentLoaded", function () {});
function toggleDropdown(className) {
  var dropdowns = document.getElementsByClassName(className)[0];
  var iconBars = document.getElementById("icon-bars");
  if (dropdowns.style.display == "none" || dropdowns.style.display == "") {
    dropdowns.style.display = "flex";
    iconBars.innerHTML =
      '<i onclick="toggleDropdown(\'navbar-dropdown\')" class="fa-solid fa-x"></i>';
  } else {
    dropdowns.style.display = "none";
    iconBars.innerHTML =
      '<i onclick="toggleDropdown(\'navbar-dropdown\')" class="fa-solid fa-bars"></i>';
  }
}

function toggleSubDropdown() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    var dropdownIcon = document.getElementById('dropdownIcon');

    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
        dropdownIcon.classList.remove('fa-plus');
        dropdownIcon.classList.add('fa-minus');
    } else {
        dropdownMenu.style.display = 'none';
        dropdownIcon.classList.remove('fa-minus');
        dropdownIcon.classList.add('fa-plus');
    }
}

document.addEventListener("click", function(event) {
    var navbar = document.getElementById("navbar");
    var dropdownMenu = document.getElementById("dropdownMenu");
    var dropdownIcon = document.getElementById("dropdownIcon");

    if (!navbar.contains(event.target)) {
        dropdownMenu.style.display = "none";
        dropdownIcon.classList.remove("fa-minus");
        dropdownIcon.classList.add("fa-plus");
    }
});

// Header Js starts
window.addEventListener("load", function() {
  var navbarHeight = document.querySelector(".navbar").offsetHeight;
  var header = document.querySelector(".header");
  header.style.marginTop = navbarHeight + "px";
  var images = [
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/featured/?kids')",
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/featured/?poor')",
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/featured/?poverty')"
  ];
  var currentIndex = 0;

  function changeBackgroundImage() {
    header.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackgroundImage, 3000);
});
// Header Js ends

