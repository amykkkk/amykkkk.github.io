$(document).ready(function () {

    // $('.main-visual .circle').removeClass('on');

    // var lineTimer = document.querySelector('.main-visual .circle');

    $(document).ready(function () {
        var mySwiper = new Swiper('.swiper1', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            effect: 'fade',
            simulateTouch: true, // touch
            // If we need pagination
            pagination: {
                el: '.pagination_fra',
                clickable: true, 
                type: 'fraction',
            },
            navigation: { // 네비게이션 설정
                nextEl: '.swiper-arrow-wrap .swiper-button-next', // 다음 버튼 클래스명
                prevEl: '.swiper-arrow-wrap .swiper-button-prev', // 이번 버튼 클래스명
            },

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            // on: {
            //     transitionEnd: function () {
            //         lineTimer.classList.add('on');
            //     },
            //     transitionStart: function () {
            //         lineTimer.classList.remove('on');
            //     },
            // },
        });

    //bullets

    var pagingSwiper = new Swiper(".swiper1", {
        // loop: true,
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect: 'fade',
        simulateTouch: true, // touch
        // If we need pagination
        pagination: {
            el: '.pagination_bul',
            clickable: true, 
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + index +'<span class="circle"><i></i><i></i></span></span>';
              },
        },
        navigation: { // 네비게이션 설정
            nextEl: '.swiper-arrow-wrap .swiper-button-next', // 다음 버튼 클래스명
            prevEl: '.swiper-arrow-wrap .swiper-button-prev', // 이번 버튼 클래스명
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

        new WOW().init();
    });


    //swiper2
    var swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect: 'fade',
        simulateTouch: true, // touch
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
            type: 'fraction',
        },
        navigation: { // 네비게이션 설정
            nextEl: '.swiper2 .arw_wrap .swiper-button-next', // 다음 버튼 클래스명
            prevEl: '.swiper2 .arw_wrap .swiper-button-prev', // 이번 버튼 클래스명
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        

    });


    //swiper3
    var swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        direction: 'horizontal',
        observer: true, //swiper 여러개일때 새로고침
        observeParents: true, //swiper 여러개일때 새로고침
        slidesPerView: 3.8,
        spaceBetween: 50,
        speed: 1000,
        simulateTouch: true, // touch
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
            type: 'progressbar',
        },
        navigation: { // 네비게이션 설정
            nextEl: '.swiper3 .arw_wrap .swiper-button-next', // 다음 버튼 클래스명
            prevEl: '.swiper3 .arw_wrap .swiper-button-prev', // 이번 버튼 클래스명
        },

        breakpoints: {
    
            1300: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 3,
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

    });

    //global-network

    $(window).resize(function() {
        if($(window).width() > 768) {
                $(window).scroll(function() {
                    if ($(this).scrollTop() >= 3700 && $(this).scrollTop() <= 4900) {
                        $('.global-network .list').addClass('fix');
                    } else {
                        $('.global-network .list').removeClass('fix');
                    }
                });
        } else  {
            $('.global-network .list').removeClass('fix');
        }
    });



});
