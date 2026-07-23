document.addEventListener('DOMContentLoaded', function () {

  // ── Contact form handler ──
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const name = formData.get('name');
      const btn = this.querySelector('button');

      // 1. Show loading state
      const originalBtnText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // 2. Send the data to Formspree via Fetch
      fetch("https://formspree.io/f/xpqvjkqj", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // 3. Success!
          alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);
          this.reset();
        } else {
          // 4. Handle server errors
          alert("Oops! There was a problem submitting your form. Please try again later.");
        }
      })
      .catch(error => {
        // 5. Handle network errors
        alert("Oops! It looks like there was a connection issue. Please check your internet.");
      })
      .finally(() => {
        // 6. Reset button state
        btn.textContent = originalBtnText;
        btn.disabled = false;
      });
    });
  }

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + 100; // Offset for better detection

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = '#F1F5FE'; // Highlight active link
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // ── Smooth scroll for ALL anchor links ──
  // This includes nav links AND hero CTA buttons
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
  allAnchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Only handle internal links
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

});
