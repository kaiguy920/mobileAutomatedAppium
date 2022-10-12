describe('Android Native Feature Tests', () => {
    // ======================================================================
    //                      ACCESSING A SCREEN/VIEW DIRECTLY
    // ======================================================================
    it('Access an Activity directly', async () => {
        // access activity
        //driver.startActivity(<appPackage>, <appActivity>);

        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        // pause 3s
        await driver.pause(3000)

        // assertions
        await expect($('//*[@text="App/Alert Dialogs"]'))
    });
    // ======================================================================
    //                            DIALOG BOXES
    // ======================================================================

    it('Working with Dialog Boxes', async () => {

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
    
    // ======================================================================
    //                          VERTICAL SCROLLING
    // ======================================================================
    it('Vertical scrolling', async () => {
        await $(('~App')).click()
        await $(('~Activity')).click()

        // scroll to the end (not stable if element gets moved)
        // scrollToEnd(<maxSwipes>, <steps/speed>)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)')

        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()

        // await $(('~Secure Surfaces')).click() // <-- part of scrollToEnd

        // assertion
        await expect($('~Secure Dialog')).toExist()
        
    });

    // ======================================================================
    //                          HORIZONTAL SCROLLING
    // ======================================================================
    it('Horizontal scrolling', async () => {
        // views --> gallery --> 1. photos
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1");

        // Horizontal scrolling
         await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

         await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

         await driver.pause(3000)
        
    });


    // ======================================================================
    //                         SCROLLING EXERCISE
    // ======================================================================
    it.only('Working with a date picker', async () => {
        // view --> Date Widgets --> Dialog
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");

        // get the current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        const currentDate = await date.getText();

        // click on "change the date"
        await $('~change the date').click()
        // scroll horizontally to the right
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        // pick the 10th date from the month
        await $(`//*[@text="10"]`).click()
        // click OK button
        await $(`//*[@text="OK"]`).click()
        // Assert the date is updated
        await expect(await date.getText()).not.toEqual(currentDate)
        
    });

});