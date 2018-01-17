import { browser, element, by, ElementFinder } from 'protractor';

describe('Example E2E Test', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('the home title is displayed by default', () => {

      expect(element(by.id('main-title'))
        .getAttribute('innerHTML'))
        .toContain('Message List');

  });

  it('should open left slide menu', () => {

    element(by.id('left-button')).click().then(() => {

      browser.driver.sleep(500);

      expect(element(by.id('left-menu'))
        .getAttribute('innerHTML'))
        .toContain('Left Menu');

    });

  });

  // it('should open right slide menu', () => {

  //   element(by.id('right-button')).click().then(() => {

  //     browser.driver.sleep(500);

  //     expect(element.all(by.repeater('p in pages')).count()).toEqual(2);

  //   });

  // });

});


