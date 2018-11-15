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
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                //自定义分页类型
                // type : 'custom',
            },
        });
    }
};
