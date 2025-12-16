// Main JavaScript File

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Update year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

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
