var offer = getOfferFromFriend();
navigator.getUserMedia({video: true}, function(stream) {
  pc.onaddstream = e => video.src = URL.createObjectURL(e.stream);
  pc.addStream(stream);

  pc.setRemoteDescription(new RTCSessionDescription(offer), function() {
    pc.createAnswer(function(answer) {
      pc.setLocalDescription(answer, function() {
        // envoi de la réponse au serveur qui la transmettra a l'appelant
      }, error);
    }, error);
  }, error);
});