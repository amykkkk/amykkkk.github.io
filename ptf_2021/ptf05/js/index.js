$(function(){

    $(".main-slide").slick({
        arrows:false,
        pauseOnHover:false,
        pauseOnFocus:false,
        autoplay:true,
        autoplaySpeed:3000,
    });
    $("#main-visual span").on("click", function(){
        $(".main-slide-wrap").toggleClass("on");
        $(this).toggleClass("on");
    });
    $(".xi-long-arrow-left").on("click", function(){
        $(".main-slide").slick("slickPrev");
    });
    $(".xi-long-arrow-right").on("click", function(){
        $(".main-slide").slick("slickPrev");
    });
    $("#main-visual .xi-play").on("click", function(){
        $(".main-slide").slick("slickPlay");
    });
    $("#main-visual .xi-pause").on("click", function(){
        $(".main-slide").slick("slickPause");
    });

    //news-tab-menu
    $("#news p").on("click", function(){
        var idx=$(this).index();
        $("#news>div").hide().eq(idx-1).show();
        $(this).addClass("on").siblings().removeClass("on");
    });

    //notice-tab-menu
    $("#notice p").on("click", function(){
        var idx=$(this).index();
        $("#notice>div").hide().eq(idx-1).show();
        $(this).addClass("on").siblings().removeClass("on");
    });

    
    //banner-slide
    $(".banner-slide").slick({
        arrows:false,
        dots:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        autoplay:true,
        autoplaySpeed:3000,
    });
    $("#banner .xi-pause").on("click", function(){
        $(".banner-slide").slick("slickPause");
        $(this).addClass("on").siblings().removeClass("on");
    });
    $("#banner .xi-play").on("click", function(){
        $(".banner-slide").slick("slickPlay");
        $(this).addClass("on").siblings().removeClass("on");
    });


    //sns-tab-menu
    $(".sns-icon i").on("click", function(){
        var sdx=$(this).index();
        $(".sns-item").hide().eq(sdx).show();
        $(this).addClass("on").siblings().removeClass("on");
    });



    //top-scroll
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        if(wct>300) {
            $(".top").fadeIn();
        }else{
            $(".top").fadeOut().removeClass("on");
        }
    });

    $(".top").on("click", function(){
        $("html,body").animate({scrollTop:0},1000)
        $(this).toggleClass("on");
    });


    //mobile
    $(".mopen").on("click", function(){
        $("nav>ul").toggleClass("on");
        $(".login").toggleClass("on");
    });

    $("nav>ul>li").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).addClass("on");
            $(this).parents().siblings().find("li").removeClass("on");
        }
    });
    $(window).on("resize", function(){
        $("nav").removeClass("on");
        $("nav>ul>li").removeClass("on");
    });


})