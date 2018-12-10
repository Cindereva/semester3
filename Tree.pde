float angle = PI/4;
float branch_ratio = 0.67;

float theta;

void setup(){
  size(700,400);
  
}

void draw(){
  background(52);
  stroke(255);
  
    float a = (mouseX / (float) width) * 180f;
  // Convert it to radians
  theta = radians(a);
  
  //change the X/Y center
  translate (350, height);
 
   branch(100);
   
}
 
void branch(float len){
  //Remove these and translate to get same result
  //    line(200,height,200, height- len);
    line(0,0,0,- len);
    translate(0,- len);
   
    if(len > 4)    {
      pushMatrix();
      rotate(theta);
      branch(len*0.67);
      popMatrix();
      pushMatrix();
      rotate(-theta);
      branch(len*0.67);
      popMatrix();
    }
}
