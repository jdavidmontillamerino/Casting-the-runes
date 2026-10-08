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
const ambient = document.getElementById("ambient-audio");
const soundButton = document.getElementById("sound-toggle");

if (ambient && soundButton) {
  ambient.volume = 0.18;

  soundButton.addEventListener("click", async () => {
    if (ambient.paused) {
      try {
        await ambient.play();
        soundButton.textContent = "◉ Silenciar";
        soundButton.setAttribute("aria-label", "Silenciar sonido");
      } catch (error) {
        console.error("No se pudo iniciar el audio:", error);
      }
    } else {
      ambient.pause();
      soundButton.textContent = "◉ Activar ambiente";
      soundButton.setAttribute("aria-label", "Activar sonido");
    }
  });
}
