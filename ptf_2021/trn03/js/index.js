$(function(){

    // header 스크롤 이벤트
    $(window).on("scroll", function(){
        var sct=$(window).scrollTop();
        sct>0 ? $("header").addClass("on") : $("header").removeClass("on");
    });

    //mobile-menu
    $(".mopen").on("click", mOpen)
    function mOpen(){
        $(this).toggleClass("ox");
        $("header").toggleClass("ox");
    }
    
    //main-slide
    $(".main-slide").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true,
    });
    
    
});
