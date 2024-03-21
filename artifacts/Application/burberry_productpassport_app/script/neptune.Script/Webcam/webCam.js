function mobileCam() {
    var video = document.querySelector("#videoElement");
    // debugger;
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({
                // video: true
                video: {
                    facingMode: {
                        exact: "environment",
                    },
                },
            })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.log("Something went wrong!");
            });
    }
}

function startWebCam() {
    var video = document.querySelector("#videoElementWeb");
    // debugger;
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({
                video: true
                // video: {
                //     facingMode: {
                //         exact: "environment",
                //     },
                // },
            })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.log("Something went wrong!");
            });
    }
}