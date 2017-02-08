import { Ng2SiteRequestsPage } from './app.po';

describe('ng2-site-requests App', function() {
  let page: Ng2SiteRequestsPage;

  beforeEach(() => {
    page = new Ng2SiteRequestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
