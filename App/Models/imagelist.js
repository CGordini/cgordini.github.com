(function(angular){
    'use strict';

    angular.module('app')

    .factory('Imagelist',
        function() {

            var factory = {};

            factory.getImages = function(){
                var internalList = new Array(4);

                internalList[0] = { pic: 'files/images/img0.jpg', title: 'Graduation' };
                internalList[1] = { pic: 'files/images/img1.jpg', title: 'Proud Wolverine' };
                internalList[2] = { pic: 'files/images/img2.jpg', title: 'Fort Myers, FL' };
                internalList[3] = { pic: 'files/images/img3.jpg', title: 'Holidays' };
                internalList[4] = { pic: 'files/images/img4.jpg', title: 'Summer' };
                internalList[5] = { pic: 'files/images/img5.jpg', title: 'Oberon' };
                internalList[6] = { pic: 'files/images/img6.jpg', title: 'Mustang' };
                internalList[7] = { pic: 'files/images/img7.jpg', title: 'Google Glass' };
                internalList[8] = { pic: 'files/images/img8.jpg', title: 'Bell\'s' };
                internalList[9] = { pic: 'files/images/img9.jpg', title: 'Guitar' };
                internalList[10]= { pic: 'files/images/img10.jpg',title: 'Hopcat, Lansing' };
                internalList[11]= { pic: 'files/images/img11.jpg',title: '481' };

                return internalList;
            };

            return factory;
        }
    );
})(window.angular);
