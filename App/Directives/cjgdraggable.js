angular.module('app').directive('cjgdraggable', function() {
    return {
        restrict:'A',
        link: function(scope, element, attrs) {
            element.draggable();
        }
    };
});
