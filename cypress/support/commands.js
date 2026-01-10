
cat > cypress/support/commands.js << 'EOF'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('removeAds', () => {
  cy.get('body').then($body => {
    $body.find('iframe[src*="ads"], iframe[src*="adservice"]').remove()
    $body.find('[id*="ad-"], [class*="ad-"]').remove()
  })
})
EOF