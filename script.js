const canvas = document.getElementById("scan");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let y = 0;

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // slow scan line (핵심)
  y += 0.6;
  if(y > canvas.height) y = 0;

  // glow effect
  const gradient = ctx.createLinearGradient(0, y, canvas.width, y);
  gradient.addColorStop(0, "transparent");
  gradient.addColorStop(0.5, "rgba(120,180,255,0.08)");
  gradient.addColorStop(1, "transparent");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, y, canvas.width, 2);

  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize",()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
