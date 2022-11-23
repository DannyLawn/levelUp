function setVideoCenter() {
  var $box = $('.promo');
  var height = $box.height();
  var width = $box.width();
  // aspect-ratio 16 / 9 = 1.78
  var new_height = width / 1.78;

  if (new_height > height) {
    $box.find('.promo__video').css({
      width: width,
      height: new_height,
      top: '-' + (new_height / 2 - height / 2) + 'px',
      left: '0',
    });
  } else {
    var new_width = height * 1.78;
    $box.find('.promo__video').css({
      width: new_width,
      height: height,
      top: '0',
      left: '-' + (new_width / 2 - width / 2) + 'px'
    });
  }
}

$(function () {
  setVideoCenter();
  $(window).resize(setVideoCenter);
});