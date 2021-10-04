import { howItWorks } from '../locators/howItWorks';
import { footer } from '../locators/footer';

class HowItWorks {
  static validatePageSanity() {
    cy.validateLocators(howItWorks);
    cy.scrollTo(800);
    cy.validateLocators(footer);
  }
}

export default HowItWorks;
