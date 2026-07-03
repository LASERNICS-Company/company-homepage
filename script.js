const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];

for(let i=0;i<120;i++){
  points.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    vx: (Math.random()-0.5)*0.6,
    vy: (Math.random()-0.5)*0.6
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // 레이저 라인 연결
  for(let i=0;i<points.length;i++){
    for(let j=i+1;j<points.length;j++){
      let dx = points[i].x - points[j].x;
      let dy = points[i].y - points[j].y;
      let dist = Math.sqrt(dx*dx+dy*dy);

      if(dist < 120){
        ctx.strokeStyle = "rgba(0,229,255,0.08)";
        ctx.beginPath();
        ctx.moveTo(points[i].x,points[i].y);
        ctx.lineTo(points[j].x,points[j].y);
        ctx.stroke();
      }
    }
  }

  // 점 이동
  points.forEach(p=>{
    p.x += p.vx;
    p.y += p.vy;

    if(p.x<0||p.x>canvas.width) p.vx *= -1;
    if(p.y<0||p.y>canvas.height) p.vy *= -1;

    ctx.fillStyle = "#00e5ff";
    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();

// 스크롤 reveal
const cards = document.querySelectorAll(".card, h2, p");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity = 1;
      e.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "1s";
  observer.observe(el);
});
