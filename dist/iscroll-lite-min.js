/*! iScroll v5.0.5 ~ (c) 2008-2013 Matteo Spinelli ~ http://cubiq.org/license */
var IScroll=function(t,i,e){function s(e,s){this.wrapper="string"==typeof e?i.querySelector(e):e,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,item_width:"100%",type:"",wrapper_width:"100%",debug:!0,on_page_changed:function(){}};for(var n in s)this.options[n]=s[n];if(0===this.wrapper.getElementsByTagName("li").length)return this.plog("WARNING: wrapper>scroller>ul>li length is 0,please add li as item"),void 0;if("100%"!=this.options.item_width)for(var r=0;r<this.wrapper.getElementsByTagName("li").length;r++)if(this.plog(r),this.plog(this.wrapper.getElementsByTagName("li")[r]),this.plog(this.options.item_width),this.contain(this.options.item_width,"%")){var h=100/this.wrapper.getElementsByTagName("li").length+"%";this.wrapper.getElementsByTagName("li")[r].style.width=h}else this.wrapper.getElementsByTagName("li")[r].style.width=this.options.item_width;this.wrapper.style.width="100%"!=this.options.wrapper_width?this.options.wrapper_width:this.options.item_width,"carousel"==this.options.type&&(this.contain(this.options.item_width,"%")?(this.plog("window.screen.width="+t.screen.width),this.plog("this.options.item_width="+this.options.item_width),this.scroller.style.width=100*this.wrapper.getElementsByTagName("li").length+"%"):this.scroller.style.width=parseInt(this.options.item_width)*this.wrapper.getElementsByTagName("li").length+"px",this.options.debug&&(this.plog(this.wrapper.innerHTML),this.plog("this.wrapper.style.width = "+this.wrapper.style.width),this.plog("this.scroller.style.width = "+this.scroller.style.width),this.plog("this.ul>li.length = "+this.wrapper.getElementsByTagName("li").length),this.plog("this.ul>li.style.width = "+this.wrapper.getElementsByTagName("li")[0].style.width))),this.translateZ=this.options.HWCompositing&&o.hasPerspective?" translateZ(0)":"",this.options.useTransition=o.hasTransition&&this.options.useTransition,this.options.useTransform=o.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?o.ease[this.options.bounceEasing]||o.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(i){t.setTimeout(i,1e3/60)},o=function(){function s(t){return r===!1?!1:""===r?t:r+t.charAt(0).toUpperCase()+t.substr(1)}var n={},o=i.createElement("div").style,r=function(){for(var t,i=["t","webkitT","MozT","msT","OT"],e=0,s=i.length;s>e;e++)if(t=i[e]+"ransform",t in o)return i[e].substr(0,i[e].length-1);return!1}();n.getTime=Date.now||function(){return(new Date).getTime()},n.extend=function(t,i){for(var e in i)t[e]=i[e]},n.addEvent=function(t,i,e,s){t.addEventListener(i,e,!!s)},n.removeEvent=function(t,i,e,s){t.removeEventListener(i,e,!!s)},n.momentum=function(t,i,s,n,o){var r,h,a=t-i,l=e.abs(a)/s,c=6e-4;return r=t+l*l/(2*c)*(0>a?-1:1),h=l/c,n>r?(r=o?n-o/2.5*(l/8):n,a=e.abs(r-t),h=a/l):r>0&&(r=o?o/2.5*(l/8):0,a=e.abs(t)+r,h=a/l),{destination:e.round(r),duration:h}};var h=s("transform");return n.extend(n,{hasTransform:h!==!1,hasPerspective:s("perspective")in o,hasTouch:"ontouchstart"in t,hasPointer:navigator.msPointerEnabled,hasTransition:s("transition")in o}),n.isAndroidBrowser=/Android/.test(t.navigator.appVersion)&&/Version\/\d/.test(t.navigator.appVersion),n.extend(n.style={},{transform:h,transitionTimingFunction:s("transitionTimingFunction"),transitionDuration:s("transitionDuration"),transformOrigin:s("transformOrigin")}),n.hasClass=function(t,i){var e=new RegExp("(^|\\s)"+i+"(\\s|$)");return e.test(t.className)},n.addClass=function(t,i){if(!n.hasClass(t,i)){var e=t.className.split(" ");e.push(i),t.className=e.join(" ")}},n.removeClass=function(t,i){if(n.hasClass(t,i)){var e=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(e," ")}},n.offset=function(t){for(var i=-t.offsetLeft,e=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,e-=t.offsetTop;return{left:i,top:e}},n.preventDefaultException=function(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1},n.extend(n.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),n.extend(n.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return e.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22,s=.4;return 0===t?0:1==t?1:s*e.pow(2,-10*t)*e.sin((t-i/4)*2*e.PI/i)+1}}}),n.tap=function(t,e){var s=i.createEvent("Event");s.initEvent(e,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},n.click=function(t){var e,s=t.target;"SELECT"!=s.tagName&&"INPUT"!=s.tagName&&"TEXTAREA"!=s.tagName&&(e=i.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!0,t.view,1,s.screenX,s.screenY,s.clientX,s.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e._constructed=!0,s.dispatchEvent(e))},n}();return s.prototype={version:"5.0.5",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&(this._transitionTime(0),this.resetPosition(this.options.bounceTime)||this._execEvent("scrollEnd"))},_start:function(t){if(!(1!=o.eventType[t.type]&&0!==t.button||!this.enabled||this.initiated&&o.eventType[t.type]!==this.initiated)){!this.options.preventDefault||o.isAndroidBrowser||o.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=o.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.isAnimating=!1,this.startTime=o.getTime(),this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(e.round(i.x),e.round(i.y)),this.isInTransition=!1),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("scrollStart")}},_move:function(t){if(this.enabled&&o.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,n,r,h=t.touches?t.touches[0]:t,a=this.hasHorizontalScroll?h.pageX-this.pointX:0,l=this.hasVerticalScroll?h.pageY-this.pointY:0,c=o.getTime();if(this.pointX=h.pageX,this.pointY=h.pageY,this.distX+=a,this.distY+=l,n=e.abs(this.distX),r=e.abs(this.distY),!(c-this.endTime>300&&10>n&&10>r)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=n>r+this.options.directionLockThreshold?"h":r>=n+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return this.initiated=!1,void 0;l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return this.initiated=!1,void 0;a=0}i=this.x+a,s=this.y+l,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+a/3:i>0?0:this.maxScrollX),(s>0||s<this.maxScrollY)&&(s=this.options.bounce?this.y+l/3:s>0?0:this.maxScrollY),this.directionX=a>0?-1:0>a?1:0,this.directionY=l>0?-1:0>l?1:0,this.moved=!0,this._translate(i,s),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&o.eventType[t.type]===this.initiated){this.options.preventDefault&&!o.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var i,s,n=(t.changedTouches?t.changedTouches[0]:t,o.getTime()-this.startTime),r=e.round(this.x),h=e.round(this.y),a=e.abs(r-this.startX),l=e.abs(h-this.startY),c=0,p="";if(this.scrollTo(r,h),this.isInTransition=0,this.initiated=0,this.endTime=o.getTime(),!this.resetPosition(this.options.bounceTime))return this.moved?this._events.flick&&200>n&&100>a&&100>l?(this._execEvent("flick"),void 0):(this.options.momentum&&300>n&&(i=this.hasHorizontalScroll?o.momentum(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0):{destination:r,duration:0},s=this.hasVerticalScroll?o.momentum(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0):{destination:h,duration:0},r=i.destination,h=s.destination,c=e.max(i.duration,s.duration),this.isInTransition=1),r!=this.x||h!=this.y?((r>0||r<this.maxScrollX||h>0||h<this.maxScrollY)&&(p=o.ease.quadratic),this.scrollTo(r,h,c,p),void 0):(this._execEvent("scrollEnd"),void 0)):(this.options.tap&&o.tap(t,this.options.tap),this.options.click&&o.click(t),void 0)}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,e=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?e=0:this.y<this.maxScrollY&&(e=this.maxScrollY),i==this.x&&e==this.y?!1:(this.scrollTo(i,e,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight,this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=o.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},_execEvent:function(t){if(this._events[t]){var i=0,e=this._events[t].length;if(e)for(;e>i;i++)this._events[t][i].call(this)}},scrollBy:function(t,i,e,s){t=this.x+t,i=this.y+i,e=e||0,this.scrollTo(t,i,e,s)},scrollTo:function(t,i,e,s){s=s||o.ease.circular,!e||this.options.useTransition&&s.style?(this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i)):this._animate(t,i,e,s.fn)},scrollToElement:function(t,i,s,n,r){if(t=t.nodeType?t:this.scroller.querySelector(t)){var h=o.offset(t);h.left-=this.wrapperOffset.left,h.top-=this.wrapperOffset.top,s===!0&&(s=e.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),n===!0&&(n=e.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),h.left-=s||0,h.top-=n||0,h.left=h.left>0?0:h.left<this.maxScrollX?this.maxScrollX:h.left,h.top=h.top>0?0:h.top<this.maxScrollY?this.maxScrollY:h.top,i=void 0===i||null===i||"auto"===i?e.max(e.abs(this.x-h.left),e.abs(this.y-h.top)):i,this.scrollTo(h.left,h.top,i,r)}},_transitionTime:function(t){t=t||0,this.scrollerStyle[o.style.transitionDuration]=t+"ms"},_transitionTimingFunction:function(t){this.scrollerStyle[o.style.transitionTimingFunction]=t},_translate:function(i,s){if(this.options.useTransform?this.scrollerStyle[o.style.transform]="translate("+i+"px,"+s+"px)"+this.translateZ:(i=e.round(i),s=e.round(s),this.scrollerStyle.left=i+"px",this.scrollerStyle.top=s+"px"),"carousel"==this.options.type){this.plog("&&&& this.x ="+this.x+" and x="+i);var n=1;n=this.contain(this.options.item_width,"%")?.01*parseInt(this.options.item_width)*t.screen.width:parseInt(this.options.item_width),this.plog("w w="+n);var r=e.abs(i/n);this.plog("count="+r);var h=/^[0-9]*[1-9][0-9]*$/;h.test(r)&&(this.plog("on_page_changed and page = "+r),this.options.on_page_changed(r)),0===r&&(this.plog("on_page_changed and page = "+r),this.options.on_page_changed(r))}this.x=i,this.y=s},_initEvents:function(i){var e=i?o.removeEvent:o.addEvent,s=this.options.bindToWrapper?this.wrapper:t;e(t,"orientationchange",this),e(t,"resize",this),e(this.wrapper,"mousedown",this),e(s,"mousemove",this),e(s,"mousecancel",this),e(s,"mouseup",this),o.hasPointer&&(e(this.wrapper,"MSPointerDown",this),e(s,"MSPointerMove",this),e(s,"MSPointerCancel",this),e(s,"MSPointerUp",this)),o.hasTouch&&(e(this.wrapper,"touchstart",this),e(s,"touchmove",this),e(s,"touchcancel",this),e(s,"touchend",this)),e(this.scroller,"transitionend",this),e(this.scroller,"webkitTransitionEnd",this),e(this.scroller,"oTransitionEnd",this),e(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var i,e,s=t.getComputedStyle(this.scroller,null);return this.options.useTransform?(s=s[o.style.transform].split(")")[0].split(", "),i=+(s[12]||s[4]),e=+(s[13]||s[5])):(i=+s.left.replace(/[^-\d]/g,""),e=+s.top.replace(/[^-\d]/g,"")),{x:i,y:e}},plog:function(i){t.console&&t.console.log&&t.console.log("LOG: "+i)},pp:function(t,i){this.plog(" [-"+t+"-]  "+i)},contain:function(t,i){return t.indexOf(i)>=0?!0:!1},orientationChange:function(){switch(t.orientation){case 0:alert("肖像模式 0,screen-width: "+screen.width+"; screen-height:"+screen.height);break;case-90:alert("左旋 -90,screen-width: "+screen.width+"; screen-height:"+screen.height);break;case 90:alert("右旋 90,screen-width: "+screen.width+"; screen-height:"+screen.height);break;case 180:alert("风景模式 180,screen-width: "+screen.width+"; screen-height:"+screen.height)}},_animate:function(t,i,e,s){function r(){var u,d,m,f=o.getTime();return f>=p?(h.isAnimating=!1,h._translate(t,i),h.resetPosition(h.options.bounceTime)||h._execEvent("scrollEnd"),void 0):(f=(f-c)/e,m=s(f),u=(t-a)*m+a,d=(i-l)*m+l,h._translate(u,d),h.isAnimating&&n(r),void 0)}var h=this,a=this.x,l=this.y,c=o.getTime(),p=c+e;this.isAnimating=!0,r()},handleEvent:function(t){switch(t.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t)}}},s.ease=o.ease,s}(window,document,Math);