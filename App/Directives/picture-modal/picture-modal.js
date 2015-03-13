(function(angular){
    'use strict';

    angular.module('app').controller('pictureModalController', [
        '$scope',
        '$modalInstance',
        'Imagelist',
        function($scope, $modalInstance, Imagelist){

            // $scope.headerText = config.headerText;
            // $scope.nameText = config.nameText;
            // $scope.uniqueNameError = config.uniqueNameError;
            // $scope.requiredText = config.requiredText;
            // $scope.saveText = config.save;
            // $scope.cancelText = config.cancel;
            var selectedPicture;

            $scope.images = Imagelist.getImages();

            $scope.setSelection = function(item){
                selectedPicture = item;
            }

            $scope.selectRequest = function() {
                $scope.closeModalAction(selectedPicture);
            };

            $scope.closeModalAction = function(selection){
                $modalInstance.close(selection);
            };

            $scope.cancelSelection = function() {
                $modalInstance.dismiss('cancelled');
            };
        }
    ]);
})(window.angular);
