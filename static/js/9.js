$(function() {
    var bjrt = new BJRT();
    bjrt.navMove();
    //调用三级导航
    $(".A-nav>li").navHk();
})
var BJRT = function() {

};
BJRT.prototype = {
    //三级导航
    navMove: function() {
        $.fn.extend({
            navHk: function() {
                $(this).find("a").attr("data-ripple", "ripple");
                $("<li class='hk-1'></li>").appendTo($(this).parent());
                $("<li class='hk-2'></li>").appendTo($(this).children("ul"));
                $("<li class='hk-3'></li>").appendTo($(this).children("ul").find("ul"));
                $(this).hover(function() {
                    $(".hk-1").stop().animate({ left: $(this).position().left });
                    $(this).children("ul").stop().show();
                    $(this).find("li").each(function() {
                        $(this).hover(function() {
                            $(this).children("ul").stop().show();
                            $(this).siblings().children("ul").stop().hide();
                            $(this).siblings(".hk-2").stop().animate({ top: $(this).position().top });
                            $(this).find("li").each(function() {
                                $(this).hover(function() {
                                    $(this).siblings(".hk-3").stop().animate({ top: $(this).position().top });
                                })
                            })
                        })
                    })
                }, function() {
                    $(this).children("ul").stop().hide();
                })
            }
        })
    },
}
