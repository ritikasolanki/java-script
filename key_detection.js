
const pressed = [];
const sceretcode = 'ritika';

window.addEventListener('keyup', (e) =>{
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-sceretcode.length - 1, pressed.length - sceretcode.length);

  if(pressed.join('').includes(sceretcode)){
    console.log('This is it');
    cornify_add();
  }
  console.log(pressed);
});
