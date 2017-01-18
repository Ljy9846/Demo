










$(function(){		
	$(".right img").mouseenter(function(){
		$(this).stop();
		$(this).animate({
			"margin-left":"7px"
		},300);
	});
	$(".right img").mouseleave(function(){
		$(this).animate({
			"margin-left":"0px"
		},300);
	});
	$(".center img").mouseenter(function(){
		$(this).stop();
		$(this).animate({
			"margin-left":"7px"
		},300);
	});
	$(".center img").mouseleave(function(){
		$(this).animate({
			"margin-left":"0px"
		},300);
	});
	
	
	
	//隐藏的logo栏
	//购物车的显示与隐藏
	$(".shopping-cart .shopping-btn a").mouseenter(function(){
		$(".shopping-list").css({"display":"block"});
		$(".shopping-list").animate({
			"opacity":"1"
		},500);
		$(".out_top2 .shopping-list").css({"display":"none"});
	});
	$(".out_top2 .shopping-cart .shopping-btn a").mouseenter(function(){
		$(".out_top2 .shopping-list").css({"display":"block"});
		$(".out_top2 .shopping-list").animate({
			"opacity":"1"
		},500);
	});
	$(".shopping-cart .shopping-list").mouseenter(function(){
		$(".shopping-cart .shopping-list").css({"display":"block"});
		$(".out_top2 .shopping-list").css({"display":"none"});
	});
	$(".out_top2 .shopping-cart .shopping-list").mouseenter(function(){
		$(".shopping-cart .shopping-list").css({"display":"block"});
	});
	
	$(".shopping-cart").mouseleave(function(){
		$(".shopping-cart .shopping-list").css({"display":"none","opacity":"0"});
		//$(".out_top2 .shopping-list").css({"display":"block"});
	});
	
})



