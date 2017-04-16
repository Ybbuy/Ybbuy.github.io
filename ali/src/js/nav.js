//'use strict'
var btn = document.querySelectorAll(".btn");
var contents = document.querySelectorAll(".nav-list");

var t =new TabView(btn,contents);

var libtn = document.querySelectorAll(".libtn");
var proList = document.querySelectorAll(".product-contant");
var p = new TabView(libtn,proList);


var navbg = document.querySelector(".navbg");
var nbtn = document.querySelectorAll('.nbtn');
navbg.onmouseleave  = function(){
	for (var i=0;i<btn.length;i++) {
		contents[i].classList.remove('disBlock');
		btn[i].classList.remove('active');
	}
}
for (let i=0;i<nbtn.length;i++) {
	nbtn[i].onmouseover  = function(){
		for (var j=0;j<btn.length;j++) {
			contents[j].classList.remove('disBlock');
			btn[j].classList.remove('active');
		}
	}
	
}

var selectSix = document.querySelectorAll(".six-btn");
var contentSix = document.querySelectorAll(".six-contents");

for(let i=0;i<selectSix.length;i++){
	selectSix[i].onclick = function(){
		for(var j=0;j<selectSix.length;j++){
			selectSix[j].classList.remove('selectBtn');
			contentSix[j].classList.remove('disBlock');
		}
		selectSix[i].classList.add('selectBtn');
		contentSix[i].classList.add('disBlock')
	}
}

var picLi = document.querySelectorAll(".picLi");
var img1 = document.querySelectorAll(".pic1");
var img2 = document.querySelectorAll(".pic2");
picLi.onmouseover = function(){
	img1.classList.add("disNone");
	img2.classList.add("disBlock");
}
picLi.onmouseout = function(){
	img2.classList.remove("disBlock");
	img1.classList.remove("disNone");
}
for (let i=0;i<picLi.length;i++) {
	picLi[i].onmouseover = function(){
		img1[i].classList.add("disNone");
		img2[i].classList.add("disBlock");
	}
	picLi[i].onmouseout = function(){
		img2[i].classList.remove("disBlock");
		img1[i].classList.remove("disNone");
	}
}

//选项卡函数封装
function TabView(btns,contents){
	var _this = this;
	this.btns = btns;
	this.contents = contents;
	this.len = this.btns.length;
	for(var i=0;i<this.len;i++){
		this.btns[i].index = i;
		this.btns[i].onmouseover = function(){
			_this.tab(this);
		};
	}
}
TabView.prototype.tab = function(obj){
	var _index = obj.index;
	for(var j=0;j<this.len;j++){
		this.btns[j].classList.remove('active');
		this.contents[j].classList.remove('disBlock');
	}
	obj.classList.add('active');
	this.contents[_index].classList.add('disBlock');
}


