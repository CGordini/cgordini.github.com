angular.module('app').directive('mainInfo', function(){
    return {
        restrict: 'E',
        scope: {
          model: '=',
        },
        template:
        '<div class="main-info jumbotron about-me">' +

            '<div class="row">' +
                '<div class="col-xs-3">' +
                    '<div class="image-square">' +
                        '<image class="rounded centered" src="{{model.curImage.pic}}" title="{{model.curImage.title}}"></image>' +
                    '</div>' +
                '</div>' +

                '<div class="col-xs-8 padded-left">' +

                    '<div class="row">' +
                        '<div class="pretty-header rounded">' +
                            '<div class="header-text">{{model.header}}</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="row">' +
                        '<br/>' +
                        '<div class="row info-text" ng-repeat="line in model.text">' +
                            '<div class="col-xs-3 bolded">{{line.description}}</div>' +
                            '<div class="col-xs-6">{{line.info}}</div>' +
                        '</div>' +
                    '</div>' +

                '</div>' +
            '</div>' +
        '</div>'
    };
});
