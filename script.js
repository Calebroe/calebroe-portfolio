function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

function openOverlay(tech) {
  var overlay = document.getElementById("overlay");
  var title = document.getElementById("tech-title");
  var experience = document.getElementById("tech-experience");
  var projects = document.getElementById("tech-projects");
  var thoughts = document.getElementById("tech-thoughts");

  // Set the content based on the tech
  title.textContent = tech;
  experience.textContent = "Experience with " + tech + ":";
  projects.textContent = "Relevant projects with " + tech + ":";
  thoughts.textContent = "Thoughts on " + tech + ":";

  overlay.style.display = "block";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

// Set the default tab to be open
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-link").click();
});