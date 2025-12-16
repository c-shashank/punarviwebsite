// Main JavaScript File

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Update year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Highlight active navigation tab
  function setActiveNavTab() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      // Don't remove active class if it was set in HTML (for product pages)
      const href = link.getAttribute('href');
      
      // Check if on about page
      if (currentPage.includes('about.html')) {
        link.classList.remove('active');
        if (href === 'about.html' || href.includes('about.html')) {
          link.classList.add('active');
        }
      }
      // Check if on product pages
      else if (currentPage.includes('products/')) {
        // Keep the active class that was set in HTML for Products link
        if (!link.classList.contains('active') && href.includes('#products')) {
          link.classList.add('active');
        } else if (!href.includes('#products')) {
          link.classList.remove('active');
        }
      }
      // Check if on index/home page
      else if (currentPage === '/' || currentPage.endsWith('index.html') || currentPage.endsWith('/')) {
        link.classList.remove('active');
        const hash = window.location.hash;
        if (hash && href === hash) {
          link.classList.add('active');
        } else if (!hash && href === '#home') {
          link.classList.add('active');
        }
      }
    });
  }

  // Set active tab on page load
  setActiveNavTab();

  // Update active tab on hash change (for section navigation)
  window.addEventListener('hashchange', setActiveNavTab);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update active tab after scroll
        setTimeout(setActiveNavTab, 100);
      }
    });
  });

  // FAQ Accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Close all other FAQ items
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== this) {
          const otherItem = otherQuestion.closest('.faq-item');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          otherQuestion.setAttribute('aria-expanded', 'false');
          otherAnswer.classList.remove('active');
        }
      });

      // Toggle current FAQ item
      if (isExpanded) {
        this.setAttribute('aria-expanded', 'false');
        answer.classList.remove('active');
      } else {
        this.setAttribute('aria-expanded', 'true');
        answer.classList.add('active');
      }
    });
  });

  console.log('Punarvi website loaded');
});
