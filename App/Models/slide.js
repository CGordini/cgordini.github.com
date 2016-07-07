(function(angular){
    'use strict';

    var app = angular.module('app');

    var Slide = function () {
        function Slide() {
            this.title = arguments[0] || "";
            this.link = arguments[1] || "";
            this.date = arguments[2] || "";
            this.image = arguments[3] || "";
            this.content = arguments[4] || "";
        }

        return Slide;
    };

    app.factory('Slide', Slide);

})(window.angular);
