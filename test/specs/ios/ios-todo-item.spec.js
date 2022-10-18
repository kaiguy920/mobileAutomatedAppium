describe('Todo Item', () => {
    it('create a Todo Item', async () => {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do today");
        await $('~Create').click();
    
        await expect(await $("~Things to do today")).toBeExisting();

        // create todo item
        await $("~Things to do today").click()
        await $('//*[@name="Create item"]').click()
        await $('//*[@value="Title"]').addValue("Buy groceries")
        await $('//*[@value="Due"]').click()
        await $('~Date Picker').click()
        await $('~Thursday, October 20').click()
        await $('//XCUIElementTypeWindow[@index=2]').click()
        await $('~Create').click()

        // assertion
        await expect ($("~Buy groceries")).toBeExisting()
        await expect ($("~Due October 20, 2022")).toBeExisting()

    });
});