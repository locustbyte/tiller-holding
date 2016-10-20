(function() {
  'use strict';

  angular
    .module('tillerHolding')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
