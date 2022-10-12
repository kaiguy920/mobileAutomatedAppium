describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async () => {
        // access activity
        //driver.startActivity(<appPackage>, <appActivity>);

        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        // pause 3s
        await driver.pause(3000)

        // assertions
        await expect($('//*[@text="App/Alert Dialogs"]'))
    });

    it.only('Working with Dialog Boxes', async () => {

        // access activity (or go directly to a certain page/screen view)
        //driver.startActivity(<appPackage>, <appActivity>);

        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
        // ====================== ALERT OPTIONS ====================================
        // ====================== <ACCEPT/DISMISS> ===================================

        // accept alert
        // await driver.acceptAlert()

        // // dismiss alert
        // await driver.dismissAlert()

        // get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText())

        // ======================= <OK/CANCEL> ===================================

        // click the OK button
        await $('//*[@resource-id="android:id/button1"]').click()

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()
        
    });
    
});