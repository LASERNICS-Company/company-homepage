const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let beams = [];

// 레이저 빔 생성 (직선 이동)
for(let i=0;i<40;i++){
  beams.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    vx: Math.random()*2 + 1,
    len: Math.random()*150 + 80
  });
}

let scanY = 0;

function draw(){

  ctx.fillStyle = "rgba(2,4,10,0.25)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // 🔥 레이저 스캔 라인
  scanY += 2;
  if(scanY > canvas.height) scanY = 0;

  ctx.fillStyle = "rgba(0,229,255,0.05)";
  ctx.fillRect(0, scanY, canvas.width, 2);

  // 🔥 레이저 빔
  beams.forEach(b=>{
    b.x += b.vx;

    if(b.x > canvas.width) b.x = 0;

    ctx.beginPath();
    ctx.strokeStyle = "rgba(0,229,255,0.3)";
    ctx.lineWidth = 2;

    ctx.moveTo(b.x, b.y);
    ctx.lineTo(b.x + b.len, b.y);

    ctx.stroke();
  });

  requestAnimationFrame(draw);
}

draw();

// resize
window.addEventListener("resize",()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
