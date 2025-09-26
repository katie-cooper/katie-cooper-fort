// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar__menu');

// menu.addEventListener('click', function() {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// });

// -------------------------------
// Load Navbar
// -------------------------------
fetch('/navbar.html')  // Adjust path if navbar.html is in a different folder
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


// -------------------------------
// Optional: Other JS for your site
// -------------------------------

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

// You can add more site-wide JS here if needed
// timeline
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

// Listen to scroll events
window.addEventListener('scroll', revealTimelineItems);

// Run once in case some items are already in view
revealTimelineItems();

// FOOTER
fetch('/footer.html')  // adjust path if footer.html is in a different folder
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));


// Gallery
const images = [
  '../images/team pic.jpg',
  '../images/low_fidelity.png',
  '../images/disabled_submit_figma.png',
  '../images/active_submit_figma.png', 
  '../images/max-users.jpeg', 
  '../images/cant-add-self.jpeg', 
  '../images/reservation-card-maker.png',
  '../images/reservation-card-recipient.png',
  '../images/admin-view.png'
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
