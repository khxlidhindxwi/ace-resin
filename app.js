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

// Quote form -> direct user to Instagram DM (no email backend yet)
const qf = document.getElementById('quote-form');
if (qf) {
  qf.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const thanks = qf.querySelector('.q-thanks');
    const btn = qf.querySelector('button');
    if (thanks) {
      thanks.textContent = "Thanks — DM us on Instagram and we'll reply same day.";
      thanks.classList.add('on');
    }
    if (btn) btn.textContent = "Opening Instagram…";
    setTimeout(() => window.open('https://www.instagram.com/zayd.ace/', '_blank', 'noopener'), 400);
  });
}

// Skip the first 1s on hero bg video — start and on every loop
const heroVid = document.querySelector('.hero-bg video');
if (heroVid) {
  const SKIP = 1.0;
  const seekIn = () => { try { heroVid.currentTime = SKIP; } catch(_) {} };
  heroVid.addEventListener('loadedmetadata', seekIn);
  // `loop` doesn't fire `ended` — use timeupdate to catch near-end and rewind to SKIP
  heroVid.addEventListener('timeupdate', () => {
    if (heroVid.duration && heroVid.currentTime > heroVid.duration - 0.15) seekIn();
  });
  if (heroVid.readyState >= 1) seekIn();
}
