(function(angular){
    'use strict';

    angular.module('app')

    .factory('Worklist', ['Work',
        function(Work) {

            var factory = {};

            factory.getWork = function(){
                var internalList = new Array(4);

                internalList[0] = new Work("Programming Researcher",
                                            "University of Michigan EECS Department",
                                            "May",
                                            2011,
                                            "May",
                                            2012,
                                            "Windows Driver Development",
                                            "Developed a cooperative network algorithm in conjunction with Microsoft Research,\n" + 
                                            "and worked it into a NDIS driver for proprietary Microsoft Research software-developed-radio hardware as a proof-of-concept.\n" +
                                            "Displayed at Microsoft Research New England.",
                                            "1301 Beal Ave",
                                            "Ann Arbor",
                                            "MI",
                                            1
                                        );

                internalList[1] = new Work("Programming Intern",
                                            "Retail Me Not, Inc.",
                                            "May",
                                            2012,
                                            "August",
                                            2012,
                                            "Web Development",
                                            "Developed a JQuery/HTML/CSS-based frontend feature for a legacy product.\n" +
                                            "Assisted with wiring up backend to communicate with aforementioned new frontend.",
                                            "301 Congress Ave #700",
                                            "Austin",
                                            "TX",
                                            2
                                        );

                internalList[2] = new Work("Accounting Development Intern",
                                            "Thomson Reuters",
                                            "May",
                                            2013,
                                            "August",
                                            2013,
                                            "Workpapers CS/Engagement",
                                            "Assisted with development of assorted features for a C# Windows Forms program.",
                                            "7322 Newman Blvd",
                                            "Dexter",
                                            "MI",
                                            3
                                        );

                internalList[3] = new Work("Software Engineer",
                                            "Thomson Reuters",
                                            "May",
                                            2014,
                                            "Current",
                                            "",
                                            "Document Management Services Development/Accounting Development",
                                            "Assisted with development of next-generation AngularJS-based web program.\n" +
                                            "Upon successful release, returned to previous Windows Forms development.",
                                            "6300 Interfirst Drive",
                                            "Ann Arbor",
                                            "MI",
                                            4
                                        );

                return internalList;
            };

            return factory;
        }
    ]);
})(window.angular);
