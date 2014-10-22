infoApp.controller("infoController",
    function ($scope, $window, dmsOneDrive) {

        $scope.sortWorkOrder = "-eYear";

        $scope.hideAboutDetails = false;
        $scope.hideAboutPics = true;
        $scope.hideAboutAll = false;

        $scope.hideWorkAll = true;

        $scope.oneAtATime = false;

        $scope.status = {
            isFirstOpen: true,
        };

        $scope.toggleShowWorkDetails = function (work) {
            work.showDetails = !work.showDetails;
        };

        $scope.toggleShowAllWorkDetails = function () {
            $scope.hideWorkAll = !$scope.hideWorkAll;
        };

        $scope.toggleShowAboutDetails = function () {
            $scope.hideAboutDetails = !$scope.hideAboutDetails;
            $scope.hideAboutAll = $scope.hideAboutPics && $scope.hideAboutDetails;
        };

        $scope.toggleShowAboutPictures = function () {
            $scope.hideAboutPics = !$scope.hideAboutPics;
            $scope.hideAboutAll = $scope.hideAboutPics && $scope.hideAboutDetails;
        };

        $scope.doOneDriveThings = function(){
            console.log('herro');
            dmsOneDrive.create();
        };

        $scope.worksites = Worksites;
        $scope.badgelist = Badgelist;
    }
);
