// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animasi reveal saat elemen masuk viewport
const revealTargets = document.querySelectorAll(
  '.about-grid, .project-row, .contact h2, .contact-sub, .contact-links'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));
