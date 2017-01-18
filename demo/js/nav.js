

$(function(){
	$(".menu a:nth-child(1) i").css("background","url(img/images/nav-icon.png)");
	$(".menu a:nth-child(2) i").css({"background":"url(img/images/nav-icon.png) -25px"});
	$(".menu a:nth-child(3) i").css({"background":"url(img/images/nav-icon.png) -50px"});
	$(".menu a:nth-child(4) i").css({"background":"url(img/images/nav-icon.png) -75px"});
	$(".menu a:nth-child(5) i").css({"background":"url(img/images/nav-icon.png) -100px"});
	$(".menu a:nth-child(6) i").css({"background":"url(img/images/nav-icon.png) -120px"});
	$(".menu a:nth-child(7) i").css({"background":"url(img/images/nav-icon.png) -145px"});
	$(".menu a:nth-child(8) i").css({"background":"url(img/images/nav-icon.png) -170px"});
	$(".menu a:nth-child(9) i").css({"background":"url(img/images/nav-icon.png) -193px"});
	$(".menu a:nth-child(10) i").css({"background":"url(img/images/nav-icon.png) -217px"});
	$(".menu a:nth-child(11) i").css({"background":"url(img/images/nav-icon.png) -240px"});
	//控制menu隐藏||显示
	$(".nav").click(function(){
		if($(".menu").css("display")=="block"){
			$(".menu").css("display","none");
		}else{
			$(".menu").css("display","block");
		}
	});
	//menu 的 onmouseover事件
	var _list=document.getElementById("menu").children;
	for(var i=0;i<_list.length;i++){
		$(_list[i]).mouseenter(function(){
			$(this).children("span").css("display","block");
			$(this).css({"color":"#007f4d","border":"1px solid #bbb","border-right":"none","height":"39.8px","line-height":"39.8px","background":"#fff"});
			$(this).children("i").stop();
			$(this).children("i").animate({
				"margin-left":"30px"
			},300);
			
			
			$("#menu a").not(this).children("span").css("display","none");
			$("#menu a").not(this).css({"color":"#444","border":"none","height":"41.8px","line-height":"41.8px","background":"transparent"});
			$("#menu a").not(this).children("i").stop();
			$("#menu a").not(this).children("i").animate({
				"margin-left":"19px"
			},300);
		});
		//menu 的 mouseleave事件
		$(_list[i]).mouseleave(function(){
			$("#menu a").children("span").css("display","none");
			$("#menu a").css({"color":"#444","border":"none","height":"41.8px","line-height":"41.8px","background":"transparent"});
			$("#menu a").children("i").stop();
			$("#menu a").children("i").animate({
				"margin-left":"19px"
			},300);
		});
	}
	
	//楼梯导航背景图
	$(".floor-guide a:nth-child(1) i").css("background","url(img/images/nav-icon.png)");
	$(".floor-guide a:nth-child(2) i").css({"background":"url(img/images/nav-icon.png) -25px"});
	$(".floor-guide a:nth-child(3) i").css({"background":"url(img/images/nav-icon.png) -145px"});
	$(".floor-guide a:nth-child(4) i").css({"background":"url(img/images/nav-icon.png) -100px"});
	$(".floor-guide a:nth-child(5) i").css({"background":"url(img/images/nav-icon.png) -50px"});
	$(".floor-guide a:nth-child(6) i").css({"background":"url(img/images/nav-icon.png) -75px"});
	$(".floor-guide a:nth-child(7) i").css({"background":"url(img/images/nav-icon.png) -193px"});
	$(".floor-guide a:nth-child(8) i").css({"background":"url(img/images/nav-icon.png) -120px"});
	$(".floor-guide a:nth-child(9) i").css({"background":"url(img/images/nav-icon.png) -217px"});
	$(".floor-guide a:nth-child(10) i").css({"background":"url(img/images/nav-icon.png) -170px"});
	$(".floor-guide a:nth-child(11) i").css({"background":"url(img/images/nav-icon.png) -240px"});
	
	$(".floor-guide a").mouseenter(function(){
		$(this).css({"background":"#008842"});
		$(this).children("p").css({"color":"#fff","display":"block"});
		$(this).children("i").css({"display":"none"});

		$(".floor-guide a").not(this).css({"background":"transparent"});
		$(".floor-guide a").not(this).children("p").css({"display":"none"});
		$(".floor-guide a").not(this).children("i").css({"display":"block"});
	});
	
	var st=document.documentElement.scrollTop||document.body.scrollTop;
	window.onscroll=function(){
		
		
		
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>=848){
			$(".floor-guide").css({"display":"block"});
		}else{
			$(".floor-guide").css({"display":"none"});
		}
		
		if(st>100){
			$(".logo_t").css({"display":"block"});
		}else{
			$(".logo_t").css({"display":"none"});
		}
		
		function move(n){
			$(".floor-guide a:nth-child("+n+")").css({"background":"#008842"});
			$(".floor-guide a:nth-child("+n+")").children("p").css({"color":"#fff","display":"block"});
			$(".floor-guide a:nth-child("+n+")").children("i").css({"display":"none"});
		
			$(".floor-guide a").not(".floor-guide a:nth-child("+n+")").css({"background":"transparent"});
			$(".floor-guide a").not(".floor-guide a:nth-child("+n+")").children("p").css({"display":"none"});
			$(".floor-guide a").not(".floor-guide a:nth-child("+n+")").children("i").css({"display":"block"});
		}
		if(st>838&&st<920){
			move(1);
		}else if(st>1370&&st<1550){
			move(2);
		}else if(st>1892&&st<2000){
			move(3);
		}else if(st>2400&&st<2600){
			move(4);
		}else if(st>2950&&st<3100){
			move(5);
		}else if(st>3458&&st<3600){
			move(6);
		}else if(st>4000&&st<4150){
			move(7);
		}else if(st>4500&&st<4650){
			move(8);
		}else if(st>4950&&st<5150){
			move(9);
		}else if(st>5450&&st<5800){
			move(10);
		}
		
		
		
		function scroll(st){
			$("body,html").stop();
			$("body,html").animate({
				scrollTop:st
			},500);
		}
		for(var i=1;i<11;i++){
			$(".floor-guide a:nth-child("+i+")").click(function(){
				if(this.id=="one"){
					st=850;
					scroll(st);
				}else if(this.id=="two"){
					st=1370;
					scroll(st);
				}else if(this.id=="three"){
					st=1892;
					scroll(st);
				}else if(this.id=="four"){
					st=2400;
					scroll(st);
				}else if(this.id=="five"){
					st=2950;
					scroll(st);
				}else if(this.id=="six"){
					st=3458;
					scroll(st);
				}else if(this.id=="seven"){
					st=4000;
					scroll(st);
				}else if(this.id=="eight"){
					st=4500;
					scroll(st);
				}else if(this.id=="nine"){
					st=4950;
					scroll(st);
				}else if(this.id=="ten"){
					st=5550;
					scroll(st);
				}
			});
		}
		
		
		
		//右下角：客服和返回顶部
		if(st>800){
			$(".sidebar .goTop").css({"display":"block"});
		}else{
			$(".sidebar .goTop").css({"display":"none"});
		}
		
		$(".sidebar .goTop").mouseenter(function(){
			$(".sidebar .goTop").css({"background":"url(img/images/sidebar.png) no-repeat top right"});
		});
		$(".sidebar .goTop").mouseleave(function(){
			$(".sidebar .goTop").css({"background":"url(img/images/sidebar.png) no-repeat top left"});
		});
		$(".sidebar .service").mouseenter(function(){
			$(".sidebar .service").css({"background":"url(img/images/sidebar.png) no-repeat right bottom"});
		});
		$(".sidebar .service").mouseleave(function(){
			$(".sidebar .service").css({"background":"url(img/images/sidebar.png) no-repeat left bottom"});
		});
		
		$(".sidebar .goTop").click(function(){
			$("body,html").stop();
			$("body,html").animate({
				scrollTop:0
			},500);
		});
		
		
		
	}
})
