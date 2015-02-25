(function(angular){
    'use strict';

    var app = angular.module('app');

    var Badge = function () {
        function Badge() {
            this.title = arguments[0] || "";
            this.link =  arguments[1] || "";
            this.image = arguments[2] || "";
        }

        return Badge;
    };

    app.factory('Badge', Badge);

})(window.angular);
