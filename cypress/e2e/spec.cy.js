import { operations } from '../../src/constants/operations';

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

describe('check Header module', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be text into logo', () => {
    cy.get('[data-cy="header"] span').contains('Calculator App')
  })

  it('check navigation', () => {
    cy.get('[data-cy="header"] ul:nth-child(2)').contains('HomeCC').click()
      .url().should('include', '/home-cc')
      .get('[data-cy="navList"] > *').its('length').should('eq', 3)
      .get('[data-cy="navList"] *:first-child').contains('HomeFC')
      .get('[data-cy="navList"] *:nth-child(2)').contains('HomeCC')
      .get('[data-cy="navList"] *:last-child').contains('Settings')
  })
})

describe('check Display module', () => {
  beforeEach(() => {
    cy.visit('/home-fc')
  })

  it('should input value then input expression', () => {
    cy
      .get('[data-cy="displayMain"]').should('have.text', '0')
      .get('[data-cy="keypad"]').contains('div', '9').click()
      .get('[data-cy="displayMain"]').should('have.text', '9')
      .get('[data-cy="displayHistory"]').should('have.text', '')
      .get('[data-cy="keypad"]').contains('div', '+').click()
      .get('[data-cy="displayHistory"]').should('have.text', '9+')
      .get('[data-cy="displayMain"]').should('have.text', '0')
  })
})

describe('check Keypad module', () => {
  beforeEach(() => {
    cy.visit('/home-fc')
  })

  it('should be correct length list the Keys', () => {
    cy.get('[data-cy="keypad"] > div').its('length').should('eq', 22)
  })

  it('should be correct text into the Keys', () => {
    cy.get('[data-cy="keypad"]').each((item, index) => {
      cy.wrap(item).should('contain.text', operations[index].value)
    })
  })
})

describe('check History module', () => {
  beforeEach(() => {
    cy.visit('/home-fc')
  })

  it('should be show/close history', () => {
    cy
      .get('[data-cy="historyContainer"]').should('not.be.empty')
      .get('[data-cy="rightSide"]').first().contains('Close history').click()
      .get('[data-cy="historyContainer"]').should('be.empty')
      .get('[data-cy="rightSide"]').first().contains('Show history')
  })

  it('should be add history expression', () => {
    cy
      .get('[data-cy="historyList"]').should('be.empty')
      .get('[data-cy="keypad"]').contains('div', '9').click()
      .get('[data-cy="keypad"]').contains('div', '+').click()
      .get('[data-cy="keypad"]').contains('div', '9').click()
      .get('[data-cy="keypad"]').contains('div', '=').click()
      .get('[data-cy="historyList"]').should('not.be.empty')
      .first().should('have.text', '9 + 9 = 18')
  })
})

// describe('check arithmetic operations', () => {
//   it('check arithmetic operations on the HomeFC page', () => {
//
//   })
// })
