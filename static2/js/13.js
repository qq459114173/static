$(function() {
    var krhb = new KRHB();
    krhb.navMouse();
    krhb.sideShow();
})
var KRHB = function() {

};
KRHB.prototype = {
    navMouse: function() {
        $('#menu a').mouseenter(function() {

            $(this).children('.out').animate({
                top: 90
            }, 100, function() {
                $(this).next('.over').animate({
                    top: 0
                }, 200);
            })
        });
        $('#menu a').mouseleave(function() {
            $(this).children('.out').animate({
                top: 0
            }, 200, function() {
                $(this).next('.over').animate({
                    top: -90
                }, 100);
            })
        });
    },
    sideShow: function() {
          var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });

    }
};

