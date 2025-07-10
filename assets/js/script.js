    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-sidebar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    // Contact form handling
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check for saved theme preference or default to dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
      body.classList.add('light-theme');
      themeIcon.className = 'bx bx-moon';
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-theme');
      
      if (body.classList.contains('light-theme')) {
        themeIcon.className = 'bx bx-moon';
        localStorage.setItem('theme', 'light');
      } else {
        themeIcon.className = 'bx bx-sun';
        localStorage.setItem('theme', 'dark');
      }
    });

    // Scroll to Top Functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Update active navigation link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-sidebar a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.style.color = '#888';
        if (link.getAttribute('href') === `#${current}`) {
          link.style.color = '#c07f50';
        }
      });
    });