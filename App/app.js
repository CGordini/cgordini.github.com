(function () {
    'use strict';

    angular.module('templates-main', []);

    angular.module('app', [
        'ui.bootstrap',
        'ngAnimate',
        'templates-main',
    ])


    .filter('rawHtml', ['$sce', function($sce){
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);

}());
