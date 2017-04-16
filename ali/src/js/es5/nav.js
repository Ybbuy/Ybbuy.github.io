"use strict";

//'use strict'
var btn = document.querySelectorAll(".btn");
var contents = document.querySelectorAll(".nav-list");

var t = new TabView(btn, contents);

var libtn = document.querySelectorAll(".libtn");
var proList = document.querySelectorAll(".product-contant");
var p = new TabView(libtn, proList);

var navbg = document.querySelector(".navbg");
var nbtn = document.querySelectorAll('.nbtn');
navbg.onmouseleave = function () {
	for (var i = 0; i < btn.length; i++) {
		contents[i].classList.remove('disBlock');
		btn[i].classList.remove('active');
	}
};
for (var i = 0; i < nbtn.length; i++) {
	nbtn[i].onmouseover = function () {
		for (var j = 0; j < btn.length; j++) {
			contents[j].classList.remove('disBlock');
			btn[j].classList.remove('active');
		}
	};
}

var selectSix = document.querySelectorAll(".six-btn");
var contentSix = document.querySelectorAll(".six-contents");

var _loop = function _loop(_i) {
	selectSix[_i].onclick = function () {
		for (var j = 0; j < selectSix.length; j++) {
			selectSix[j].classList.remove('selectBtn');
			contentSix[j].classList.remove('disBlock');
		}
		selectSix[_i].classList.add('selectBtn');
		contentSix[_i].classList.add('disBlock');
	};
};

for (var _i = 0; _i < selectSix.length; _i++) {
	_loop(_i);
}

var picLi = document.querySelectorAll(".picLi");
var img1 = document.querySelectorAll(".pic1");
var img2 = document.querySelectorAll(".pic2");
picLi.onmouseover = function () {
	img1.classList.add("disNone");
	img2.classList.add("disBlock");
};
picLi.onmouseout = function () {
	img2.classList.remove("disBlock");
	img1.classList.remove("disNone");
};

var _loop2 = function _loop2(_i2) {
	picLi[_i2].onmouseover = function () {
		img1[_i2].classList.add("disNone");
		img2[_i2].classList.add("disBlock");
	};
	picLi[_i2].onmouseout = function () {
		img2[_i2].classList.remove("disBlock");
		img1[_i2].classList.remove("disNone");
	};
};

for (var _i2 = 0; _i2 < picLi.length; _i2++) {
	_loop2(_i2);
}

//选项卡函数封装
function TabView(btns, contents) {
	var _this = this;
	this.btns = btns;
	this.contents = contents;
	this.len = this.btns.length;
	for (var i = 0; i < this.len; i++) {
		this.btns[i].index = i;
		this.btns[i].onmouseover = function () {
			_this.tab(this);
		};
	}
}
TabView.prototype.tab = function (obj) {
	var _index = obj.index;
	for (var j = 0; j < this.len; j++) {
		this.btns[j].classList.remove('active');
		this.contents[j].classList.remove('disBlock');
	}
	obj.classList.add('active');
	this.contents[_index].classList.add('disBlock');
};