const canvas = document.getElementById("wafer");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// =========================
// CHIP BASE STRUCTURE
// =========================
const grid = 60;

// =========================
// LASER POSITION (CNC HEAD)
// =========================
let laser = {
  x: 0,
  y: 0
};

// pattern storage (etched result)
const pattern = [];

function drawChipGrid(){
  ctx.strokeStyle = "rgba(0,180,255,0.05)";

  for(let x=0;x<canvas.width;x+=grid){
    for(let y=0;y<canvas.height;y+=grid){
      ctx.strokeRect(x,y,grid,grid);
    }
  }
}

// =========================
// LASER MOVE PATH (FAB MODE)
// =========================
function updateLaser(){

  // smooth movement (fabrication scan path)
  laser.x += 2.5;

  // slight vertical drift (wafer stage movement 느낌)
  laser.y = canvas.height/2 + Math.sin(laser.x * 0.01) * 120;

  if(laser.x > canvas.width){
    laser.x = 0;
    pattern.length = 0; // 새 웨이퍼 시작 느낌
  }

  // "가공된 결과" 저장
  pattern.push({
    x: laser.x,
    y: laser.y
  });

  if(pattern.length > 3000){
    pattern.shift();
  }
}

// =========================
// DRAW LASER BEAM
// =========================
function drawLaser(){
  ctx.fillStyle = "rgba(0,200,255,0.15)";
  ctx.beginPath();
  ctx.arc(laser.x, laser.y, 6, 0, Math.PI*2);
  ctx.fill();

  // beam tail (energy trail)
  ctx.strokeStyle = "rgba(0,200,255,0.25)";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(laser.x - 30, laser.y);
  ctx.lineTo(laser.x, laser.y);
  ctx.stroke();
}

// =========================
// DRAW ETCHED PATTERN
// =========================
function drawPattern(){
  ctx.fillStyle = "rgba(0,180,255,0.6)";

  for(let i=0;i<pattern.length;i++){
    ctx.fillRect(pattern[i].x, pattern[i].y, 2, 2);
  }
}

// =========================
// LOOP
// =========================
function animate(){

  // fade (wafer surface 유지)
  ctx.fillStyle = "rgba(5,7,11,0.25)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  drawChipGrid();

  updateLaser();

  drawPattern();

  drawLaser();

  requestAnimationFrame(animate);
}

animate();
