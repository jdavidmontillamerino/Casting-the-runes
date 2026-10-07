
(() => {
  const video=document.querySelector('.hero-video');
  if(!video) return;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{
    if(reduce.matches){
      video.pause();
      video.removeAttribute('autoplay');
    }else{
      video.play().catch(()=>{});
    }
  };
  sync();
  reduce.addEventListener?.('change',sync);
})();
