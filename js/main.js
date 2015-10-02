/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-10-01 20:00:07
 * @version $Id$
 */

//通知
$(function() {
    $(".gb-new").click(function() {
        $('.new').animate({
            top: '-600px'
        }, 500, function() {
            $('.mask').hide()
        });
        $('.pay2').animate({
            top: '-600px'
        }, 500, function() {
            $('.mask').hide()
        });
    })

    $('#go_cover').click(function() {
        $('.mask').show()
        $('.pay2').animate({
            top: '120px'
        }, 500);
    });

    // var logins = $('.bodyb').height() - 95
    // $('.logins').height(logins)


    $('.t-t').click(function() {
        $('html,body').stop();
        $('html,body').animate({
                scrollTop: $('.header').offset().top
            },
            1000);
    });

    var lh = $(window).height()
    $('.l-h').height(lh)

    var bodyb = $('.contents').height() + 171
    $('.bodyb').height(bodyb)

    $('.bk').click(function() {
        $('.mask').show()
        $('.bk-tc').animate({
            top: '40%'
        }, 500);
    });

    $(".tc").click(function() {
        $('.bk-tc').animate({
            top: '-100%'
        }, 500, function() {
            $('.mask').hide()
        });
    })
})


// $(window).resize(function() {
//     var logins = $('.bodyb').height() - 95
//     $('.logins').height(logins)

//     var bodyb = $('.contents').height() + 171
//         //alert($('.contents').height());
//     $('.bodyb').height(bodyb)
// });

$(window).resize(function() {
    var lh = $(window).height()
    $('.l-h').height(lh)
});
