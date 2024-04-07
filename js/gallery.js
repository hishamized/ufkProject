document.addEventListener("DOMContentLoaded", function () {
    var navbarHeight = document.getElementById("navbar").offsetHeight;
    var project = document.getElementsByClassName(
      "gallery-container"
    )[0];
    project.style.marginTop = navbarHeight + "px";
  });

  function closePopUp(){
    var popUp = document.getElementById("image-pop-up");
    popUp.style.display = "none";
  }
  document.addEventListener("click", function(event) {
    var popUp = document.getElementById("image-pop-up");
    if (!popUp.contains(event.target)) {
      // console.log("Clicked outside");
    }else{
      closePopUp();
    }
  });
  
  function popImage(img) {
    console.log("Image clicked");
    // Function to execute once the DOM content is fully loaded
    var onDOMContentLoaded = function() {
      console.log(img.src);
  
      var popUp = document.getElementById("image-pop-up");
      var popUpImg = popUp.querySelector("img");
      var imageSrc = img.src;
  
      // Toggle the display of the pop-up based on the clicked image
      if (popUp.style.display === "block" && popUpImg.src === imageSrc) {
        popUp.style.display = "none";
      } else {
        popUpImg.src = imageSrc;
        popUp.style.display = "block";
      }
    };
  
    // Check if the DOM content is already loaded
    if (document.readyState === "loading") {
      console.log("DOM content is still loading");
      // If the DOM content is still loading, wait for it to be fully loaded
      document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
    } else {
      // If the DOM content is already loaded, execute the function immediately
      onDOMContentLoaded();
    }
  }
  
  
  
  
  