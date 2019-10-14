
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textcontent = Math.round(data.coords.speed);
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
  alert('HEY! the access is blocked!!');
});
