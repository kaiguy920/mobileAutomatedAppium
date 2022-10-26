import AddNoteScreen from "../../screenobjects/android/add-note";
describe('Web Browser Access', () => {
    before(async () => {
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it('Access external link and verify content in the browser', async () => {
        // click on the nav icon
        await (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')).click()

        // click on the fb link
        await (await $('//*[@text="Like us on Facebook"]')).click()

        // get current context
        // console.log(await driver.getContext())

        // driver.pause(2000)

        // get all the contexts
        await driver.getContexts()

        // switch to webview chrome context
        await driver.switchContext("WEBVIEW_chrome")

        // assert cover image is displayed
        // .img.coverPhoto coming from inspect element on web page
        const coverImg = await $('.img.coverPhoto')
        await expect(coverImg).toBeDisplayed()
    });

});