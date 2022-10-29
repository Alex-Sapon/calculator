describe('visit pages of App', () => {
  it('should visit page after start App', () => {
    cy.visit('/')
  })

  it('should visit the HomeFC page', () => {
    cy
      .visit('/home-fc')
      .get('[data-cy="header"]').should('be.visible')
      .get('[data-cy="leftSide"]').should('be.visible')
      .get('[data-cy="displayHistory"]').should('be.visible')
      .get('[data-cy="displayMain"]').should('be.visible').contains('0')
      .get('[data-cy="keypad"]').should('be.visible')
      .get('[data-cy="rightSide"]').should('be.visible')
  })

  it('should visit the Settings page', () => {
    cy
      .visit('/settings')
      .get('[data-cy="settings"]').should('be.visible')
      .get('h2').should('have.text', 'Settings')
      .get('select').should('be.visible')
      .get('select + div').should('be.visible')
  })
})

describe('check Header component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('logo', () => {
    cy.get('[data-cy="header"] span').contains('Calculator App')
  })

  it('navigation', () => {
    cy.get('[data-cy="header"] ul:nth-child(2)').contains('HomeCC').click()
      .url().should('include', '/home-cc')
    cy.get('[data-cy="navList"] > *').its('length').should('eq', 3)
      .get('[data-cy="navList"] *:first-child').contains('HomeFC')
      .get('[data-cy="navList"] *:nth-child(2)').contains('HomeCC')
      .get('[data-cy="navList"] *:last-child').contains('Settings')
  })
})

describe('check arithmetic operations', () => {
  it('', () => {

  })
})