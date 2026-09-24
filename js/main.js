/**
 * Main Application Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fas fa-moon';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      } else {
        themeIcon.className = 'fas fa-sun';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      }
    }
  }

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // 2. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // 3. Navbar Sticky & Scroll-Spy
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(link => link.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');
      }
    });

    // Back to top visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // 4. Back to Top Click
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Dynamic Typewriter Effect
  const typewriterElem = document.getElementById('typewriter-text');
  if (typewriterElem && portfolioData && portfolioData.personal.roles) {
    const roles = portfolioData.personal.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1800; // Pause at end of text
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400; // Pause before typing new word
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  // 6. Populate Skills & Render
  function renderSkills() {
    const categories = ['frontend', 'backend', 'database', 'tools'];
    categories.forEach(cat => {
      const container = document.getElementById(`${cat}-skills-container`);
      if (container && portfolioData.skills[cat]) {
        container.innerHTML = portfolioData.skills[cat].map(skill => `
          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon-name">
                <i class="${skill.icon} skill-icon"></i>
                <span class="skill-name">${skill.name}</span>
              </div>
              <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join('');
      }
    });
  }

  // 7. Populate Projects & Filter Functionality
  function renderProjects(category = 'all') {
    const projectsContainer = document.getElementById('projects-grid');
    if (!projectsContainer || !portfolioData.projects) return;

    const filtered = category === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter(p => p.category === category);

    projectsContainer.innerHTML = filtered.map(p => `
      <div class="project-card" data-category="${p.category}">
        <div class="project-image-wrapper">
          <div class="project-placeholder-img">
            <i class="${p.icon || 'fas fa-laptop-code'}"></i>
            <span class="project-tag-overlay">${p.category.toUpperCase()}</span>
          </div>
          <div class="project-overlay">
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-overlay-btn" title="View Source Code on GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="${p.demo || p.github}" target="_blank" rel="noopener noreferrer" class="project-overlay-btn" title="Project Link">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-project-link">
              <i class="fab fa-github"></i> Code
            </a>
            <a href="${p.demo || p.github}" target="_blank" rel="noopener noreferrer" class="btn-project-link primary">
              <i class="fas fa-external-link-alt"></i> Repository
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Project Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  // 8. Populate Experience / Timeline
  function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer && portfolioData.experience) {
      timelineContainer.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-badge">${exp.badge}</span>
              <span class="timeline-period"><i class="far fa-calendar-alt"></i> ${exp.period}</span>
            </div>
            <h3 class="timeline-role">${exp.role}</h3>
            <h4 class="timeline-org">${exp.organization}</h4>
            <p class="timeline-description">${exp.description}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 9. Interactive Contact Form with Toast
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  function showToast(message, type = 'success') {
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
      toast.className = 'toast';
    }, 4000);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.', 'error');
        return;
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast('🎉 Thank you! Your message has been sent successfully.', 'success');
      }, 1200);
    });
  }

  // 10. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');

  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.88;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  checkReveal(); // Initial check on load

  // Initial renders
  renderSkills();
  renderProjects();
  renderTimeline();
});
