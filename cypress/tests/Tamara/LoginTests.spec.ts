describe('Login Tests', () => {

    it('TC1 Validate title', () => {

        // Navigate to the page
        cy.visit('http://localhost:3000/signin');

        // Validate the title
        cy.title().should('eq', 'Cypress Real World App');
    })

    it('TC2 Login with correct credentials', () => {

        //Navigate to the Login Page
        cy.visit('http://localhost:3000/signin');

        // Wait for Elements to be visible
        cy.get('#username').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.contains('Sign In').should('be.visible');

        // Click on the Username Field
        cy.get('#username').click();

        // Input Correct Value for Username
        cy.get('#username').type('Heath93');

        // Click on the Password Field
        cy.get('#password').click();

        // Input Correct Value for Password
        cy.get('#password').type('s3cret');

        // Click on the Sign In button
        cy.contains('Sign In').click();

        // Validate that the User is logged in and that he can see Logout button
        cy.contains('Logout').should('be.visible');
    })

    it('TC3 Login with wrong credentials', () => {

        //Navigate to the Login Page
        cy.visit('http://localhost:3000/signin');

        // Wait for Elements to be visible
        cy.get('#username').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.contains('Sign In').should('be.visible');

        // Click on the Username Field
        cy.get('#username').click();

        // Input Incorrect Value for Username
        cy.get('#username').type('Heath933');

        // Click on the Password Field
        cy.get('#password').click();

        // Input Incorrect Value for Password
        cy.get('#password').type('s3crett');

        // Click on the Sign In button
        cy.contains('Sign In').click();

        // Validation Message is visible, that credentials are invalid
        cy.contains('Username or password is invalid').should('be.visible');
    })

    it('TC4 Validation Message for required fields', () => {

        //Navigate to the Login Page
        cy.visit('http://localhost:3000/signin');

        // Wait for Elements to be visible
        cy.get('#username').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.contains('Sign In').should('be.visible');

        // Click on the Sign In button
        cy.contains('Sign In').click();

        // Validation Message is visible, that credentials are invalid
        cy.contains('Username is required').should('be.visible');
    })

    it('TC5 Sign In button not clickable', () => {

        //Navigate to the Login Page
        cy.visit('http://localhost:3000/signin');

        // Wait for Elements to be visible
        cy.get('#username').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.contains('Sign In').should('be.visible');

        // Click on Username Field
        cy.get('#username').click();

        // Click on Password Field
        cy.get('#password').click();

        // Delete if there is a value
        cy.get('#username').clear();

        // Validate that Sign In button is not clickable
        cy.contains('Sign In').should('be.disabled');
    })
})