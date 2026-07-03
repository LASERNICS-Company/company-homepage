const canvas = document.getElementById("wafer");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ============================
// CHIP LAYER STRUCTURE
// ============================
const lines = [];

// 미세 회로 라인 생성
for(let i=0;i<120;i++){
  const startX = Math.random()*window.innerWidth;
  const startY = Math.random()*window.innerHeight;

  const length = Math.random()*200 + 80;

  lines.push({
    x: startX,
    y: startY,
    dx: Math.random() > 0.5 ? length : 0,
    dy: Math.random() > 0.5 ? length : 0
  });
}

// ============================
// DRAW CHIP BACKGROUND
// ============================
function drawChip(){

  // base wafer tone
  ctx.fillStyle = "#05070b";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<lines.length;i++){

    const l = lines[i];

    ctx.strokeStyle = "rgba(0,180,255,0.08)";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(l.x, l.y);

    // L-shaped or straight trace (IC 느낌 핵심)
    ctx.lineTo(l.x + l.dx, l.y);
    ctx.lineTo(l.x + l.dx, l.y + l.dy);

    ctx.stroke();
  }
}

// ============================
// LIGHT NOISE (금속 반사 느낌)
// ============================
function glow(){
  ctx.fillStyle = "rgba(0,180,255,0.02)";
  for(let i=0;i<40;i++){
    ctx.fillRect(
      Math.random()*canvas.width,
      Math.random()*canvas.height,
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
