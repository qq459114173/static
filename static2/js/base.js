$(function() {
    var krhb = new KRHB();
    krhb.navMouse();
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
};
