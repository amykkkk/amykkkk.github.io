$(function(){

//main-slide
$(".main-slide").slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
});

//jabitz-slide-shoe-left--------------------------------------
//jabitz-letter
$(".shoe-left .letter").slick({
    arrows:false,
    dots:false,   
});
$(".angle-left .l01").on("click", function(){
    $(".shoe-left .letter").slick("slickPrev");
})
$(".angle-left .l02").on("click", function(){
    $(".shoe-left .letter").slick("slickNext");
})

//jabitz-symbol
$(".shoe-left .symbol").slick({
    arrows:false,
    dots:false,   
});
$(".angle-left .s01").on("click", function(){
    $(".shoe-left .symbol").slick("slickPrev");
})
$(".angle-left .s02").on("click", function(){
    $(".shoe-left .symbol").slick("slickNext");
})

//jabitz-metal
$(".shoe-left .metal").slick({
    arrows:false,
    dots:false,   
});
$(".angle-left .m01").on("click", function(){
    $(".shoe-left .metal").slick("slickPrev");
})
$(".angle-left .m02").on("click", function(){
    $(".shoe-left .metal").slick("slickNext");
})


//jabitz-slide-shoe-right--------------------------------------
//jabitz-letter
$(".shoe-right .letter").slick({
    arrows:false,
    dots:false,   
});
$(".angle-right .l01").on("click", function(){
    $(".shoe-right .letter").slick("slickPrev");
})
$(".angle-right .l02").on("click", function(){
    $(".shoe-right .letter").slick("slickNext");
})

//jabitz-symbol
$(".shoe-right .symbol").slick({
    arrows:false,
    dots:false,   
});
$(".angle-right .s01").on("click", function(){
    $(".shoe-right .symbol").slick("slickPrev");
})
$(".angle-right .s02").on("click", function(){
    $(".shoe-right .symbol").slick("slickNext");
})

//jabitz-metal
$(".shoe-right .metal").slick({
    arrows:false,
    dots:false,   
});
$(".angle-right .m01").on("click", function(){
    $(".shoe-right .metal").slick("slickPrev");
})
$(".angle-right .m02").on("click", function(){
    $(".shoe-right .metal").slick("slickNext");
})

//shoe-type-tabmenu--------------------------------------
$("#shoe-type>.container>figure").on("click", tabOp);
function tabOp(){
    console.log($(this).index());
    var i=$(this).index();
    $(".shoe-wrap>div").hide();
    $(".shoe-wrap>div").eq(i-1).show();
    $("#shoe-type>.container>figure").removeClass("on");
    $(this).addClass("on");
}
    
//sns-iphon-slide--------------------------------------
$(".sns-slide").slick({
    arrows:false,
    dots:false,
    pauseOnHover:false,
    autoplay:true,
    autoplaySpeed:3000,
    centerMode:true,
    slidesToShow: 5,
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









});