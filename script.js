/* ==========================
LASERNICS WEBSITE SCRIPT
========================== */

/* Navbar Scroll Effect */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

```
if (window.scrollY > 40) {

    navbar.style.background =
        'rgba(7,11,20,0.92)';

    navbar.style.backdropFilter =
        'blur(18px)';

} else {

    navbar.style.background =
        'transparent';

}
```

});

/* Scroll Reveal Animation */

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
'.industry-card,.product-card,.news-card,.stat'
)
.forEach(el => {

el.classList.add('hidden');

observer.observe(el);

});

/* Hero Parallax */

const heroGlow =
document.querySelector('.hero-glow');

window.addEventListener(
'mousemove',
(e)=>{

const x =
(e.clientX / window.innerWidth - 0.5) * 50;

const y =
(e.clientY / window.innerHeight - 0.5) * 50;

heroGlow.style.transform =
`translate(${x}px, ${y}px)`;

}
);

/* Product Hover Glow */

document
.querySelectorAll('.product-card')
.forEach(card=>{

card.addEventListener(
'mousemove',
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.background =

`radial-gradient(
circle at ${x}px ${y}px,
rgba(47,107,255,.18),
rgba(255,255,255,.03) 50%
)`;

});

card.addEventListener(
'mouseleave',
()=>{

card.style.background =
'rgba(255,255,255,.03)';

});

});

/* Counter Animation */

const stats =
document.querySelectorAll('.stat h3');

const statsObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)
return;

const el =
entry.target;

const value =
el.innerText;

if(
value.includes('fs')
||
value.includes('W')
){
return;
}

});

}

);

stats.forEach(el=>{

statsObserver.observe(el);

});

/* Smooth Navigation */

document
.querySelectorAll('nav a')
.forEach(link=>{

link.addEventListener(
'click',
function(e){

const href =
this.getAttribute('href');

if(
href.startsWith('#')
){

e.preventDefault();

document
.querySelector(href)
.scrollIntoView({

behavior:'smooth'

});

}

});

});

/* Reveal CSS Injection */

const style =
document.createElement('style');

style.innerHTML = `

.hidden{

opacity:0;

transform:
translateY(40px);

transition:
all .8s ease;

}

.show{

opacity:1;

transform:
translateY(0);

}

`;

document.head.appendChild(style);
