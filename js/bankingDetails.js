document.addEventListener("DOMContentLoaded", function () {
    var navbarHeight = document.getElementById("navbar").offsetHeight;
    var project = document.getElementsByClassName("banking-details-container")[0];
      project.style.marginTop = navbarHeight + "px";
  });