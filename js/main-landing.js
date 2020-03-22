var i = 0;
var name = 'Daniel Binoy'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */


var j = 0;
var tagline = "Student, Innovator, Creator";

function typeWriter() {
  if (i < name.length) {
    document.getElementById("title-name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else if(j<tagline.length){
    document.getElementById("main-subtitle").innerHTML += tagline.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}