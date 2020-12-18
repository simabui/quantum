const volume = document.querySelector('.video__volume');
const video = document.querySelector('video');
const main = document.querySelector('.main-section');
const registry = document.querySelector('.registry-section');

function videoPlay() {
  if (!main && !registry) return;

  volume.addEventListener('click', handleVolume);

  function handleVolume() {
    volume.style = ' visibility: hidden; opacity: 0';
    video.muted = false;
  }
}

videoPlay();
