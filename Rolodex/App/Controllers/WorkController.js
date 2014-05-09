infoApp.controller("infoController",
    function ($scope, $window) {

        $scope.sortOrder = "-eYear";

        $scope.toggleShowDetails = function (work) {
        	work.showDetails = !work.showDetails;
        };

        $scope.worksites =
            [
                new Work("Software Engineer",
                    "Thomson Reuters",
                    "May",
										2014,
										"Current",
									  2014,
										"Lorem Ipsum",
										"7322 Newman Blvd",
										"Dexter",
										"MI",
										3
                ),
                new Work("Programming Intern",
                    "Thomson Reuters",
                    "May",
										2013,
										"August",
										2013,
										"Lorem Ipsum",
										"7322 Newman Blvd",
										"Dexter",
										"MI",
										2
                ),
                new Work("Programming Intern",
                    "Retail Me Not, Inc",
                    "May",
										2012,
									  "August",
									  2012,
										"Lorem Ipsum",
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
										"Lorem Ipsum",
										"1301 Beal Ave",
										"Ann Arbor",
										"MI",
										0
                )
            ];
    }
);
