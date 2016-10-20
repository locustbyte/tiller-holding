!function(){"use strict";angular.module("tillerHolding",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr","duParallax"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("tillerHolding").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("tillerHolding").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,i,n,o){var a,r=t(i[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});i.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}function i(t,e){function i(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],i()}i.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:i,controllerAs:"vm"};return n}t.$inject=["malarkey"],angular.module("tillerHolding").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function i(i){function o(t){return t.data}function a(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return i||(i=30),e.get(n+"/contributors?per_page="+i).then(o)["catch"](a)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:n,getContributors:i};return o}t.$inject=["$log","$http"],angular.module("tillerHolding").factory("githubContributor",t)}(),function(t,e,i,n){function o(e,i){var a=this;"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this,i)),this.$element=t(e),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),("top"==r[0]||"bottom"==r[0]||"left"==r[1]||"right"==r[1])&&(r=[r[1],r[0]]),this.positionX!=n&&(r[0]=this.positionX.toLowerCase()),this.positionY!=n&&(r[1]=this.positionY.toLowerCase()),a.positionX=r[0],a.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var s=this.$element.find(">.parallax-slider"),l=!1;0==s.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=s.prependTo(this.$mirror),l=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){a.naturalHeight&&a.naturalWidth||(a.naturalHeight=this.naturalHeight||this.height||1,a.naturalWidth=this.naturalWidth||this.width||1),a.aspectRatio=a.naturalWidth/a.naturalHeight,o.isSetup||o.setup(),o.sliders.push(a),o.isFresh=!1,o.requestRender()}),l||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||s.length>0)&&this.$slider.trigger("load")}function a(n){return this.each(function(){var a=t(this),r="object"==typeof n&&n;this==e||this==i||a.is("body")?o.configure(r):a.data("px.parallax")?"object"==typeof n&&t.extend(a.data("px.parallax"),r):(r=t.extend({},a.data(),r),a.data("px.parallax",new o(this,r))),"string"==typeof n&&("destroy"==n?o.destroy(this):o[n]())})}!function(){for(var t=0,i=["ms","moz","webkit","o"],n=0;n<i.length&&!e.requestAnimationFrame;++n)e.requestAnimationFrame=e[i[n]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[i[n]+"CancelAnimationFrame"]||e[i[n]+"CancelRequestAnimationFrame"];e.requestAnimationFrame||(e.requestAnimationFrame=function(i){var n=(new Date).getTime(),o=Math.max(0,16-(n-t)),a=e.setTimeout(function(){i(n+o)},o);return t=n+o,a}),e.cancelAnimationFrame||(e.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,e=o.docHeight,i=Math.min(this.boxOffsetTop,e-t),n=Math.max(this.boxOffsetTop+this.boxHeight-t,0),a=this.boxHeight+(i-n)*(1-this.speed)|0,r=(this.boxOffsetTop-i)*(1-this.speed)|0;if(a*this.aspectRatio>=this.boxWidth){this.imageWidth=a*this.aspectRatio|0,this.imageHeight=a,this.offsetBaseTop=r;var s=this.imageWidth-this.boxWidth;"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-s:isNaN(this.positionX)?this.offsetLeft=-s/2|0:this.offsetLeft=Math.max(this.positionX,-s)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var s=this.imageHeight-a;"top"==this.positionY?this.offsetBaseTop=r:"bottom"==this.positionY?this.offsetBaseTop=r-s:isNaN(this.positionY)?this.offsetBaseTop=r-s/2|0:this.offsetBaseTop=r+Math.max(this.positionY,-s)}},render:function(){var t=o.scrollTop,e=o.scrollLeft,i=this.overScrollFix?o.overScroll:0,n=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=n?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-e,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-i,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var n=t(i),a=t(e),r=function(){o.winHeight=a.height(),o.winWidth=a.width(),o.docHeight=n.height(),o.docWidth=n.width()},s=function(){var t=a.scrollTop(),e=o.docHeight-o.winHeight,i=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(e,t)),o.scrollLeft=Math.max(0,Math.min(i,a.scrollLeft())),o.overScroll=Math.max(t-e,Math.min(t,0))};a.on("resize.px.parallax load.px.parallax",function(){r(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){s(),o.requestRender()}),r(),s(),this.isReady=!0}},configure:function(e){"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this.prototype,e))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,e.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(i){var n,a=t(i).data("px.parallax");for(a.$mirror.remove(),n=0;n<this.sliders.length;n+=1)this.sliders[n]==a&&this.sliders.splice(n,1);t(i).data("px.parallax",!1),0===this.sliders.length&&(t(e).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var r=t.fn.parallax;t.fn.parallax=a,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=r,this},t(i).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ngParallax"),angular.module("ngParallax",[]),angular.module("ngParallax").directive("ngParallax",["$timeout",function(t,e){return{restrict:"AE",scope:{pattern:"=",speed:"="},link:function(t,e,i){function n(){var e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,i=e/t.speed;a&&(i=.1*i),0==i?o.style.backgroundPosition="0% 0%":o.style.backgroundPosition="0% "+i+"%"}window.mobileAndTabletcheck=function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?!0:!1};var o=e[0];o.style.backgroundRepeat="repeat",o.style.backgroundAttachment="fixed",o.style.height="100%",o.style.margin="0 auto",o.style.position="relative",o.style.background="url("+t.pattern+")",o.style.backgroundAttachment="fixed";var a=window.mobileAndTabletcheck();window.document.addEventListener("touchmove",function(){n()}),window.document.addEventListener("scroll",function(){n()}),n()}}}]);var duScrollDefaultEasing=function(t){"use strict";return.5>t?Math.pow(2*t,2)/2:1-Math.pow(2*(1-t),2)/2};angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset",function(t,e,i,n,o,a,r){"use strict";var s={},l=function(t){return"undefined"!=typeof HTMLDocument&&t instanceof HTMLDocument||t.nodeType&&t.nodeType===t.DOCUMENT_NODE},d=function(t){return"undefined"!=typeof HTMLElement&&t instanceof HTMLElement||t.nodeType&&t.nodeType===t.ELEMENT_NODE},c=function(t){return d(t)||l(t)?t:t[0]};s.duScrollTo=function(e,i,n,o){var a;if(angular.isElement(e)?a=this.duScrollToElement:angular.isDefined(n)&&(a=this.duScrollToAnimated),a)return a.apply(this,arguments);var r=c(this);return l(r)?t.scrollTo(e,i):(r.scrollLeft=e,void(r.scrollTop=i))};var u,p;s.duScrollToAnimated=function(t,a,r,s){r&&!s&&(s=o);var l=this.duScrollLeft(),d=this.duScrollTop(),c=Math.round(t-l),g=Math.round(a-d),h=null,f=0,m=this,v="scroll mousedown mousewheel touchmove keydown",b=function(t){(!t||f&&t.which>0)&&(m.unbind(v,b),i(u),p.reject(),u=null)};if(u&&b(),p=e.defer(),0===r||!c&&!g)return 0===r&&m.duScrollTo(t,a),p.resolve(),p.promise;var y=function(t){null===h&&(h=t),f=t-h;var e=f>=r?1:s(f/r);m.scrollTo(l+Math.ceil(c*e),d+Math.ceil(g*e)),1>e?u=n(y):(m.unbind(v,b),u=null,p.resolve())};return m.duScrollTo(l,d),m.bind(v,b),u=n(y),p.promise},s.duScrollToElement=function(t,e,i,n){var o=c(this);(!angular.isNumber(e)||isNaN(e))&&(e=r);var a=this.duScrollTop()+c(t).getBoundingClientRect().top-e;return d(o)&&(a-=o.getBoundingClientRect().top),this.duScrollTo(0,a,i,n)},s.duScrollLeft=function(e,i,n){if(angular.isNumber(e))return this.duScrollTo(e,this.duScrollTop(),i,n);var o=c(this);return l(o)?t.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:o.scrollLeft},s.duScrollTop=function(e,i,n){if(angular.isNumber(e))return this.duScrollTo(this.duScrollLeft(),e,i,n);var o=c(this);return l(o)?t.scrollY||document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop},s.duScrollToElementAnimated=function(t,e,i,n){return this.duScrollToElement(t,e,i||a,n)},s.duScrollTopAnimated=function(t,e,i){return this.duScrollTop(t,e||a,i)},s.duScrollLeftAnimated=function(t,e,i){return this.duScrollLeft(t,e||a,i)},angular.forEach(s,function(t,e){angular.element.prototype[e]=t;var i=e.replace(/^duScroll/,"scroll");angular.isUndefined(angular.element.prototype[i])&&(angular.element.prototype[i]=t)})}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(t){"use strict";var e=["webkit","moz","o","ms"];return function(i,n){if(t[i])return t[i];for(var o,a=i.substr(0,1).toUpperCase()+i.substr(1),r=0;r<e.length;r++)if(o=e[r]+a,t[o])return t[o];return n}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(t,e){"use strict";var i=0,n=function(t,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-i)),r=e(function(){t(o+a)},a);return i=o+a,r};return t("requestAnimationFrame",n)}]).factory("cancelAnimation",["polyfill","$timeout",function(t,e){"use strict";var i=function(t){e.cancel(t)};return t("cancelAnimationFrame",i)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","$window","$document","scrollContainerAPI","duScrollGreedy","duScrollSpyWait",function(t,e,i,n,o,a,r){"use strict";var s=function(o){var s=!1,l=!1,d=function(){l=!1;var e,r=o.container,s=r[0],d=0;"undefined"!=typeof HTMLElement&&s instanceof HTMLElement||s.nodeType&&s.nodeType===s.ELEMENT_NODE?(d=s.getBoundingClientRect().top,e=Math.round(s.scrollTop+s.clientHeight)>=s.scrollHeight):e=Math.round(i.pageYOffset+i.innerHeight)>=n[0].body.scrollHeight;var c,u,p,g,h,f,m=e?"bottom":"top";for(g=o.spies,u=o.currentlyActive,p=void 0,c=0;c<g.length;c++)h=g[c],f=h.getTargetPosition(),f&&(e||f.top+h.offset-d<20&&(a||-1*f.top+d)<f.height)&&(!p||p[m]<f[m])&&(p={spy:h},p[m]=f[m]);p&&(p=p.spy),u===p||a&&!p||(u&&(u.$element.removeClass("active"),t.$broadcast("duScrollspy:becameInactive",u.$element)),p&&(p.$element.addClass("active"),t.$broadcast("duScrollspy:becameActive",p.$element)),o.currentlyActive=p)};return r?function(){s?l=!0:(d(),s=e(function(){s=!1,l&&d()},r,!1))}:d},l={},d=function(t){var e=t.$id,i={spies:[]};return i.handler=s(i),l[e]=i,t.$on("$destroy",function(){c(t)}),e},c=function(t){var e=t.$id,i=l[e],n=i.container;n&&n.off("scroll",i.handler),delete l[e]},u=d(t),p=function(t){return l[t.$id]?l[t.$id]:t.$parent?p(t.$parent):l[u]},g=function(t){var e,i,n=t.$scope;if(n)return p(n);for(i in l)if(e=l[i],-1!==e.spies.indexOf(t))return e},h=function(t){for(;t.parentNode;)if(t=t.parentNode,t===document)return!0;return!1},f=function(t){var e=g(t);e&&(e.spies.push(t),e.container&&h(e.container)||(e.container&&e.container.off("scroll",e.handler),e.container=o.getContainer(t.$scope),e.container.on("scroll",e.handler).triggerHandler("scroll")))},m=function(t){var e=g(t);t===e.currentlyActive&&(e.currentlyActive=null);var i=e.spies.indexOf(t);-1!==i&&e.spies.splice(i,1),t.$element=null};return{addSpy:f,removeSpy:m,createContext:d,destroyContext:c,getContextForScope:p}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(t){"use strict";var e={},i=function(t,i){var n=t.$id;return e[n]=i,n},n=function(t){return e[t.$id]?t.$id:t.$parent?n(t.$parent):void 0},o=function(i){var o=n(i);return o?e[o]:t},a=function(t){var i=n(t);i&&delete e[i]};return{getContainerId:n,getContainer:o,setContainer:i,removeContainer:a}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(t,e,i){"use strict";return{link:function(n,o,a){o.on("click",function(o){if(a.href&&-1!==a.href.indexOf("#")){var r=document.getElementById(a.href.replace(/.*(?=#[^\s]+$)/,"").substring(1));if(r&&r.getBoundingClientRect){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault();var s=a.offset?parseInt(a.offset,10):e,l=a.duration?parseInt(a.duration,10):t,d=i.getContainer(n);d.duScrollToElement(angular.element(r),isNaN(s)?0:s,isNaN(l)?0:l)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(t){"use strict";return{restrict:"A",scope:!0,compile:function(e,i,n){return{pre:function(e,i,n,o){t.createContext(e)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(t){"use strict";return{restrict:"A",scope:!0,compile:function(e,i,n){return{pre:function(e,i,n,o){n.$observe("duScrollContainer",function(n){angular.isString(n)&&(n=document.getElementById(n)),n=angular.isElement(n)?angular.element(n):i,t.setContainer(e,n),e.$on("$destroy",function(){t.removeContainer(e)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(t,e,i,n){"use strict";var o=function(t,e,i,n){angular.isElement(t)?this.target=t:angular.isString(t)&&(this.targetId=t),this.$scope=e,this.$element=i,this.offset=n};return o.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)),this.target},o.prototype.getTargetPosition=function(){var t=this.getTargetElement();return t?t.getBoundingClientRect():void 0},o.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(a,r,s){var l,d=s.ngHref||s.href;d&&-1!==d.indexOf("#")?l=d.replace(/.*(?=#[^\s]+$)/,"").substring(1):s.duScrollspy&&(l=s.duScrollspy),l&&i(function(){var i=new o(l,a,r,-(s.offset?parseInt(s.offset,10):e));t.addSpy(i),a.$on("$destroy",function(){t.removeSpy(i)}),a.$on("$locationChangeSuccess",i.flushTargetCache.bind(i)),n.$on("$stateChangeSuccess",i.flushTargetCache.bind(i))},0,!1)}}}]),angular.module("angular-parallax",[]).directive("parallax",["$window",function(t){return{restrict:"A",scope:{parallaxRatio:"@",parallaxVerticalOffset:"@",parallaxHorizontalOffset:"@"},link:function(e,i,n){var o=function(){e.parallaxHorizontalOffset||(e.parallaxHorizontalOffset="0");var n=t.pageYOffset*(e.parallaxRatio?e.parallaxRatio:1.1);if(n<=t.innerHeight){var o=n<e.parallaxVerticalOffset?e.parallaxVerticalOffset:n,a=-1===e.parallaxHorizontalOffset.indexOf("%")?e.parallaxHorizontalOffset+"px":e.parallaxHorizontalOffset;i.css("transform","translate("+a+", "+o+"px)")}};o(),angular.element(t).bind("scroll",o),angular.element(t).bind("touchmove",o)}}}]).directive("parallaxBackground",["$window",function(t){return{restrict:"A",transclude:!0,template:"<div ng-transclude></div>",scope:{parallaxRatio:"@",parallaxVerticalOffset:"@"},link:function(e,i,n){var o=function(){var n=(i.prop("offsetTop")-t.pageYOffset)*(e.parallaxRatio?e.parallaxRatio:1.1)-(e.parallaxVerticalOffset||0);i.css("background-position","50% "+n+"px")};angular.element(t).bind("load",function(t){o(),e.$apply()}),angular.element(t).bind("scroll",o),angular.element(t).bind("touchmove",o)}}}]),function(){"use strict";function t(t,e,i,n,o,a,r){function s(){d(),t(function(){u.classAnimation="rubberBand"},4e3)}function l(){i.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),u.classAnimation=""}function d(){u.awesomeThings=e.getTec(),angular.forEach(u.awesomeThings,function(t){t.rank=Math.random()})}function c(t,e){var i=document.createElement("script");i.type="text/javascript",e&&(i.onload=e),document.getElementsByTagName("head")[0].appendChild(i),i.src=t}var u=this;u.awesomeThings=[],u.classAnimation="",u.creationDate=1476876673290,u.showToastr=l,s(),n.mainbackground=r.createAnimator(-.3,150,-150),n.backgroundcontent=r.createAnimator(-.3,150,-150),n.backgroundimage=r.createAnimator(-.3,150,-150),n.myPattern="assets/images/phone.jpg",angular.element(document).ready(function(){$(".slide1").css("min-height",$(window).height()),c("assets/vendor/parallax.js"),$(".parallax-window").parallax({imageSrc:"assets/images/girl.jpg"}),$(".slide1").parallax({imageSrc:"assets/images/intro-img.jpg"}),$(".slide5").parallax({imageSrc:"assets/images/girl.jpg"}),$(".slide4").parallax({imageSrc:"assets/images/eye.jpg"}),$(".slide3").parallax({imageSrc:"assets/images/numbers.jpg"}),$(".slide2").parallax({imageSrc:"assets/images/phone.jpg"}),$(".circs-o").parallax({imageSrc:"assets/images/circs-o.png"})}),a.on("scroll",function(){o.scrollY>950?$(".stay-btns").removeClass("hide"):$(".stay-btns").addClass("hide"),n.$apply(function(){n.pixelsScrolled=o.scrollY})})}t.$inject=["$timeout","webDevTec","toastr","$scope","$window","$document","parallaxHelper"],angular.module("tillerHolding").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("tillerHolding").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("tillerHolding").config(t)}(),function(){"use strict";angular.module("tillerHolding").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("tillerHolding").config(t)}(),angular.module("tillerHolding").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=slide1><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 text-center padding padding-top-lg"><h1 class=head-text>INVEST IN CONTROL</h1><h4 class="sub-text padding padding-top-xs">you point where. We\'ll get you there.</h4></div></div><div class="row text-center padding padding-top-lg"><div class="col-sm-3 text-right vidBtns cta-start-investing"></div><div class="col-sm-3 text-right vidBtns cta-start-investing"><a href=https://tillerapp.azurewebsites.net/ target=_blank class="btn-block btn-orange-outline">Start investing</a></div><div class="col-sm-3 text-left vidBtns cta-start-investing"><a href=https://tillerapp.azurewebsites.net/ target=_blank class="btn-block btn-orange-full">Try it now</a></div><div class="col-sm-3 text-right vidBtns cta-start-investing"></div></div><div class="padding padding-top-lg"><div class="padding padding-top-lg"><div class="row text-center padding padding-top-lg"><div class="col-sm-12 padding padding-top-lg"><img src=assets/images/scroll-down.svg><div class=scroll-down-text>Scroll Down</div></div></div></div></div></div></div><div class=goslide5><div class=slide5><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">An investment that’s as individual as you are</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">In a world where financial products are becoming increasingly commoditised, Tiller offers the more demanding investor an extraordinary level of control and involvement – bringing you closer to your investments than ever before. Whether you’re investing to provide a monthly income when you retire, or to build up a lump sum for your children’s university fees.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide4><div class=slide4><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Your personalised portfolio</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">Tiller is the only online investment service that allows you to create a truly personalised investment portfolio; with a mix of assets and funds that’s completely unique to you, and that precisely matches your financial objectives and your attitude to investing. Ultimately, it’s all about creating the optimal balance between risk and growth.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide3><div class=slide3><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Investing in performance</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">When you invest with Tiller, you’re drawing on the experience of some of the world’s most successful investment managers – a team previously managing multi billion dollar investments for some of most iconic institutional pension funds and Endowments across the USA, as well as Europe. The individual funds and assets they select are allocated by our ground-breaking computer algorithms to create a unique portfolio focused on delivering the growth you demand.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide2><div class=slide2><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Get closer to your investments</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">With Tiller, you’re always in control. You control how your investment’s structured and what kind of assets it contains. You can check each day to see how it’s performing and make changes to the mix or to your investment objectives. Tiller responds instantly with a newly optimised portfolio. And you can do all this from your phone, computer or tablet.</div><div class=col-sm-1></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-a07fbea19f.js.map
