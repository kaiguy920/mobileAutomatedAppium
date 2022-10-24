const AddNoteScreen = require("./add-notes")
class EditNoteScreen {

    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

    get moreIcon() {
       return $('~More')
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]')
    }

    get okBtn() {
        return $('//*[@text="OK"]')
    }

    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }

    get trashCanItem() {
        return $('//*[@text="Trash Can"]')
    }

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click()
        // assertion
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()

    }   

    async addAndSaveNote(noteHeading, noteBody) {
        await AddNoteScreen.addNoteTxt.click()
        await AddNoteScreen.textOption.click()
        await expect(AddNoteScreen.textEditing).toBeDisplayed()

        // add note title
        await AddNoteScreen.noteHeading.setValue(noteHeading)

        // add note body
        await AddNoteScreen.noteBody.setValue(noteBody)

        // save the changes (click back twice)
        await AddNoteScreen.saveNote()

        // assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed()

        await expect (AddNoteScreen.viewNote).toHaveText(noteBody)
    }
}

// module.exports = new EditNoteScreen()
export default new AddNoteScreen()