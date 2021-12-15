(function() {
  var video = document.getElementById('video'),
  vendorUrl = window.URL || window.webkitURL;
  navigator.getMedia = navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
  // Capture video
  navigator.getMedia({
    video: true,
    audio: false
  }, function(stream) {
    video.srcObject=stream;
    video.play();
  }, function(error) {
    // An error occured
    // error.code
  });

})();

(function() {
  var video = document.getElementById('video-2'),
  vendorUrl = window.URL || window.webkitURL;
  navigator.getMedia = navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
  // Capture video
  navigator.getMedia({
    video: true,
    audio: false
  }, function(stream) {
    video.srcObject=stream;
    video.play();
  }, function(error) {
    // An error occured
    // error.code
  });

})();

(function() {
  var video = document.getElementById('video-3'),
  vendorUrl = window.URL || window.webkitURL;
  navigator.getMedia = navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
  // Capture video
  navigator.getMedia({
    video: true,
    audio: false
  }, function(stream) {
    video.srcObject=stream;
    video.play();
  }, function(error) {
    // An error occured
    // error.code
  });

})();

(function() {
  var video = document.getElementById('video-4'),
  vendorUrl = window.URL || window.webkitURL;
  navigator.getMedia = navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
  // Capture video
  navigator.getMedia({
    video: true,
    audio: false
  }, function(stream) {
    video.srcObject=stream;
    video.play();
  }, function(error) {
    // An error occured
    // error.code
  });

})();

(function() {
  var video = document.getElementById('video-5'),
  vendorUrl = window.URL || window.webkitURL;
  navigator.getMedia = navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
  // Capture video
  navigator.getMedia({
    video: true,
    audio: false
  }, function(stream) {
    video.srcObject=stream;
    video.play();
  }, function(error) {
    // An error occured
    // error.code
  });

})();
