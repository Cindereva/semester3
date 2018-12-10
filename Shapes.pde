void setup(){
size(450,250);
background(149,91,5);
}

void draw()
{
 noStroke();
 smooth();
 
 fill(217,207,144);
 triangle(450,250,250,250,350,150);
 
 fill(194,147,78);
 triangle(0,50,0,195,75,120);

 fill(56,75,62);
 triangle(450,0,200,0,450,250);
 
 fill(0,109,98);
  beginShape();
 vertex(50,0);
 vertex(10,0);
 vertex(220,220);
 vertex(310,140);
 vertex(170,0);
 endShape();
 
  fill(132,161,148);
  beginShape();
 vertex(140,0);
 vertex(100,0);
 vertex(310,220);
 vertex(400,140);
 vertex(260,0);
 endShape();
 
 fill(217,207,144);
 beginShape();
 vertex(0,0);
 vertex(0,50);
 vertex(160,200);
 vertex(260,120);
 vertex(140,0);
 endShape();
 
  fill(149,91,5);
 beginShape();
 vertex(280,0);
 vertex(280,100);
 vertex(400,100);
 vertex(400,0);
 vertex(380,0);
 vertex(380,80);
 vertex(300,80);
 vertex(300,0);
 endShape();
 
 fill(56,75,62);
 triangle(0,250,250,250,125,125);
 
 fill(0,109,98);
 triangle(0,250, 400, 250, 0,600);
 
 fill(132,161,148);
 ellipse(125,99,60,60);
 
 fill(0,109,98);
 ellipse(250,250,150,150);
 
 fill(0,109,98);
 triangle(40,0,190,0,115,75);
 
// fill(146,48,39);
// quad(121,0,239,114,325,25,300,0);
 
// fill(124,57,49);
// beginShape();
// vertex(0,0);
// vertex(121,0);
// vertex(239,114);
// vertex(151,200);
// vertex(0,46);
// endShape();
 
// fill(201,104,71);
// rect(70,0,51,21);
 
// fill(200,78,63);
// quad(105,0,105,21,143,21,120,0);
 
// fill(142,63,52);
// quad(0,46,0,215,70,282,151,200);
 
// fill(66,36,38);
// triangle(0,215,70,282,151,200);
 
//fill(197,118,52);
//triangle(0,353,142,353,70,282);

//fill(201,104,71);
//beginShape();
//vertex(142,353);
//vertex(177,353);
// vertex(243,293);
// vertex(151,200);
// vertex(70,282);
// endShape();
 
}
