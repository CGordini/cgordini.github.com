var infoApp = new angular.module("infoApp", ["ngAnimate", "ui.bootstrap"]);

WL.init({ client_id: '000000004812EB53', redirect_uri: 'https://cgordini.github.io' });

$(document).ready(function() {
    WL.ui({
        name: "skydrivepicker",
        element: "skydrive-download",
        mode: "open",
        select: "multi",
        onselected: handleDownload,
        onerror: handleError
    });
});



// WL.login({ "scope": "wl.skydrive wl.signin" }).then(
//     function(response) {
//         openFromSkyDrive();
//     },
//     function(response) {
//         log("Failed to authenticate.");
//     }
// );

// function openFromSkyDrive() {
//     WL.fileDialog({
//         mode: 'open',
//         select: 'single'
//     }).then(
//         function(response) {
//             log("The following file is being downloaded:");
//             log("");

//             var files = response.data.files;
//             for (var i = 0; i < files.length; i++) {
//                 var file = files[i];
//                 log(file.name);
//                 WL.download({ "path": file.id + "/content" });
//             }
//         },
//         function(errorResponse) {
//             log("WL.fileDialog errorResponse = " + JSON.stringify(errorResponse));
//         }
//     );
// }
                    
// function log(message) {
//     var child = document.createTextNode(message);
//     var parent = document.getElementById('JsOutputDiv') || document.body;
//     parent.appendChild(child);
//     parent.appendChild(document.createElement("br"));
// }

// WL.ui calls this once the user has successfully
// selected file(s) on SkyDrive
function handleDownload(response) {
    showResult(response);

	WL.download({ 
	    path: response.data.files[0].id + "/content" 
	});
}

// WL.ui calls this if there was an error in selecting
// a file(s) on SkyDrive, or if the user canceled
function handleError(failureResponse) {
    $('#result').html(failureResponse.error.message);
}

// Show the fruits of your labor and submit answer for evaluation
// Don't edit this!
function showResult(response) {
    $('#result').html("<h3>Woot! You should see your files downloading.</h3>");
    answer = response;
    $('#result').trigger('c');
}