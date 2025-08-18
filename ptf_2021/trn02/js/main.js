$(function(){
	//풀 페이지
	$('#full-wrap').fullpage({
		//options here
		anchors:['s01', 's02', 's03', 's04', 's05'],
		autoScrolling:true,
		scrollHorizontally: true,
        afterLoad: function(origin,destination){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
			$(".menu-right li").eq(destination.index).addClass("on").siblings().removeClass("on");
        }
	});
	//
	$(".xi-bars").on("click", function(){
		$(".popup").addClass("on");
	});

	$(".xi-close").on("click", popUpX)
	function popUpX(){
		$(".popup").removeClass("on");
	}
	// page 2 슬라이드
	$(".slider-wrap>div").slick({
		arrows:false,
		autoplay:true,
	});

	$(".slider-num li").on("click", slideNum)
	function slideNum(){
		var idx=$(this).index();
		$(".slider-wrap>div").slick("slickGoTo", idx);
		$(this).addClass("on").siblings().removeClass("on");
	}


})