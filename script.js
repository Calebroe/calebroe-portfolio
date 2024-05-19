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
      document.body.classList.add('no-scroll'); // Prevent body scroll
  }
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
  document.body.classList.remove('no-scroll'); // Re-enable body scroll
}


// Close overlay when clicking on the background
document.getElementById('overlay').addEventListener('click', function(event) {
  if (event.target === this) {
      closeOverlay();
  }
});

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


// JOBS SECTION SCRIPTING

const jobData = [
  {
      id: 'Company1',
      name: 'Van Eerden Foodservice',
      image: './assets/jobs/vaneerden-logo.png',
      years: '2024 - present',
      role: 'Developer Intern',
      description: 'Developing various web applications using modern technologies...',
      links: [
          { url: 'https://www.vaneerden.com/', text: 'Company Website' },
          { url: 'https://www.linkedin.com/company/vaneerden-foodservice', text: 'LinkedIn' }
      ]
  },
  {
      id: 'Company2',
      name: 'Levata',
      image: './assets/jobs/levata-logo.jpg',
      years: '2020 - 2024',
      role: 'IT Support Liason',
      description: 'Started with the company as a warehouse employee, I transitiioned into a buisness analyst/IT support technician working flexible hours around my studies at GVSU. Summer of 2023 I took on the role of IT Liason, overseeing three physical locations in the Holland Michigan area, including two warehouses.',
      links: [
          { url: 'https://www.levata.com/en-us/', text: 'Company Website' },
          { url: 'https://www.linkedin.com/company/levataglobal', text: 'LinkedIn' }
      ]
  },
  {
      id: 'Company3',
      name: 'Company 3',
      image: './assets/jobs/saf-holland.png',
      years: '2019 - 2020',
      role: 'Desktop Support Technician',
      description: 'When i graduated from MCC, I wanted to gain more experience with Physcial hardware. I had a opportunity to work at SAF Holland in their IT department as a Tier 1 support role. I worked with several talented IT professionals in supporting on prem and cloud services for seven Business units spread across 4 continents.',
      links: [
          { url: 'https://safholland.com/us/en/', text: 'Company Website' },
          { url: 'https://www.linkedin.com/company/safholland', text: 'LinkedIn' }
      ]
  },
  {
      id: 'Company4',
      name: 'Company 4',
      image: './assets/company4-logo.png',
      years: '2016 - 2018',
      role: 'Junior Developer',
      description: 'Worked on various frontend and backend projects...',
      links: [
          { url: 'https://company4.com', text: 'Company Website' },
          { url: 'https://linkedin.com/company4', text: 'LinkedIn' }
      ]
  }
];

let currentJobIndex = 0;

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const jobWidth = document.querySelector('.job-item').offsetWidth;
  carousel.style.transform = `translateX(-${currentJobIndex * jobWidth}px)`;
}

function nextJob() {
  const totalJobs = jobData.length;
  currentJobIndex = (currentJobIndex + 1) % totalJobs;
  updateCarousel();
}

function prevJob() {
  const totalJobs = jobData.length;
  currentJobIndex = (currentJobIndex - 1 + totalJobs) % totalJobs;
  updateCarousel();
}

function openJobOverlay(companyId) {
  const job = jobData.find(item => item.id === companyId);
  if (job) {
      document.getElementById('job-banner').src = job.image || '';
      document.getElementById('job-company-title').innerText = job.name;
      document.getElementById('job-years').innerText = job.years;
      document.getElementById('job-role-title').innerText = job.role;
      document.getElementById('job-description').innerText = job.description;
      
      const linksContainer = document.getElementById('job-links');
      linksContainer.innerHTML = '<h3>Links</h3>';
      job.links.forEach(link => {
          const linkElement = document.createElement('a');
          linkElement.href = link.url;
          linkElement.innerText = link.text;
          linksContainer.appendChild(linkElement);
      });

      document.getElementById('job-overlay').style.display = 'flex';
      document.body.classList.add('no-scroll'); // Prevent body scroll
  }
}

function closeJobOverlay() {
  document.getElementById('job-overlay').style.display = 'none';
  document.body.classList.remove('no-scroll'); // Re-enable body scroll
}

// Close overlay when clicking on the background
document.getElementById('job-overlay').addEventListener('click', function(event) {
  if (event.target === this) {
      closeJobOverlay();
  }
});