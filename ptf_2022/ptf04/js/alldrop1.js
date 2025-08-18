$(document).ready(function () {

    //hover 시 header 제어
    $('.header > .head > .hinner > .gnb > ul > li').mouseover(function(){
        $('.header .head').addClass('on');
         $(this).children().addClass('on');
 
     });
      $('.header > .head > .hinner > .gnb > ul > li').mouseleave(function(){
        $('.header .head').removeClass('on');
        $(this).children().removeClass('on');
     });
 
     //햄버거버튼 제어
 
     $('.ham_btn').click(function(){
        $(this).toggleClass('active');
      //  $('.ham_menu').fadeToggle();
        // $('.header > .head > .hinner > .gnb > ul > li').toggle();
 
         if($(this).hasClass('active')){
 
         $('.ham_menu').fadeIn();
         $('.header > .head > .hinner > .gnb').hide();
 
         }else{
 
         $('.ham_menu').fadeOut();
         $('.header > .head > .hinner > .gnb').show();
         $('.ham_menu > .ham_inner > .gnb.m_menu > ul > li > a').removeClass('on');
             $('.ham_menu > .ham_inner > .gnb.m_menu > ul > li > .two_depth').stop().slideUp();
         }
     });
 
     $('.ham_btn').hover(function(){
        $(this).toggleClass('hover');
 
     });
 
    //햄버거 화살표
 
      $(function(){
       var lastScroll = 0;
       $(".ham_menu").scroll(function(event){
            var scroll = $(this).scrollTop();
            if (scroll > 50){
            //이벤트를 적용시킬 스크롤 높이
                 $(".ham_menu > .ham_inner").addClass("on");
            }
            else {
                 $(".ham_menu > .ham_inner").removeClass("on");
            }
            lastScroll = scroll;
       });
  });
 
 
 
     //스크롤 헤더
 
    $(window).on('scroll',function(){
 
         var mainHeight = $('.main_vis').height();
        if($(window).scrollTop() > mainHeight) {
            $('.main .header').addClass('scroll');
        }else{
            $('.main .header').removeClass('scroll');
        }
     });
 
    var swidth = (window.innerWidth-$(window).width()); //스크롤바제외 width
 
 
    $('.ham_menu .m_menu .two_depth').hide();
    $(window).resize(function(){
 
        if($(window).width() <= 500 - swidth){
 
            $('.ham_menu > .ham_inner > .gnb').addClass('m_menu');
            $('.ham_menu .m_menu .two_depth').hide();
 
        }else if($(window).width() > 500 - swidth){
 
            $('.ham_menu .gnb .two_depth').show();
           $('.ham_menu > .ham_inner > .gnb').removeClass('m_menu');
            $('.ham_menu > .ham_inner > .gnb > ul > li > a').removeClass('on');
 
        }
     }).resize();
 
    $('.ham_btn.active').click(function(){
    $('.ham_menu > .ham_inner > .gnb.m_menu > ul > li > a').removeClass('on');
});
 
 
$(document).on('click','.ham_menu > .ham_inner > .gnb.m_menu > ul > li > a', function(e){
    e.preventDefault();

    $(this).toggleClass('on');

    if($(this).hasClass('on')){


        $('.ham_menu > .ham_inner > .gnb.m_menu > ul > li > a').removeClass('on');
        $('.ham_menu > .ham_inner > .gnb.m_menu > ul > li > a').parent().children('.two_depth').stop().slideUp();
        $(this).parent().children('.two_depth').stop().slideDown();
        $(this).addClass('on');
    }else{
        $(this).removeClass('on');
        $(this).parent().children('.two_depth').stop().slideUp();
    }
});

$('.ham_menu > .ham_inner > .gnb > ul > li > .two_depth > li > a').click(function(){
$('.ham_btn').removeClass('active');
$('.ham_menu').fadeOut();

$('.ham_menu > .ham_inner > .gnb.m_menu > ul > li > a').removeClass('on');
$('.ham_menu > .ham_inner > .gnb.m_menu > ul > li > .two_depth').stop().slideUp();
});
 
  //드롭다운 hover 효과

  var dpMore = $('.header > .head > .hinner > .gnb > ul > li .depth_wrap .img_wrap .txt_wrap .dp_more');
  var textWrap = $('.header > .head > .hinner > .gnb > ul > li .depth_wrap .img_wrap .txt_wrap');

/*  dpMore.hover(function(){
      $(this).parent('.txt_wrap').toggleClass('on');
      $(this).parent('.txt_wrap').siblings('.img').toggleClass('on');
  });
*/

  textWrap.hover(function(){
     $(this).toggleClass('hover');
      $(this).siblings('.img').toggleClass('hover');
     // $(this).children(dpMore).toggleClass('hover');
  });
  // wow
  new WOW().init();
});
