!function(){"use strict";angular.module("tillerHolding",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return i}var i=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("tillerHolding").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var i=this;i.relativeDate=t(i.creationDate).fromNow()}t.$inject=["moment"];var i={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return i}angular.module("tillerHolding").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function i(i,e,o,a){var s,n=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(i.extraValues,function(t){n.type(t).pause()["delete"]()}),s=i.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){n.type(t.login).pause()["delete"]()})}),i.$on("$destroy",function(){s()})}function e(t,i){function e(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return i.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],e()}e.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:i,controller:e,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("tillerHolding").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,i){function e(e){function a(t){return t.data}function s(i){t.error("XHR Failed for getContributors.\n"+angular.toJson(i.data,!0))}return e||(e=30),i.get(o+"/contributors?per_page="+e).then(a)["catch"](s)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:e};return a}t.$inject=["$log","$http"],angular.module("tillerHolding").factory("githubContributor",t)}(),function(t,i,e,o){function a(i,e){var s=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var n=(this.position+"").toLowerCase().match(/\S+/g)||[];if(n.length<1&&n.push("center"),1==n.length&&n.push(n[0]),("top"==n[0]||"bottom"==n[0]||"left"==n[1]||"right"==n[1])&&(n=[n[1],n[0]]),this.positionX!=o&&(n[0]=this.positionX.toLowerCase()),this.positionY!=o&&(n[1]=this.positionY.toLowerCase()),s.positionX=n[0],s.positionY=n[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var r=this.$element.find(">.parallax-slider"),l=!1;0==r.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=r.prependTo(this.$mirror),l=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){s.naturalHeight&&s.naturalWidth||(s.naturalHeight=this.naturalHeight||this.height||1,s.naturalWidth=this.naturalWidth||this.width||1),s.aspectRatio=s.naturalWidth/s.naturalHeight,a.isSetup||a.setup(),a.sliders.push(s),a.isFresh=!1,a.requestRender()}),l||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||r.length>0)&&this.$slider.trigger("load")}function s(o){return this.each(function(){var s=t(this),n="object"==typeof o&&o;this==i||this==e||s.is("body")?a.configure(n):s.data("px.parallax")?"object"==typeof o&&t.extend(s.data("px.parallax"),n):(n=t.extend({},s.data(),n),s.data("px.parallax",new a(this,n))),"string"==typeof o&&("destroy"==o?a.destroy(this):a[o]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],o=0;o<e.length&&!i.requestAnimationFrame;++o)i.requestAnimationFrame=i[e[o]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[o]+"CancelAnimationFrame"]||i[e[o]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var o=(new Date).getTime(),a=Math.max(0,16-(o-t)),s=i.setTimeout(function(){e(o+a)},a);return t=o+a,s}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(a.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=a.winHeight,i=a.docHeight,e=Math.min(this.boxOffsetTop,i-t),o=Math.max(this.boxOffsetTop+this.boxHeight-t,0),s=this.boxHeight+(e-o)*(1-this.speed)|0,n=(this.boxOffsetTop-e)*(1-this.speed)|0;if(s*this.aspectRatio>=this.boxWidth){this.imageWidth=s*this.aspectRatio|0,this.imageHeight=s,this.offsetBaseTop=n;var r=this.imageWidth-this.boxWidth;"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-r:isNaN(this.positionX)?this.offsetLeft=-r/2|0:this.offsetLeft=Math.max(this.positionX,-r)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var r=this.imageHeight-s;"top"==this.positionY?this.offsetBaseTop=n:"bottom"==this.positionY?this.offsetBaseTop=n-r:isNaN(this.positionY)?this.offsetBaseTop=n-r/2|0:this.offsetBaseTop=n+Math.max(this.positionY,-r)}},render:function(){var t=a.scrollTop,i=a.scrollLeft,e=this.overScrollFix?a.overScroll:0,o=t+a.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=o?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(a,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var o=t(e),s=t(i),n=function(){a.winHeight=s.height(),a.winWidth=s.width(),a.docHeight=o.height(),a.docWidth=o.width()},r=function(){var t=s.scrollTop(),i=a.docHeight-a.winHeight,e=a.docWidth-a.winWidth;a.scrollTop=Math.max(0,Math.min(i,t)),a.scrollLeft=Math.max(0,Math.min(e,s.scrollLeft())),a.overScroll=Math.max(t-i,Math.min(t,0))};s.on("resize.px.parallax load.px.parallax",function(){n(),a.isFresh=!1,a.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){r(),a.requestRender()}),n(),r(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var o,s=t(e).data("px.parallax");for(s.$mirror.remove(),o=0;o<this.sliders.length;o+=1)this.sliders[o]==s&&this.sliders.splice(o,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,a.isSetup=!1)}});var n=t.fn.parallax;t.fn.parallax=s,t.fn.parallax.Constructor=a,t.fn.parallax.noConflict=function(){return t.fn.parallax=n,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),angular.module("angular-parallax",[]).directive("parallax",["$window",function(t){return{restrict:"A",scope:{parallaxRatio:"@",parallaxVerticalOffset:"@",parallaxHorizontalOffset:"@"},link:function(i,e,o){var a=function(){var o=t.pageYOffset*(i.parallaxRatio?i.parallaxRatio:1.1);if(o<=t.innerHeight){var a=o<i.parallaxVerticalOffset?i.parallaxVerticalOffset:o;e.css("transform","translate("+i.parallaxHorizontalOffset+"px, "+a+"px)")}};a(),angular.element(t).bind("scroll",a),angular.element(t).bind("touchmove",a)}}}]).directive("parallaxBackground",["$window",function(t){return{restrict:"A",transclude:!0,template:"<div ng-transclude></div>",scope:{parallaxRatio:"@"},link:function(i,e,o){var a=function(){var o=(e.prop("offsetTop")-t.pageYOffset)*(i.parallaxRatio?i.parallaxRatio:1.1);e.css("background-position","50% "+o+"px")};angular.element(t).bind("load",function(t){a(),i.$apply()}),angular.element(t).bind("scroll",a),angular.element(t).bind("touchmove",a)}}}]),function(){"use strict";function t(t,i,e,o,a,s){function n(){l(),t(function(){d.classAnimation="rubberBand"},4e3)}function r(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),d.classAnimation=""}function l(){d.awesomeThings=i.getTec(),angular.forEach(d.awesomeThings,function(t){t.rank=Math.random()})}var d=this;d.awesomeThings=[],d.classAnimation="",d.creationDate=1476876673290,d.showToastr=r,n(),angular.element(document).ready(function(){$(".slide1").css("min-height",$(window).height())}),s.on("scroll",function(){console.log(a.scrollY),a.scrollY>950?$(".stay-btns").removeClass("hide"):$(".stay-btns").addClass("hide"),o.$apply(function(){})})}t.$inject=["$timeout","webDevTec","toastr","$scope","$window","$document"],angular.module("tillerHolding").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("tillerHolding").run(t)}(),function(){"use strict";function t(t,i){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),i.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("tillerHolding").config(t)}(),function(){"use strict";angular.module("tillerHolding").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,i){t.debugEnabled(!0),i.allowHtml=!0,i.timeOut=3e3,i.positionClass="toast-top-right",i.preventDuplicates=!0,i.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("tillerHolding").config(t)}(),angular.module("tillerHolding").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=slide1><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 text-center padding padding-top-lg"><h1 class=head-text>INVEST IN CONTROL</h1><h4 class="sub-text padding padding-top-xs">you point where. We\'ll get you there.</h4></div></div><div class="row text-center padding padding-top-lg"><div class="col-sm-3 text-right vidBtns cta-start-investing"></div><div class="col-sm-3 text-right vidBtns cta-start-investing"><a href=https://tillerapp.azurewebsites.net/#/onboarding/get-started target=_blank class="btn-block btn-orange-outline">Start investing</a></div><div class="col-sm-3 text-left vidBtns cta-start-investing"><a href=https://tillerapp.azurewebsites.net/ target=_blank class="btn-block btn-orange-full">Try it now</a></div><div class="col-sm-3 text-right vidBtns cta-start-investing"></div></div><div class="padding padding-top-lg"><div class="padding padding-top-lg"><div class="row text-center padding padding-top-lg"><div class="col-sm-12 padding padding-top-lg"><img src=assets/images/scroll-down.svg><div class=scroll-down-text>Scroll Down</div></div></div></div></div></div></div><div class=goslide5><div class=slide5><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">An investment that’s as individual as you are</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">In a world where financial products are becoming increasingly commoditised, Tiller offers the more demanding investor an extraordinary level of control and involvement – bringing you closer to your investments than ever before. Whether you’re investing to provide a monthly income when you retire, or to build up a lump sum for your children’s university fees.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide4><div class=slide4><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Your personalised portfolio</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">Tiller is the only online investment service that allows you to create a truly personalised investment portfolio; with a mix of assets and funds that’s completely unique to you, and that precisely matches your financial objectives and your attitude to investing. Ultimately, it’s all about creating the optimal balance between risk and growth.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide3><div class=slide3><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Investing in performance</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">When you invest with Tiller, you’re drawing on the experience of some of the world’s most successful investment managers – a team previously managing multi billion dollar investments for some of most iconic institutional pension funds and Endowments across the USA, as well as Europe. The individual funds and assets they select are allocated by our ground-breaking computer algorithms to create a unique portfolio focused on delivering the growth you demand.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide2><div class=slide2><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Get closer to your investments</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">With Tiller, you’re always in control. You control how your investment’s structured and what kind of assets it contains. You can check each day to see how it’s performing and make changes to the mix or to your investment objectives. Tiller responds instantly with a newly optimised portfolio. And you can do all this from your phone, computer or tablet.</div><div class=col-sm-1></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-26a90023eb.js.map