$(function(){

    // loading page
    $('.preload span').circleProgress({
        value: 1,
        size: 300,
        lineCap:"round",
       thickness:"5",
       startAngle: -1.5,
       animation: { duration: 3600, easing: "circleProgressEasing" },
        fill: "#17269d",
        emptyFill:"rgba(0, 0, 0, 0)",
    })
    .on('circle-animation-progress', function(event, progress) {
         $(this).parents().find('.number').html(Math.round(100 * progress) + '<i>%</i>');
         $(".preload").delay(4000).fadeOut(700);
    });

    //full page
    const sIt=$(".section");
    const ssIt=$(".slide");
    $("#portfolio").fullpage({
        anchors:['introX', 'profileX', 'ptf'],
        controlArrows: false, 
        loopHorizontal: false, 
        afterLoad: function(o,d){
            if(d.index==1) {
                ssIt.first().addClass("on");
                ssIt.last().addClass("on");
            }else{
                ssIt.removeClass("on");
            }
            sIt.eq(d.index).addClass("on").siblings().removeClass("on");
        },
        afterSlideLoad: function(s,o,d,r) {
            ssIt.eq(d.index).addClass("on").siblings().removeClass("on");
        }
    });


    // scroll-right
    $(".main").on("mousewheel", function(e){
        let Whl=e.originalEvent.wheelDelta;
        Whl>0 ? fullpage_api.moveSlideLeft() : fullpage_api.moveSlideRight();
    });
    
    //menu
    $("header h1").on("click", function(){
        $("header").toggleClass("on");
        //$(this).toggleClass("on");
    })
    $(".menu a").on("click", function(){
        $("header").removeClass("on");
    });

})