const canvas = document.getElementById("grid-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let mouse = { x: -1000, y: -1000 };

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gridSize = 55;
  const glowRadius = 125;

  
  ctx.strokeStyle = "#1f1f1f";
  ctx.lineWidth = 1;

  for (let y = 0; y < canvas.height; y += gridSize) {
    for (let x = 0; x < canvas.width; x += gridSize) {
      let dx = mouse.x - x;
      let dy = mouse.y - y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      let alpha = Math.max(0, 1 - distance / glowRadius);
      let glowColor = `rgba(255, 255, 0, ${alpha})`;

      
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + gridSize, y);
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + gridSize);
      ctx.strokeStyle = "#1f1f1f";
      ctx.stroke();

      
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, gridSize, gridSize);
    }
  }

  requestAnimationFrame(drawGrid);
}

drawGrid();
