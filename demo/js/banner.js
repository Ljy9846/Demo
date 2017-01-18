function showOpacity(n){
    var _timer=0;
    var _opacity=0;
    var _h=600;
    var _w=2320;
    var _top=-50;
    var _left=-200;
    var _main=document.getElementById("main").children[0];
    var _gu=document.getElementById("gu").children[0];
    function show(){
        window.clearTimeout(_timer);
        _opacity+=0.1;
        _h-=2;
        _w-=8;
        _top+=1;
        _left+=4;
        _main.style.width=_w+"px";
        _main.style.height=_h+"px";
        _main.style.top=_top+"px";
        _main.style.left=_left+"px";
        if(_h>500||_w>1920){
            _timer=window.setTimeout(show,30);
        }else{
            var _index=parseInt(_main.src.match(/\d+\.jpg/g)[0]);
            var _index2=parseInt(_gu.src.match(/\d+a\.jpg/g)[0]);
            if(_index>=n) {
                _index=0;
            }
            if(_index2>=n) {
                _index2=0;
            }
            _timer=window.setTimeout(function(){
                _h=600;
                _w=2320;
                _top=-50;
                _left=-200;
                $(function(){
                	$("."+(_index+1)).css("color","#5aaa16");
                	$("#pic span").not("."+(_index+1)).css("color","#b5b2a8");
                });
                _main.src = "img/images/_0" + (_index + 1) + ".jpg";
                _gu.src = "img/images/_0" + (_index + 1) + "a.jpg";
                show();
            },2000);
        }
    }
    show();
    function boundEvent(){
        var _list=document.getElementById("pic").children;
        for(var i=0;i<_list.length;i++){
            _list[i].onmouseover=function(){
            	var _self=this;
                window.clearTimeout(_timer);
                $(function(){
                	$(_self).css("color","#5aaa16");
                	$("#pic span").not(_self).css("color","#b5b2a8");
                })
                _main.src="img/images/_0" + this.className + ".jpg";
                _gu.src = "img/images/_0" + this.className + "a.jpg";
                _h=600;
                _w=2320;
                _top=-50;
                _left=-200;
                show();
            }
        }
    }
    boundEvent();
    function btnArrow(){
    	var _arrow=document.getElementById("arrow");
    	var _arrow1=document.getElementById("arrow1");
    	var _list=document.getElementById("pic").children;
    	_arrow.onclick=function(){
    		window.clearTimeout(_timer);
			var _num=_main.src.match(/\d+\.jpg/g)[0].replace(".jpg","").replace("0","");
            _main.src="img/images/_0" + ((Number(_num)+1)==9?1:(Number(_num)+1)) + ".jpg";
            _gu.src = "img/images/_0" + ((Number(_num)+1)==9?1:(Number(_num)+1)) + "a.jpg";
            $(function(){
            	$(_list[_num==8?0:_num]).css("color","#5aaa16");
            	$("#pic span").not(_list[_num==8?0:_num]).css("color","#b5b2a8");
            });
            _h=600;
            _w=2320;
            _top=-50;
            _left=-200;
            show();
    	}
    	_arrow1.onclick=function(){
    		window.clearTimeout(_timer);
			var _num=_main.src.match(/\d+\.jpg/g)[0].replace(".jpg","").replace("0","");
            _main.src="img/images/_0" + ((Number(_num)-1)==0?8:(Number(_num)-1)) + ".jpg";
            _gu.src = "img/images/_0" + ((Number(_num)-1)==0?8:(Number(_num)-1)) + "a.jpg";
            $(function(){
            	$(_list[Number(_num)-2==-1?7:Number(_num)-2]).css("color","#5aaa16");
            	$("#pic span").not(_list[Number(_num)-2==-1?7:Number(_num)-2]).css("color","#b5b2a8");
            	console.log(_num);
            });
            _h=600;
            _w=2320;
            _top=-50;
            _left=-200;
            show();
    	}
    }
    btnArrow();
}

function createPic(n){
   	var _pic= document.getElementById("pic");
   	var _num=1;
   	for(var i=0;i<n;i++){
   		var _span=document.createElement("span");
   		_span.style.color="#b5b2a8";
   		_span.innerHTML="●";
   		_span.className=_num;
   		_span.style.fontSize="20px";
   		_pic.appendChild(_span);
   		_num++;
   	}
   	document.getElementById("pic").children[0].style.color="#5aaa16";
   	//showOpacity(n);
}
window.onload=function(){
    createPic(8);
}