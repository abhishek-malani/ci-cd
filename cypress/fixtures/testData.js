exports.testData = {
  viewports: {
    MBP: 'macbook-13',
    ip6: 'iphone-6',
    MBP16: 'macbook-16',
  },
  urls: {
    magical: {
      homePage: 'https://magical.hellochef.me/',
      newUserCheckout: 'checkout/1/sign-up',
      addStoreCredit: 'api/store-credit',
      newCoupon: 'api/coupons',
      discount: 'api/discounts',
    },
    local: {
      baseUrl: 'http://localhost:3000/',
    },

  },
  newUser: {
    firstName: 'automated',
    lastName: 'test',
    password: 'automated1',
  },
  existingUSer: {
    email: 'test@hellochef1.com',
    password: 'automated',
  },
  paymentDetails: {
    visa: {
      cardNumber: '4242424242424242',
      cardExpiry: '0322',
      cardCVV: '100',
    },
    checkoutPassword: 'Checkout1!',
    couponCode: 'test',
  },
  cities: ['Abu Dhabi', 'Dubai', 'Ras Al Khaimah', 'Sharjah', 'Al Ain', 'Al Ghadeer', 'Ajman', 'Fujairah', 'Umm Al Quwain'],
  deliveryDay: [1, 4, 5, 6, 0],
  addStoreCreditData: {
    amount: 25, customer: 52227, reason: 'test', used: false,
  },
  newCouponData: {
    amount: 25, code: 'test', description: 'test', expiry: '2021-08-29', maxSpendLimit: null, minSpendLimit: null, modelName: '', type: 'fixed', usageLimit: 1, usageLimitPerUser: 1, used: false,
  },
};
