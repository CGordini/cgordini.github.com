
(function(WL) {
    'use strict';

    var bmoonApp = angular.module('infoApp');

    var dmsOneDrive = function(){

        // this.clientId = '000000004C127600';
        // this.redirectUri = 'localhost';//$location.path();

        this.isAvailable = false;

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

            // WL.Event.subscribe('auth.login', onLogin);

            //Init our OneDrive object
            // WL.init({
            //     client_id: this.clientId,
            //     redirect_uri: this.redirectUri,
            //     scope: 'wl.signin',
            // });
            WL.init({ client_id: '000000004812EB53', redirect_uri: 'https://cgordini.github.io', scope: 'wl.signin' });

            var callbackFn = callback;

            WL.login().then(
                function(response){
                    console.log(response);
                    var authToken = response.session.authentication_token;
                    console.log(authToken);
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
                    if (response.data.folders.length > 0) {
                        for (var folder = 0; folder < response.data.folders.length; folder++) {
                            // Use folder IDs to iterate through child folders and files as needed.
                            msg += '\n' + response.data.folders[folder].id;
                        }
                    }
                    // For each file selected...
                    if (response.data.files.length > 0) {
                        for (var file = 0; file < response.data.files.length; file++) {
                            // Use file IDs to iterate through files as needed.
                            msg += '\n' + response.data.files[file].id;
                        }
                    }
                    console.log(msg);
                },
                function (responseFailed) {
                    console.log('Folder info error.');
                }
            );
        };

        var onLogin = function(session){
            console.log('Session:');
            console.log(session);
            var ses = WL.getSession();
            console.log('Ses:');
            console.log(ses);
            if (ses.error){
                console.log('Error getting session');
            } else {
                console.log('Success getting session!');
            }
        };

        this.checkAvailability();
    };

    dmsOneDrive.$inject = [];
    bmoonApp.service('dmsOneDrive', dmsOneDrive);
})(window.WL);
