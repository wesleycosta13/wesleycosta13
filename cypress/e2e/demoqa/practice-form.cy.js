describe('Practice Form com Fixture', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').should('be.visible')
  })

  it('completa formulário com sucesso', () => {
    cy.fixture('user').as('userData')
    
    cy.get('@userData').then((user) => {
      // Mapeamento dos campos
      const fields = {
        '#firstName': user.firstName,
        '#lastName': user.lastName,
        '#userEmail': user.email,
        '#userNumber': user.phone,
        '#currentAddress': user.address
      }
      
      // Preenche campos básicos
      Object.entries(fields).forEach(([selector, value]) => {
        cy.get(selector).type(value)
      })
      
      // Demais interações
      cy.contains('Male').click()
      
      cy.get('#dateOfBirthInput').click()
      cy.get('.react-datepicker__month-select').select('July')
      cy.get('.react-datepicker__year-select').select('1995')
      cy.contains('.react-datepicker__day', '7').click()
      
      cy.get('#subjectsInput').type('Maths{enter}')
      cy.contains('Sports').click()
      cy.contains('Music').click()
      
   cy.get('#state')
        .scrollIntoView()
        .click()
        .find('input')
        .type('NCR{enter}')

      // City selection (React Select)
      cy.get('#city')
        .scrollIntoView()
        .click()
        .find('input')
        .type('Delhi{enter}')
      
      // Submit e validação
      cy.get('#submit').click()
      
      cy.get('.modal-title').should('contain', 'Thanks for submitting')
      cy.contains('td', 'Student Name')
        .next()
        .should('contain', `${user.firstName} ${user.lastName}`)
    })
  })
})