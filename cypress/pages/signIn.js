import { signIn } from '../locators/signIn';
import { footer } from '../locators/footer';

class SignIn {
  static validatePageSanity() {
    cy.validateLocators(signIn);
    cy.scrollTo(700);
    cy.validateLocators(footer);
  }

  static enterPassword(password) {
    cy.get(signIn.password).type(password);
  }

  static clickOnContinueBtn() {
    cy.get(signIn.signInBtn).click();
  }
}

export default SignIn;
