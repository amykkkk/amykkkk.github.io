$(document).ready(function () {

    /**사이트 작업을 완료하신 후에는 꼭 $(window).load(function()이나 $(window).resize(function () 안의 내용을 하나로 묶어서 정리해 주세요. load나 resize는 한번만 써줘야 합니다. 묶으시면서 각각의 스크립트를 주석으로 구분해서 정리해주세요.**/


    /******************** common s ********************/
    $('.wow').addClass('animated');
        // wow
    new WOW().init();

    // faq 게시판 슬라이드
    $('table.faq .list_tit').parent().next().addClass('asw_td').hide();
    $('table.faq .list_tit').parent().next().children().addClass('asw_div');
    $('table.faq .list_tit').click(function () {
        $(this).parent().next('.asw_td').slideToggle(1);
    });

    $(window).resize(function () {
        var thNone = $('.non_mobile').length;
        if ($(window).width() <= 1200) {
            // td 동적 colspan
            $("table .empty_list_td").attr("colspan", $("table th").length - thNone);
        } else {
            $("table .empty_list_td").attr("colspan", $("table th").length);
        }
    }).resize();


    // 부드럽게 스크롤
    $('.top_btn').click('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });


    /* sub lnb s */

    // 현재 on 메뉴명 생성
    var menu_tit = $('.lnb_menu li.on a span').text();
    $(".lnb_menu").prepend("<p class='lnb_title'><span>" + menu_tit + "</span></p>");

    $(document).on('click', '.lnb_menu .lnb_title', function (e) {
        //$(this).attr({'href':'#none'});
        $('.lnb_menu ul').slideDown();
        $(this).addClass('add');
        $(".lnb_menu .more_btn").addClass('more_add');
    });

    $(document).on('click', '.lnb_menu .lnb_title.add', function (e) {
        e.preventDefault();
        $('.lnb_menu ul').slideUp();
        $(this).removeClass('add');
        $(".lnb_menu .more_btn").removeClass('more_add');
    });

    /* sub lnb e */


    /* flicking */
    for(i=0; i<$('.flicking').length; i++){
        var flicking = $('.flicking').eq(i); // 각 flick
        var flickNumber = 'flick' + i; // flick의 개별 넘버

       flicking.addClass(flickNumber); // flick에 개별클래스 부여
        
        var flickingWidth = flicking.data('flicking-width'); // data-flicking-width값(flick되는 가로길이)

       flicking.each(function (index, element) {
            flickingWidth = $(this).data('flicking-width');
            if(!flickingWidth) {flickingWidth = 900;} // data-flicking-width값 미설정시 900

            $(this).css('min-width' , flickingWidth); // .flicking
            $(this).wrap('<div id="f_wrapper_' + index + '" class="f_wrapper"></div>').wrap('<div class="f_wrapper_inner"></div>').wrap('<div class="f_scroller"></div>').before('<p class="touch">터치해서 좌우로 움직이세요</p>');
        });
    }
          
    $(window).resize(function(){
        var windowWidth = $(window).width();

        for(i=0; i<$('.flicking').length; i++){
            flickNumber = 'flick' + i;
            flickingWidth = $('.' + flickNumber).data('flicking-width'); //각 flick의 flicking-width
            if(!flickingWidth) {flickingWidth = 900;} // data-flicking-width값 미설정시 900


            if(windowWidth < flickingWidth) {
                $('.' + flickNumber).prev().addClass('active'); // .touch 보임
            } else {
                $('.' + flickNumber).prev().removeClass('active'); // .touch 숨김
            }
        }
    });




    /******************** common e ********************/


    //메인 첫 로드 시 이미지 겹침현상 - 첫번째 비쥬얼만 보이도록
    $("#main_vis .vis .vis_bg").hide();
    $("#main_vis .vis1").children(".vis_bg").show();

    $(window).on('load', function () {
        $("#main_vis .vis .vis_bg").show();
    });




    //faq 자주 묻는 질문 아코디언    
    $('.faq .faq_q').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).parent().toggleClass('on');
        $(this).parent().siblings('.faq_box').children('.faq_a').slideUp();
        $(this).parent().parent().parent().siblings('.faq .sec').children('.faq_wrap').children('.faq_box').children('.faq_a').slideUp();
    });
    //faq2
    $('.faq2 .faq_box').click(function () {
        $(this).children().next('.faq_a').slideToggle();
        $(this).toggleClass('on'); $(this).siblings('.faq_box').children('.faq_a').slideUp();
        $(this).parent().parent().siblings('.faq2 .sec').children('.faq_wrap').children('.faq_box').children('.faq_a').slideUp();
        
        if($('.faq_box').hasClass('on')){
            $('.faq_box').removeClass('on');
            $(this).toggleClass('on');
        } 
    });


    //메인 B로고 SVG
    (function($){
    var pathes = $('#XignifyLogo').find('path');
    pathes.each(function( i, path ) {
        var total_length = path.getTotalLength(); // 1번 부분
 
        path.style.strokeDasharray = total_length + " " + total_length; // 2번 부분
        path.style.strokeDashoffset = total_length; // 3번 부분
 
        // 4번 부분
                    var myTimer = setTimeout(function() {

                        $(path).each(function(){
                               $(this).animate({
                                    "strokeDashoffset" : 0
                                }, 1000); 
                        });
                        }, 700);
                });

            })(jQuery);
    

        // .img_auto_ratio S
        // 반응형에서 가로 넓이에 따라 이미지를 감싸는 영역이 지정 비율대로 축소되고
        // 영역 내의 이미지가 이미지를 감싼 영역에서 잘려보이게 나옴
        // ex) <div class="img_auto_ratio" data-ratio="16:9" data-img-src="이미지주소" data-img-alt="이미지설명"></div>
        // function resizeImgAuto(){
        //     var imgAutoRatio = document.querySelectorAll('.img_auto_ratio');

        //     for(i=0; i<imgAutoRatio.length; i++){
        //         var dataSrc = imgAutoRatio[i].getAttribute('data-img-src'); // 이미지주소
        //             dataAlt = imgAutoRatio[i].getAttribute('data-img-alt'); // 이미지alt
        //             dataRatio = imgAutoRatio[i].getAttribute('data-ratio');
        //             dataRatio = dataRatio.split(':');
        //             imgWrapRatio = dataRatio[1]/dataRatio[0]; // 이미지영역의 비율값

                
        //         var createImg = '<img src="'+ dataSrc +'" alt="'+ dataAlt +'">'; // 생성될 img
        //         imgAutoRatio[i].innerHTML = createImg;

        //         var img = imgAutoRatio[i].children[0]; // 생성된 img
        //             imgWidth = img.naturalWidth; // 생성된 img 원본 넓이
        //             imgHeight = img.naturalHeight; // 생성된 img 원본 길이
        //             imgRatio = imgHeight/imgWidth; // 생성된 img 원본 비율

        //             if(imgWrapRatio > imgRatio){ // 영역보다 가로가 긴 이미지
        //                 img.style.width = 'auto';
        //                 img.style.height = '100%';
        //             } else { 
        //                 img.style.width = '100%';
        //                 img.style.height = 'auto';
        //             }

        //         var imgAutoRatioWidth = parseInt(window.getComputedStyle(imgAutoRatio[i]).getPropertyValue("width")); //imgAutoRatio의 넓이
        //             imgAutoRatioBorder = parseInt(window.getComputedStyle(imgAutoRatio[i]).getPropertyValue("border")) //imgAutoRatio의 border값

        //             imgAutoRatio[i].style.height = 0; // height를 0으로 설정하고
                    
        //             // padding으로 높이 잡음
        //             if(imgWrapRatio === 1){ // 영역비율 1:1 일 때
        //                 imgAutoRatio[i].style.paddingBottom = '100%';
        //             } else{
        //                 imgAutoRatio[i].style.paddingBottom = imgWrapRatio*100 + '%';
        //             }
                    
        //             if(imgAutoRatioBorder){ // imgAutoRatio에 border가 있으면
        //                 var calcImgRatio = 'calc('+imgWrapRatio*100+ '% - '+imgAutoRatioBorder*2 +'px)'; // border값을 뺀 값으로 설정
        //                 imgAutoRatio[i].style.paddingBottom = calcImgRatio;
        //             }
        //     }
        // }

        // window.onresize = function(event){
        //     resizeImgAuto();
        // }
        
        //     // .img_auto_ratio 의 기본 css
        // styleBuff = '';
        // styleBuff += '<style>';
        // styleBuff += '	.img_auto_ratio {position: relative; width: 100%; height: auto;  overflow: hidden; box-sizing: border-box;}';
        // styleBuff += '	.img_auto_ratio img {position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}';
        // styleBuff += '</style>';

        // $(styleBuff).appendTo( "head" );

        //     //페이지 처음 들어갔을 때 resize강제 실행
        //     window.onload = function () { 
        //         $(window).trigger('resize');
        //     }

        // .img_auto_ratio E



        // .print_youtube S
        // 이미지에 print_youtube 클래스를 넣으면 자동으로 마크업 생성, 생성된 영역을 클릭하면 유튜브영상이 자동 재생됨
        // <div class="print_youtube" data-img-src="이미지주소" data-img-alt="이미지설명" data-youtube-src="hx034LtweHg(유투브영상주소)">
        // data-img-src값이 없을 경우 유튜브의 썸네일이미지를 가져옴

            // head에 .print_youtube 기본 script 작성
        styleBuff = '';
        styleBuff += '<script>';
        styleBuff += 'function youtubeImgCheck(e) {';
        styleBuff += 'var thumbnail = ["maxresdefault", "mqdefault", "sddefault", "hqdefault", "default"];';
        styleBuff += 'var url = e.attr("src");';
        styleBuff += 'if (e[0].naturalWidth === 120 && e[0].naturalHeight === 90) {';
        styleBuff += 'for (var i = 0, len = thumbnail.length - 1; i < len; i++) {';
        styleBuff += 'if (url.indexOf(thumbnail[i]) > 0) {';
        styleBuff += 'e.attr("src", url.replace(thumbnail[i], thumbnail[i + 1]));';
        styleBuff += 'break;';
        styleBuff += '}}}}';
        styleBuff += '</script>';
        $(styleBuff).appendTo( "head" );


        var printYoutube = $('.print_youtube');

        var KEY_VIDEO_WRAP = '<div class="prt_video_wrap"></div>';
        var KEY_VIDEO = '<div class="prt_video"></div>';
        var KEY_VIDEO_VIEW = '<div class="prt_video_view"></div>';
        var KEY_BTN_PLAY = '<div class="prt_btn_play"></div>';
        
        printYoutube.wrap(KEY_VIDEO_WRAP).wrap(KEY_VIDEO).after(KEY_BTN_PLAY).after(KEY_VIDEO_VIEW);
        
        for(i=0; i<printYoutube.length; i++){
            var printYoutubeNumber = 'print_youtube'+i;
        
            printYoutube.eq(i).addClass(printYoutubeNumber);
        
            var printYoutubeNumber = $('.'+printYoutubeNumber); // 각 print_youtube 클래스
                printVideo = printYoutubeNumber.parent();
                printVideoView = printYoutubeNumber.next('.prt_video_view'); // iframe 생성 영역
                printBtnPlay = printYoutubeNumber.next().next('.prt_btn_play'); // 재생버튼
        
            var thumbImgSrc = printYoutubeNumber.data('img-src'); // 썸네일 이미지 주소
                thumbImgAlt = printYoutubeNumber.data('img-alt'); // 썸네일 이미지 설명값
                youtubeSrc = printYoutubeNumber.data('youtube-src'); // 영상 주소 (필수속성)
        
                
            // 영상 재생 전 보이는 이미지를 그림
            if(!thumbImgSrc){ // 별도의 썸네일 이미지가 없을 때
                // printYoutubeNumber.append('<img src="https://img.youtube.com/vi/' + youtubeSrc + '/maxresdefault.jpg" alt="' + thumbImgAlt + '" onload="youtubeImgCheck($(this))">');  
                printYoutubeNumber.append('<div class="img_auto_ratio" data-ratio="16:9" data-img-src="https://img.youtube.com/vi/' + youtubeSrc + '/maxresdefault.jpg" data-img-alt="' + thumbImgAlt + '" onload="youtubeImgCheck($(this))"></div>');
                   
            } else { // 썸네일 이미지가 있을 때
                // printYoutubeNumber.append('<img src="' + thumbImgSrc + '" alt="' + thumbImgAlt + '">');
                printYoutubeNumber.append('<div class="img_auto_ratio" data-ratio="16:9" data-img-src="' + thumbImgSrc + '" data-img-alt="' + thumbImgAlt + '" ></div>');
            }
        
            function playYoutube(){
                printVideoView.css('display', 'block');
                printBtnPlay.css('display', 'none');
        
                // 영상출력 후 반복재생
                printVideoView.append('<iframe src="https://www.youtube.com/embed/'+youtubeSrc+'?autoplay=1&mute=1&showinfor=0&disablekb=0&loop=1&playlist='+ youtubeSrc + '" title="YouTube video player" frameborder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            }
        
            // PC & mobile 분기
            var filter = "win16|win32|win64|macintel|mac|"; // PC일 경우 가능한 값
            if( navigator.platform) {
                if( filter.indexOf(navigator.platform.toLowerCase())<0 ) { //모바일
        
                    playYoutube();
                } else { //PC
        
                    printVideo.click(function(){
                        printYoutube = $(this).children();
                        printVideoView = printYoutube.next('.prt_video_view');
                        printBtnPlay = printYoutube.next().next('.prt_btn_play');
        
                        youtubeWidth = printYoutube.data('youtube-width'); // 영상 넓이
                        youtubeHeight = printYoutube.data('youtube-height'); // 영상 길이
                        youtubeSrc = printYoutube.data('youtube-src'); // 영상 주소
        
                        playYoutube();
                    });
                }
            }
        
        }
        // .print_youtube E
    
    });
