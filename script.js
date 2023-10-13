const iframes = [document.getElementById('iframe1'), document.getElementById('iframe2')];
let currentIndex = 0;

function toggleFullscreen(iframe) {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
}

function hideAllIframes() {
    iframes.forEach(iframe => {
        iframe.style.display = 'none';
    });
}

function rotateIframes() {
    hideAllIframes();
    currentIndex = (currentIndex + 1) % iframes.length;
    iframes[currentIndex].style.display = 'block';
    toggleFullscreen(iframes[currentIndex]);
}

iframes[currentIndex].style.display = 'block';
toggleFullscreen(iframes[currentIndex]);

setInterval(rotateIframes, 120000);

setInterval(() => {
    window.location.reload();
}, 240000);

