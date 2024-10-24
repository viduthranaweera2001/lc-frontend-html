document.addEventListener('DOMContentLoaded', function () {

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function () {
        var scroll = window.scrollY;
        var height = document.documentElement.scrollHeight - window.innerHeight;
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    var offset = 50;
    var duration = 550;

    window.addEventListener('scroll', function () {
        if (window.scrollY > offset) {
            document.querySelector('.progress-wrap').classList.add('active-progress');
        } else {
            document.querySelector('.progress-wrap').classList.remove('active-progress');
        }
    });

    document.querySelector('.progress-wrap').addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});