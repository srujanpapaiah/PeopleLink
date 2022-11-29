const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('name');
const addressInput = document.getElementById('address');
const generate = document.getElementById('generate');

const image = new Image();
image.src = "certificate.png";
image.onload = function() {
  drawImage(); 
}

function drawImage() {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.font = "bold 25px Arial";
  ctx.fillStyle = "#48c5e0";
  ctx.fillText(nameInput.value, 300, 220);
  ctx.font = "12px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(addressInput.value, 217, 237.5);
} 

nameInput.addEventListener('input', function() {
    drawImage();  
    })

addressInput.addEventListener('input', function() {
    drawImage();  
    })

generate.addEventListener('click', function() {
    generate.href = canvas.toDataURL('image/png');
    generate.download = "certificate - " + nameInput.value + ".png";
    })