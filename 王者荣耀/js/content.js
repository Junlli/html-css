
$(function () {
    // 轮播图自动播放
    var count = 0;
    var setTime = setInterval(function () {
        count++;
        if (count == $(".slide-image li").length) {
            count = 0;
        }
        // console.log($(".slide-image li").eq(count));
        $(".slide-image li").eq(count).fadeIn().siblings().fadeOut();
        $(".slide-name li a").eq(count).addClass("slide-name-color").parent().siblings().children("a").removeClass("slide-name-color");
}, 5000)

    $(".slide-name li").on("mouseenter", function () {
        var index = $(this).index();
        // console.log(index);
        $(".slide-image li").eq(index).fadeIn().siblings().fadeOut();
        count = index;
        $(".slide-name li a").eq(index).addClass("slide-name-color").parent().siblings().children("a").removeClass("slide-name-color");
    })

    // 鼠标移动到新闻导航栏
    $(".news-header li").on("mouseenter", function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

    // 鼠标移动到内容中心导航栏
    $(".item-subnav a").on("mouseenter", function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

    // 鼠标移动到内容中心二级导航栏
    $(".second-subnav a").on("mouseenter", function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

    // 鼠标移动到英雄/皮肤导航栏
    $(".hero-subnav a").on("mouseenter", function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

})

