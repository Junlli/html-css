$(function () {
    $('.container').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function (anchorLink, index) {
            // console.log(index)
            $('.section').eq(index-1).addClass('now');
        },
        afterRender: function () {
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            $('.screen04 .cart').on('transitionend', function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            $('.screen08').on('mousemove', function (e) {
                $(this).find('.hand').css({
                    left: e.clientX - 490,
                    top: e.clientY - 330
                })
            }).find('.again').on('click', function () {
                $('.now, .leaved, .show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            })
        },
        onLeave: function (index, nextIndenx) {
            if (index === 2 && nextIndenx === 3) {
                $('.section').eq(index-1).addClass('leaved')
            } else if (index === 3 && nextIndenx === 4) {
                $('.section').eq(index-1).addClass('leaved');
            } else if (index === 5 && nextIndenx === 6) {
                $('.section').eq(index-1).addClass('leaved');
                $('.screen06 .box').addClass('show');
            } else if (index === 6 && nextIndenx === 7) {
                $('.screen07 .star img').each(function (i, item) {
                    $(this).delay(i*0.5*1000).fadeIn();
                });
                $('.screen07 .text').addClass('show');
            }
        }
    });
});