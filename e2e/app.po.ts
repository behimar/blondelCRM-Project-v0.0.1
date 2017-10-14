import { browser, by, element } from 'protractor';

export class BlondelCRMProjectV0.0.1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
