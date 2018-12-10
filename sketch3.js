
var song;
var amp;
var mic;
var volhistory = [];



function setup() {
 canvas = createCanvas(3000, 3000);


  // Create an Audio input
  mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
  // start the Audio Input.
  background(0);
  var spectrum = fft.analyze()*2;
  spectralCentroid = fft.getCentroid()*2;
}




setInterval(
function draw() {
  var spectrum = fft.analyze();
  spectralCentroid = fft.getCentroid()/4;
  noFill();
  translate(width / 2, height / 2);
    var vol = mic.getLevel()*25;
    var r = -map(vol, 0, 5, 1000, 500);
        strokeWeight(1);

//The code to put different colors for each octave

//etc
  if(spectralCentroid> 8000){
    var freq = spectralCentroid/1274.9;
      var x = r * cos(freq);
    var y = r * sin(freq);
      fill(1,242,253);
      stroke(16,29,248);

   ellipse(x, y, 10, 10);
}
//octave 7
  else  if(spectralCentroid> 4000){
    var freq = spectralCentroid/637.45;
      var x = r * cos(freq);
      var y = r * sin(freq);
    fill(1,218,185);
    stroke(1,218,185);
  ellipse(x, y, 10, 10);
}

//octave 6
    else if(  spectralCentroid > 2000){
      var freq = spectralCentroid/318.73;
      var x = r * cos(freq);
      var y = r * sin(freq);
        fill(127,255,212);
      stroke(127,255,212);
      ellipse(x, y, 10, 10);
    }
//octave 5
    else if (  spectralCentroid > 1000){
          var freq = spectralCentroid/159.36;
      var x = r * cos(freq);
      var y = r * sin(freq);
      fill(0,206,209);
      stroke(0,206,209);
      ellipse(x, y, 10, 10);
    }
//octave 4
    else if (  spectralCentroid > 500){
          var freq = spectralCentroid/79.67;
      var x = r * cos(freq);
      var y = r * sin(freq);
        fill(0,211,185);
      stroke(0,211,185);
        ellipse(x, y, 10, 10);
    }
//octave3
    else if (  spectralCentroid > 250){
          var freq = spectralCentroid/39.84;
      var x = r * cos(freq);
      var y = r * sin(freq);
        fill(13,24,207);
     stroke(13,24,207);
      ellipse(x, y, 10, 10);
    }
//octave 2
    else if (   spectralCentroid> 125){
          var freq = spectralCentroid*19.92;
      var x = r * cos(freq);
      var y = r * sin(freq);
      fill(30,144,255);
      stroke(30,144,255);
      ellipse(x, y, 10, 10);

    }
//octave 1
    else if (  spectralCentroid> 67){
          var freq = spectralCentroid*9.96;
      var x = r * cos(freq);
      var y = r * sin(freq);
      fill(75,0,130);
      stroke(75,0,130);
  ellipse(x, y, 10, 10);
    }

    else {


  }
console.log(spectralCentroid );
}, 50);
