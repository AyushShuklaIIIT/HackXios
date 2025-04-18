const track = document.getElementById("slider-track");
const speed = 1;

const slides = track.children;
const totalSlides = slides.length;

for (let i = 0; i < totalSlides; i++) {
  const clone = slides[i].cloneNode(true);
  track.appendChild(clone);
}

let pos = 0;

function animate() {
  pos -= speed;
  if (Math.abs(pos) >= track.scrollWidth / 2) {
    pos = 0;
  }
  track.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

animate();
