(function(angular){
    'use strict';

    angular.module('app')

    .factory('Worklist', ['Work',
        function(Work) {

            var factory = {};

            factory.getWork = function(){
                var internalList = new Array(4);

                internalList[0] = new Work("Software Engineer",
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
                                        );

                internalList[1] = new Work("Accounting Development Intern",
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
                                        );

                internalList[2] = new Work("Programming Intern",
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
                                        );

                internalList[3] = new Work("Programming Researcher",
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
                                        );

                return internalList;
            };

            return factory;
        }
    ]);
})(window.angular);
