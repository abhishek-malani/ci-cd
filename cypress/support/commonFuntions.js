import { testData } from '../fixtures/testData';

export default class CommonFunctions {
  static generateTestEmail() {
    const d = new Date();
    const n = d.getTime();
    const userName = `automated-test${n}@hellochef.me.staging.hellochef`;
    return userName.toString();
  }

  static selectValueFromDropDown(locator, value) {
    cy.get(locator).contains(value).click();
  }

  /**
     * dayindex is an int. Starts from 0 -> sunday to 6 -> saturday
     * week is an int, starts from 1 -> n
     * this function returns date of the next dayInxed in a given week
    */
  static nextDay(dayIndex, week) {
    const d = new Date();
    d.setDate((d.getDate() + (dayIndex + 7 - d.getDay())) % 7);
    d.setDate(d.getDate() + (week * 7));
    return d.toISOString().slice(0, 10);
  }

  static addStoreCredit() {
    const url = testData.urls.magical.homePage + testData.urls.magical.addStoreCredit;
    const data = testData.addStoreCreditData;
    cy.request('POST', url, data).then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  static addDiscount() {
    const url = testData.urls.magical.homePage + testData.urls.magical.discount;
    const data = testData.addStoreCreditData;
    cy.request('POST', url, data).then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  static generateNewCoupon() {
    const url = testData.urls.magical.homePage + testData.urls.magical.newCoupon;
    const data = testData.newCouponData;
    const date = new Date();
    data.expiry = date.getDate().toISOString.slice(0, 10);
    cy.request('POST', url, data).then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  static generateUniqueRandomNumber(count) {
    const arr = [];
    while (arr.length < count) {
      const r = Math.floor(Math.random() * 19) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    cy.log(arr);
    return arr;
  }
}
