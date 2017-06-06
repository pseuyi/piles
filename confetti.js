document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const c = canvas.getContext('2d');
  for (let i=0; i<=4000; i+=4) {
    let color = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    let j = Math.round(Math.random()*1200)
    let k = Math.round(Math.random()*4)
    c.fillStyle = color;
    c.fillRect((i/2)+20, j, 50, k);
  }
});
