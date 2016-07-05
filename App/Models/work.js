(function(angular){
    'use strict';

    var app = angular.module('app');

    var Work = function () {
        function Work() {
            this.title = arguments[0] || "";
            this.place = arguments[1] || "";
            this.sMonth = arguments[2] || "";
            this.sYear = arguments[3] || undefined;
            this.eMonth = arguments[4] || "";
            this.eYear = arguments[5] || undefined;
            this.summary = arguments[6] || "";
            this.description = arguments[7] || "";
            this.address = arguments[8] || "";
            this.city = arguments[9] || "";
            this.state = arguments[10] || "";
            this.time = arguments[11] || undefined;
        }

        return Work;
    };

    app.factory('Work', Work);

})(window.angular);
