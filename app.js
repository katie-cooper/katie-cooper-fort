// Load About Me section
fetch("/katie-cooper-fort/main_page_sections/about_me.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("about-me").innerHTML = data;
  });

// -------------------------------
// Load Navbar
// -------------------------------
fetch('/katie-cooper-fort/navbar.html')  
  .then(response => response.text())
  .then(data => {
    // Insert navbar into placeholder div
    document.getElementById('navbar').innerHTML = data;

    // -------------------------------
    // Initialize Mobile Menu Toggle
    // -------------------------------
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    if (menu && menuLinks) {
      menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
      });
    }
  })
  .catch(error => console.error('Error loading navbar:', error));

// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll reveal for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimelineItems() {
  const windowHeight = window.innerHeight;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const revealPoint = 150; // trigger point from bottom of viewport

    if (itemTop < windowHeight - revealPoint) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealTimelineItems);

revealTimelineItems();

// Scroll reveal for project cards
const projectCards = document.querySelectorAll('.project-card');

function revealProjectCards() {
  const windowHeight = window.innerHeight;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const revealPoint = 150; 

    if (cardTop < windowHeight - revealPoint) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealProjectCards);
revealProjectCards();

// FOOTER
fetch('/katie-cooper-fort/footer.html')  // adjust path if footer.html is in a different folder
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));


// Gallery
const images = [
  '/katie-cooper-fort/images/team pic.jpg',
  '/katie-cooper-fort/images/low_fidelity.png',
  '/katie-cooper-fort/images/disabled_submit_figma.png',
  '/katie-cooper-fort/images/active_submit_figma.png', 
  '/katie-cooper-fort/images/max-users.jpeg', 
  '/katie-cooper-fort/images/cant-add-self.jpeg', 
  '/katie-cooper-fort/images/reservation-card-maker.png',
  '/katie-cooper-fort/images/reservation-card-recipient.png',
  '/katie-cooper-fort/images/admin-view.png'
];

const captions = [
  'Team Picture!',
  'First Wireframing - Low Fidelity Mockup',
  'Figma Mockup: Disabled Submit State',
  'Figma Mockup: Active Submit State', 
  'Adding up to the Maximum Number of Users', 
  'Validation: Error Message When Adding Yourself as a User', 
  'Confirmation Card - Maker View',
  'Confirmation Card - Recipient View',
  'Admin View with All Reservations'
];

let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
const caption = document.getElementById('caption');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.src = images[currentIndex];
  caption.textContent = captions[currentIndex];
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  currentImage.src = images[currentIndex];
  caption.textContent = captions[currentIndex];
});

// TYPING  
const text = "Student, Developer, and Creator";
let index = 0;
const speed = 50; // ms
const typingElement = document.getElementById("typing");

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;