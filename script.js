const canvas = document.getElementById("wafer");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);

// ===============================
// 1. CHIP LAYOUT (정돈된 구조)
// ===============================
const cell = 60;

function drawChip(){
  ctx.strokeStyle = "rgba(0,180,255,0.08)";
  ctx.lineWidth = 1;

  for(let x=0;x<canvas.width;x+=cell){
    for(let y=0;y<canvas.height;y+=cell){

      // 메인 셀
      ctx.strokeRect(x,y,cell,cell);

      // 내부 구조 (IC 느낌)
      ctx.beginPath();
      ctx.moveTo(x+10, y+10);
      ctx.lineTo(x+cell-10, y+10);
      ctx.lineTo(x+cell-10, y+cell-10);
      ctx.lineTo(x+10, y+cell-10);
      ctx.closePath();
      ctx.stroke();
    }
  }
}

// ===============================
// 2. LASER SCAN (현실적인 방식)
// ===============================
let scanY = 0;

function drawLaser(){
  // 넓은 스캔 밴드 (장비 느낌)
  const grad = ctx.createLinearGradient(0, scanY-30, 0, scanY+30);
  grad.addColorStop(0, "transparent");
  grad.addColorStop(0.5, "rgba(0,200,255,0.12)");
  grad.addColorStop(1, "transparent");

  ctx.fillStyle = grad;
  ctx.fillRect(0, scanY-30, canvas.width, 60);
}

// ===============================
// 3. LOOP
// ===============================
function animate(){

  // fade (잔상 = 장비 스캔 느낌)
  ctx.fillStyle = "rgba(5,7,11,0.25)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  drawChip();

  // scan move
  scanY += 1.8;
  if(scanY > canvas.height) scanY = 0;

  drawLaser();

  requestAnimationFrame(animate);
}

animate();
