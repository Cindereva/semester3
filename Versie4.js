var song;
var amp;
var button;
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
  background(1);
  var spectrum = fft.analyze()*2;
  spectralCentroid = fft.getCentroid()*2;
}
setInterval(
function draw() {

  var spectrum = fft.analyze();
  spectralCentroid = fft.getCentroid();
noFill();
  translate(width / 2, height / 2);

  //   stroke(0);
  //   strokeWeight(750);
  // ellipse(0, 0, 2750, 2750);
    var vol = mic.getLevel()*50;
    var trala= vol*80;
   fill(spectrum);
      ellipse(0, 0, trala, trala);
  // beginShape();

  // for (var i = 0; i < 1440; i++) {
  //  var r = map(vol, 0, 5, 1000, 500);
      //  strokeWeight(1);
  //   var x = r * cos(i);
  //   var y = r * sin(i);
  //   vertex(x, y);

  if(spectralCentroid> 8000){

  //     var x = r * cos(0);
  //     var y = r * sin(0);
  //   fill(255,8,5);
  //   stroke(240,248,255);
  // rect(x, y, 50, 50);
}
  else  if(spectralCentroid> 4000){
    var freq = spectralCentroid/637.45;
      var x = r * cos(freq);
      var y = r * sin(freq);
    fill(0,24,255);
    stroke(0,24,255);
  ellipse(x, y, 10, 10);
}


    else if(  spectralCentroid > 2000){
      var freq = spectralCentroid/318.73;
      var x = r * cos(freq);
      var y = r * sin(freq);
fill(0,255,209);
      stroke(0,206,209);
      ellipse(x, y, 10, 10);
    }

    else if (  spectralCentroid > 1000){
          var freq = spectralCentroid/159.36;
      var x = r * cos(freq);
      var y = r * sin(freq);
      fill(135,206,235);
      stroke(135,206,235);
      ellipse(x, y, 10, 10);
    }

    else if (  spectralCentroid > 500){
          var freq = spectralCentroid/79.67;
      var x = r * cos(freq);
      var y = r * sin(freq);
fill(30,144,255);
      stroke(30,144,255);
        ellipse(x, y, 10, 10);
    }

    else if (  spectralCentroid > 250){
          var freq = spectralCentroid/39.84;
      var x = r * cos(freq);
      var y = r * sin(freq);
      fill(65,105,225);
      stroke(65,105,225);
      ellipse(x, y, 10, 10);
    }

    else if (   spectralCentroid> 125){
          var freq = spectralCentroid*19.92;
      var x = r * cos(freq);
      var y = r * sin(freq);
      fill(0,0,139);
      stroke(0,0,139);
      ellipse(x, y, 10, 10);

    }

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

console.log(spectralCentroid);


}, 50);

  // endShape();
  //
  // if (volhistory.length > 1440) {
  //   volhistory.splice(0, 1);
