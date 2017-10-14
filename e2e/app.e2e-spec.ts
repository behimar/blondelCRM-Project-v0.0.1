import { BlondelCRMProjectV0.0.1Page } from './app.po';

describe('blondel-crm-project-v0.0.1 App', () => {
  let page: BlondelCRMProjectV0.0.1Page;

  beforeEach(() => {
    page = new BlondelCRMProjectV0.0.1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
