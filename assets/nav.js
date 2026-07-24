/* =========================================================================
   Shared nav + footer renderer.
   To add a new page site-wide: add one line to PAGES below. Every page's
   header nav and footer nav update automatically — no need to touch the
   individual HTML files.
   ========================================================================= */
const PAGES = [
  { href: 'track-record.html', label: 'Track Record' },
  { href: 'models.html',       label: 'Models' },
  { href: 'deal-lab.html',     label: 'Deal Lab' },
  { href: 'about.html',        label: 'About' },
];

(function renderNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const navEl = document.getElementById('site-nav');
  const footEl = document.getElementById('site-footer-nav');

  const linkHTML = (p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const on = path === p.href ? ' on' : '';
    return `<a href="${p.href}" class="${on.trim()}"><span class="n">${num}</span>${p.label}</a>`;
  };

  if (navEl) navEl.innerHTML = PAGES.map(linkHTML).join('');
  if (footEl) footEl.innerHTML = PAGES.map(linkHTML).join('');
})();

// mobile menu
const burger = document.getElementById('burger');
if (burger) burger.addEventListener('click', () => document.body.classList.toggle('menu-open'));
document.addEventListener('click', (e) => {
  if (document.body.classList.contains('menu-open') && e.target.closest('.nl a')) {
    document.body.classList.remove('menu-open');
  }
});

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}), {threshold:.12});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// animated counters
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, n = +el.dataset.n, pre = el.dataset.pre||'', suf = el.dataset.suf||'';
  const t0 = performance.now(), dur = 1300;
  (function tick(t){
    const p = Math.min((t - t0)/dur, 1), ease = 1 - Math.pow(1-p, 3);
    el.textContent = pre + Math.round(n*ease) + suf;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
  cio.unobserve(el);
}), {threshold:.6});
document.querySelectorAll('.cnt').forEach(el => cio.observe(el));
