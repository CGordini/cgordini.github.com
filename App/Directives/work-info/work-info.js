(function(angular) {
    'use strict';

    var app = angular.module("app");

    app.directive("workInfo",
        [
        function(){
        return {
            restrict: 'E',
            scope: {
              model: '=',
            },
            template:
            '<div class="work-info-background">' + //style="background:{{backgroundUrl}}; background-size:100%;"
                '<div class="work-info jumbotron">' +

                    //TODO: move this to its own directive??
                    '<uib-accordion close-others="oneAtATime">' +
                        '<uib-accordion-group ng-repeat="job in model.jobs | orderBy:\'-time\'">' +
                            '<uib-accordion-heading>' +
                                '<div class="row">' +
                                    '<div class="col-xs-6">' +
                                        '<div class="row">' +
                                            '<div class="col-xs-12">' +
                                                '<h4>{{job.title}}</h4>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="row">' +
                                            '<div class="col-xs-12">' +
                                                '<h5><i>{{job.place}}</i></h5>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="col-xs-3"></div>' +
                                    '<div class="col-xs-3">{{job.sMonth}} {{job.sYear}} - {{job.eMonth}} {{job.eYear}}</div>'+
                                '</div>' +
                            '</uib-accordion-heading>' +
                            '<div class="row">' +
                                '<div class="col-xs-12">' +
                                    '{{job.summary}}' +
                                '</div>' +
                            '</div>' +
                            '<br/>' +
                            '<div class="row">' +
                                '<div class="col-xs-12">' +
                                    '{{job.address}}, <br />' +
                                    '{{job.city}}&nbsp;{{job.state}}' +
                                '</div>' +
                            '</div>' +
                        '</uib-accordion-group>' +
                    '</uib-accordion>' +

                '</div>' +
            '</div>',
            link: function(scope){
                //scope.backgroundUrl = "url(\"files/images/map.png\") no-repeat";
                scope.oneAtATime = true;

                scope.isOpen = function($index){
                    if (index == 0) return true;
                };
            }
        };
    }]);
}(window.angular));
