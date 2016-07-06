(function(angular) {
    'use strict';

    var app = angular.module("app");

    app.directive("hobbyInfo",
        [
        function(){
        return {
            restrict: 'E',
            scope: {
              model: '=',
            },
            template:
            '<div class="hobby-info-container">' +
                '<div class="jumbotron">' +
                    '{{model.title}}' +

                    '<image src="{{model.image}}" class="slide-image"></image>' +

                    '{{model.content}}' +

                '</div>' +
            '</div>',
            link: function(scope){
                //TODO
            }
        };
    }]);
}(window.angular));
