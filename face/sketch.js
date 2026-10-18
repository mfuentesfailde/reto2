
let faceMesh;
let video;
let faces = [];

function preload() {
  faceMesh = ml5.faceMesh({
    maxFaces: 1,
    refineLandmarks: false,
    flipHorizontal: false
  });
}

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  background(0);

  // Mostrar la cámara
  image(video, 0, 0, width, height);

  // Comprobar que hay una cara detectada
  if (faces.length > 0) {
    let cara = faces[0];

    // Comprobar que existen los keypoints
    if (cara.keypoints && cara.keypoints.length > 0) {

      // Puntos de referencia aproximados
      let superior = cara.keypoints[13];
      let inferior = cara.keypoints[14];

      let apertura = dist(
      superior.x, superior.y,
      inferior.x, inferior.y
    );

  if (apertura > 15) {
    fill(0);
    stroke(0);
    textSize(22);
      text("BOCA ABIERTA", 20, 60);
      console.log("boca");
    }
        noFill();
        stroke("#a86832");
        strokeWeight(5);
       rect(superior.x-30, superior.y, 50, inferior.y - superior.y);  
  
    }
  }
}

function gotFaces(results) {
  faces = results;
}
