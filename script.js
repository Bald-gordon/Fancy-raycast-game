const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(80, 50, 240, 120);

alert('Rectangle drawn on canvas!');
console.log('Canvas drawing complete.');