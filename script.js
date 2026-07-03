const canvas = document.getElementById("chip");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const grid = 50;

// IC chip blocks (반도체 느낌 구조)
const blocks = [];
for(let i=0;i<200;i++){
  blocks.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    w: Math.random()*40+10,
    h: Math.random()*40+10
  });
}

// laser path
let laserX = 0;
let laserY = 0;

function drawChip(){
  ctx.fillStyle = "rgba(255,255,255,0.03)";

  for(let i=0;i<blocks.length;i++){
    const b = blocks[i];
    ctx.fillRect(b.x,b.y,b.w,b.h);
  }
}

function animate(){

  // fade (잔상 = 웨이퍼 느낌)
  ctx.fillStyle = "rgba(5,6,10,0.25)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  drawChip();

  // 🔥 레이저 움직임 (핵심)
  laserX += 3;
  laserY += Math.sin(laserX*0.01)*2;

  if(laserX > canvas.width){
    laserX = 0;
  }

  // laser beam
  ctx.strokeStyle = "rgba(0,200,255,0.8)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(laserX, 0);
  ctx.lineTo(laserX, canvas.height);
  ctx.stroke();

  // laser impact (패턴 생성)
  for(let i=0;i<3;i++){
    ctx.fillStyle = "rgba(0,200,255,0.9)";
    ctx.fillRect(
      laserX + Math.random()*10,
      Math.random()*canvas.height,
      2,
      2
    );
  }

  requestAnimationFrame(animate);
}

animate();
