import { weeklyMenu, cards } from '../locators/weeklyMenu';

export default class WeeklyMenu {
  static validatePageSanity() {
    cy.get(weeklyMenu.weeklyMenuDate, { timeout: 60000 }).scrollIntoView().should('be.visible');
    cy.get(weeklyMenu.leftArrow).should('be.visible');
    cy.get(weeklyMenu.rightArrow).should('be.visible');
    for (let i = 2; i <= 20; i += 1) {
      cy.get(cards.recipeImage.replace('?', i), { timeout: 30000 }).should('be.visible');
      cy.get(cards.recipeName.replace('?', i), { timeout: 30000 }).should('be.visible');
      cy.get(cards.recipeTags.replace('?', i), { timeout: 30000 }).should('be.visible');
      cy.get(cards.recipeCalories.replace('?', i), { timeout: 30000 }).should('be.visible');
      cy.get(cards.recipeCookingTime.replace('?', i), { timeout: 30000 }).should('be.visible');
      if (i === 20) {
        cy.get(weeklyMenu.gourmetSurcharge).should('contain', 'AED');
      }
    }
  }

  static clickGetCooking() {
    cy.get(weeklyMenu.getCookingBtn).click();
  }

  static scrollToBottom() {
    cy.get(weeklyMenu.gourmetSurcharge, { timeout: 30000 })
      .scrollIntoView({ timeout: 5000, duration: 2000 });
  }
}
