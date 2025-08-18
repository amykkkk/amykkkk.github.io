$(function(){

    //top-banner-slide
    $(".top-banner").slick({
        dots:false,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        vertical:true,
        pasueOnHover:false,
    });


    //popup-slide
    $(".popup-slide").slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pasueOnHover:false,
    });
    //cookie 오늘하루 열지 않기 팝업
    if(!$.cookie("days")) $(".popup").show();
    $(".close").on("click", function(){
        $(".popup").hide();
    });
    $(".close-today").on("click", function(){
        $.cookie('days', 'Y', { expires: 1 });
        $(".popup").hide();
    });
    
    //mobile-menu
    $(".mopen").on("click", function(){
        $(".header-wrap").toggleClass("on");
        $(this).toggleClass("on");
    });
    $(".header-wrap li").on("click", function(){
        $(this).addClass("on").siblings().removeClass("on");
        if($(".header-wrap li").hasClass("on")){
           $(this).parent().siblings().find("li").removeClass("on");
        }
    });


    //main-visual-slide
    $(".main-slide").slick({
        dots:false,
        arrows:false,
        fade:true,
        autoplay:true,
        autoplaySpeed:4000,
        pasueOnHover:false,
    });
    

    //content-tab-menu
    $(".title p").on("click", function(){
        var idx=$(this).index();
        $("#content .tag>a").hide();
        $("#content .tag>a").eq(idx-1).show();
        $(this).addClass("on").siblings().removeClass("on");
    });



    //look-book-제품보기
    $(".lookbook01 span").on("click", function(){
        $(".lookbook01 a").toggleClass("on");
    })
    $(".lookbook02 span").on("click", function(){
        $(".lookbook02 a").toggleClass("on");
    });

    //mobile-store-tab-menu
    $(window).resize(function(){
        if($(window).width() <768) {
            $("#store span").on("click", function(){
                var stm=$(this).index();
                $(".store-wrap>div").hide();
                $(".store-wrap>div").eq(stm).show();
                $(this).addClass("on").siblings().removeClass("on");
                $(".offline-wrap").addClass("on").siblings().removeClass("on");
            });
        }
    })
    

    //footer-숨김
    $(".footer-wrap>i").on("click", function(){
        $(".footer-wrap").toggleClass("on");
    })

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



})