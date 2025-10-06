// Theme JS hooks (Twilight)
(function(){
  // Example: open mobile menu
  const hb = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  if(hb && nav){
    hb.addEventListener('click', ()=>{
      const visible = getComputedStyle(nav).display !== 'none';
      nav.style.display = visible ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '10px';
      nav.style.background = 'rgba(11,10,22,.95)';
      nav.style.position = 'absolute';
      nav.style.top = '56px';
      nav.style.right = '20px';
      nav.style.padding = '12px';
      nav.style.border = '1px solid rgba(255,255,255,.08)';
      nav.style.borderRadius = '12px';
    });
  }
})();