var amp;
var button;
var mic;

var volhistory = [];


function setup() {
  mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
  createCanvas(500, 500);
  angleMode(DEGREES);

  amp = new p5.Amplitude();
}

function draw() {
     var spectrum = fft.analyze();
    spectralCentroid = fft.getCentroid();
  var vol =  mic.getLevel()*2;
  volhistory.push(vol);
    
  background(255);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(0,200,255);
  noFill();
  push();

translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 100, 500);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  //ellipse(100, 100, 200, vol * 200);
}