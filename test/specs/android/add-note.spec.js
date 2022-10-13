describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        // assertion
        await expect($('//*[@text="Add note"]')).toBeDisplayed()
    });

    // ===========================================================================
    //                              ADD NOTE
    // ===========================================================================

    xit('add a note, save changes & verify note', async () => {
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Fav Anime List")

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Naruto\nOnePiece\nAOT")

        // save the changes (click back twice)
        await driver.back()
        await driver.back()

        // assertion
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()

        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT")

    });

    // ===========================================================================
    //                              DELETE NOTE
    // ===========================================================================
    it('delete note', async () => {
         // ======================== CREATE =================================
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Fav Anime List")

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Naruto\nOnePiece\nAOT")

        // save the changes (click back twice)
        await driver.back()
        await driver.back()

        // assertion
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()

        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT")
        // ======================== DELETE =================================
        await driver.back()

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText()

        // click on note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click()

        // click on more icon
        await $('~More').click()

        // click on delete item
        await $('//*[@text="Delete"]').click()
        await $('//*[@text="OK"]').click()

        // click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()

        // click trash can item
        await $('//*[@text="Trash Can"]').click()

        // ======================== VERIFY DELETE ===============================
        // assertion
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')

        await expect(trashCanItem).toHaveText(note)
    });

});