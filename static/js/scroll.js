const canvas = document.getElementById('scrollingCanvas');
if (!canvas) {
    throw new Error('Scrolling canvas was not found.');
}

const ctx = canvas.getContext('2d');
if (!ctx) {
    throw new Error('2D canvas context is not available.');
}

const text = canvas.dataset.text;
if (!text) {
    throw new Error('Scrolling text is empty.');
}

let x = canvas.width;

function draw() {
 ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
 ctx.font = '20px courier';
 ctx.fillStyle = 'white';
 ctx.fillText(text, x, 30);
 x -= 1; // Adjust speed of scrolling here
 if (x < -ctx.measureText(text).width) {
  x = canvas.width; // Reset position when text is out of view
 }
 requestAnimationFrame(draw);
}

draw();