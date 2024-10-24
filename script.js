const earth = document.getElementById('earth');
const sun = document.getElementById('sun');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Drag and Drop functionality
earth.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', drop);

let isDragging = false;
let offsetX, offsetY;

function startDrag(e) {
  isDragging = true;
  offsetX = e.clientX - earth.offsetLeft;
  offsetY = e.clientY - earth.offsetTop;
}

function drag(e) {
  if (isDragging) {
    earth.style.left = `${e.clientX - offsetX}px`;
    earth.style.top = `${e.clientY - offsetY}px`;
  }
}

function drop(e) {
  isDragging = false;
  
  const earthRect = earth.getBoundingClientRect();
  const sunRect = sun.getBoundingClientRect();

  if (earthRect.right > sunRect.left && earthRect.left < sunRect.right &&
      earthRect.bottom > sunRect.top && earthRect.top < sunRect.bottom) {
    // Earth dropped in Sun area
    score++;
    scoreDisplay.textContent = score;
    sun.classList.add('success');
    setTimeout(() => sun.classList.remove('success'), 500); // Reset the Sun's color
    resetEarthPosition();
  }
}

function resetEarthPosition() {
  earth.style.left = '50px';
  earth.style.top = '50px';
}

