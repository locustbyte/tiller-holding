!function(){"use strict";angular.module("tillerHolding",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return i}var i=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("tillerHolding").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var i=this;i.relativeDate=t(i.creationDate).fromNow()}t.$inject=["moment"];var i={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return i}angular.module("tillerHolding").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function i(i,e,s,o){var n,a=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(i.extraValues,function(t){a.type(t).pause()["delete"]()}),n=i.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){a.type(t.login).pause()["delete"]()})}),i.$on("$destroy",function(){n()})}function e(t,i){function e(){return s().then(function(){t.info("Activated Contributors View")})}function s(){return i.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],e()}e.$inject=["$log","githubContributor"];var s={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:i,controller:e,controllerAs:"vm"};return s}t.$inject=["malarkey"],angular.module("tillerHolding").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,i){function e(e){function o(t){return t.data}function n(i){t.error("XHR Failed for getContributors.\n"+angular.toJson(i.data,!0))}return e||(e=30),i.get(s+"/contributors?per_page="+e).then(o)["catch"](n)}var s="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:s,getContributors:e};return o}t.$inject=["$log","$http"],angular.module("tillerHolding").factory("githubContributor",t)}(),function(t,i,e,s){function o(i,e){var n=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var a=(this.position+"").toLowerCase().match(/\S+/g)||[];if(a.length<1&&a.push("center"),1==a.length&&a.push(a[0]),("top"==a[0]||"bottom"==a[0]||"left"==a[1]||"right"==a[1])&&(a=[a[1],a[0]]),this.positionX!=s&&(a[0]=this.positionX.toLowerCase()),this.positionY!=s&&(a[1]=this.positionY.toLowerCase()),n.positionX=a[0],n.positionY=a[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var r=this.$element.find(">.parallax-slider"),l=!1;0==r.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=r.prependTo(this.$mirror),l=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){n.naturalHeight&&n.naturalWidth||(n.naturalHeight=this.naturalHeight||this.height||1,n.naturalWidth=this.naturalWidth||this.width||1),n.aspectRatio=n.naturalWidth/n.naturalHeight,o.isSetup||o.setup(),o.sliders.push(n),o.isFresh=!1,o.requestRender()}),l||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||r.length>0)&&this.$slider.trigger("load")}function n(s){return this.each(function(){var n=t(this),a="object"==typeof s&&s;this==i||this==e||n.is("body")?o.configure(a):n.data("px.parallax")?"object"==typeof s&&t.extend(n.data("px.parallax"),a):(a=t.extend({},n.data(),a),n.data("px.parallax",new o(this,a))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),n=i.setTimeout(function(){e(s+o)},o);return t=s+o,n}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),n=this.boxHeight+(e-s)*(1-this.speed)|0,a=(this.boxOffsetTop-e)*(1-this.speed)|0;if(n*this.aspectRatio>=this.boxWidth){this.imageWidth=n*this.aspectRatio|0,this.imageHeight=n,this.offsetBaseTop=a;var r=this.imageWidth-this.boxWidth;"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-r:isNaN(this.positionX)?this.offsetLeft=-r/2|0:this.offsetLeft=Math.max(this.positionX,-r)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var r=this.imageHeight-n;"top"==this.positionY?this.offsetBaseTop=a:"bottom"==this.positionY?this.offsetBaseTop=a-r:isNaN(this.positionY)?this.offsetBaseTop=a-r/2|0:this.offsetBaseTop=a+Math.max(this.positionY,-r)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),n=t(i),a=function(){o.winHeight=n.height(),o.winWidth=n.width(),o.docHeight=s.height(),o.docWidth=s.width()},r=function(){var t=n.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,n.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};n.on("resize.px.parallax load.px.parallax",function(){a(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){r(),o.requestRender()}),a(),r(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var s,n=t(e).data("px.parallax");for(n.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==n&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var a=t.fn.parallax;t.fn.parallax=n,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=a,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),function(){"use strict";function t(t,i,e,s,o,n){function a(){l(),t(function(){d.classAnimation="rubberBand"},4e3)}function r(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),d.classAnimation=""}function l(){d.awesomeThings=i.getTec(),angular.forEach(d.awesomeThings,function(t){t.rank=Math.random()})}var d=this;d.awesomeThings=[],d.classAnimation="",d.creationDate=1476876673290,d.showToastr=r,a(),angular.element(document).ready(function(){$(".slide1").css("min-height",$(window).height())}),n.on("scroll",function(){console.log(o.scrollY),o.scrollY>950?$(".stay-btns").removeClass("hide"):$(".stay-btns").addClass("hide"),s.$apply(function(){})})}t.$inject=["$timeout","webDevTec","toastr","$scope","$window","$document"],angular.module("tillerHolding").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("tillerHolding").run(t)}(),function(){"use strict";function t(t,i){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),i.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("tillerHolding").config(t)}(),function(){"use strict";angular.module("tillerHolding").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,i){t.debugEnabled(!0),i.allowHtml=!0,i.timeOut=3e3,i.positionClass="toast-top-right",i.preventDuplicates=!0,i.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("tillerHolding").config(t)}(),angular.module("tillerHolding").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=slide1><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 text-center padding padding-top-lg"><h1 class=head-text>INVEST IN CONTROL</h1><h4 class="sub-text padding padding-top-xs">you point where. We\'ll get you there.</h4></div></div><div class="row text-center padding padding-top-lg"><div class="col-sm-3 text-right vidBtns cta-start-investing"></div><div class="col-sm-3 text-right vidBtns cta-start-investing"><a href=https://tillerapp.azurewebsites.net/ target=_blank class="btn-block btn-orange-outline">Start investing</a></div><div class="col-sm-3 text-left vidBtns cta-start-investing"><a href=https://tillerapp.azurewebsites.net/ target=_blank class="btn-block btn-orange-full">Try it now</a></div><div class="col-sm-3 text-right vidBtns cta-start-investing"></div></div><div class="padding padding-top-lg"><div class="padding padding-top-lg"><div class="row text-center padding padding-top-lg"><div class="col-sm-12 padding padding-top-lg"><img src=assets/images/scroll-down.svg><div class=scroll-down-text>Scroll Down</div></div></div></div></div></div></div><div class=goslide5><div class=slide5><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">An investment that’s as individual as you are</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">In a world where financial products are becoming increasingly commoditised, Tiller offers the more demanding investor an extraordinary level of control and involvement – bringing you closer to your investments than ever before. Whether you’re investing to provide a monthly income when you retire, or to build up a lump sum for your children’s university fees.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide4><div class=slide4><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Your personalised portfolio</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">Tiller is the only online investment service that allows you to create a truly personalised investment portfolio; with a mix of assets and funds that’s completely unique to you, and that precisely matches your financial objectives and your attitude to investing. Ultimately, it’s all about creating the optimal balance between risk and growth.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide3><div class=slide3><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Investing in performance</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg padding padding-bottom-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">When you invest with Tiller, you’re drawing on the experience of some of the world’s most successful investment managers – a team previously managing multi billion dollar investments for some of most iconic institutional pension funds and Endowments across the USA, as well as Europe. The individual funds and assets they select are allocated by our ground-breaking computer algorithms to create a unique portfolio focused on delivering the growth you demand.</div><div class=col-sm-1></div></div></div></div></div><div class=goslide2><div class=slide2><div class="container padding padding-top-lg"><div class="row padding padding-top-lg"><div class="col-sm-12 track-text">Get closer to your investments</div></div></div></div><div class=content-bk><div class="container padding padding-top-lg"><div class="row padding padding-top-lg padding padding-bottom-lg"><div class=col-sm-1></div><div class="col-sm-10 type padding padding-bottom-lg">With Tiller, you’re always in control. You control how your investment’s structured and what kind of assets it contains. You can check each day to see how it’s performing and make changes to the mix or to your investment objectives. Tiller responds instantly with a newly optimised portfolio. And you can do all this from your phone, computer or tablet.</div><div class=col-sm-1></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-66120cbd3f.js.map