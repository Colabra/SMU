(function () {
    'use strict';

    angular
        .module('appSMU')
        .config(configure);

    configure.$inject = ['$ionicConfigProvider','$httpProvider'];

    function configure($ionicConfigProvider,$httpProvider) {
        // Add your configuration here
        $ionicConfigProvider.tabs.position('top'); // other values: top
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');
        $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left').previousTitleText(false);
        //$ionicConfigProvider.views.swipeBackEnabled(false);

    }

})();
