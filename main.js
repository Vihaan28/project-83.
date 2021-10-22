var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mouseevent = "empty";
var last_x , last_y ;

var color = "black";
var line_width = 1;

canvas.addEventListener("mousedown" , mymousedown);

function mymousedown(e){
color = document.getElementById("colour_input").value;
line_width = document.getElementById("LineWidth_input").value;

mouseevent="mousedown";

}

canvas.addEventListener("mousemove" , mymousemove);

function mymousemove(e){
current_x = e.clientX - canvas.offsetLeft;
current_y = e.clientY - canvas.offsetTop;

if (mouseevent == "mousedown"){

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_x , last_y );
    ctx.lineTo(current_x , current_y);
    ctx.stroke();
}
last_x = current_x;
last_y = current_y;
}

canvas.addEventListener("mouseup" , mymouseup);

function mymouseup(e){
mouseevent="mouseup";
}

canvas.addEventListener("mouseleave" , mymouseleave);

function mymouseleave(e){
mouseevent="mouseleave";
}


var touch_x ,touch_y;

var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;

if(width<992){

document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;

document.body.style.overflow = "hidden";
}






canvas.addEventListener("touchstart" , mytouchstart);

function mytouchstart(e){

color = document.getElementById("colour_input").value;
line_width = document.getElementById("LineWidth_input").value;
 
touch_x =e.touches[0].clientX - canvas.offsetLeft;
touch_y = e.touches[0].clientY - canvas.offsetTop;

}


canvas.addEventListener("touchmove" , mytouchmove);

function mytouchmove(e){
currenttouch_x = e.touches[0].clientX - canvas.offsetLeft;
currenttouch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(touch_x , touch_y );
    ctx.lineTo(currenttouch_x , currenttouch_y);
    ctx.stroke();

touch_x = currenttouch_x;
touch_y = currenttouch_y;
}