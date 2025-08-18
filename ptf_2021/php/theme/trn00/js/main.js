$(function(){

    $(".main-slide").slick({
        arrows:false,
        autoplay:true,
        autoplaySpped:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    $(".xi-bars").on("click", function(){
        $("nav").toggleClass("on");
    });


})