(() => {
  const dialog=document.getElementById('detail');
  const title=document.getElementById('dialog-title');
  const text=document.getElementById('dialog-text');
  if(!dialog||!title||!text) return;
  document.querySelectorAll('.puzzle button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      title.textContent=btn.dataset.title||'Detalle';
      text.textContent=btn.dataset.text||'';
      dialog.showModal();
    });
  });
  dialog.querySelector('.close')?.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{
    const r=dialog.getBoundingClientRect();
    if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close();
  });
})();
