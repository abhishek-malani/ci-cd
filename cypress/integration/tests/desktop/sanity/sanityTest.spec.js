import { homePage } from '../../../../locators/homePage';
import HomePage from '../../../../pages/homePage';
import { testData } from '../../../../fixtures/testData';
import WeeklyMenu from '../../../../pages/weeklyMenu';

describe('Perform basic sanity on home page', () => {
  beforeEach(() => {
    cy.viewport(testData.viewports.MBP);
    Cypress.Cookies.preserveOnce('auth', 'auth.customer');
  });
  after(() => {
    cy.clearCookies();
  });

  it.only('Sanity check on home page', () => {
    cy.visit(testData.urls.magical.homePage);
    HomePage.validatePageHeaders();
  });

  it.only('Validate weekly menu', () => {
    cy.get(homePage.menubar.weeklyMenu).click();
    WeeklyMenu.validatePageSanity();
    WeeklyMenu.clickGetCooking();
  });
});
