$(function() {
    var bjrt = new BJRT();
    bjrt.fullpageFN();

})
var BJRT = function() {

};
BJRT.prototype = {
    //导入轮播滚动插件
    fullpageFN: function() {
        $('#demon').fullpage({
            navigation: true,
            paddingTop: '50px',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'sevenPage'],
            menu: '#nav',
            sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#dd4726', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
            scrollingSpeed: 2000,
            afterLoad: function(a, index) {
                if (index == 1) {
                    $('.box1 img').addClass('animated fadeInDown');
                    $('.box1 a').addClass('animated fadeInDown');
                }
                if (index == 2) {
                    $('.box2 .title-img').addClass('animated fadeInDown');
                    $('.box2 span').addClass('animated fadeInDown');
                    $('.box2 p').addClass('animated fadeInUp');
                    $('.box2 a').addClass('animated fadeInUp');
                }
                if (index == 3) {
                    $('.box3 .title-img').addClass('animated fadeInDown');
                    $('.box3 span').addClass('animated fadeInDown');
                    $('.box3 p').addClass('animated fadeInDown');
                    $('.box3 a').addClass('animated fadeInUp');
                    $('.box3 .right img').addClass('animated fadeIn');
                }
                if (index == 4) {
                    $('.box4 .title-img').addClass('animated fadeInDown');
                    $('.box4 span').addClass('animated fadeInDown');
                    $('.box4 p').addClass('animated fadeInUp');
                    $('.box4 a').addClass('animated fadeInUp');
                    $('.box4 .right img').addClass('animated bounce');
                }
                if (index == 5) {
                    $('.box5 .title-img').addClass('animated fadeInLeftBig');
                    $('.box5 span').addClass('animated fadeInLeftBig');
                    $('.box5 a').addClass('animated fadeInLeft');
                    $('.box5 .right img').addClass('animated fadeInRightBig')
                }
            },
            onLeave: function(index, direction) { //direction:是往上滚动还是下滚动
                if (index == 1) {
                    $('.box1 img').removeClass('animated fadeInDown');
                    $('.box1 a').removeClass('animated fadeInDown');
                };
                if (index == 2) {
                    $('.box2 .title-img').removeClass('animated fadeInDown');
                    $('.box2 span').removeClass('animated fadeInDown');
                    $('.box2 p').removeClass('animated fadeInUp');
                    $('.box2 a').removeClass('animated fadeInUp');
                }
                if (index == 3) {
                    $('.box3 .title-img').removeClass('animated fadeInDown');
                    $('.box3 span').removeClass('animated fadeInDown');
                    $('.box3 p').removeClass('animated fadeInDown');
                    $('.box3 a').removeClass('animated fadeInUp');
                    $('.box3 .right img').removeClass('animated fadeIn');
                }
                if (index == 4) {
                    $('.box4 .title-img').removeClass('animated fadeInDown');
                    $('.box4 span').removeClass('animated fadeInDown');
                    $('.box4 p').removeClass('animated fadeInUp');
                    $('.box4 a').removeClass('animated fadeInUp');
                    $('.box4 .right img').removeClass('animated bounce');
                }
                if (index == 5) {
                    $('.box5 .title-img').removeClass('animated fadeInLeftBig');
                    $('.box5 span').removeClass('animated fadeInLeftBig');
                    $('.box5 a').removeClass('animated fadeInLeft');
                    $('.box5 .right img').removeClass('animated fadeInRightBig')
                }
            }
        })
    },
}
