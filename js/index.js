document.addEventListener("DOMContentLoaded", function () {
  var isFirstVisit = sessionStorage.getItem("isFirstVisit");
  if (!isFirstVisit) {
    // console.log("First visit");
    document.getElementById("loadingScreen").style.display = "";
    sessionStorage.setItem("isFirstVisit", true);

    setTimeout(function () {
      document.getElementById("loadingScreen").style.display = "none";
      document.getElementById("content").style.visibility = "visible";
    }, 3000);
  } else {
    // console.log("Not first visit");
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("loadingScreen").style.display = "none";
  }
});
