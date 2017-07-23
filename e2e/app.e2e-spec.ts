import { WebpackAngularPage } from './app.po';

describe('webpack-angular App', () => {
  let page: WebpackAngularPage;

  beforeEach(() => {
    page = new WebpackAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
