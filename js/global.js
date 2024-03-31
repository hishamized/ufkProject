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

