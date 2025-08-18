
//MAIN
var main = {
    init : function(){
        this.$mainSlide = $(".main_slide");
        this.$mainVisualSlickSlide = this.$mainSlide.find(".main_slick_slide");
        this.$mainVisualSlickButtonBox = this.$mainSlide.find(".slick-button-box");
        this.$mainVisualSlickThumbnail = this.$mainSlide.find(".main_thumb");
        this.$serviceVisualButton = $("button[id^=serviceVisualBtn]");
        this.$portpolio = $("i[id^=portpolio]");

        this.render.init();

        this.bind();

        var cookieData = document.cookie;
        if(cookieData.indexOf("privacyPolicy=Y") < 0){
            $(".Pstyle").show();
        }else{
            $(".Pstyle").hide();
        }
    },
    bind : function() {
        this.$mainVisualSlickButtonBox.find(".btn_control").on('click', function(){
            var $this = $(this);
            var paused = "paused";

            if ($this.hasClass(paused)){
                main.$mainVisualSlickSlide.slick('slickPlay');
                $this.removeClass(paused);
            } else {
                main.$mainVisualSlickSlide.slick('slickPause');
                $this.addClass(paused);
            }
        });


        this.$serviceVisualButton.on("click", function() {
            main.render.serviceVisual($(this).closest("li").index());
        });

        this.$portpolio.on("click", function() {
            main.action.portpolio($(this).data("seq"));
        });
    },
    render : {
        init : function() {
            main.render.mainSlick();

            // 메인 비주얼 영역 slick 등 스크립트 처리 후 노출
            $(".visual_wrap").show();
        },
        mainSlick : function(){
            var option = {
                arrows: false,
                dots : true,
                customPaging : function(slider, i) {
                    return '<div>'+ (i < 10 ? '0' + (i+1) : (i+1)) +'</div>';
                },
                autoplay: true,
                autoplaySpeed: 5000,
                dotsClass : "slick-num",
                prevArrow: ".slick-prev",
                nextArrow: ".slick-next",
                infinite : true,
                asNavFor: '.main_thumb',
                fade:true,
            }

            main.$mainVisualSlickThumbnail.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.main_slick_slide',
                dots: false,
                focusOnSelect: true
            });

            main.$mainVisualSlickSlide.slick(option);
        },
        serviceVisual : function(seq) {
            $("div#serviceVisualBox").find("img:eq(" + seq + ")").show().siblings("img").hide();
        }
    },
};

$(function(){
    main.init();
});

//MAIN_VIS
$(window).resize(function () {
if ($(window).width() >= 500) {

    var scrollToggleClass = function(el){
        var $el = $(el),
            $win = $(window);
        
        var data = {
            className: 'fixed',     //fixed 되는 시점의 추가되는 클래스명
            fixedStart: 370,        //fixed 되는 scrollTop 
            fixedEnd: 350,          //fixedEnd 되고 scroll 따라가는 scrollTop
        }

        var events = {
            init: function(){
                this.bindEvent();
            },
            bindEvent: function(){
                $win.on('scroll', this.detectScroll);
            },
            detectScroll: function(){
                var scrollTop = $win.scrollTop(),
                    fixedHeight = data.fixedStart + data.fixedEnd,
                    isFixed = scrollTop >= data.fixedStart,
                    isFixedEnd = scrollTop >= fixedHeight;

                if(isFixed){
                    $el.addClass(data.className);
                    var gapY = isFixedEnd ? fixedHeight - scrollTop : 0;
                    $el.find('.media_box').css('transform', 'translateY('+ gapY +'px)');
                }else{
                    $el.removeClass(data.className);
                    $el.find('.media_box').css('transform', 'translateY(0)');
                }
            }
        }

        events.init();
    }

window.addEventListener('DOMContentLoaded', function(){
scrollToggleClass('.mov_visual');
});

$('.counter').counterUp({
    delay: 20,
    time: 1000
});
}
}).resize();


//sec2
var detailView = function(){
    var $container = $('.port_view'),
        $items = $container.find('li'),
        $current = $container.find('.count .current'),
        $navPrev = $container.find('.c .prev'),
        $navNext = $container.find('.navigator .next');

    var data = {
        currentIndex: 0,        //시작 index 0 ~ 
        loop: true,             //반복 Boolean
        total: $items.length
    }

    var events = {
        init: function(){
            this.set();
            this.bindEvent();
        },
        set: function(){
            this.changeView();
        },
        bindEvent: function(){
            $items.on('click', this.handleClickItem);
            $navPrev.on('click', {dir: -1}, this.handleClickNav);
            $navNext.on('click', {dir: 1}, this.handleClickNav);
        },
        handleClickItem: function(){
            var $handle = $(this);
            data.currentIndex = $handle.index();

            events.changeView();
        },
        handleClickNav: function(e){
            var dir = e.data.dir,
                nextIndex = data.currentIndex + dir;

            if(!data.loop && (nextIndex == data.total || nextIndex < 0)) return false;
            nextIndex = nextIndex == data.total ? 0 : nextIndex < 0 ? data.total - 1 : nextIndex;

            data.currentIndex = nextIndex;
            events.changeView();
        },
        changeView: function(){
            $items.eq(data.currentIndex).addClass('active')
            .siblings().removeClass('active');
            
            events.syncCurrentIndex();
        },
        syncCurrentIndex: function(){
            var activeIndex = data.currentIndex + 1,
                calcIndex = String(activeIndex).length < 2 ? '0'+activeIndex : activeIndex;

            $current.text(calcIndex);
        }
    }

    events.init();
}
window.addEventListener('DOMContentLoaded', detailView);


// slogan ani
$(window).scroll(function(){
    winScr = $(window).scrollTop(); // 스크롤위치값
    Slogan = $(".main_key").offset().top;

        if(winScr + 1 > Slogan-350){
            $(".main_key").addClass("on");
        }
});



//
$(document).ready(function () {

    const content = "지칠 줄 모르는 열정으로 세계와 미래를 향해 힘찬 전진 하겠습니다."
    const text = document.querySelector(".text")
    let index = 0;
    
    // function sleep(delay){ 
    //     const start = new Date().getTime(); 
    //     while (new Date().getTime() < start + delay); 
    // }
    
    function typing(){
        text.textContent += content[index++];
        if(index > content.length){
            text.textContent = ""
            index = 0;
            // sleep(3000);
        }
    }
    setInterval(typing, 200)


});



