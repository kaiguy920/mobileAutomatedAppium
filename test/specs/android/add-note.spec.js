describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        // assertion
        await expect($('//*[@text="Add note"]')).toBeDisplayed()
    });

});