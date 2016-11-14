(function () {
    'use strict';

    angular
        .module('appSMU')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routes($stateProvider, $urlRouterProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/menu/templates/menu.html'
                //controller: 'MenuController'
            })
            .state('app.home', {
                cache: false,
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'app/home/templates/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('app.ultimo-minuto', {
                cache: false,
                url: '/ultimo-minuto',
                views: {
                    'menuContent': {
                        templateUrl: 'app/ultimoMinuto/templates/ultimoMinuto.html',
                        controller: 'UltimoMinutoController',
                        controllerAs: 'ultimoMinuto'
                    }
                }
            });

        // Each tab has its own nav history stack which is defined in the corresponding module.

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    }

})();
