import { footer } from '../locators/footer';

class Footer {
  static validateMobileFooter() {
    cy.get(footer.mobile.copyRight, { timeout: 5000 }).scrollIntoView();
    cy.validateLocators(footer.mobile);
  }
}

export default Footer;
