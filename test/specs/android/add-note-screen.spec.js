// const AddNoteScreen = require("../screenobjects/android/add-notes")
// const EditNoteScreen = require("../screenobjects/android/edit-note")

import AddNoteScreen from '../../screenobjects//android/add-notes'
import EditNoteScreen from '../../screenobjects//android/edit-notes'


describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click()
        // assertion
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    });

    // ===========================================================================
    //                              ADD NOTE
    // ===========================================================================

    it('add a note, save changes & verify note', async () => {
        await AddNoteScreen.addNoteTxt.click()
        await AddNoteScreen.textOption.click()
        await expect(AddNoteScreen.textEditing).toBeDisplayed()

        // add note title
        await AddNoteScreen.noteHeading.setValue("Fav Anime List")

        // add note body
        await AddNoteScreen.noteBody.setValue("Naruto\nOnePiece\nAOT")

        // save the changes (click back twice)
        await AddNoteScreen.saveNote()

        // assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed()

        await expect (AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT")

    });

    // ===========================================================================
    //                              DELETE NOTE
    // ===========================================================================
    it.only('delete note', async () => {
         // ======================== CREATE =================================
        await EditNoteScreen.skipTutorial()
        await EditNoteScreen.addAndSaveNote("TV Shows", "Friends\nBreakingBad\nThe Office")
        // ======================== DELETE =================================
        await driver.back()

        const note = await EditNoteScreen.firstNote.getText()

        // click on note
        await EditNoteScreen.firstNote.click()

        // click on more icon
        await EditNoteScreen.moreIcon.click()

        // click on delete item
        await EditNoteScreen.deleteBtn.click()
        await EditNoteScreen.okBtn.click()

        // click on nav icon
        await EditNoteScreen.navIcon.click()

        // click trash can item
        await EditNoteScreen.trashCanItem.click()

        // ======================== VERIFY DELETE ===============================
        // assertion
        const trashCanItem = await EditNoteScreen.firstNote

        await expect(trashCanItem).toHaveText(note)
    });

});