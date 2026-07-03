const canvas = document.getElementById("wafer");
const ctx = canvas.getContext("2d");

// resize safe
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// simple wafer grid
const grid = 50;
let scanY = 0;
const marks = [];

function drawGrid() {
  ctx.strokeStyle = "rgba(255,255,255,0.03)";

  for (let x = 0; x < canvas.width; x += grid) {
    for (let y = 0; y < canvas.height; y += grid) {
      ctx.strokeRect(x, y, grid, grid);
    }
  }
}

function drawMarks() {
  ctx.fillStyle = "rgba(0,180,255,0.7)";
  for (let i = 0; i < marks.length; i++) {
    ctx.fillRect(marks[i].x, marks[i].y, 2, 2);
  }
}

function animate() {
  // background fade
  ctx.fillStyle = "rgba(5,7,11,0.25)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawGrid();

  // scan line
  scanY += 0.7;
  if (scanY > canvas.height) scanY = 0;

  ctx.fillStyle = "rgba(0,180,255,0.08)";
  ctx.fillRect(0, scanY, canvas.width, 2);

  // add marks slowly
  if (Math.random() > 0.6) {
    marks.push({
      x: Math.floor(Math.random() * canvas.width / grid) * grid,
      y: scanY
    });
  }

  // memory limit
  if (marks.length > 800) marks.splice(0, 100);

  drawMarks();

  requestAnimationFrame(animate);
}

// IMPORTANT: start after safety check
if (canvas && ctx) {
  animate();
} else {
  console.error("Canvas not found or context error");
}
