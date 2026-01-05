const video = document.getElementById("video");
const src = video.dataset.src;

if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = src;
} else if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
}
