const QUOTE_NUMBER = "72558600";
const WHATSAPP_NUMBER = "73276061";
function wa(number,message){return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;}
["headerWhatsApp","heroWA1","heroWA2","heroWA3","contactWA","floatingWA"].forEach(id=>{const el=document.getElementById(id); if(el) el.href=wa(WHATSAPP_NUMBER,"Hola NICODE, quiero información sobre sus servicios informáticos.");});
const slides = [...document.querySelectorAll(".slide")];
const dots = document.getElementById("dots");
let current = 0;
let timer;

function wa(message = "Hola NICODE, quiero información sobre sus servicios informáticos.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll("#headerWhatsApp,#heroWA1,#heroWA2,#heroWA3,#contactWA,#floatingWA").forEach(el => el.href = wa());

slides.forEach((_, i) => {
  const b = document.createElement("button");
  b.setAttribute("aria-label", `Ir al slide ${i+1}`);
  b.onclick = () => showSlide(i);
  dots.appendChild(b);
});
function showSlide(i){
  current = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle("active", n === current));
  [...dots.children].forEach((d,n) => d.classList.toggle("active", n === current));
}
function next(){ showSlide(current + 1); }
document.querySelector(".next").onclick = next;
document.querySelector(".prev").onclick = () => showSlide(current - 1);
function start(){ timer=setInterval(next,4500); }
function reset(){ clearInterval(timer); start(); }
showSlide(0); start();
document.querySelector(".hero").addEventListener("mouseenter",()=>clearInterval(timer));
document.querySelector(".hero").addEventListener("mouseleave",start);

const header = document.getElementById("header");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>15));

document.getElementById("menuToggle").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll(".nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));

document.querySelectorAll(".quote-service").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.getElementById("service").value=btn.dataset.service;
    document.getElementById("formulario").scrollIntoView({behavior:"smooth"});
  });
});

document.getElementById("quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const service=document.getElementById("service").value;
  const message=document.getElementById("message").value.trim();
  const text=`Hola NICODE, quiero solicitar una cotización.%0A%0ANombre: ${name}%0AWhatsApp: ${phone}%0AServicio: ${service}%0ANecesidad: ${message}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,"_blank");
});

document.querySelectorAll(".quote-service").forEach(btn=>btn.addEventListener("click",()=>{const s=document.getElementById("service"); if(s){s.value=btn.dataset.service||s.value;}}));
