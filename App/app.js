(function () {
    'use strict';

    angular.module('templates-main', []);

    angular.module('app', [
        'ui.bootstrap',
        'ngAnimate',
        'fullpage.js',
        'templates-main',
    ])


    .filter('rawHtml', ['$sce', function($sce){
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }])

    .config(function(fullPageConfigProvider) {
        fullPageConfigProvider.setConfig({
            scrollBar: true,
            // sectionSelector: '.fp_section',
            // slideSelector: '.fp_slide',
        });
    });

}());
