import { PocAngularHttpClientPage } from './app.po';

describe('poc-angular-http-client App', () => {
  let page: PocAngularHttpClientPage;

  beforeEach(() => {
    page = new PocAngularHttpClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
