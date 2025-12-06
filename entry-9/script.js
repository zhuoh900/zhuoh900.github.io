const car = document.getElementById('car');
let position = window.innerWidth / 2 - 20; 

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') {
    position -= 20;
    if(position < 0) position = 0;
  } else if(e.key === 'ArrowRight') {
    position += 20;
    if(position > window.innerWidth - 40) position = window.innerWidth - 40; 
  }
  car.style.left = position + 'px';
});

window.addEventListener('resize', () => {
  if(position > window.innerWidth - 40) {
    position = window.innerWidth - 40;
    car.style.left = position + 'px';
  }
});
