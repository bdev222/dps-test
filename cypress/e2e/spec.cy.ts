describe('e2e test', () => {
  it('for page', () => {
    cy.visit('/')
    cy.wait(1000)

    // Open form for new location
    cy.get('[data-testid="add-location"]').as("first-event").click()
    cy.get('[data-testid="office-form"]').as("office-form").should("be.visible")

    // Submit button should be disable when it's invalid
    cy.get('[data-testid="submit-form-btn"]').as("submit-button").should("be.disabled")
    
    cy.get('[data-testid="title-input"]').as("title-input").type("Office 1")
    cy.get('[data-testid="address-input"]').type("Paiwa")
    cy.get('[data-testid="fullname-input"]').type("Jane Eyn")
    cy.get('[data-testid="job-input"]').type("ML")
    cy.get('[data-testid="email-input"]').type("a@a.com")
    cy.get('[data-testid="phone-input"]').type("359 12 444444")

    // Submit button should be enabled when it's valid
    cy.get("@submit-button").should("be.enabled")
    cy.get("@submit-button").click()

    // Should one office card in the page
    cy.get('[data-testid="office-card"]').should("have.length", 1)

    // Card click
    cy.get('[data-testid="office-card"]').first().as("first-card").click()
    cy.get('[data-testid="contact-card"').should("have.length", 1)
    cy.get('[data-testid="edit-button"').click()

    // Form should be visible for edit data
    cy.get("@office-form").should("be.visible")

    // Update data
    cy.get("@title-input").type("aaa")
    cy.get("@submit-button").click()

    cy.get("@first-card").contains("Office 1aaa")

    // Delete data
    cy.get("@first-card").click()
    cy.get('[data-testid="delete-button"').click()

    // Should no office card in the page
    cy.get('[data-testid="office-card"]').should("have.length", 0)
  })
})