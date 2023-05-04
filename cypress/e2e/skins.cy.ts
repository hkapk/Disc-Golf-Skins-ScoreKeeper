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
  });
});
