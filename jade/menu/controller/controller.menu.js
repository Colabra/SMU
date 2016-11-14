(function() {
'use strict';

    angular
        .module('appSMU')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$log'];
    function MenuController($log) {
        var vm = this;


        activate();

        ////////////////

        function activate() { }
    }
})();
