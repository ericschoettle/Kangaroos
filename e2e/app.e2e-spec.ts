import { CreateStoryPage } from './app.po';

describe('create-story App', () => {
  let page: CreateStoryPage;

  beforeEach(() => {
    page = new CreateStoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
