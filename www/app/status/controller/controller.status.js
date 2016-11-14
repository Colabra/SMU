(function() {
'use strict';

    angular
        .module('appSMU')
        .controller('StatusController', StatusController);

    StatusController.$inject = ['$log'];
    function StatusController($log) {
        var vm = this;

        activate();

        ////////////////

        function activate() { }
    }
})();
