$(function() {
    var bjrt = new BJRT();
    bjrt.getPage();
    bjrt.navMove();
    //调用三级导航
    $(".A-nav>li").navHk();

})
var BJRT = function() {

};
BJRT.prototype = {
    getPage: function() {
        var that = this;
        //当前显示页码数
        // var currentPage = 1;
        // 总页数 比如13条 每页5条   13/5 = 3页  Math.ceil(数据总条数/每页大小 )
        // var totalPages = totalPages;
        $("#page").bootstrapPaginator({
            bootstrapMajorVersion: 3, //对应的bootstrap版本
            currentPage: 1, //当前页数
            numberOfPages: 5, //每次显示页数
            totalPages: 1, //总页数
            shouldShowPage: true, //是否显示该按钮
            useBootstrapTooltip: true,
            //点击事件
            onPageClicked: function(event, originalEvent, type, page) {
                //拿到当前点击的page赋值给全局的page
                // that.page = page;
                //改了页面数据要重新查询
                // that.queryUser();
            }
        });
    },
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
};