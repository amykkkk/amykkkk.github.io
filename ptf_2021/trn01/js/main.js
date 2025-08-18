$(function(){

    //제품검색
    $(".search-form").on("click", function(){
        $(".top-search").slideToggle();
    });

    //main-slide
    var mSlider=$(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        fade:true,
        //useCSS:false,
        pauseOnHover:false,
    });

    var msItem=$(".main-slider figure");
    msItem.eq(0).addClass("on");
    mSlider.on("afterChange", function(e,s,c){
        console.log(c);
        msItem.eq(c).addClass("on").siblings().removeClass("on");
    });


    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        if(wct>100){
            $("header").addClass("on");
        }else{
            $("header").removeClass("on");
        }
        
    });

    //specialty-slide slick
    var spSlide=$(".specialty-slide").slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
    });

    //스크롤 이벤트
    $(window).on("scroll", function(){
        var wct=$(window).scrollTop();
        $(".section").each(function(){
            var this_top=$(this).offset().top;
            if(wct>this_top-200) {
                $(this).addClass("on");
            }
        });
        if(wct<500) {
            $(".section").removeClass("on");
        }
        if(wct>500) {
            $(".xi-arrow-top").fadeIn();
        }else{
            $(".xi-arrow-top").fadeOut();
        }

    });

    // footer 사이트 바로가기
    $("#link select").on("change", function(){
        var link=$(this).val();
        //console.log(link);
        if(link) window.open(link);
    });

    // top 바로가기 scrollevent
    $(".xi-arrow-top").on("click", function(){
        $("html,body").animate({scrollTop:0},1000)
    });


    //cookie 오늘하루 열지 않기 팝업
    //if(!$.cookie("daycookie")) $("#popup").show();
    
    if(!$.cookie("dayss")) $("#popup").show();
    $(".close").on("click", function(){
        if($("#daycheck").is(":checked")) $.cookie('dayss', 'Y', { expires: 1 });
        $("#popup").hide();
    });
})