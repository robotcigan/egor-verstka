'use strict';

$(document).ready(function () {

  $('.anim-slide').each(function () {
    console.log('some');
    // $(this).insertAfter(".anim-slide__box");
    $('.anim-slide').append('<div class="anim-slide__box"></div>');
  });

  var controller = new ScrollMagic.Controller();

  var duration = 1;

  // Special box
  var tween = TweenMax.to(".anim-slide__box", duration, {
    ease: Power4.easeInOut,
    width: '0',
    delay: .5
  });
  var scene = new ScrollMagic.Scene({
    triggerElement: '.about',
    reverse: false
  }).setTween(tween).addTo(controller);
  // .setTween('.anim-slide__box', duration, {
  //   ease: Power4.easeInOut,
  //   width: '0'
  // })
  // TweenMax.to(".anim-slide__box", duration, {
  //   ease: Power4.easeInOut,
  //   width: '0'
  // });
});