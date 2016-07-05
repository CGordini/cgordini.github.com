(function(angular) {
    'use strict';

    var app = angular.module("app");

    app.controller("mainController",
        ['$scope',
         '$window',
         'Badgelist',
         'Worklist',
         function ($scope, $window, Badgelist, Worklist) {
            $scope.badgelist = Badgelist.getBadges();

            $scope.mainInfoModel = {
                //TODO: dynamically swap these out with help of a Modal
                curImage:
                {
                    pic: 'files/images/img11.jpg',
                    title: '481'
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

            var jobs = Worklist.getWork();

            $scope.workInfoModel = {
                jobs: jobs
            };

            $scope.toggleSlideButton = false;

            $scope.animateCount = 0;

            $scope.slidebtnClick = function(){
                $scope.toggleSlideButton = !$scope.toggleSlideButton;

                if ($scope.toggleSlideButton) {
                    //Toggle visibility
                    document.getElementById('smallSocialButton').classList.add('invisible');
                    //Animate
                    document.getElementById('fullSocialButton').classList.remove('slideOutRight');
                    document.getElementById('fullSocialButton').classList.add('slideInRight');
                } else {
                    //Animate
                    document.getElementById('fullSocialButton').classList.remove('slideInLeft');
                    document.getElementById('fullSocialButton').classList.add('slideOutRight');
                    //Toggle visibility
                    document.getElementById('smallSocialButton').classList.remove('invisible');
                }
                $scope.animateCount++;
            };

            //TOOLBAR RESIZE
            var minToolbarWidth = 991;
            var collapseWidth = 767;

            var handleResize = function(){
                $scope.$apply(function(){
                    $scope.fullToolbar = (window.innerWidth > minToolbarWidth);
                    $scope.microBar = (window.innerWidth <= collapseWidth);
                    $scope.miniBar = !$scope.fullToolbar && !$scope.microBar;
                });
            };

            $window.addEventListener('resize', handleResize, false);

            $scope.isCjgMiniIcon = function(badgeImages){
                //If this IS a cjg icon AND we're in minimode, return true
                if (badgeImages.indexOf('cjg-icon') !== -1 && scope.miniBar){
                    return true;
                }
                return false;
            };

            $scope.isNormalMiniIcon = function(badgeImages){
                //If this is NOT a cjg icon AND we're in minimode, return true
                if (badgeImages.indexOf('cjg-icon') === -1 && scope.miniBar){
                    return true;
                }
                return false;
            };

            $scope.fullToolbar = (window.innerWidth >= minToolbarWidth);
            $scope.microBar = (window.innerWidth <= collapseWidth);
            $scope.miniBar = !$scope.fullToolbar && !$scope.microBar;

        }]);
}(window.angular));


