
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) =>{
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX);
});

slider.addEventListener('mouseleave', () =>{
  slider.classList.remove('active');
  isDown = false;
});

slider.addEventListener('mouseup', () =>{
  slider.classList.remove('active');
  isDown = false;

});

slider.addEventListener('mousemove', (e) =>{

  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX -  slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft -  walk;
});
