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
                    '<div class="row">' +
                        '<div class="col-xs-12">'+
                            '<div class="row">' +
                                '<div class="col-xs-12">'+
                                    '<h2><a href="{{model.link}}">{{model.title}}</a></h2>' +
                                '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-xs-12">'+
                                    '<h5><a href="{{model.link}}">Written {{model.date}}</a></h5>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="row">' +
                        '<div class="col-xs-12">'+
                            '<div class="row">' +
                                '<div class="col-xs-6">' +
                                    '<image src="{{model.image}}" class="slide-image"></image>' +
                                '</div>' +
                                '<div class="col-xs-6></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="row">' +
                        '<div class="col-xs-12 hobby-content">'+
                            '<div ng-bind-html="model.content | rawHtml"><a href="{{model.link}}">...</a></div>' +
                        '</div>' +
                    '</div>' +


                '</div>' +
            '</div>',
            link: function(scope){
                //TODO
            }
        };
    }]);
}(window.angular));
