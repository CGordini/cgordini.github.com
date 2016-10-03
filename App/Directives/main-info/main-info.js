(function(angular) {
    'use strict';

    var app = angular.module("app");

    app.directive("mainInfo",
        ['$uibModal',
        function($uibModal){
        return {
            restrict: 'E',
            scope: {
              model: '=',
            },
            template:
            '<div class="main-info-container">' +
                '<div class="main-info jumbotron about-me">' +

                    '<div class="row">' +
                        '<div class="col-xs-3">' +
                            '<div class="image-background">' +
                                '<div class="image-square">' +
                                    '<image class="rounded centered" ng-click="openModal()"' +
                                    ' src="{{model.curImage.pic}}" title="{{model.curImage.title}}"></image>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +

                        '<div class="col-xs-8 padded-left">' +

                            '<div class="row">' +
                                '<div class="pretty-header rounded">' +
                                    '<div class="header-text">{{model.header}}</div>' +
                                '</div>' +
                            '</div>' +

                            '<div class="row">' +
                                '<br/>' +
                                '<div class="row info-text" ng-repeat="line in model.text">' +
                                    '<div class="col-xs-3 bolded">{{line.description}}</div>' +
                                    '<div class="col-xs-6">{{line.info}}</div>' +
                                '</div>' +
                            '</div>' +

                        '</div>' +
                    '</div>' +

                    '<div class="row">'+
                        '<div class="col-xs-3">' +
                            '<button type="button" class="btn btn-primary cjg-btn" ng-click="openModal()">' +
                                'Change Picture' +
                            '</button>' +
                        '</div>' +
                    '</div>' +

                '</div>' +

                '<div class="main-info jumbotron description">' +
                    '<div class="row info-text">' +
                        '<div class="col-xs-12">' +
                            'I am a full-time Software Engineer, working for Thomson Reuters as of Spring 2014.<br />' +
                            'I have four years of industry experience, three of which involving the .NET C# platform.<br /><br />' +
                            'I was previously an Instructive Aide (IA) for EECS 481, the Software Engineering course at the University of Michigan.<br />' +
                            'My work for the class was the subject of <a href="http://btn.com/2014/02/14/btn-livebig-michigan-premiere-tonight/">' +
                            'a Big Ten interview</a> as well as <a href="http://dme.engin.umich.edu/grace/#-home">a University of Michigan informative video.</a> <br /><br />' +

                            'As a little about myself: I consider myself a dog person, a fan of fashion and all things internally combusted.<br/>' +
                            'I currently own a 2007 Ford Mustang and a 2005 Kawasaki Ninja; when I\'m not working or watching football,<br/>' +
                            'you can find me in the garage or on assorted tracks throughout Michigan.<br/><br/>' +
                            'I also am quite a beer snob (my favorite is Bell\'s Brewing from Kalamazoo, Michigan), a guitarist,<br/>' +
                            'and an electronics hobbyist (with an interest in Arduino and Raspberry Pi microcontrollers).' +
                        '</div>' +
                    '</div>' +

                '</div>' +
            '</div>',
            link: function(scope){
                scope.openModal = function () {

                    var _templatePath = function(template) {
                        return 'Directives/picture-modal/' + template + '.2js.html';
                    };

                    var modalInstance = $uibModal.open({
                        templateUrl: _templatePath('picture-modal'),
                        // backdrop: 'static',
                        // size: configOptions.size,
                        controller: 'pictureModalController',
                        // resolve: {
                        //     configOptions: function() { return configOptions; }
                        // }
                    });

                    if (modalInstance) {
                        modalInstance.result.then(function(result) {
                            if (result){
                                scope.model.curImage = result;
                            }
                        });
                    }
                };
            }
        };
    }]);
}(window.angular));
