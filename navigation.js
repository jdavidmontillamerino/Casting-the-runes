
(() => {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${visible.target.id}`));
  }, {threshold:[.2,.4,.6], rootMargin:'-15% 0px -60% 0px'});
  sections.forEach(s => observer.observe(s));
})();
