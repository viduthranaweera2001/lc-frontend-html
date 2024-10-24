const video = document.getElementById('intro-video');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', function () {
    video.play();
    playBtn.style.display = 'none';
});

video.addEventListener('ended', function () {
    playBtn.style.display = 'block';
});