angular.module('app').directive('cjgcarousel', function(){
        return {
            restrict: 'A',
            scope: {},
            template: '<div height="300px" >' +
                           '<carousel interval="myInterval" style="height:300px;">' +
                                '<slide ng-repeat="slide in slides" active="slide.active">' +
                                    '<img ng-src="{{slide.image}}" style="margin:auto; width:auto; height:300px">' +
                                '</slide>' +
                            '</carousel>' +
                        '</div>',
            link: function($scope){

              $scope.myInterval = 5000;
              $scope.slides = [];

              for (var i = 0; i < 10; i++){
                $scope.slides.push({image: "App/Images/CarouselImages/img" + i + ".jpg"});
              }
            }
        }
    });
