//bgChange
function animt(clsname,height,total){
	var boxImg = document.getElementsByClassName(clsname);
	var py1,py2,ii,iii,timer1,timer2;
	for(var i=0;i<boxImg.length;i++){
		boxImg[i].index = i;
		boxImg[i].onmouseover = function(){
			var m = this;
			mover(m,height,total)
		}
		boxImg[i].onmouseout = function(){
			var m = this;
			mout(m,height);
		}
	}
	
	function mover(obj,height,total){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			py = parseInt(obj.style.backgroundPositionY)-height;
			if(py < total){
				clearInterval(obj.timer);
			}else{
				obj.style.backgroundPositionY = py + "px";
			}
		},15)
	}
	function mout(obj,height){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			py = parseInt(obj.style.backgroundPositionY)+height;
			if(py > 0){
				clearInterval(obj.timer);
			}else{
				obj.style.backgroundPositionY = py + "px";
			}
		},15)
	}
}

//mouseMove
function mouseMove(eleCls){
	var index_div_pro = [
        {
                sx: 35,
                sy: 0,
                mw: 3,
                mh: 0.5,
                bx: 6.4,
                by: 8.4,
                rx: -0.1
        },
        {
                sx: 20,
                sy: 0,
                mw: 0.3,
                mh: 0.1,
                bx: 6.5,
                by: 7.4,
                rx: -0.1
        },
		{
                sx: 0,
                sy: 0,
                mw: 3,
                mh: 1,
                bx: 8.4,
                by: 10.4,
                rx: -0.6
        }];
	        
        var ePageX = null;
        var ePageY = null;
        
        function getMousePos(expression) {
                if (ePageX == null || ePageY == null) return null;
                var _x = $(expression).position().left;
                _x += ePageX - $(expression).parent().position().left;
                var _y = $(expression).position().top;
                _y += ePageY - $(expression).parent().position().top;
                return {
                        x: _x,
                        y: _y
                }
        };
	        
        var index_xh = setInterval(function () {
            for (var i = 0; i < 3; i++) {
	            var mousepos = getMousePos(eleCls + i);
	        	if (mousepos != null) {
	                var left = parseInt($(eleCls + i).css("left"));
	                var l = left + (index_div_pro[i].sx + index_div_pro[i].mw - (mousepos.x - 100) / index_div_pro[i].bx  - left) * 0.1;
	                var top = parseInt($(eleCls + i).css("top"));
	                var t = top + (index_div_pro[i].sy + index_div_pro[i].mh - (mousepos.y - 100) / index_div_pro[i].by - top) * 0.1;
	                $(eleCls + i).css({
	                    left: l,
	                    top: t
	           		})
	       		}
	        }
		},15);
	
	$(window).mousemove(function (event) {
	        event = event || window.event;
	        ePageX = event.pageX;
	        ePageY = event.pageY;
	});
}
