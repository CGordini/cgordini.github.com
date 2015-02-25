(function(angular){
    'use strict';

    angular.module('app')

    .factory('Badgelist', ['Badge',
        function(Badge) {

            var factory = {};

            factory.getBadges = function(){
                var internalList = new Array(7);

                internalList[0] = new Badge("My Github",
                                         "https://github.com/CGordini",
                                         "fa-github");

                internalList[1] = new Badge("My Bitbucket",
                                         "https://bitbucket.org/cgordini",
                                         "fa-bitbucket");

                internalList[2] = new Badge("My Blog",
                                         "http://cgordini.blogspot.com/",
                                         "fa-google");

                internalList[3] = new Badge("My LinkedIn",
                                         "https://www.linkedin.com/pub/cory-gordinier/4b/288/b07",
                                         "fa-linkedin");

                internalList[4] = new Badge("My Resume",
                                         "App/Docs/Resume.pdf",
                                         "fa-file-text");

                internalList[5] = new Badge("My References",
                                         "App/Docs/References.pdf",
                                         "fa-file-pdf-o");

                internalList[6] = new Badge("Email Me",
                                         "mailto:cory.gordinier@gmail.com",
                                         "fa-envelope-o");

                return internalList;
            };

            return factory;
        }
    ]);
})(window.angular);
