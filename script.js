const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const grid = 40;
const marks = [];

let scanY = 0;

// wafer grid
function drawGrid(){
  ctx.strokeStyle = "rgba(255,255,255,0.03)";
  for(let x=0;x<canvas.width;x+=grid){
    for(let y=0;y<canvas.height;y+=grid){
      ctx.strokeRect(x,y,grid,grid);
    }
  }
}

// laser engraving marks
function drawMarks(){
  marks.forEach(m=>{
    ctx.fillStyle = "rgba(0,229,255,0.8)";
    ctx.fillRect(m.x, m.y, 3, 3);
  });
}

function animate(){

  ctx.fillStyle = "rgba(3,6,12,0.35)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  drawGrid();

  // laser scan line
  scanY += 2;
  if(scanY > canvas.height) scanY = 0;

  ctx.fillStyle = "rgba(0,229,255,0.08)";
  ctx.fillRect(0, scanY, canvas.width, 3);

  // engraving effect (pattern creation)
  for(let i=0;i<8;i++){
    marks.push({
      x: Math.floor(Math.random()*canvas.width/grid)*grid,
      y: scanY + Math.random()*20
    });
  }

  drawMarks();

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
