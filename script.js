const canvas = document.getElementById("wafer");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ============================
// CHIP GRID (SAFE STATIC PATTERN)
// ============================
const step = 80;

// ============================
// DRAW CHIP BACKGROUND
// ============================
function drawChip(){

  // base wafer
  ctx.fillStyle = "#05070b";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let x=0;x<canvas.width;x+=step){
    for(let y=0;y<canvas.height;y+=step){

      // chip block
      ctx.strokeStyle = "rgba(0,180,255,0.06)";
      ctx.lineWidth = 1;

      ctx.strokeRect(x,y,step,step);

      // inner metal line (IC 느낌 핵심)
      ctx.beginPath();
      ctx.moveTo(x+10,y+10);
      ctx.lineTo(x+step-10,y+10);
      ctx.lineTo(x+step-10,y+step-10);
      ctx.lineTo(x+10,y+step-10);
      ctx.closePath();
      ctx.stroke();
    }
  }
}

// ============================
// VERY LIGHT GLOW (NO RANDOM CRASH)
// ============================
function glow(){

  ctx.fillStyle = "rgba(0,180,255,0.02)";

  for(let i=0;i<30;i++){
    ctx.fillRect(
      (i*37)%canvas.width,
      (i*91)%canvas.height,
      1,
      1
    );
  }
}

// ============================
// LOOP
// ============================
function animate(){

  drawChip();
  glow();

  requestAnimationFrame(animate);
}

animate();
