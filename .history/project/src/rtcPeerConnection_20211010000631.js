var pc = new RTCPeerConnection();
pc.onaddstream = function(obj) {
  var vid = document.createElement("video");
  document.appendChild(vid);
  vid.srcObject = obj.stream;
}

// Helper functions
function endCall() {
  var videos = document.getElementsByTagName("video");
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause();
  }

  pc.close();
}

function error(err) {
  endCall();
}