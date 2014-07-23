infoApp.controller("infoController",
    function ($scope, $window) {

        $scope.sortWorkOrder = "-eYear";

        $scope.hideAboutDetails = true;
        $scope.hideAboutPics = false;
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

        $scope.worksites = Worksites;
        $scope.badgelist = Badgelist;
    }
);
