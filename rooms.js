
(() => {
  const tabs=[...document.querySelectorAll('.room-tab')];
  const cards=[...document.querySelectorAll('[data-card]')];
  tabs.forEach(tab=>{
    tab.setAttribute('aria-pressed', tab.classList.contains('is-active') ? 'true' : 'false');
    tab.addEventListener('click',()=>{
      const room=tab.dataset.room;
      tabs.forEach(t=>{
        const active=t===tab;
        t.classList.toggle('is-active',active);
        t.setAttribute('aria-pressed',active?'true':'false');
      });
      cards.forEach(c=>c.classList.toggle('is-active',c.dataset.card===room));
    });
  });
})();
