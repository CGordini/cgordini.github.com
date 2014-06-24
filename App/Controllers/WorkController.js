infoApp.controller("infoController",
    function ($scope, $window) {
        
        $scope.sortWorkOrder = "-eYear";

        $scope.hideAboutDetails = true;
        $scope.hideAboutPics = false;
        $scope.hideAboutAll = false;

        $scope.hideWorkAll = true;

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

        $scope.worksites =
                    [
                            new Work("Software Engineer",
                                    "Thomson Reuters",
                                    "May",
                                    2014,
                                    "Current",
                                    2014,
                                    "Document Management System Development",
                                    "7322 Newman Blvd",
                                    "Dexter",
                                    "MI",
                                    3
                            ),
                            new Work("Accounting Development Intern",
                                    "Thomson Reuters",
                                    "May",
                                    2013,
                                    "August",
                                    2013,
                                    "Workpapers CS/Engagement",
                                    "7322 Newman Blvd",
                                    "Dexter",
                                    "MI",
                                    2
                            ),
                            new Work("Programming Intern",
                                    "Retail Me Not, Inc.",
                                    "May",
                                    2012,
                                    "August",
                                    2012,
                                    "Web Development",
                                    "301 Congress Ave #700",
                                    "Austin",
                                    "TX",
                                    1
                            ),
                            new Work("Programming Researcher",
                                    "University of Michigan EECS Department",
                                    "May",
                                    2011,
                                    "May",
                                    2012,
                                    "Software-Defined Radio development, in conjunction with Microsoft Research",
                                    "1301 Beal Ave",
                                    "Ann Arbor",
                                    "MI",
                                    0
                            )
                    ];
    }
);
