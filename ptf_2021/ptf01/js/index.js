$(function(){
    
    $("nav .search").on("click", function(){
        $(this).toggleClass("on");
    });
    
    //메인 비쥬얼 슬라이드
    $(".main-slide").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pasuseOnFocus:false,
    })
    $(".slide-info .xi-play").on("click", function(){
        $(".main-slide").slick("slickPlay");
    });
    $(".slide-info .xi-pause").on("click", function(){
        $(".main-slide").slick("slickPause");
    });


    //contents slide
    $(".contents-slide").slick({
        arrows:false,
        dots:false,
        slidesToShow:3, 
        slidesToScroll:3,
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
    $(".xi-angle-left-thin").on("click", function(){
        $(".contents-slide").slick("slickPrev");
    });
    $(".xi-angle-right-thin").on("click", function(){
        $(".contents-slide").slick("slickNext");
    });

    //room slide
    $(".room-slide").slick({
        arrows:false,
        dots:true,
    });
    $(".xi-angle-left").on("click", function(){
        $(".room-slide").slick("slickPrev");
    });
    $(".xi-angle-right").on("click", function(){
        $(".room-slide").slick("slickNext");
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
    $(window).on("resize", function(){
        $("nav").removeClass("on");
        $("nav>ul>li").removeClass("on");
    });




})