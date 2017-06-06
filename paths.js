document.addEventListener("DOMContentLoaded", function(){

  const canvas = document.getElementById('canvas');
  const c = canvas.getContext('2d');

  for (let i=0; i<=4000; i+=100) {

    let j = Math.round(Math.random()*1200)
    let k = Math.round(Math.random()*4)

    c.beginPath();
    c.moveTo(1000,600);
    c.bezierCurveTo((i/2)+20, j, k, -60, 200,30);
    c.closePath();
    c.lineWidth = 1;
    c.strokeStyle = 'black';
    c.stroke();

    c.fillStyle = "black";
    c.font = "italic "+ 96 + "pt Arial ";
    c.fillText("pile paths", 20,150);
  }
});
