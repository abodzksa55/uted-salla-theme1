import '../styles/tailwind.css';
document.addEventListener('DOMContentLoaded', ()=>{
  const hb=document.getElementById('hamburger'); const nav=document.querySelector('.nav');
  if(hb && nav){ hb.addEventListener('click', ()=>{ const shown=getComputedStyle(nav).display!=='none'; nav.style.display=shown?'none':'flex'; nav.style.flexDirection='column'; }); }
});