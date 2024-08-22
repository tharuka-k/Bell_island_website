function access_website(tab) {
  //Since the navigation needs to be repeated for all the testcases I have added it to a function.
  cy.visit('https://www.tourismbellisland.com/');
};

describe('Bell Island website', () => {

  it('Website loading validation', () => {
    access_website();
    cy.get('h2').should('contain', 'Explore the Jewel of the bay');
  });
});
