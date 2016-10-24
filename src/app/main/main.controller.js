(function() {
  'use strict';

  angular
    .module('tillerHolding')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope, $window, $document, parallaxHelper) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1476876673290;
    vm.showToastr = showToastr;

    activate();

    $scope.mainbackground = parallaxHelper.createAnimator(-0.3, 150, -150);
    $scope.backgroundcontent = parallaxHelper.createAnimator(-0.3, 150, -150);
    $scope.backgroundimage = parallaxHelper.createAnimator(-0.3, 150, -150);

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 5000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }


    function loadScript(src,callback){

        var script = document.createElement("script");
        script.type = "text/javascript";
        if(callback)script.onload=callback
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = src;
    }

    $scope.myPattern = 'assets/images/circs-o.png';

    angular.element(document).ready(function () {
        $('.slide1').css('min-height',$(window).height())

        //$timeout(function() {
        $('.slide1').parallax({imageSrc: 'assets/images/intro-img.jpg'});
        $('.slide5').parallax({imageSrc: 'assets/images/girl.jpg'});
        $('.slide4').parallax({imageSrc: 'assets/images/eye.jpg'});
        $('.slide3').parallax({imageSrc: 'assets/images/numbers.jpg'});
        $('.slide2').parallax({imageSrc: 'assets/images/phone.jpg'});

        //$('.circs-o').parallax({imageSrc: 'assets/images/circs-o.png'});
        //}, 1000);
        //start parallaxes
        
    
        scrollme.init()
    
    });

//    $scope.scrollPos = 0;

    // $window.onscroll = function(){
    //     $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
    //     $scope.$apply(); //or simply $scope.$digest();
    // };

    $document.on('scroll', function() {
      // do your things like logging the Y-axis

      if ( $window.scrollY > 550 ) {
        $(".stay-btns").removeClass("hide")
        $(".floating-circles").removeClass("off hide").addClass('on');
        
      } else {
        $(".stay-btns").addClass("hide")
        $(".floating-circles").removeClass('on').addClass("off")

        $timeout(function() {
          $(".floating-circles").addClass("hide")
        }, 500);
      }



      // or pass this to the scope
      $scope.$apply(function() {
          $scope.pixelsScrolled = $window.scrollY;
      })
    });


  }
})();
