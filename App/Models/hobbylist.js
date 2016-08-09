(function(angular){
    'use strict';

    angular.module('app')

    .factory('Hobbylist', ['Slide',
        function(Slide) {

            var factory = {};

            factory.getSlides = function(){
                var internalList = new Array(5);

                internalList[0] = new Slide("Lights Out in Michigan",
                                            "http://cgordini.kinja.com/lights-out-in-michigan-1783062234",
                                            "July 3rd, 2016",
                                            "https://i.kinja-img.com/gawker-media/image/upload/s--gbSO5mP4--/c_scale,fl_progressive,q_80,w_800/iu4ecgz2dervdifn5qkj.jpg",
                                            "I've been toying around with getting into blogging about my experiences and fascination with cars, car culture, racing, and the like, and this seems an appropriate platform.<br/><br/>" +
                                            "A little about myself: I'm currently the ripe old age of 25, which means my insurance rates have finally gone down. I pay for car bills, insurance, premium gas, and for my dog's food with a software engineering programming job.<br/><br/>" +
                                            "My first car was a 1999 Pontiac Grand Am SE (read: six cylinders of 170 horsepowers crying for help) Coupe, that I loved right up until it rusted out. Thanks, mid-90's GM and Michigan roads, winters, salt, and Department of Transportation, which deserves an angry rant all to itself" +
                                            "<a href=\"http://cgordini.kinja.com/lights-out-in-michigan-1783062234\">...</a>"
                                        );

                internalList[1] = new Slide("Why I Ride",
                                            "http://cgordini.kinja.com/why-i-ride-1785007967?rev=1470712148189",
                                            "Augst 8th, 2016",
                                            "https://i.kinja-img.com/gawker-media/image/upload/s--K9D-hBbe--/c_scale,fl_progressive,q_80,w_800/kd0k0nglr2sldi7cs4vf.jpg",
                                            "Back in April, I elected to do a MSF course at my local community college -- the total cost of which was $25. Best $25 I've ever spent, though the course itself was more of a bootcamp than I expected -- 7AM-7PM weekend shift on the \"range\" (driving course).<br/><br/>" +
                                            "That's longer than my mind is capable of working at my office job, and seeing as I had never ever ever ridden a motorcycle before like ever, that's an even longer time to have to focus" +
                                            "<a href=\"http://cgordini.kinja.com/why-i-ride-1785007967?rev=1470712148189\">...</a>"
                                        );

                internalList[2] = new Slide("Concours d'Elegance -- Day 1",
                                            "http://cgordini.kinja.com/concours-delegance-day-1-1784562930",
                                            "July 30th, 2016",
                                            "https://i.kinja-img.com/gawker-media/image/upload/s--ZTmWDjfG--/c_scale,fl_progressive,q_80,w_800/avhjbnxnnidoiwxdyqj6.jpg",
                                            "Today was the first day of the three-day Concours d'Elegance of America in Plymouth, Michigan. For those who don't know, Woodward Avenue is like the Mecca of car events in Michigan.<br/><br/>" +
                                            "Concours d'Elegance is like the Mecca of car events in <i>America</i>. And it turns out, there's been a satellite event (main one being in Pebble Beach) right under my nose. Best part: today's events were all free -- the only thing in my price range at the entire event" +
                                            "<a href=\"http://cgordini.kinja.com/concours-delegance-day-1-1784562930\">...</a>"
                                        );


                internalList[3] = new Slide("#becauseracecar (July 21st/22nd, 2016)",
                                            "http://cgordini.kinja.com/becauseracecar-july-21st-22nd-2016-1784215359",
                                            "July 24th, 2016",
                                            "https://i.kinja-img.com/gawker-media/image/upload/s--KHYVd8nJ--/c_fit,fl_progressive,q_80,w_636/dkykhyflotmvuikpowf6.jpg",
                                            "I spent my Friday out doing the Motor State Challenge at Gingerman Raceway, South Haven, MI. This was only my second track day, so clearly I'm an expert now.<br/><br/>" +
                                            "Also, my first time going the \"right direction\" on the track -- when I previously raced via <a href=\"http://www.autointerest.com/\">AutoInterests</a>, we ran the track counter-clockwise. That time I had a seasoned driving instructor in the car.<br/><br/>" +
                                            "This time, I had to make up my own lines, which in some areas was happily easy and I could tell when I nailed them. In other areas, not so much" +
                                            "<a href=\"http://cgordini.kinja.com/becauseracecar-july-21st-22nd-2016-1784215359\">...</a>"
                                        );


                // internalList[4] = new Slide("Cars and Coffee (Week of July 10th)",
                //                             "http://cgordini.kinja.com/cars-and-coffee-week-of-july-10th-1783791336",
                //                             "July 16th, 2016",
                //                             "https://i.kinja-img.com/gawker-media/image/upload/s--J9L8h2Bg--/c_fit,fl_progressive,q_80,w_636/l5gop3c494k90mgwego8.jpg",
                //                             "For the last couple months, I've been attending Cars & Coffee(s), along with assorted other shows. Now that I have this blog, I figured I can start actually sharing the results of my adventures.<br/><br/>" +
                //                             "All photos are not edited *except* for some small amounts of rotation (blame the photographer adjusting to a DSLR), and the censoring of any public plates for protection of the owner.<br/><br/>" +
                //                             "<a href=\"https://www.flickr.com/gp/145503767@N06/77h3US\">https://www.flickr.com/gp/145503767@N06/77h3US</a>"
                //                         );

                // internalList[3] = new Slide("My Car Fax, Part 1",
                //                             "http://cgordini.kinja.com/my-car-fax-1783634243",
                //                             "July 14th, 2016",
                //                             "https://i.kinja-img.com/gawker-media/image/upload/s--jMwZbWpd--/c_fit,fl_progressive,q_80,w_636/eegssiirfnmk18tpdtv3.jpg",
                //                             "I've done a first post* that introduced me, and I figured next up should be discussing my personal car history and what got me into car culture as a whole.<br/><br/>" +
                //                             "In this, I'll go over my upbringing, being so close to Detroit and in a UAW household, my first car, my current/second car, and all the fun I've had and mistakes I've made.<br/><br/>" +
                //                             "Fair warning, there's a lot here -- maybe this makes up for my recent absence*" +
                //                             "<a href=\"http://cgordini.kinja.com/my-car-fax-1783634243\">...</a>"
                //                         );

                // internalList[4] = new Slide("My Car Fax, Part 2",
                //                             "http://cgordini.kinja.com/my-car-fax-part-2-1783634321",
                //                             "July 14th, 2016",
                //                             "https://i.kinja-img.com/gawker-media/image/upload/s--kcO_Wdwf--/c_fit,fl_progressive,q_80,w_636/n9ftrvafb5stdqhduhlr.jpg",
                //                             "After working three different internships, in the summer of 2012, I finally saved up enough for My Baby, a 2007 Vista Blue Ford<br/> (!!! -- sorry, Dad) Mustang V6. 5-speed manual trans, Pony Package.<br/><br/>" +
                //                             "Turns out manual + Vista Blue for that generation (which I actually really wanted, more than the 2010-2014's) is hella rare, and my choices were initially limited to a 600 mile road trip to Nowhere, Nebraska.<br/><br/>" +
                //                             "Then one popped up near Lansing, Michigan, and Dad and I snapped on it. Just like that, Cory found himself in debt, and with a credit history" +
                //                             "<a href=\"http://cgordini.kinja.com/my-car-fax-part-2-1783634321\">...</a>"
                //                         );

                return internalList;
            };

            return factory;
        }
    ]);
})(window.angular);
