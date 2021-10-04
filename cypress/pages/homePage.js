import { homePage } from '../locators/homePage';

export default class HomePage {
  static validatePageHeaders() {
    Object.keys(homePage).forEach((key) => {
      const internalObject = homePage[key];
      cy.validateLocators(internalObject);
    });
    cy.validateNeighbourLocators(homePage.whyChooseUsSegment.subSectionImage, 3);
    cy.validateNeighbourLocators(homePage.whyChooseUsSegment.subSectionHeader, 3);
    for (let i = 1; i <= 3; i += 1) {
      const loc = homePage.whyChooseUsSegment.subSectionSubText.replace('first?', i);
      for (let j = 3; j <= 5; j += 1) {
        cy.get(loc.replace('second?', j)).should('be.visible');
      }
    }
    cy.validateNeighbourLocators(homePage.howItWorksSegment.stepText, 3);
    cy.validateNeighbourLocators(homePage.howItWorksSegment.stepNumber, 3);
    cy.validateNeighbourLocators(homePage.customersSaySegment.foodImages, 4);
  }
}
