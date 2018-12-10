var mic;

function setup() {
  createCanvas(1000, 1000);

  // Create an Audio input
  mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)

}

function draw() {
  background(100);
  //Get the overall frequency. The fft first gets analyzed, then
  //the getCentroid, wil lget the biggest value
var spectrum = fft.analyze();
spectralCentroid = fft.getCentroid();

  // Get the overall volume (between 0 and 1.0) in this case multiplied by x
  var vol = mic.getLevel()*10000;
  fill(50,vol+100,vol+100);
  var klein = spectralCentroid / 2500;

  // Draw an ellipse with height based on volume
  var h = map(klein, 0, 1, height, 0);
  ellipse(vol, h - 25, 50, 50);

  console.log( vol );

  while (0 < 900) {

  }
}
