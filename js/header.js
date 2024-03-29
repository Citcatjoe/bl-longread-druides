// HEADROOM.JS MINIFIED
!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);

jQuery(document).ready(function($) 
{
	var menu_overlay =$('.menu_overlay'),
		jsCopy = $('.copy'),
		jsCopied = $('.copied');
		heroHeight = $('.hero').height();

	//--- ASIDE RIGHT ---//
	var asideRToggle = $('.aside-r-toggle'),
		asideR = $('.aside-r'),
		btnCloseAsideR = asideR.find('.btn-close-aside-r');
	asideRToggle.click(function(e){if (asideR.hasClass('is-visible')){closeAsideR();}else{openAsideR();}});
	btnCloseAsideR.click(function(e){
		closeAsideR()
	});
	function openAsideR(){
		asideR.removeClass('translate-x-full');
		closeAsideL();
		menu_overlay.addClass('is-visible');
	}
	function closeAsideR(){
		asideR.addClass('translate-x-full');
		menu_overlay.removeClass('is-visible');
	}

	//--- ASIDE LEFT ---//
	var asideLToggle = $('.aside-l-toggle'),
		asideL = $('.aside-l'),
		btnCloseAsideL = asideL.find('.btn-close-aside-l');
	asideLToggle.click(function(e){if (asideL.hasClass('is-visible')){closeAsideL();}else{openAsideL();}});
	btnCloseAsideL.click(function(e){
		closeAsideL()
	});
	function openAsideL(){
		asideL.removeClass('-translate-x-full');
		closeAsideR();
		menu_overlay.addClass('is-visible');
	}
	function closeAsideL(){
		asideL.addClass('-translate-x-full');
		menu_overlay.removeClass('is-visible');
	}

	
	menu_overlay.click(function(e){
		closeAsideL();
		closeAsideR();
	});

	jsCopy.click(function(e){
		e.stopPropagation();
        copyToClipboard();
		notifyCopied();
	});

    function copyToClipboard() {
		var dummy = document.createElement('input'),
		text = window.location.href;
		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
	}

	function notifyCopied() {
		jsCopied.addClass('is-visible'); 
		closeAsideR();
		setTimeout(function() { 
			jsCopied.removeClass('is-visible');
		}, 2000);
	}

	var header = document.querySelector("header");
	var headroom = new Headroom(header, {
		"offset": heroHeight,
		"tolerance": 1
	  });
	headroom.init();

	var e2 = document.querySelector(".wheel-container-mobile");
	var headroom2 = new Headroom(e2, {
		"offset": heroHeight,
		"tolerance": 1
	  });
	headroom2.init();

	var e3 = document.querySelector(".chakras-container-mobile");
	var headroom3 = new Headroom(e3, {
		"offset": heroHeight,
		"tolerance": 1
	  });
	headroom3.init();


	// var cornerTopLeft = document.querySelector(".corner-top-left");
	// var headroom2 = new Headroom(cornerTopLeft, {
	// 	"offset": heroHeight,
	// 	"tolerance": 1
	//   });
	// headroom2.init();
	
});
