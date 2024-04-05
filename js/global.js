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

// Cards section js starts
function toggleText(cardIndex, buttonId) {
  var content = document.querySelectorAll('.content')[cardIndex - 1];
  var buttonText = document.getElementById(buttonId);
  
  if (content.classList.contains('limited')) {
    content.classList.remove('limited');
    content.classList.add('extended-limit');
    buttonText.textContent = 'Read Less';
  } else {
    content.classList.add('limited');
    content.classList.remove('extended-limit');
    buttonText.textContent = 'Read More';
  }
}

// Cards section js ends

// Statistics section js starts
document.addEventListener('DOMContentLoaded', function() {
  const statistics = document.querySelectorAll('.statistic');

  const options = {
    root: null,
    threshold: 0,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.dataset.value);
        const currentCount = parseInt(target.querySelector('h3').innerText);

        let start = 0;
        const duration = 1000;
        const step = Math.ceil(targetValue / duration * 10);

        const countUp = () => {
          const nextValue = Math.min(start + step, targetValue);
          target.querySelector('h3').innerText = nextValue.toLocaleString();
          start = nextValue;
          if (start < targetValue) {
            requestAnimationFrame(countUp);
          }
        };

        countUp();

        observer.unobserve(target);
      }
    });
  }, options);

  statistics.forEach(statistic => {
    observer.observe(statistic);
  });
});

// Statistics section js ends

// Testimonials section js starts
  function initializeTestimonials() {
    var testimonials = document.querySelectorAll('.testimonial');
  
    for (var i = 1; i < testimonials.length; i++) {
      testimonials[i].style.display = 'none';
    }
  }
  

  window.addEventListener('load', initializeTestimonials);

  function navigateTestimonials(direction) {

    var testimonials = document.querySelectorAll('.testimonial');

    var visibleTestimonialIndex;
    for (var i = 0; i < testimonials.length; i++) {
      if (testimonials[i].style.display !== 'none') {
        visibleTestimonialIndex = i;
        break;
      }
    }
    
    // Hide all testimonials
    testimonials.forEach(function(testimonial) {
      testimonial.style.display = 'none';
    });
    

    var nextTestimonialIndex;
    if (direction === 'next') {
      nextTestimonialIndex = (visibleTestimonialIndex + 1) % testimonials.length;
    } else if (direction === 'prev') {
      nextTestimonialIndex = (visibleTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    }
    

    testimonials[nextTestimonialIndex].style.display = 'flex';
  }
// Testimonials section js ends

