let img; // Declare variable 'img'.
let hum;
let video;
let playing = false;
let videoArray = ['meow.mov','bed.mov','stairs.mov','stare.mov','sunbathe.mov'];
let currentVideo = 0;

function preload() {
  //img = loadImage('Antenna.jpg'); // Load image
  //hum = loadSound('humm.wav');
  video = createVideo(videoArray[currentVideo]);
  video.hide(); // Required to hide HTML  vid
  //video.play();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //hum.amp(0.1);
  //video.amp(0.1);
  let button = createButton('Play/Pause');
  button.position(600, 250);
  button.mousePressed(toggleVideo);
  let button2 = createButton('Next.video');
  button2.position(600, 275);
  button2.mousePressed(nextVideo);
  let button3 = createButton('Last.video');
  button3.position(600, 300);
  button3.mousePressed(lastVideo);
}

function draw() {
  //image(img, 0, 100, img.width/2, 400);
  image(video, 5, 5, 576, 1024);
}

function toggleVideo() {
    if (playing) {
      video.pause();
      
    } else {
      video.loop();
      
    }
    playing = !playing;
}

function nextVideo() {
    video.pause();
    currentVideo = currentVideo + 1;
    if (currentVideo >= videoArray.length) {
        currentVideo = 0;
    }
    video = createVideo(videoArray[currentVideo]);
    video.hide();
    video.play();
}

function lastVideo() {
    video.pause();
    currentVideo = currentVideo - 1;
    if (currentVideo < 0) {
        currentVideo = videoArray.length - 1;
    }
    video = createVideo(videoArray[currentVideo]);
    video.hide();
    video.play();
}