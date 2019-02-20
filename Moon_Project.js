

function setup (){
	createCanvas (900,900);
	frameRate (60);
	background (0); //starry sky photo or code for stars here?
	
}

function draw(){




translate(width/2, height/2);




drawMoon (300, 20);
drawMoon2 (225, 20);
drawMoon3 (150, 20);
drawMoon4 (75,20);
drawMoon5 (0, 20);
drawMoon11 (-360, 20);
drawMoon10 (-300, 20);
drawMoon9 (-225, 20);
drawMoon8 (-150, 20);
drawMoon7 (-75,20);
drawMoon6 (-10,20);
//drawMoon12 (0, 50);
}


//write a function that moves another circle in front of this circle.
 function drawMoon (x,y){
     ellipse (x + 10 ,y, 80,80);
     fill (0);
     ellipse (x, y, 80, 80);
     fill (255);
   }

function drawMoon2 (x,y){
	 ellipse (x + 20 ,y, 80,80);
     fill (0);
     ellipse (x, y, 80, 80);
     fill (255);
}

function drawMoon3 (x,y){
	 ellipse (x + 30 ,y, 80,80);
     fill (0);
     ellipse (x, y, 80, 80);
     fill (255);
}

function drawMoon4 (x,y){
	 ellipse (x + 40 ,y, 80,80);
     fill (0);
     ellipse (x, y, 80, 80);
     fill (255);
}

function drawMoon5 (x,y){
	 ellipse (x + 50 ,y, 80,80);
     fill (0);
     ellipse (x, y, 80, 80);
     fill (255);

}

function drawMoon6 (x,y){
	 ellipse (x,y, 80,80);
     fill (255);
     // ellipse (x, y, 80, 80);
     // fill (255);
}

function drawMoon7 (x,y){

	ellipse (x ,y, 80,80);
     fill (0);
     ellipse (x + 50, y, 80, 80);
     fill (255);
}
function drawMoon8 (x,y){

     ellipse (x ,y, 80,80);
     fill (0);
     ellipse (x + 40, y, 80, 80);
     fill (255);
}

function drawMoon9 (x,y){

     ellipse (x ,y, 80,80);
     fill (0);
     ellipse (x + 30, y, 80, 80);
     fill (255);
}


function drawMoon10 (x,y){

     ellipse (x ,y, 80,80);
     fill (0);
     ellipse (x + 20, y, 80, 80);
     fill (255);
}
function drawMoon11 (x,y){

     ellipse (x ,y, 80,80);
     fill (0);
     ellipse (x + 10, y, 80, 80);
     fill (255);
}
function drawMoon12 (x,y){

     ellipse (x ,y, 80,80);
     fill (255);
     // ellipse (x + 10, y, 80, 80);
     // fill (255);
}