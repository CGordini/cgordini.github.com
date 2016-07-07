(function(angular){
    'use strict';

    angular.module('app')

    .factory('Hobbylist', ['Slide',
        function(Slide) {

            var factory = {};

            factory.getSlides = function(){
                var internalList = new Array(1);

                internalList[0] = new Slide("Lights Out in Michigan",
                                            "http://cgordini.kinja.com/lights-out-in-michigan-1783062234",
                                            "July 3rd, 2016",
                                            "https://i.kinja-img.com/gawker-media/image/upload/s--gbSO5mP4--/c_scale,fl_progressive,q_80,w_800/iu4ecgz2dervdifn5qkj.jpg",
                                            "I've been toying around with getting into blogging about my experiences and fascination with cars, car culture, racing, and the like, and this seems an appropriate platform.<br/><br/>" +
                                            "A little about myself: I'm currently the ripe old age of 25, which means my insurance rates have finally gone down. I pay for car bills, insurance, premium gas, and for my dog's food with a software engineering programming job.<br/><br/>" +
                                            "My first car was a 1999 Pontiac Grand Am SE (read: six cylinders of 170 horsepowers crying for help) Coupe, that I loved right up until it rusted out. Thanks, mid-90's GM and Michigan roads, winters, salt, and Department of Transportation, which deserves an angry rant all to itself" +
                                            "<a href=\"http://cgordini.kinja.com/lights-out-in-michigan-1783062234\">...</a>"
                                        );

                return internalList;
            };

            return factory;
        }
    ]);
})(window.angular);
