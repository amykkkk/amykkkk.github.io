$(document).ready(function () {

    // mobile gnb click
    $(document).on('click', '.ham_btn', function () {
        $('.mobile_menu').addClass('open');
        $('body').addClass('overflow');
        //$('.dim_layer').slideDown();
    });

    $(document).on('click', '.mobile_menu .close_btn', function () {
        $('.mobile_menu').removeClass('open');
        $('body').removeClass('overflow');
        $('.mobileOn .gnb > ul > li > ul').hide();
        $('.mobileOn .gnb > ul > li > a').removeClass('open');
        //$('.dim_layer').stop().slideUp();
    });


    // hammenu s
    $(window).resize(function () {

        // $('.mobile_menu').removeClass('open');
        $('body').removeClass('overflow');
        $('.ham_btn').removeClass('active');
        $('.mobile_menu .right .gnb > ul > li > a').removeClass('open');
        if ($(window).width() <= 768) {
            // 768일 이하일 때
            $('.mobile_menu').addClass('mobileOn');
            

        } else {
            //pc일 때
            //$('.ham_btn').hide();
            $('.mobile_menu').removeClass('mobileOn');
            $('.mobile_menu .gnb > ul > li > ul').show(); // pc
        }
    }).resize();


    $(document).on('click', '.mobileOn .gnb > ul > li > a', function (e) {
        if ($(this).next('ul').length) {
            e.preventDefault();
        }
        $(this).siblings().slideDown();
        $(this).addClass('open');
    });


    $(document).on('click', '.mobileOn .gnb > ul > li > a.open', function () {
        $(this).siblings().slideUp();
        $(this).removeClass('open');
    })

    // hammenu e


    //header drop
    $('.header > .head > .hinner .gnb > ul > li').mouseover(function(){
        $('.header .head').addClass('on');
         $(this).children().addClass('on');
 
     });
      $('.header > .head > .hinner .gnb > ul > li').mouseleave(function(){
        $('.header .head').removeClass('on');
        $(this).children().removeClass('on');
     });
 




});