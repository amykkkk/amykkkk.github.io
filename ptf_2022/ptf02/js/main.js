$(document).ready(function(){
    jQuery(function(){
        // 상단 비주얼 텍스트 깜빡임 효과
        var visualText = ["SHARE", "MAKE", "PURSUE"];
        var textIndex = 0;
        $(function() {
            setInterval(function() {
                $('.main-title .fc-point').removeClass('ani').animate({opacity: 0}, function() {
                $(this).addClass('ani').text(visualText[textIndex++]).animate({opacity: 1});
                if (textIndex === visualText.length)
                    textIndex = 0
                });
            }, 2200);
        });

    });
    
    

        // scrollTrigger
		var mtl = gsap.timeline({
			scrollTrigger: {
				trigger: '.main-slider',
				start: 'top 44px',
				end: 'bottom 120px',
				pin: true,
				scrub: true,
				markers: false
			}
		})
        
        // video-area
		mtl.to('.video-area .bar1', {height:'40%',  duration: .5, ease:'power3'}, "<")
			.to('.video-area .bar2', {height:'40%', duration: .5, ease:'power3'}, "<")
			.to('.video-area .bar3', {width:'4vw',  duration: .5, ease:'power3'}, "<")
			.to('.video-area .bar4', {scaleX:0,     duration: .5, ease:'power3'}, "<")
			.to('.video-area .bar5', {width:'4vw',  duration: .5, ease:'power3'}, "<")
			.to('.video-area .bar6', {scaleY:0,     duration: .5, ease:'power3'}, "<")
			.to('.video-area .bar7', {scaleY:'0%',  duration: .5, ease:'power3'}, "<")
			
		gsap.set('.visual .text-area .in', {yPercent: 100});
		gsap.to('.visual .text-area .in', {
			scrollTrigger: {
				trigger: '.visual .text-area',
				start: 'top bottom',
				end: 'top bottom',
				pin:false,
				scrub: true,
				markers: false
			},
			// yPercent:0,
			duration: 3,
			ease: 'none',
			/*onUpdate: function() {
				var ratio = 100;
				var per = (this.progress() * ratio) > 100 ? 100 : (this.progress() * ratio);
//				 console.log(per, this.progress());
				$('.visual .text-area .in').css('transform', 'translate(0, '+ (100 - per) +'%)')
                
            }*/
		});
                
		var videoTg2 = ($('.visual .text-area').outerHeight() + $('.main-slider').outerHeight() );
		var videoTg = ((($('.visual .text-area').outerHeight() + $('.visual .text-area').offset().top - $('.video-area').offset().top) / $('.video-area').outerHeight()) + 1) * 100;
		gsap.to('.video-area', {
			scrollTrigger: {
				trigger: '.video-area',
				start: 'top 130px',
				// end: '330% 120px',
				// end: videoTg+'% 120px',
				end: () => '+='+(videoTg2),
				pin:true,
				scrub: true,
				markers: false
			},
			duration: 3,
			ease: 'none'
            })
    
    //text-area 위로 올리기
     var scrTop = 0;
        scrFlag = true;
        prevScr = 0;
        crtScr = 0;
    $(window).scroll(function(){
        scrTop = $(window).scrollTop();
        crtScr = $(window).scrollTop();
          
        if(scrFlag && scrTop > $('.visual .main-slider .w-pad-inner').offset().top){
            
            gsap.to('.visual .text-area', {
                onUpdate: function() {
                    var ratio = 100;
                    var per = (this.progress() * ratio) > 100 ? 100 : (this.progress() * ratio);
                    // console.log(per);
                    $('.visual .text-area .in').css('transform', 'translate(0, '+ (100 - per) +'%)')
                }
            });
              
            scrFlag = false;
        } 
        
        prevScr = crtScr;
        
            
    });
    
    
    // swiper-slide2

    var mySwiper = new Swiper('.slide2_box .swiper-slide2', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 20,
        direction: 'horizontal',
        loop: false,
        speed: 1000,
        simulateTouch: true, // touch
        // If we need pagination
        pagination: {
        el: '.slide2_box .swiper-pagination',
        clickable: true,
		type : 'progressbar'
        }, 
        navigation: { // 네비게이션 설정
            nextEl: '.slide2_box .swiper-arrow-wrap .swiper-button-next', // 다음 버튼 클래스명
            prevEl: '.slide2_box .swiper-arrow-wrap .swiper-button-prev', // 이번 버튼 클래스명
        },
        breakpoints: {
       
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
       
    });

});