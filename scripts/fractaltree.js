
let canv;
var hueFactor;
var startX;
var startY;

function setup(){   
    canv= createCanvas(windowWidth,windowHeight);
    canv.position(0,0)
    canv.style('z-index', '-1')
    colorMode(HSB, 360, 100, 100);
 
    startX = width/3;
    startY = height*2/3;
    hueFactor = 90.0 / (height/2);
}

  
function draw(){
    background(0);
    branch(startX, height, -PI/2, height - startY, 0);
}

function mousePressed() {
    startX = mouseX;
    startY = mouseY;
  }
function branch(x,y,angle,len,hue) {
    var x2 = x + len * cos(angle);
    var y2 = y + len * sin(angle);
    // trig functions tell you how much of length is in that direction
   
    hue = (hue + 360) % 360;
    stroke(hue, 100, 100);
    line(x, y, x2, y2);
   
    if (len >= 10) {
      branch(x2, y2, angle + TAU * mouseX / width,len * 0.9 * mouseY / height, hue + len * hueFactor);
      branch(x2, y2, angle - TAU * mouseX / width,  len * 0.7 * mouseY / height, hue - len * hueFactor);
    }
  }

  function windowResized(){
      resizeCanvas();
  }
  