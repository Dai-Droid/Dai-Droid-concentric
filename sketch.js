let x=0
function setup() {
  createCanvas(1000, 500);
 
}

function draw() {
  background(98,80,308);
  for (let i =0;i<1000;i+=10){
  noFill();
  stroke(209,165,168);
  strokeWeight(2);
  ellipse(600,350,i-200,i-200);
    
    
  ellipse(50,200,i,i)
  noFill();
  stroke(i+31,131,206);
  strokeWeight(2);
    
  strokeWeight(2)
  stroke('navy')  
  strokeWeight(3)
  ellipse(x,250,500-i,500-i);
}
  if (x>width){
    x=1
  } else{
    x=x+3
  }
}

