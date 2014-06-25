angular.module('infoApp').directive('cjgaccordian', function(){
        return {
            restrict: 'E',
            scope: { worksites: '=sites'},
            template: '<accordion close-others="true">' +
                           '<accordion-group class="subPanel" heading="{{work.title}}, {{work.place}}" ng-repeat="work in getSites()">' +
                            	'<div class="col-sm-6 text-left">' +
                                	'{{work.sMonth}}&nbsp;{{work.sYear}}&nbsp;-&nbsp;{{work.eMonth}}&nbsp;{{work.eYear}}' +
                            	'</div>' +
                              '<br />' +
                              '<br />' +
                              '<div class="col-sm-5 col-sm-offset-1">' +
                                  '<div class="row">' +
                                      '<b>{{work.summary}}</b>' +
                                  '</div>' +
                                  '<br/>' +
                                  '<div class="row">' +
                                      '{{work.address}}, <br />' +
                                      '{{work.city}}&nbsp;{{work.state}}' +
                                  '</div>' +
                              '</div>' +
                           '</accordion-group>' +
                       '</accordion>',
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
