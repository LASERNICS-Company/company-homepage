/* ===================================
PREMIUM PHOTONICS VISUAL
=================================== */

.hero-visual{

position:relative;

height:850px;

display:flex;
justify-content:center;
align-items:center;

overflow:hidden;

}

.wafer-grid{

position:absolute;

inset:0;

background-image:

linear-gradient(
rgba(255,255,255,.03) 1px,
transparent 1px),

linear-gradient(
90deg,
rgba(255,255,255,.03) 1px,
transparent 1px);

background-size:60px 60px;

opacity:.25;

}

/* Photon Field */

.photon-wave{

position:absolute;

border-radius:50%;

border:
1px solid rgba(0,212,255,.10);

backdrop-filter:blur(4px);

}

.wave1{

width:750px;
height:750px;

animation:
spinA 60s linear infinite;

}

.wave2{

width:540px;
height:540px;

animation:
spinB 40s linear infinite;

}

.wave3{

width:340px;
height:340px;

animation:
spinA 24s linear infinite;

}

@keyframes spinA{

from{
transform:rotate(0deg);
}

to{
transform:rotate(360deg);
}

}

@keyframes spinB{

from{
transform:rotate(360deg);
}

to{
transform:rotate(0deg);
}

}

/* Laser Chamber */

.laser-chamber{

position:relative;

width:500px;
height:500px;

display:flex;
justify-content:center;
align-items:center;

}

/* Core Glow */

.laser-glow{

position:absolute;

width:180px;
height:180px;

border-radius:50%;

background:

radial-gradient(
circle,
rgba(255,255,255,.95),
rgba(0,212,255,.75),
transparent 75%
);

filter:blur(24px);

box-shadow:

0 0 60px #00d4ff,
0 0 140px #3b82ff,
0 0 280px #00d4ff;

animation:
pulseGlow 4s ease-in-out infinite;

}

@keyframes pulseGlow{

0%{

transform:scale(1);

opacity:.7;

}

50%{

transform:scale(1.12);

opacity:1;

}

100%{

transform:scale(1);

opacity:.7;

}

}

/* Optical Glass */

.optic{

position:absolute;

background:
rgba(255,255,255,.03);

backdrop-filter:
blur(20px);

border:
1px solid rgba(255,255,255,.10);

box-shadow:

0 0 30px rgba(255,255,255,.04);

}

.optic1{

width:260px;
height:420px;

transform:
rotate(-18deg);

}

.optic2{

width:220px;
height:360px;

transform:
rotate(10deg);

}

.optic3{

width:180px;
height:260px;

transform:
rotate(28deg);

}

/* Beam */

.beam{

position:absolute;

width:700px;
height:4px;

background:

linear-gradient(
90deg,
transparent,
rgba(0,212,255,.9),
transparent
);

box-shadow:

0 0 15px #00d4ff,
0 0 35px #00d4ff,
0 0 70px #3b82ff;

animation:
beamPulse 3s ease infinite;

}

@keyframes beamPulse{

0%{

opacity:.4;

}

50%{

opacity:1;

}

100%{

opacity:.4;

}

}

/* ===================================
SECTIONS
=================================== */

section{

padding:120px 80px;

}

.section-header{

margin-bottom:60px;

}

.section-header p{

color:var(--secondary);

letter-spacing:3px;

font-size:13px;

margin-bottom:10px;

}

.section-header h2{

font-size:52px;

}

/* Trusted */

.trusted{

text-align:center;

}

.trusted p{

color:var(--secondary);

letter-spacing:4px;

margin-bottom:30px;

}

.trusted-grid{

display:flex;

justify-content:center;

flex-wrap:wrap;

gap:50px;

}

.trusted-grid span{

font-size:18px;

font-weight:700;

opacity:.7;

}

/* Products */

.product-grid{

display:grid;

grid-template-columns:
repeat(3,1fr);

gap:25px;

}

.product-card{

padding:40px;

background:
rgba(255,255,255,.03);

border:
1px solid var(--border);

border-radius:20px;

transition:.35s;

}

.product-card:hover{

transform:
translateY(-10px);

border-color:
rgba(0,212,255,.3);

}

.product-tag{

font-size:12px;

letter-spacing:2px;

color:var(--secondary);

}

.product-card h3{

font-size:30px;

margin:20px 0;

}

.product-card p{

line-height:1.8;

color:var(--muted);

}

.product-card ul{

list-style:none;

margin-top:20px;

}

.product-card li{

margin-bottom:10px;

}

/* Applications */

.industry-grid{

display:grid;

grid-template-columns:
repeat(3,1fr);

gap:25px;

}

.industry-card{

padding:40px;

background:
rgba(255,255,255,.03);

border:
1px solid var(--border);

border-radius:20px;

}

.industry-card h3{

font-size:28px;

margin-bottom:15px;

}

.industry-card p{

line-height:1.8;

color:var(--muted);

}

/* Technology */

.technology{

background:
rgba(255,255,255,.02);

}

.technology-content{

display:grid;

grid-template-columns:
1fr 1fr;

gap:80px;

}

.small-title{

color:var(--secondary);

margin-bottom:20px;

}

.technology h2{

font-size:52px;

}

.technology p{

line-height:2;

color:var(--muted);

}

/* Stats */

.stats{

display:grid;

grid-template-columns:
repeat(4,1fr);

text-align:center;

}

.stat h3{

font-size:48px;

margin-bottom:10px;

}

.stat p{

color:var(--muted);

}

/* Contact */

.contact{

text-align:center;

}

.contact h2{

font-size:58px;

max-width:900px;

margin:auto;

}

.contact p{

margin-top:25px;

color:var(--muted);

}

.contact a{

display:inline-block;

margin-top:35px;

font-size:24px;

color:white;

text-decoration:none;

}

/* Footer */

footer{

padding:80px 20px;

text-align:center;

border-top:
1px solid var(--border);

}

.footer-logo{

font-size:28px;

font-weight:800;

letter-spacing:4px;

margin-bottom:15px;

}

footer p{

margin:10px 0;

color:var(--muted);

}

/* Mobile */

@media(max-width:1100px){

.hero{

grid-template-columns:1fr;

}

.product-grid,
.industry-grid,
.stats,
.technology-content{

grid-template-columns:1fr;

}

.hero h1{

font-size:52px;

}

}

@media(max-width:768px){

.navbar{

padding:20px;

}

nav{

display:none;

}

.hero{

padding:120px 24px 60px;

}

section{

padding:80px 24px;

}

.hero h1{

font-size:42px;

}

.hero-stats{

flex-direction:column;

gap:20px;

}

.hero-visual{

height:500px;

}

}
