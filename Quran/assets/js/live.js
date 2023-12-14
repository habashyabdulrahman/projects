function playLive(channel) {
  if (hls.isSupported()) {
    var video = document.getElementById("videoPlayer");
    var hls = new hls();
    hls.loadSource(`${channel}`);
    hls.attachMedia(video);
    hls.on(hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
}
