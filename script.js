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

function openOverlay(techId) {
  const tech = techData.find(item => item.id === techId);
  if (tech) {
      document.getElementById('tech-banner').src = tech.banner || '';
      document.getElementById('tech-title').innerText = tech.name;
      document.getElementById('tech-proficiency').innerText = `Proficiency: ${tech.proficiency}`;
      document.getElementById('tech-description').innerText = tech.description;
      document.getElementById('tech-thoughts').innerText = `My Thoughts: ${tech.thoughts}`;
      
      const projectsContainer = document.getElementById('tech-projects');
      projectsContainer.innerHTML = `<h3>Relevant Projects</h3>`;
      tech.relevant_projects.forEach(project => {
          const projectElement = document.createElement('p');
          projectElement.innerText = project;
          projectsContainer.appendChild(projectElement);
      });

      const linksContainer = document.getElementById('tech-links');
      linksContainer.innerHTML = `<h3>Links</h3>`;
      tech.links.forEach(link => {
          const linkElement = document.createElement('a');
          linkElement.href = link;
          linkElement.innerText = link;
          linksContainer.appendChild(linkElement);
      });

      const videoContainer = document.getElementById('tech-video-container');
      if (tech.video) {
          videoContainer.querySelector('video source').src = tech.video;
          videoContainer.style.display = 'block';
      } else {
          videoContainer.style.display = 'none';
      }

      document.getElementById('overlay').style.display = 'flex';
  }
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}

let techData = {};

// Fetch the JSON data on page load
document.addEventListener('DOMContentLoaded', (event) => {
    fetch('experience.json')
        .then(response => response.json())
        .then(data => {
            techData = data.technologies;
        })
        .catch(error => console.error('Error fetching tech data:', error));
});