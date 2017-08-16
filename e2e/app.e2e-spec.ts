import { DwA2ClientSeedPage } from './app.po';

describe('dw-a2-client-seed App', () => {
  let page: DwA2ClientSeedPage;

  beforeEach(() => {
    page = new DwA2ClientSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
