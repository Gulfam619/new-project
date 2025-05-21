const currentPath = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");

  if (linkPath === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
const toggleButton = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenuOverlay");
const hamburgerIcon = toggleButton.querySelector(".hamburger-icon");
const closeIcon = toggleButton.querySelector(".close-icon");

toggleButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
  toggleButton.classList.toggle("rotate");
  hamburgerIcon.classList.toggle("d-none");
  closeIcon.classList.toggle("d-none");
});

const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  var image = document.querySelector(".graf-image, .state-image");
  var section = document.querySelector(".image-section");
  var sectionTop = section.getBoundingClientRect().top;

  var sectionWidth = section.offsetWidth;
  var initialOffset = -50;
  var imageWidth = image.offsetWidth;
  var maxTranslate = sectionWidth - imageWidth;
  if (sectionTop < window.innerHeight && sectionTop > 0) {
    var scrollAmount = (window.innerHeight - sectionTop) / 5;
    var translateValue = Math.min(
      scrollAmount + Math.abs(initialOffset),
      maxTranslate
    );
    image.style.transform = "translateX(" + translateValue + "px)";
  } else {
    image.style.transform = "translateX(" + initialOffset + "px)";
  }
});
jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: false,
  margin: 20,
  loop: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: true,
  nav: true,
  navText: [
    '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
    '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',
  ],
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 3,
    },

    1024: {
      items: 4,
    },

    1366: {
      items: 3,
    },
  },
});




 // Get references
  const galleryBtn = document.querySelector('.main-nav .nav-link:nth-child(6)'); // 6th link is GALLERY
  const modal = document.getElementById('galleryModal');
  const closeModalBtn = document.getElementById('closeModal');

  // Show modal on gallery button click
  galleryBtn.addEventListener('click', function(event) {
    event.preventDefault(); // prevent default link navigation
    modal.classList.remove('d-none');
  });

  // Close modal on clicking close button
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('d-none');
  });

  // Optional: Close modal on clicking outside modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('d-none');
    }
  });

  // Optional: Close modal on pressing ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && !modal.classList.contains('d-none')) {
      modal.classList.add('d-none');
    }
  })


   document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll('.gallery-link, .standalone-label');

    allLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const index = this.getAttribute('data-index');
        if (index) {
          localStorage.setItem('index', index);
        }
      });
    });
  });


   window.addEventListener("scroll", function () {
    const header = document.getElementById("mainHeader");
    const logo = document.getElementById("logo");

    if (window.scrollY > 50) {
      header.classList.add("header-shrink");
      logo.classList.add("logo-shrink");
    } else {
      header.classList.remove("header-shrink");
      logo.classList.remove("logo-shrink");
    }
  });

