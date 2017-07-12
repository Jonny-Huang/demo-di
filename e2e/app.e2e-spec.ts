import { DemoDiPage } from './app.po';

describe('demo-di App', () => {
  let page: DemoDiPage;

  beforeEach(() => {
    page = new DemoDiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
