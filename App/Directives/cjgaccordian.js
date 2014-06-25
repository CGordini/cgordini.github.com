angular.module('infoApp').directive('cjgaccordian', function(){
        return {
            restrict: 'E',
            scope: { worksites: '=sites'},
            template: '<accordian close-others="true">' +
                           '<accordian-group heading="{{work.title}}, {{work.place}}" ng-repeat="work in getSites()">' +
                            	'<div class="col-sm-6 text-left">' +
                                	'{{work.sMonth}}&nbsp;{{work.sYear}}&nbsp;-&nbsp;{{work.eMonth}}&nbsp;{{work.eYear}}' +
                            	'</div>' +
                           '</accordian-group>' +
                       '</accordian>',
            link: function(scope){

              scope.getSites = function()
              {
              	return scope.$parent.worksites;
              }
              // $scope.oneAtATime = false;
              // $scope.status.isFirstOpen = true;
            }
        }
    });
