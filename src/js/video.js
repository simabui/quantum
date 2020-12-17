const volume = document.querySelector('.video__volume');
const video = document.querySelector('video');

function videoPlay() {
  if (!document.querySelector('.main-section')) return;

  volume.addEventListener('click', handleVolume);

  function handleVolume() {
    volume.style = ' visibility: hidden; opacity: 0';
    video.muted = false;
  }
}

videoPlay();
