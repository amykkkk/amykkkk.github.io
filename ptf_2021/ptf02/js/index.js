$(function(){

//메인 비주얼 슬라이드
$(".main-slide").slick({
    arrows:false,
    dots:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
});


$(".xi-search").on("click", function(){
    $(".login-menu").toggleClass("on");
});


//이벤트 상품 슬라이드
$(".event-slide").slick({
    arrows:false,
    dots:false,
    slidesToShow: 4,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }] 
});
$(".xi-angle-left-min").on("click", function(){
    $(".event-slide").slick("slickPrev");
})
$(".xi-angle-right-min").on("click", function(){
    $(".event-slide").slick("slickNext");
})


//footer language 박스
$(".country-wrap dt").on("click", function(){
    $(".country-wrap div").toggleClass("on");
});


//mobile
$(".mopen").on("click", function(){
    $("nav").toggleClass("on");
    $(this).toggleClass("on");
});

$("nav>ul>li").on("click", function(){
    if($("nav").hasClass("on")){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    }
});
$(".mega-menu>li").on("click", function(){
    if($("nav").hasClass("on")){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    }
});


$(window).on("resize", function(){
    $("nav").removeClass("on");
    $("nav>ul>li").removeClass("on");
    $(".mega-menu>li").removeClass("on");

});


})