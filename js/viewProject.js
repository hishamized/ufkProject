document.addEventListener("DOMContentLoaded", function () {
    var navbarHeight = document.getElementById("navbar").offsetHeight;
    var project = document.getElementsByClassName("project")[0];
      project.style.marginTop = navbarHeight + 50 + "px";
  });