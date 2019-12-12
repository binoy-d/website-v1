var bubbles = []

let img
function preload(){
    var link = prompt("input imgur link(images shouldnt be too large)","https://i.imgur.com/qLXLgxE.jpg" )
    img = loadImage(link)
}

var b = 20
var velb = 1
let canv

var button 

function setup(){   
    image(img,0,0,width,height)
    img.loadPixels()
    var step = img.width/75
    for(var x = 0;x<img.width;x+=step){
        for(var y = 0;y<img.height;y+=step){
            var pix = img.get(x,y)
            var avgcolor = (pix[0]+pix[1]+pix[2])/3
            if(avgcolor<255 ){
                bubbles.push(new Bubble(x,y,(255-avgcolor)/(step/(img.width/300)), Math.random()-0.5, Math.random()-0.5, x, y));
            }
        }
    }
    canv = createGraphics(img.width*2,img.height*2);
    createCanvas(400,400)
}


function downloadCanv(){
    saveCanvas(canv, "bubblify_image.jpg")
}

function draw(){
    render()
    tick()
}

function tick(){
    for(var i = 0;i<bubbles.length;i++){
        if(bubbles[i].size<bubbles[i].intendedsize){
            bubbles[i].size+=0.5;
        }
        shakeamount = (1 - bubbles[i].size/bubbles[i].intendedsize)*4


        bubbles[i].x+=(Math.random()*shakeamount-shakeamount/2);
        bubbles[i].y+=(Math.random()*shakeamount-shakeamount/2);
    }
    //print(b)
}


function render(){

    
    canv.background(255);
    
    canv.noStroke();
    
    for(var i = 0;i<bubbles.length; i++){
        canv.fill(0,0,0,bubbles[i].intendedsize*3);
        canv.ellipse(bubbles[i].x*2,bubbles[i].y*2, bubbles[i].size*2, bubbles[i].size*2);
    }
    image(canv, 0,0,400,400)
}

function mousePressed(){
    bubbles.push(new Bubble(mouseX,mouseY, Math.random()*50, Math.random()-0.5, Math.random()-0.5, mouseX, mouseY));
}

function Bubble(x, y, size, xdir, ydir, ogx, ogy){
    this.growing = true
    this.x = x;
    this.y = y;
    this.intendedsize = size
    this.size = this.intendedsize/20
    this.xdir = xdir
    this.ydir = ydir
    this.ogx = ogx
    this.ogy = ogy
}