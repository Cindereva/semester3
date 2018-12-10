class Ball{
  float radius;
  color col;
  PVector position; //x,y
  PVector velocity;

 Ball(float radius){
    this.radius = radius;
    this.col = color(random(120,255),random(120,255),random(150,255));
    this.position = new PVector(random(50,650),random(50,350));
    this.velocity = new PVector(random(1,3),random(1,3));
  }

  void draw(){
    noStroke();
    fill(this.col);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
}
  void update(){
    this.position.add(this.velocity);
    
    if(this.position.x < 0+ this.radius/2 || this. position.x  >width-this.radius/2){
    this.velocity.x *= -1;
    }
    
    if(this.position.y < 0+ this.radius/2 || this. position.y >height- this.radius/2){
    this.velocity.y *= -1;
    }
    
  }
}

Ball[] balls = new Ball[40];
int numBalls = 40;
void setup (){
  size (700,400);
  stroke(255);
  background (255);
  
  for (int i=0; i < numBalls; i++){
    balls[i] = new Ball(random(30,70));
  }
  
}

void draw(){

  background (255);
for (int i=0; i < numBalls; i++){
   balls[i].update();
   balls[i].draw();
   }
   
}
