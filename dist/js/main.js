'use strict';

$(document).ready(function () {

  // SVG magic
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

  // Animations
  var duration = 1;
  var controller = new ScrollMagic.Controller();

  $('.anim-slide').each(function () {

    $(this).append('<div class="anim-slide__box"></div>');

    var tween = new TimelineMax().to('.anim-slide__box', duration, {
      ease: Power4.easeInOut,
      width: '0'
    }).to('.service__line', duration, {
      ease: Power4.easeInOut,
      width: '100%'
      // delay: 0.1
    }).to('.insta__icon', duration, {
      ease: Power4.easeInOut,
      opacity: 1
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      reverse: false
    }).setTween(tween) // trigger a TweenMax tween
    .addTo(controller);
  });

  // Text blast
  $('.h2').addClass('h2--hidden');

  $('.h2').each(function () {

    new ScrollMagic.Scene({
      triggerElement: this
    }).on('start', function () {
      var item = this.triggerElement();
      $(item).removeClass('h2--hidden');
      $(item).addClass('h2--visible');
    }).addTo(controller);

    $(this).blast({ delimiter: "word" });
  });

  // Services
  // $('.service').on('mouseenter', function() {
  //   let self = this;
  //   TweenMax.to($(self).find('.service__img'), 1, {
  //     webkitClipPath: 'inset(5%)',
  //     clipPath: 'inset(5%)'
  //   })
  // })
});