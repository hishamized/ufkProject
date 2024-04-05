document.addEventListener("DOMContentLoaded", function () {
    var navbarHeight = document.getElementById("navbar").offsetHeight;
    var project = document.getElementsByClassName("project-container")[0];
      project.style.marginTop = navbarHeight + 50 + "px";
  });


  window.addEventListener("load", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var projectId = urlParams.get('project');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../index.html', true); 
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var parser = new DOMParser();
                var htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
                var projectElement = htmlDoc.getElementById(projectId);
                if (projectElement) {
                  var imgSrc = projectElement.querySelector('#' + projectId + '-img').src;
                  var h4Text = projectElement.querySelector('#' + projectId + '-title').textContent;
                  var pText = projectElement.querySelector('#' + projectId + '-description').textContent;

                  var projectImage = document.querySelector('.project-image #project-img');
                  projectImage.src = imgSrc;

                  var projectDetails = document.querySelector('.project-details');
                  projectDetails.querySelector('#project-title').textContent = h4Text;
                  projectDetails.querySelector('#project-description').textContent = pText;

                    
                } else {
                    console.error('Element with ID', project, 'not found in index.html');
                }
            } else {
                console.error('Error loading index.html:', xhr.status);
            }
        }
    };
    xhr.send();
});
