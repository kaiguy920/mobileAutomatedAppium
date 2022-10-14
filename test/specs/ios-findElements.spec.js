describe('iOS Find Element', () => {
    it('find element by accessibility id', async () => {
        await (await $('~Alert Views')).click()
        await (await $('~Simple')).click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    });
});