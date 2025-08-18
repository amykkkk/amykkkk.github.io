$(document).ready(function() {

        var swiperAnimation = new SwiperAnimation();

        var swiper_slide2 = new Swiper('.parallax_slide2 .swiper-container', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            pagination: {
                el: '.parallax_slide2 .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.parallax_slide2 .swiper-button-next',
                prevEl: '.parallax_slide2 .swiper-button-prev',
            },
            autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            },
            
            on: {
                init: function() {
                    swiperAnimation.init(this).animate();
                },
                slideChange: function() {
                    swiperAnimation.init(this).animate();
                }
            },
             
        });
    
    // 타임바 S
    
    // 타임바 E

    });
//참고사이트 https://www.db-dvp.co.kr/