window.onload = function(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#7ba1ce";
ctx.fillRect(350,350,300,200);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(1000,1000);
ctx.stroke();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(500,450,200,0,2*Math.PI);
ctx.stroke();

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("luffy");
   ctx.drawImage(img, 225, 650); //(x,y) position of the image inside the canvas

   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   ctx.strokeRect(300,250,400,400);
   //The outline rectangle

   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   ctx.font = "30px Arial";
   ctx.fillStyle = "red";
   ctx.fillText("Luffy",375,750);
}
