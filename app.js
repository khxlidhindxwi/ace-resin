// Ace Resin — UI polish

// Nav shadow on scroll
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 12) nav.style.boxShadow = '0 14px 40px -20px rgba(0,0,0,.7)';
  else nav.style.boxShadow = 'none';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.body.classList.remove('menu-open'));
});

// Reveal-on-scroll for major sections
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-head, .svc, .gx, .steps li, .r-card, .badge').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  io.observe(el);
});

// Parallax tilt on hero cards
const cards = document.querySelectorAll('.card-stack .card');
const stage = document.querySelector('.hero-stage');
if (stage && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  stage.addEventListener('mousemove', (ev) => {
    const r = stage.getBoundingClientRect();
    const x = (ev.clientX - r.left) / r.width - 0.5;
    const y = (ev.clientY - r.top) / r.height - 0.5;
    cards.forEach((c, i) => {
      const depth = (i + 1) * 6;
      c.style.transform = `${c.dataset.base || ''} translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  });
  cards.forEach(c => { c.dataset.base = getComputedStyle(c).transform === 'none' ? '' : getComputedStyle(c).transform; });
  stage.addEventListener('mouseleave', () => cards.forEach(c => c.style.transform = ''));
}
