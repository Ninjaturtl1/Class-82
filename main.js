canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";

var last_X_position, last_Y_position;

var color="black";
var line_width=3;

canvas.addEventListener("mouseDown", my_mouseDown);
function my_mouseDown(e){
    //additional activity
    color=document.getElementById("colorInput").value;
    line_width=document.getElementById("widthInput").value;
    //additional activity end

    mouseEvent="mouseDown";
    console.log("mouseDown");
}

canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(e) {
    mouseEvent="mouseUp";
    console.log("mouseUp");
}

canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e) {
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mouseMove", my_mouseMove);
function my_mouseMove(e) {

    current_mouse_X_position= e.clientX - canvas.offsetLeft;
    current_mouse_Y_position= e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;

        console.log("last position of X and Y coordinates= ");
        console.log("x= " + last_X_position + " y= " + last_Y_position);

        ctx.moveTo(last_X_position, last_Y_position);

        console.log("current position of X and Y coordinates= ");
        console.log("x= " + current_mouse_X_position + " y= " + current_mouse_Y_position);
        
        ctx.lineTo(current_mouse_X_position, current_mouse_Y_position);
        ctx.stroke();
    }

    last_X_position=current_mouse_X_position;
    last_Y_position=current_mouse_Y_position;
}

function clear() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}