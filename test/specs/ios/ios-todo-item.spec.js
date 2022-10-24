const ListScreen = require('../../screenobjects/ios/list.screen')
const ItemScreen = require('../../screenobjects/ios/item.screen')


describe('Todo Item', () => {
    it('create a Todo Item', async () => {
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();
        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();

        // create todo item
        await ListScreen.listNameField("Things to do today").click()
        await ItemScreen.createItem.click();
        await ItemScreen.title.addValue("Buy groceries");
        await ItemScreen.dueDate.click();
        await ItemScreen.datePicker.click();
        await ItemScreen.getByAccessibility("Tuesday, October 25").click();
        await ItemScreen.secondWindow.click();
        await ItemScreen.createBtn.click();

        // assertion
        expect(await $("~Buy groceries")).toBeExisting();
        expect(await $("~Due October 25, 2022")).toBeExisting();

    });
});