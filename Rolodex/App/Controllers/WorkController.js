infoApp.controller("infoController",
    function ($scope, $window) {

    	$scope.sortWorkOrder = "-eYear";

    	$scope.aboutDetails = "true";
    	$scope.aboutPics = "false";
	    $scope.aboutAll = "false";

      $scope.toggleShowWorkDetails = function (work) {
        work.showDetails = !work.showDetails;
      };

      $scope.toggleShowAboutDetails = function () {
      	$scope.aboutDetails = !$scope.aboutDetails;
      	$scope.aboutAll = $scope.aboutPics && $scope.aboutDetails;
      };

      $scope.toggleShowAboutPictures = function () {
      	$scope.aboutPics = !$scope.aboutPics;
      	$scope.aboutAll = $scope.aboutPics && $scope.aboutDetails;
      	console.log("aboutPics is ", $scope.aboutPics);
	      console.log("aboutAll is ", $scope.aboutAll);
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
