describe('visit pages of App', () => {
  it('should visit page after start App', () => {
    cy.visit('/');
  })

  it('should visit the HomeFC page', () => {
    cy
      .visit('/calculator')
      .get('[data-cy="header"]').should('be.visible')
      .get('[data-cy="leftSide"]').should('be.visible')
      .get('[data-cy="displayHistory"]').should('be.visible')
      .get('[data-cy="displayMain"]').should('be.visible').contains('0')
      .get('[data-cy="keypad"]').should('be.visible')
      .get('[data-cy="rightSide"]').should('be.visible');
  })

  it('should visit the Settings page', () => {
    cy
      .visit('/settings')
      .get('[data-cy="settings"]').should('be.visible')
      .get('h2').should('have.text', 'Settings')
      .get('select').should('be.visible')
      .get('select + div').should('be.visible');
  })
})

describe('check Header module', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should be text into logo', () => {
    cy.get('[data-cy="header"] span').contains('Calculator App');
  })

  it('should be a switch from page HomeFC to HomeCC', () => {
    cy.get('[data-cy="header"] ul:nth-child(2)').contains('HomeCC').click()
      .url().should('include', '/calculator-cc')
      .get('[data-cy="navList"] > *').its('length').should('eq', 3)
      .get('[data-cy="navList"] *:first-child').contains('HomeFC')
      .get('[data-cy="navList"] *:nth-child(2)').contains('HomeCC')
      .get('[data-cy="navList"] *:last-child').contains('Settings');
  })
})

describe('check Display module', () => {
  beforeEach(() => {
    cy.visit('/calculator');
  })

  it('should input value then input expression', () => {
    cy
      .get('[data-cy="displayMain"]').should('have.text', '0')
      .get('[data-cy="keypad"]').contains('div', '9').click()
      .get('[data-cy="displayMain"]').should('have.text', '9')
      .get('[data-cy="displayHistory"]').should('have.text', '')
      .get('[data-cy="keypad"]').contains('div', '+').click()
      .get('[data-cy="displayHistory"]').should('have.text', '9+')
      .get('[data-cy="displayMain"]').should('have.text', '0');
  })
})

describe('check Keypad module', () => {
  beforeEach(() => {
    cy.visit('/calculator');
  })

  it('should be correct length list the Keys', () => {
    cy.get('[data-cy="keypad"] > div').its('length').should('eq', 22);
  })

  it('should be correct text into the Keys', () => {
    const operations = [
      { id: 1, value: 'C' },
      { id: 2, value: '7' },
      { id: 3, value: '8' },
      { id: 4, value: '9' },
      { id: 5, value: '*' },
      { id: 6, value: '-' },
      { id: 7, value: '4' },
      { id: 8, value: '5' },
      { id: 9, value: '6' },
      { id: 10, value: '/' },
      { id: 11, value: '+' },
      { id: 12, value: '1' },
      { id: 13, value: '2' },
      { id: 14, value: '3' },
      { id: 15, value: '=' },
      { id: 16, value: '.' },
      { id: 17, value: '(' },
      { id: 18, value: '0' },
      { id: 19, value: ')' },
      { id: 20, value: 'CE' },
      { id: 21, value: '-/+' },
      { id: 22, value: '%' }
    ];

    cy.get('[data-cy="keypad"]').each((item, index) => {
      cy.wrap(item).should('contain.text', operations[index].value);
    })
  })
})

describe('check History module', () => {
  beforeEach(() => {
    cy.visit('/calculator');
  })

  it('should be show/close history', () => {
    cy
      .get('[data-cy="historyContainer"]').should('not.be.empty')
      .get('[data-cy="rightSide"]').first().contains('Close history').click()
      .get('[data-cy="historyContainer"]').should('be.empty')
      .get('[data-cy="rightSide"]').first().contains('Show history');
  })

  it('should be add history expression', () => {
    cy
      .get('[data-cy="historyList"]').should('be.empty')
      .get('[data-cy="keypad"]').contains('div', '9').click()
      .get('[data-cy="keypad"]').contains('div', '+').click()
      .get('[data-cy="keypad"]').contains('div', '9').click()
      .get('[data-cy="keypad"]').contains('div', '=').click()
      .get('[data-cy="historyList"]').should('not.be.empty')
      .first().should('have.text', '9 + 9 = 18');
  })
})

describe('check switch theme module', () => {
  beforeEach(() => {
    cy.visit('/settings');
  })


  it('theme module should be have 3 options theme', () => {
    const selectListThemes = ['Light theme', 'Colored theme', 'Dark theme'];

    cy.get('[data-cy="selectTheme"] option').its('length').should('eq', 3);
    selectListThemes.forEach(option => cy.contains('[data-cy="selectTheme"]', option));
  })

  it('should be switch theme from Light to Colored', () => {
    cy.get('[data-cy="selectTheme"] option').should('contain.text', 'Light theme');
    cy.get('[data-cy="selectTheme"]').select(1).should('contain.text', 'Colored theme');
  })
})

describe('check arithmetic operations', () => {
  beforeEach(() => {
    cy.visit('/calculator');
  })

  it('check addition operation', () => {
    cy
      .get('[data-cy="keypad"]').contains('div', '3').click()
      .get('[data-cy="keypad"]').contains('div', '+').click()
      .get('[data-cy="keypad"]').contains('div', '4').click()
      .get('[data-cy="keypad"]').contains('div', '=').click()
      .get('[data-cy="displayMain"]').should('have.text', '7')
  })

  it('check subtraction operation', () => {
    cy
      .get('[data-cy="keypad"]').contains('div', '8').click()
      .get('[data-cy="keypad"]').contains('div', '-').click()
      .get('[data-cy="keypad"]').contains('div', '5').click()
      .get('[data-cy="keypad"]').contains('div', '=').click()
      .get('[data-cy="displayMain"]').should('have.text', '3')
  })

  it('check multiplication operation', () => {
    cy
      .get('[data-cy="keypad"]').contains('div', '9').click()
      .get('[data-cy="keypad"]').contains('div', '*').click()
      .get('[data-cy="keypad"]').contains('div', '3').click()
      .get('[data-cy="keypad"]').contains('div', '=').click()
      .get('[data-cy="displayMain"]').should('have.text', '27')
  })

  it('check division operation', () => {
    cy
      .get('[data-cy="keypad"]').contains('div', '4').click()
      .get('[data-cy="keypad"]').contains('div', '/').click()
      .get('[data-cy="keypad"]').contains('div', '2').click()
      .get('[data-cy="keypad"]').contains('div', '=').click()
      .get('[data-cy="displayMain"]').should('have.text', '2')
  })

  it('check operation remainder of division', () => {
    cy
      .get('[data-cy="keypad"]').contains('div', '2').click()
      .get('[data-cy="keypad"]').contains('div', '2').click()
      .get('[data-cy="keypad"]').contains('div', '%').click()
      .get('[data-cy="keypad"]').contains('div', '1').click()
      .get('[data-cy="keypad"]').contains('div', '3').click()
      .get('[data-cy="keypad"]').contains('div', '=').click()
      .get('[data-cy="displayMain"]').should('have.text', '9')
  })

  it('checking adding a minus sign in front of a number', () => {
    cy
      .get('[data-cy="keypad"]').contains('div', '8').click()
      .get('[data-cy="keypad"]').contains('div', '-/+').click()
      .get('[data-cy="keypad"]').contains('div', '+').click()
      .get('[data-cy="keypad"]').contains('div', '2').click()
      .get('[data-cy="keypad"]').contains('div', '=').click()
      .get('[data-cy="displayMain"]').should('have.text', '-6')
  })
})
