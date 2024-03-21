var chairname = '<a href="/#" style="color:red; font-weight:600; font-size:30px">CHAIR_NAME</a>';
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
function onPhotoDataSuccess(imageData) {
    // oImage.setSrc("data:image/jpeg;base64," + imageData);
    // oBusyDialog.open();
    // var options = {
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "yourkeyhere",
    //         "cache-control": "no-cache",
    //     },
    //     data: {
    //         inputs: [
    //             {
    //                 data: {
    //                     image: {
    //                         base64: imageData,
    //                         //"url": "https://i.imgur.com/lSSlDXp.png"
    //                     },
    //                 },
    //             },
    //         ],
    //         model: {
    //             output_info: {
    //                 output_config: {
    //                     min_value: 0.75,
    //                 },
    //             },
    //         },
    //     },
    // };

    // apiClarifyAPI(options);

    var imgData = "data:image/jpeg;base64," + imageData;

    test_api(imgData);
}
document.addEventListener("resume", onResume, false);
function onResume(event) {
    // var storedState = ModelData.Find(stateStore, "appKey", appState.appKey, "EQ");
    // console.log(storedState);
    // if (storedState.length > 0) {
    //     appState = storedState[0];
    // }

    // // Check to see if we need to restore an image we took
    // if (!appState.takingPicture && appState.imageUri !== "") {
    //     onPhotoDataSuccess(appState.imageUri)
    // }
    // // Now we can check if there is a plugin result in the event object.
    // // This requires cordova-android 5.1.0+
    // else
    if (appState.takingPicture && event.pendingResult) {
        // Figure out whether or not the plugin call was successful and call
        // the relevant callback. For the camera plugin, "OK" means a
        // successful result and all other statuses mean error
        if (event.pendingResult.pluginStatus === "OK") {
            // The camera plugin places the same result in the resume object
            // as it passes to the success callback passed to getPicture(),
            // thus we can pass it to the same callback. Other plugins may
            // return something else. Consult the documentation for
            // whatever plugin you are using to learn how to interpret the
            // result field
            onPhotoDataSuccess(event.pendingResult.result);
        } else {
            onFail(event.pendingResult.result);
        }
    }
}

// Called when a )photo is successfully retrieved

// A button will call this function
function capturePhoto() {
    //  Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        correctOrientation: true,
        destinationType: destinationType.DATA_URL,
        sourceType: pictureSource.CAMERA,
    });
}

function choosePhoto() {
    //  Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        correctOrientation: true,
        destinationType: destinationType.DATA_URL,
        sourceType: pictureSource.PHOTOLIBRARY,
    });
}

// A button will call this function
function capturePhotoEdit() {
    //  Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        allowEdit: true,
        destinationType: destinationType.SAVEDPHOTOALBUM,
    });
}

// A button will call this function
function getPhoto(source) {
    //  Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source,
    });
}

// Called if something bad happens.
function onFail(message) {
    sap.m.MessageToast.show("Failed : " + message);
}

function test_api(imgData) {
    var options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Key " + "26861c45acb043babfdd89a0c1a91245",
            // "cache-control": "no-cache",
        },
        data: {
            user_app_id: {
                user_id: "danielvieira_neptune",
                app_id: "productSearch",
            },
            inputs: [
                {
                    data: {
                        image: {
                            // url:
                            //     "https://gtmdemosystem.neptune-software.cloud/media/root/Burberry/Chess_Satchel_Ribbon.png",
                            base64: imgData,
                        },
                    },
                },
            ],
            model: {
                output_info: {
                    output_config: {
                        min_value: 0.75,
                    },
                },
            },
        },
    };

    apiClarifyAPI_identifyProduct(options);
}

function splitText() {
    const str = "test1 testing, test2 testing";
    const lines = str.split(", ");

    console.log(lines[0]); // Output: "test1 testing"
    console.log(lines[1]); // Output: "test2 testing"

    textComponent.textContent = line1 + "\n" + line2;
}

function DetectDevice() {
    let isMobile = window.matchMedia || window.msMatchMedia;
    if (isMobile) {
        let match_mobile = isMobile("(pointer:coarse)");
        return match_mobile.matches;
    }
    return false;
}
