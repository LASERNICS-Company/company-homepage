const canvas = document.getElementById("wafer");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const grid = 35;
const marks = [];

// scan position
let scanY = 0;

function drawGrid(){
  ctx.strokeStyle = "rgba(255,255,255,0.03)";
  for(let x=0;x<canvas.width;x+=grid){
    for(let y=0;y<canvas.height;y+=grid){
      ctx.strokeRect(x,y,grid,grid);
    }
  }
}

function drawMarks(){
  marks.forEach(m=>{
    ctx.fillStyle = "rgba(0,180,255,0.8)";
    ctx.fillRect(m.x, m.y, 2.5, 2.5);
  });
}

function animate(){

  // fade (잔상 = 반도체 느낌 핵심)
  ctx.fillStyle = "rgba(4,6,10,0.25)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  drawGrid();

  // scan line (slow industrial motion)
  scanY += 0.8;
  if(scanY > canvas.height) scanY = 0;

  ctx.fillStyle = "rgba(0,180,255,0.07)";
  ctx.fillRect(0, scanY, canvas.width, 2);

  // 🔥 핵심: 스캔 지나간 곳에 "각인"
  for(let i=0;i<6;i++){
    marks.push({
      x: Math.floor(Math.random()*canvas.width/grid)*grid,
      y: scanY + Math.random()*10
    });
  }

  // limit memory
  if(marks.length > 2000) marks.splice(0, 300);

  drawMarks();

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
