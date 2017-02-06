import { Ng2GooglePlaceAutocompletePage } from './app.po';

describe('ng2-google-place-autocomplete App', function() {
  let page: Ng2GooglePlaceAutocompletePage;

  beforeEach(() => {
    page = new Ng2GooglePlaceAutocompletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
