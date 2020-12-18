const $video = $('.video-review-player');

$video.on('click', function () {
  $(this).prev().css('display', 'none');
});
