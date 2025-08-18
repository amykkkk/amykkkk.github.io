$(document).ready(function () {

     

    // var swiper = new Swiper('.swiper1', {
    //     direction:'vertical',
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     speed: 500,
    //     loop: true,
    //     loopedSlides: 1,
    //     initialSlide: 1,
    //     loopAdditionalSlides: 1,
    //     pagination: {
    //         el: '.swiper1 .swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: { // 네비게이션 설정
    //         nextEl: '.swiper1 .swiper-arrow-wrap .swiper-button-next', // 다음 버튼 클래스명
    //         prevEl: '.swiper1 .swiper-arrow-wrap .swiper-button-prev', // 이번 버튼 클래스명
    //     },
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    // });

     

    // main_vis slick
    $(document).ready(function () {

        new WOW().init();
   
       // slick count S
       var $slider = $('#slick_vis2');
   
       // slick의 슬라이드 넘어가는 속도  ... 타임바에서도 사용되는 변수값임
       var slideSpeed = 200; // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms) 
           slideAutoPlaySpeed = 3000; // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms) 
   
       if ($slider.length) {
   
           // slick 기본설정 S
           $slider.slick({
               slide: 'div', //슬라이드 되어야 할 태그 ex) div, li 
               infinite: true, //무한 반복 옵션	 
               slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
               slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
               speed: slideSpeed, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
               fade: true,
               cssEase: 'linear',
               arrows: true, // 옆으로 이동하는 화살표 표시 여부
               dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
               autoplay: true, // 자동 스크롤 사용 여부
               autoplaySpeed: slideAutoPlaySpeed, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
               pauseOnHover: false, // 슬라이드에 마우스가 올라가있으면 멈춤
               vertical: false, // 세로 방향 슬라이드 옵션
               prevArrow: $('#main_vis .arw_wrap .slick-prev'),
               nextArrow: $('#main_vis .arw_wrap .slick-next'),
               dotsClass: "slick_dots", //아래 나오는 페이지네이션(점) css class 지정
               draggable: true, //드래그 가능 여부 
           });
           // slick 기본설정 E
   
       }
       // slick count E
   
       // 버튼에 숫자 커스텀 S ... 01, 02, 03 ...10, 11
       var sliderLi = $('.slick_dots li');
       for(i=0; i<sliderLi.length; i++){
           sliderLi.eq(i).append('<span class="num">'+ (i>8 ? '' : '0') + (i+1) +'</span>');
       }
       // 버튼에 숫자 커스텀 E
   
       // 버튼 내부에 텍스트 기재 S
       var sliderPageText = ['Who We Are','TV Shows','Music','Film'];
       for(i=0; i<sliderLi.length; i++){
           sliderLi.eq(i).append('<span class="txt">'+ sliderPageText[i] +'</span>');
       }
       // 버튼 내부에 텍스트 기재 E
   
   
   
   });


   // business_swiper
   
   var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 50, //양쪽 슬라이드 회전 각도
        stretch: -500, //슬라이드 간에 거리
        depth: 100, //perspective로 원근법
        modifier: 1, //active 슬라이드 이미지를 맨 위 레이어로
        slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
    navigation: { // 네비게이션 설정
    prevEl: '.mySwiper .arw_wrap .swiper-button-next', // 다음 버튼 클래스명
    nextEl: '.mySwiper .arw_wrap .swiper-button-prev', // 이번 버튼 클래스명
    },  
    breakpoints: {
    
        1300: { // min-width 1300px 
            coverflowEffect: {
            stretch: -300, //슬라이드 간에 거리
            },
        },
        1024: { // min-width 1024px
            coverflowEffect: {
            stretch: -250, //슬라이드 간에 거리
            },
        },
        768: { // min-width 1024px
            slidesPerView: 2,
            coverflowEffect: {
            stretch: -100, //슬라이드 간에 거리
            },
        },
        500: { // min-width 1024px
            slidesPerView: 1.5,
            coverflowEffect: {
            stretch: 0, //슬라이드 간에 거리
            },
        },
    }



    });


    
    
    





});
