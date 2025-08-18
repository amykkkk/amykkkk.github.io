$(document).ready(function () {

    /******************** common s ********************/
 
    
    
  
   // mobile gnb click
    $(document).on('click', '.ham_btn', function () {
        $(this).addClass('active');
        $('.mobile_menu').fadeIn();
        $('.mobile_menu .gnb').animate({
            right: 0
        }, 500);
    
        $('html, body').addClass('noneScroll');
        //전체 메뉴 시 컨텐츠 쪽 스크롤 방지
    });

    $(document).on('click', '.ham_btn.active', function () {
        $(this).removeClass('active');

        $('.mobile_menu .gnb').animate({
            right: '-100%'
        }, 500);
        $('.mobile_menu').stop().fadeOut();
        $('html, body').removeClass('noneScroll');
        //전체 메뉴 시 컨텐츠 쪽 스크롤 방지
        
    });

    $('.gnb_wrap').hover(function () {
        $('.header').toggleClass('hover');
    });
     $('.head').hover(function () {
        $('.header').toggleClass('active');
    });




    // s
    /*$(window).resize(function () {

        var swidth = (window.innerWidth - $(window).width());

        if ($(window).width() <= 500 - swidth) {
            $('.mobile_menu').addClass('mobileOn');
            $('.mobile_menu > .gnb > ul > li > .two_depth').hide();
            
            $(document).on('click', '.ham_btn.active', function(){
                $('.mobile_menu.mobileOn > .gnb > ul > li > .two_depth').slideUp();
                $('.mobileOn .gnb > ul > li > a').removeClass('open');
            });
            
            
        } else if ($(window).width() > 500 - swidth) {
            $('.mobile_menu').removeClass('mobileOn');
             $('.mobile_menu > .gnb > ul > li > .two_depth').show();
            $('.mobile_menu .gnb > ul > li > a').removeClass('open');
             
            
        }

       

    }).resize();

    $(document).on('click', '.mobileOn .gnb > ul > li > a', function (e) {

        e.preventDefault();



        $('.mobileOn .gnb > ul > li > a').removeClass('open');
        $(this).addClass('open');

        if ($(this).hasClass('open')) {
            $('.mobileOn .gnb > ul > li > a').siblings().stop().slideUp();
            $(this).siblings().stop().slideDown();
        }

    });


    $(document).on('click', '.mobileOn .gnb > ul > li > a.open', function () {
        $(this).siblings().slideUp();
        $(this).removeClass('open');
    });*/

    // hammenu e

    
    //스크롤 탑 메인 비주얼 높이 - 100px 부터 헤더에 클래스 추가
    $(window).on("scroll", function () {
        var mainHeight = $('#main_vis').height() - 100;
        if ($(window).scrollTop() < mainHeight) {
          $('.header').removeClass('scroll');
        } else if ($(window).scrollTop() > mainHeight) {
            $('.header').addClass('scroll');
        }
    });
    



});
