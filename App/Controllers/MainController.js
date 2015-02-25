(function(angular) {
    'use strict';

    var app = angular.module("app");

    app.controller("mainController",
        ['$scope',
         '$window',
         function ($scope, $window) {

            $scope.mainInfoModel = {
                //TODO: dynamically swap these out with help of a Modal
                curImage:
                {
                    pic: 'files/images/img5.jpg',
                    title: 'Oberon Day'
                },
                header: 'Cory Gordinier',
                text:
                    [
                        {'description': 'Employed by:', 'info': 'Thomson Reuters'},
                        {'description': 'Graduate of:', 'info': 'University of Michigan'},
                        {'description': 'Degree:',      'info': 'Bachelors: Computer Science in Engineering'},
                        {'description': 'Lives in:',    'info': 'Dexter, Michigan'},
                        {'description': 'Born in:',     'info': 'Ann Arbor, Michigan'},
                    ]
            };

        }]);
}(window.angular));


