(function(angular){
    'use strict';

    angular.module('app')

    .factory('DateHelper',
        function(){

            var factory = {};

            factory.translateMonth = function(integerMonth){
                var month = new Array(13);
                month[0] = ''; //DO NOT USE
                month[1] = "January";
                month[2] = "February";
                month[3] = "March";
                month[4] = "April";
                month[5] = "May";
                month[6] = "June";
                month[7] = "July";
                month[8] = "August";
                month[9] = "September";
                month[10] = "October";
                month[11] = "November";
                month[12] = "December";
                return month[integerMonth];
            };

            factory.translateDate = function(integerDate){
                var date = new Array(32);
                date[0] = ''; //DO NOT USE
                date[1] = "st";
                date[2] = "nd";
                date[3] = "rd";
                date[4] = "th";
                date[5] = "th";
                date[6] = "th";
                date[7] = "th";
                date[8] = "th";
                date[9] = "th";
                date[10]= "th";
                date[11]= "th";
                date[12]= "th";
                date[13]= "th";
                date[14]= "th";
                date[15]= "th";
                date[16]= "th";
                date[17]= "th";
                date[18]= "th";
                date[19]= "th";
                date[20]= "th";
                date[21]= "st";
                date[22]= "nd";
                date[23]= "rd";
                date[24]= "th";
                date[25]= "th";
                date[26]= "th";
                date[27]= "th";
                date[28]= "th";
                date[29]= "th";
                date[30]= "th";
                date[31]= "st";

                return integerDate + date[integerDate];
            };

            return factory;
        }
    );
})(window.angular);
