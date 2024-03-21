// Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(function (startParams) {
    // modelproductList.setData(test_array);
    // modelpageDetail.setData(test_array[0]);
    // debugger;

    if (DetectDevice()) {
        //return true if mobile
        mobileCam();
        HBoxMobileCam.setVisible(true);
        HBoxWebCam.setVisible(false);

        imageDetail.setHeight("300px");
        imageDetail.setWidth("270px");
    } else {
        //return false if desktop
        startWebCam();
        HBoxMobileCam.setVisible(false);
        HBoxWebCam.setVisible(true);

        // diaWebCam.open();
        imageDetail.setHeight("");
        imageDetail.setWidth("");
    }
});
