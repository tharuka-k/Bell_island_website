function access_newsletter(tab) {
  //Since the navigation needs to be repeated for all the testcases I have added it to a function.
  cy.visit('https://css-tricks.com/');
  cy.get('.newsletter').click();
};

describe('Plotly Interview', () => {

  it('User is able to navigate to Newsletter', () => {
    access_newsletter();
  });

  it('At the article screen, user is able to click on the first article and it successfully loads', () => {
    access_newsletter();
    cy.get('.article-article > h2').eq(0).click();
    //Validating if the page is loaded correctly by validating some content on the page.
    cy.get('.article-content').should('contain', 'lived where it snows in the winter. One morning our family woke up and smushed our faces against the glass door to the backyard to marvel at our mini winter wonderland. I never knew what I was missing!')
  });

  it('At the article screen, user is able to click on “Older”', () => {
    access_newsletter();
    cy.get('.breadcrumbs-next-page').click();
  });

  it('User is able to click on the search icon and search for “cypress”', () => {
    access_newsletter();
    cy.get('.jetpack-search-filter__link').click();
    cy.get('#jetpack-instant-search__box-input-1').type('cypress');
    cy.get('.jetpack-instant-search__search-result-title')
  });

  it('User is able to search for “cypress” and click on the "An Intro to Web Site Testing with Cypress" article and it loads successfully', () => {
    access_newsletter();
    cy.get('.jetpack-search-filter__link').click();
    cy.get('#jetpack-instant-search__box-input-1').type('cypress');
    cy.get('.jetpack-instant-search__search-result-title').eq(1).should('contain', 'An Intro to Web Site Testing with Cypress').click();
  });

  //I don't think I completely was able to deal with the Iframe but I was able to get halfway there.

  it('Go to the Almanac page> background> demo', () => {
    cy.visit('https://css-tricks.com/');
    cy.get('.almanac').click();
    cy.get('#letter-B > .property-list > ol > :nth-child(3) > a').should('contain', 'background').click()
    cy.get('iframe#cp_embed_emBzRd').then(($iframe) => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('#html-link, a:contains("HTML")').click();
      cy.wrap($body).find('#html-box, a:contains ("CSS Background Recipes")');
    });
  });
});
