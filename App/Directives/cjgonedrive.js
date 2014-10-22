
(function(WL) {
    'use strict';

    var bmoonApp = angular.module('infoApp');

    var dmsOneDrive = function(){

        this.isAvailable = false;
        var authToken;

        this.checkAvailability = function(){
            if (!WL || WL === undefined){
                this.isAvailable = false;
            } else {
                this.isAvailable = true;
            }
        };

        this.create = function(callback) {
            if (!this.isAvailable) {
                console.log('There was an error connecting to Box.');
                return;
            }

            WL.init({ client_id: '000000004812EB53', redirect_uri: 'https://cgordini.github.io', scope: 'wl.signin' });

            var callbackFn = callback;

            WL.login().then(
                function(response){
                    authToken = response.session.authentication_token;
                },
                function(){
                    console.log('error logging in');
                }
            );

            //Actually pick files
            WL.fileDialog({
                mode: 'open',
                select: 'multi',
            }).then(
                function (response) {
                    var msg = '';
                    // For each folder selected...
                    if (response.data.folders && response.data.folders.length > 0) {
                        for (var folder = 0; folder < response.data.folders.length; folder++) {
                            // Use folder IDs to iterate through child folders and files as needed.
                            msg += '\n' + response.data.folders[folder].id;
                        }
                    }
                    // For each file selected...
                    if (response.data.files && response.data.files.length > 0) {
                        for (var file = 0; file < response.data.files.length; file++) {
                            // Use file IDs to iterate through files as needed.
                            msg += '\n\n' + response.data.files[file].name;
                            msg += '\n' + response.data.files[file].link;
                        }
                    }
                    //Log the message
                    console.log(msg);
                    //If using the callback function, do so here.
                    //callbackFn(response.data);
                },
                function (responseFailed) {
                    console.log('Folder info error.');
                }
            );
        };

        this.checkAvailability();
    };

    dmsOneDrive.$inject = [];
    bmoonApp.service('dmsOneDrive', dmsOneDrive);
})(window.WL);
