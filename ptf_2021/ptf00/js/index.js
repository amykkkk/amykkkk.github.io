$(function(){

    //mopen
    $(".mopen").on("click", function(){
        $("nav").toggleClass("on");
        $(this).toggleClass("on");
    });

    $(".nav>ul>li").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).addClass("on");
            $(this).parents().siblings().find("li").removeClass("on");
        }
    });
    $(window).on("resize", function(){
        $("nav").removeClass("on");
        $(".nav>ul>li").removeClass("on");
    });


    //search-form
    $(".search-icon").on("click", function(){
        $("header form").toggleClass("on")
    });



    // 메인 비주얼 슬라이드
    $(".main-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    // main menu 슬라이드
    $(".menu-slider>div").slick({
        arrows:false,
        dots:false,
    })
    
    $("#main-menu .xi-angle-left").on("click", function(){
        $(".menu-slider>div").slick("slickPrev");
    });
    $("#main-menu .xi-angle-right").on("click", function(){
        $(".menu-slider>div").slick("slickNext");
    });
    


    
    // main menu tab 메뉴
    $(".menu-title li").on("click", tabMove)
    function tabMove(){
        var idx=$(this).index();
        $(".menu-slider>div").eq(idx).show().siblings().hide(); $(this).addClass("on").siblings().removeClass("on");
        $(".menu-slider>div").slick("setPosition");
    }
    

    
});
