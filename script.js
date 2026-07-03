window.addEventListener("DOMContentLoaded", () => {

const canvas = document.getElementById("wafer");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// wafer grid
const grid = 40;
const marks = [];

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
  for(let i=0;i<marks.length;i++){
    ctx.fillStyle = "rgba(0,180,255,0.7)";
    ctx.fillRect(marks[i].x, marks[i].y, 2, 2);
  }
}

function loop(){

  // fade (잔상 효과)
  ctx.fillStyle = "rgba(5,7,11,0.25)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  drawGrid();

  // scan line
  scanY += 0.6;
  if(scanY > canvas.height) scanY = 0;

  ctx.fillStyle = "rgba(0,180,255,0.06)";
  ctx.fillRect(0, scanY, canvas.width, 2);

  // pattern 생성 (안정적으로)
  if(Math.random() > 0.5){
    marks.push({
      x: Math.floor(Math.random()*canvas.width/grid)*grid,
      y: scanY
    });
  }

  // 메모리 제한
  if(marks.length > 1200) marks.splice(0, 200);

  drawMarks();

  requestAnimationFrame(loop);
}

loop();

});
