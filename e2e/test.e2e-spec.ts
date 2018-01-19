import { browser, element, by, ElementFinder } from 'protractor';

describe('Example E2E Test', () => {
    beforeEach(() => {
        browser.get('');
    });

    it('the home title is displayed by default', () => {
        expect(element(by.id('main-title')).getAttribute('innerHTML')).toContain('Message List');
    });

    it('should open left slide menu', () => {
        element(by.id('left-button'))
            .click()
            .then(() => {
                browser.driver.sleep(500);
                expect(element(by.id('left-menu')).getAttribute('innerHTML')).toContain('Left Menu');
            });
    });

    it('should have two elements list items in right menu', () => {
        element(by.id('right-button'))
            .click()
            .then(() => {
                browser.driver.sleep(500);
                expect(element.all(by.css('#right-menu ion-content ion-list button')).count()).toEqual(2);
            });
    });

    it('should open List page and check if there is ten elements', () => {
        element(by.id('left-button'))
            .click()
            .then(() => {
                browser.driver.sleep(500);
                element(by.buttonText('List'))
                    .click()
                    .then(() => {
                        browser.driver.sleep(2000);
                        expect(element.all(by.css('#test-list button')).count()).toEqual(10);
                    });
            });
    });
    it('should update input value when user types', () => {
        let sendButton = element(by.id('send-button'));
        let nativeTextarea = element(by.css('#text-area textarea'));
        nativeTextarea.sendKeys('Komed health').then(() => {
            sendButton.click();
            browser.driver.sleep(1000);
            expect(element(by.css('#list-holder ion-card ion-card-content')).getAttribute('innerHTML')).toContain('Komed health');
        });
    });
});
