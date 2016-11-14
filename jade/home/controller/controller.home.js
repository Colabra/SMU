(function() {
'use strict';

    angular
        .module('appSMU')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];
    function HomeController($log) {
        var vm = this;
        $log.log('home controller');
        vm.tituloTest = 'Hoooolaaaa';

        activate();

        ////////////////

        function activate() { }
    }
})();
