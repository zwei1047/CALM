import { CalmProjectPage } from './app.po';

describe('calm-project App', function() {
  let page: CalmProjectPage;

  beforeEach(() => {
    page = new CalmProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
