describe('Login functionality', () => {

    //before each test run custom methode to navigate to the login page
    beforeEach(() => {
        cy.visit('/signin');
    });


    it('login with valid credentials', () => {
        cy.get('input[name="username"]').type('Judah_Dietrich50');
        cy.get('input[name="password"]').type('s3cret');
        cy.get('button[type = "submit"]').click();

        //check if user logged in successfully and navigated to the dashboard - is Logout visible
        cy.contains('Logout').should('be.visible');
    });

    it('login with empty/invalid credentials', () => {
        cy.get('button[type = "submit"]').click();
        cy.contains('Username is required').should('be.visible');
    });

    it('navigating to Sign Up page', () => {
    cy.contains("Don't have an account? Sign Up").click();
    cy.url().should('include', '/signup');
  });

  it('allow checking the Remember me checkbox', () => {
      cy.get('input[type="checkbox"]').check();
      cy.get('input[type="checkbox"]').should('be.checked');
  });


});