context("Skins", () => {
  beforeEach(() => {
    cy.viewport(335, 720);
    cy.visit("https://hkapk.github.io/Disc-Golf-Skins-ScoreKeeper/");
  });
  it("Log in and score match", () => {
    cy.log("initial elements should be rendered by default").then(() => {
      cy.findByText("Disc Golf Skins").should("exist");
      cy.findByText("Add Players:").should("exist");
    });
    cy.log("'Start' button should not be rendered by default").then(() => {
      cy.findByText('Start').should('not.exist');
    });
    cy.log("user should be able to add players to player list").then(() => {
      cy.findByPlaceholderText("Player Name...").should("exist").type('Big Gary');
      cy.findByText('+').click();
      //check to make sure adding a single player does not enable 'Start' button
      cy.findByText('Start').should('not.exist');
      cy.findByPlaceholderText("Player Name...").should("exist").type('HanKapka');
      cy.findByText('+').click();
      cy.findByText("Big Gary").should("exist");
      cy.findByText('HanKapka').should('exist');
    });
    cy.log("multiple users in player list should enable 'Start' button to begin round").then(() => {
      cy.findByText('Start').should('exist').click();
    });
    cy.log("default score card values should be rendered on round start").then(() => {
      //Hole should default to 1
      cy.findByText('Hole #1').should('exist');
      cy.findByText('Skins Available:').should('exist');
      //Skins available should default to 1
      cy.findByText('Skins Available:').siblings().first().should('contain', '1');
      cy.findByText('Big Gary:').should('exist');
      cy.findByText('HanKapka:').should('exist');
      //Player skin count should default to 0
      cy.findByText('Big Gary:').siblings().first().should('contain', '0');
      cy.findByText('HanKapka:').siblings().first().should('contain', '0');
    });
    cy.log("winning a skin should update appropriate score card values").then(() => {
      //Increase skin count of Big Gary
      cy.findAllByText('+').eq(0).click()
      cy.findByText('Big Gary:').siblings().first().should('contain', '1');
      //This should not increase skin count of other players
      cy.findByText('HanKapka:').siblings().first().should('contain', '0');
      //This should not increase available skin count
      cy.findByText('Skins Available:').siblings().first().should('contain', '1');
      //This should increment hole count
      cy.findByText('Hole #2').should('exist');
      //Increase skin count of HanKapka and make same checks as above
      cy.findAllByText('+').eq(1).click()
      cy.findByText('HanKapka:').siblings().first().should('contain', '1');
      cy.findByText('Big Gary:').siblings().first().should('contain', '1');
      cy.findByText('Hole #3').should('exist');
    });
    cy.log("pushing a hole should update appropriate score card values").then(() => {
      cy.findByText('Push Hole').click();
      //This should increase available skin count
      cy.findByText('Skins Available:').siblings().first().should('contain', '2');
      //This should not increase player skin count
      cy.findByText('HanKapka:').siblings().first().should('contain', '1');
      cy.findByText('Big Gary:').siblings().first().should('contain', '1');
      cy.findByText('Hole #4').should('exist');
      //winning a skin after pushing a hole should award multiple skins
      cy.findAllByText('+').eq(0).click()
      cy.findByText('Big Gary:').siblings().first().should('contain', '3');
      cy.findByText('HanKapka:').siblings().first().should('contain', '1');
      cy.findByText('Hole #5').should('exist');

    });
  });
});
