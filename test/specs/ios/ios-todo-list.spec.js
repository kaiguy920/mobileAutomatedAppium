describe('Todo List', () => {
    it('create a Todo List', async () => {
        await $('//*[@name="Create list"]').click()
        await $('//*[@value="List Name"]').addValue("Things to do today")
    });
    
});