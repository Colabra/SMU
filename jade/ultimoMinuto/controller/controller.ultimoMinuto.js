(function() {
'use strict';

    angular
        .module('appSMU')
        .controller('UltimoMinutoController', UltimoMinutoController);

    UltimoMinutoController.$inject = ['$log'];
    function UltimoMinutoController($log) {
        var vm = this;
        $log.log('ultimoMinuto controller');
        vm.tituloTest = 'Último minuto';

        activate();

        ////////////////

        function activate() { }
    }
})();
