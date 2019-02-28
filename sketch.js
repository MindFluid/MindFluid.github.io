var a,b,h,x,y,ox,oy,t,ot,d,od;
var centerX,centerY;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB,360);
  
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(50);
  
  a = mouseX;
  b = 60;
  h = mouseY;
  
  for (var i = 1; i < 361; i++) {
    stroke(i - 1, 360, 360);

    t = radians(i);
    ot = radians(i - 1);

    ox = (a - b) * cos(ot) + h * cos(a*ot);
    oy = (a - b) * sin(ot) - h * sin(a*ot);

    x = (a - b) * cos(t) + h * cos(a*t);
    y = (a - b) * sin(t) - h * sin(a*t);

    line(centerX + x, centerY + y, centerX + ox, centerY + oy);
  }
  
}

function mousePressed() {
   save("spirograph_"+a+"_"+b+"_"+h+".png");
 }