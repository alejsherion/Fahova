import { BussinessCardPage } from './app.po';

describe('bussinesscard App', () => {
  let page: BussinessCardPage;

  beforeEach(() => {
    page = new BussinessCardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
