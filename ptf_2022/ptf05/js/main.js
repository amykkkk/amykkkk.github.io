$(document).ready(function(){

    var mySwiper1 = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect : 'fade',
        dots: true,
        simulateTouch: true, // touch
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        // navigation: { // 네비게이션 설정
        //     nextEl: '.swiper-arrow-wrap .swiper-button-next', // 다음 버튼 클래스명
        //     prevEl: '.swiper-arrow-wrap .swiper-button-prev', // 이번 버튼 클래스명
        // },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

    });


    $('.swiper-pause').click(function () {
        mySwiper1.autoplay.stop();
        $(this).hide();
        $('.swiper-play').css('display', 'flex');
    });

    $('.swiper-play').click(function () {
        mySwiper1.autoplay.start();
        $(this).hide();
        $('.swiper-pause').css('display', 'flex');
    });

    new WOW().init();


//reward

$(window).on("scroll", function () {
    var mainHeight = $('.main_vis').height() - 700;
    if ($(window).scrollTop() < mainHeight) {
        $('.reward').removeClass('fold');
    } else if ($(window).scrollTop() > mainHeight) {
        $('.reward').addClass('fold');
    }
});

$('.f_btn').click(function(){
    $(this).parent().find('.reward').toggleClass('fold');
    $(this).toggleClass('fold');
});
    
$(window).resize(function(){
    var swidth = (window.innerWidth-$(window).width()); //스크롤바제외 width
    
    if($(window).width() <= 500 - swidth){
        $('.reward').addClass('fold');
        $('.f_btn').addClass('fold');
    }else if($(window).width() > 500 - swidth){
        $('.reward').removeClass('fold');
        $('.f_btn').removeClass('fold');
    }
 }).resize();

/* tab */
$('.mainNewsCon .main-news').hide();
$('.mainNewsCon .news').show();

$(document).on('click', '.mainNewsCon .main-news-tab-box li', function (e) {
    var activeTab = $(this).attr("data-tab");
    e.preventDefault();
    $('.mainNewsCon .main-news-tab-box li').removeClass('on');
    $(this).addClass('on');

    console.log(activeTab);

    if ($('.mainNewsCon .main-news-tab-box li').hasClass('on')) {

        $('.mainNewsCon .main-news').hide();
        $("#" + activeTab).fadeIn(1000);
    };
});


/* news swiper */
var mySwiper = new Swiper('.main-news-con-wrap .swiper-container', {
    // Optional parameters
    observer: true, //swiper 여러개일때 새로고침
    observeParents: true, //swiper 여러개일때 새로고침
    slidesPerView: 3,
    spaceBetween: 50,
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides: 1, //loop 될때 다음 슬라이드 보여줌
    speed: 1000,
    simulateTouch: true, // touch
    // If we need pagination
    pagination: {
    el: '.main-news-con-wrap .swiper-pagination',
    type: 'fraction',
    }, 
    navigation: { // 네비게이션 설정
        nextEl: '.main-news-con-wrap .swiper-arrow-wrap .swiper-button-next', // 다음 버튼 클래스명
        prevEl: '.main-news-con-wrap .swiper-arrow-wrap .swiper-button-prev', // 이번 버튼 클래스명
    },
        breakpoints: {
    
    1300: {
        slidesPerView: 2,
        spaceBetween: 50,
    },
            1024: {
        slidesPerView: 2,
        spaceBetween: 50,
    },
            768: {
        slidesPerView: 2,
        spaceBetween: 50,
    },
            500: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    });

});