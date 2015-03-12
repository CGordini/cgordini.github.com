var app = new angular.module("app", ["ui.bootstrap", "ngAnimate"]);

app.filter('rawHtml', ['$sce', function($sce){
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}]);
