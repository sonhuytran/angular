'use strict';"use strict";
var e2e_util_1 = require('angular2/src/testing/e2e_util');
var testing_1 = require('angular2/testing');
function waitForElement(selector) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    e2e_util_1.browser.wait(EC.presenceOf($(selector)), 20000);
}
describe('reuse example app', function () {
    afterEach(e2e_util_1.verifyNoBrowserErrors);
    var URL = 'angular2/examples/router/ts/reuse/';
    it('should build a link which points to the detail page', function () {
        e2e_util_1.browser.get(URL);
        waitForElement('my-cmp');
        element(by.css('#naomi-link')).click();
        waitForElement('my-cmp');
        testing_1.expect(e2e_util_1.browser.getCurrentUrl()).toMatch(/\/naomi$/);
        // type something into input
        element(by.css('#message')).sendKeys('long time no see!');
        // navigate to Brad
        element(by.css('#brad-link')).click();
        waitForElement('my-cmp');
        testing_1.expect(e2e_util_1.browser.getCurrentUrl()).toMatch(/\/brad$/);
        // check that typed input is the same
        testing_1.expect(element(by.css('#message')).getAttribute('value')).toEqual('long time no see!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2Vfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUzlXUjBEWTMudG1wL2FuZ3VsYXIyL2V4YW1wbGVzL3JvdXRlci90cy9yZXVzZS9yZXVzZV9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5QkFBNkMsK0JBQStCLENBQUMsQ0FBQTtBQUM3RSx3QkFBcUIsa0JBQWtCLENBQUMsQ0FBQTtBQUV4Qyx3QkFBd0IsUUFBZ0I7SUFDdEMsSUFBSSxFQUFFLEdBQVMsVUFBVyxDQUFDLGtCQUFrQixDQUFDO0lBQzlDLGdFQUFnRTtJQUNoRSxrQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFFNUIsU0FBUyxDQUFDLGdDQUFxQixDQUFDLENBQUM7SUFFakMsSUFBSSxHQUFHLEdBQUcsb0NBQW9DLENBQUM7SUFFL0MsRUFBRSxDQUFDLHFEQUFxRCxFQUFFO1FBQ3hELGtCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QixPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixnQkFBTSxDQUFDLGtCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEQsNEJBQTRCO1FBQzVCLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFMUQsbUJBQW1CO1FBQ25CLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLGdCQUFNLENBQUMsa0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuRCxxQ0FBcUM7UUFDckMsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ZlcmlmeU5vQnJvd3NlckVycm9ycywgYnJvd3Nlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvZTJlX3V0aWwnO1xuaW1wb3J0IHtleHBlY3R9IGZyb20gJ2FuZ3VsYXIyL3Rlc3RpbmcnO1xuXG5mdW5jdGlvbiB3YWl0Rm9yRWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHZhciBFQyA9ICg8YW55PnByb3RyYWN0b3IpLkV4cGVjdGVkQ29uZGl0aW9ucztcbiAgLy8gV2FpdHMgZm9yIHRoZSBlbGVtZW50IHdpdGggaWQgJ2FiYycgdG8gYmUgcHJlc2VudCBvbiB0aGUgZG9tLlxuICBicm93c2VyLndhaXQoRUMucHJlc2VuY2VPZigkKHNlbGVjdG9yKSksIDIwMDAwKTtcbn1cblxuZGVzY3JpYmUoJ3JldXNlIGV4YW1wbGUgYXBwJywgZnVuY3Rpb24oKSB7XG5cbiAgYWZ0ZXJFYWNoKHZlcmlmeU5vQnJvd3NlckVycm9ycyk7XG5cbiAgdmFyIFVSTCA9ICdhbmd1bGFyMi9leGFtcGxlcy9yb3V0ZXIvdHMvcmV1c2UvJztcblxuICBpdCgnc2hvdWxkIGJ1aWxkIGEgbGluayB3aGljaCBwb2ludHMgdG8gdGhlIGRldGFpbCBwYWdlJywgZnVuY3Rpb24oKSB7XG4gICAgYnJvd3Nlci5nZXQoVVJMKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnbXktY21wJyk7XG5cbiAgICBlbGVtZW50KGJ5LmNzcygnI25hb21pLWxpbmsnKSkuY2xpY2soKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnbXktY21wJyk7XG4gICAgZXhwZWN0KGJyb3dzZXIuZ2V0Q3VycmVudFVybCgpKS50b01hdGNoKC9cXC9uYW9taSQvKTtcblxuICAgIC8vIHR5cGUgc29tZXRoaW5nIGludG8gaW5wdXRcbiAgICBlbGVtZW50KGJ5LmNzcygnI21lc3NhZ2UnKSkuc2VuZEtleXMoJ2xvbmcgdGltZSBubyBzZWUhJyk7XG5cbiAgICAvLyBuYXZpZ2F0ZSB0byBCcmFkXG4gICAgZWxlbWVudChieS5jc3MoJyNicmFkLWxpbmsnKSkuY2xpY2soKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnbXktY21wJyk7XG4gICAgZXhwZWN0KGJyb3dzZXIuZ2V0Q3VycmVudFVybCgpKS50b01hdGNoKC9cXC9icmFkJC8pO1xuXG4gICAgLy8gY2hlY2sgdGhhdCB0eXBlZCBpbnB1dCBpcyB0aGUgc2FtZVxuICAgIGV4cGVjdChlbGVtZW50KGJ5LmNzcygnI21lc3NhZ2UnKSkuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKS50b0VxdWFsKCdsb25nIHRpbWUgbm8gc2VlIScpO1xuICB9KTtcblxufSk7XG4iXX0=