describe('DemoQA - Practice Form', () => {
  beforeEach(() => {
    // Open the practice form page
    cy.visit('https://demoqa.com/automation-practice-form')

    // Remove ads that may overlap elements and break the test
    cy.removeAds()
  })

  it('Fill and submit the practice form', () => {
    // Load test data from fixture
    cy.fixture('user').then((user) => {
      // Personal information
      cy.get('#firstName').type(user.firstName)
      cy.get('#lastName').type(user.lastName)
      cy.get('#userEmail').type(user.email)

      // Select gender (radio button)
      cy.get('label[for="gender-radio-1"]').click()

      // Phone number
      cy.get('#userNumber').type(user.phone)

      // Date of birth
      cy.get('#dateOfBirthInput').click()
      cy.get('.react-datepicker__month-select').select('July')
      cy.get('.react-datepicker__year-select').select('1995')
      cy.get(
        '.react-datepicker__day--007:not(.react-datepicker__day--outside-month)'
      ).click()

      // Current address
      cy.get('#currentAddress').type(user.address)

      // Subjects (autocomplete field)
      cy.get('#subjectsInput').type('Maths{enter}')

      // Hobbies (checkboxes)
      cy.get('label[for="hobbies-checkbox-1"]').click()
      cy.get('label[for="hobbies-checkbox-3"]').click()

      // State selection (React Select)
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

      // Submit the form
      cy.get('#submit')
        .scrollIntoView()
        .click({ force: true })

      // Validate confirmation modal
      cy.get('.modal-content').should('be.visible')
      cy.contains('Thanks for submitting the form').should('be.visible')
    })
  })
})