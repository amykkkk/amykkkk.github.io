$(document).ready(function(){
    $('.wow').addClass('animated');
        // wow
    new WOW().init();
    
    // scrollTrigger
    var mtl = gsap.timeline({
        scrollTrigger: {
            trigger: '.video-area',
            start: 'top 0',
            end: 'bottom 470px',
            pin: true,
            scrub: true,
            markers: false
        }
    })
        
    // scrollTrigger bg
    mtl.to('.video-area .bar1', {height:'50%',  duration: .5, ease:'power3'}, "<")
        .to('.video-area .bar2', {height:'50%', duration: .5, ease:'power3'}, "<")
        .to('.video-area .bar3', {width:'2vw',  duration: .5, ease:'power3'}, "<")
        .to('.video-area .bar4', {scaleX:0,     duration: .5, ease:'power3'}, "<")
        .to('.video-area .bar5', {width:'2vw',  duration: .5, ease:'power3'}, "<")
        .to('.video-area .bar6', {scaleY:0,     duration: .5, ease:'power3'}, "<")
        .to('.video-area .bar7', {scaleY:'0%',  duration: .5, ease:'power3'}, "<")
        



    // cursor
    let circle = document.querySelector(".cursor");
    let sldLinks = document.querySelectorAll(".more");
    sldLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            circle.classList.add("link-grow");
        });
        link.addEventListener("mouseleave", () => {
            circle.classList.remove("link-grow");
        });
    });


    var cursor = $(".cursor"),
    follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;
    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, { // 값을 올릴수록 cursor-follower 영역이 늦게 따라옴
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                left: posX - 12,
                top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                left: mouseX,
                top: mouseY
                }
            });
        }
    });

    document.addEventListener("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });





    // swiper-slide2
    var mySwiper = new Swiper('.swiper-slide2', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 0,
        effect : 'fade',
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        simulateTouch: true, // touch
        // If we need pagination
        pagination: {
        el: '.slide_index .bar',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: { // 네비게이션 설정
            nextEl: '.swiper-button-next', // 다음 버튼 클래스명
            prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
        }

    });



    //plus

    $(document).on('click', '.staggered .item_box', function (e) {

        e.preventDefault();
        $('.staggered .item_box').removeClass('open');
        $(this).addClass('open');

        if ($(this).hasClass('open')) {
            $('.staggered .item_box').siblings().stop().slideUp();
            $(this).siblings().stop().slideDown();
        }

    });


    $(document).on('click', '.staggered .item_box.open', function () {
        $(this).siblings().slideUp();
        $(this).removeClass('open');
    });





    ///split text

    var headline = document.getElementsByClassName('split_wrap');
    var headlineOffset = headline[0].offsetTop;
    var letters = headline[0].innerText.split('');
    letters = letters.filter(function(letter) {
    return letter !== ' ' && letter !== '\n' ? letter : false;
    });
    var tweenDistance = getRandomArbitrary(200, 400);
    var topDistance = 0;
    var movement = 0;
    var elements = [];

    function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

    function move(element, distance) {
    var translate3d = 'translate3d(0, ' + distance + 'px, 0)';
    element.style['-webkit-transform'] = translate3d;
    element.style['-moz-transform'] = translate3d;
    element.style['-ms-transform'] = translate3d;
    element.style['-o-transform'] = translate3d;
    element.style.transform = translate3d;
    };

    function moveY(element, distance) {
    var translate3d = 'translateY(' + distance + '%)';
    element.style['-webkit-transform'] = translate3d;
    element.style['-moz-transform'] = translate3d;
    element.style['-ms-transform'] = translate3d;
    element.style['-o-transform'] = translate3d;
    element.style.transform = translate3d;
    };

    function fadeOut(element, scrollDistance, tweenDistance) {
    element.style.opacity = (tweenDistance - scrollDistance) / tweenDistance;
    }

    function tweenHeight(element, scrollDistance, tweenDistance, initialHeight) {
    element.style.height = (((tweenDistance - scrollDistance) / tweenDistance) * initialHeight) + 'px';
    }

    letters.forEach(function(letter) {
    var element = document.createElement('span');
    element.innerText = letter;
    element.dataset.speed = Math.random(0, 1).toFixed(2);
    headline[0].appendChild(element);
    elements.push(element);
    });

    window.addEventListener('scroll', function (event) {
    var scrollIndicator = document.getElementsByClassName('scroll-indicator');
    var scrollIndicatorLine = document.getElementsByClassName('scroll-indicator__line');
    topDistance = window.pageYOffset;
    movement = topDistance*2;

    fadeOut(scrollIndicator[0], topDistance, 150);
    tweenHeight(scrollIndicatorLine[0], topDistance, 100, 25);

    elements.forEach(function(element) {
        movement = -(topDistance * element.dataset.speed);
        move(element, movement);
        fadeOut(element, topDistance, tweenDistance);
        });
    });


    // popup Open
    window.fnPopOpen = function (name) {
        $(`.shadow.popup, #popup, #popup .${name}`).fadeIn().stop().animate({opacity: 1}, 500);
    }
    // 팝업 닫기 popup close
    $('.shadow.popup, #popup').click(function () {
        $('.shadow.popup, #popup, #popup img').fadeOut().animate({'opacity': 0}, 1000);
    });


});
