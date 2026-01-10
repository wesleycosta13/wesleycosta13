Cypress.Commands.add('removeAds', () => {
  cy.document().then((doc) => {
    const fixedBan = doc.querySelector('#fixedban')
    if (fixedBan) {
      fixedBan.remove()
    }

    const ads = doc.querySelectorAll('iframe[id^="google_ads"]')
    ads.forEach(ad => ad.remove())
  })
})