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
            '<div class="hobby-info-background">' + //style="background:{{backgroundUrl}}; background-size:100%;"
                '<div class="hobby-info jumbotron">' +


                    '<uib-accordion close-others="oneAtATime">' +
                        '<uib-accordion-group heading="{{group.title}}" ng-repeat="group in model.groups">'+
                            '{{group.content}}' +
                        '</uib-accordion-group>' +
                    '</uib-accordion>' +

                '</div>' +
            '</div>',
            link: function(scope){
                //scope.backgroundUrl = "url(\"files/images/map.png\") no-repeat";
                scope.oneAtATime = true;
            }
        };
    }]);
}(window.angular));
