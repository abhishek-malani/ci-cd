exports.signup = {
  breadCrumbs: {
    // Icons are not present in latest commit.
    selectYourBoxText: 'div.nopurge_navigationContainer_17G5SDQZ > a:nth-child(1) > div',
    selectYourBoxIcon: 'div.nopurge_navigationContainer_17G5SDQZ > a:nth-child(1) .nopurge_linkIcon_271D3ec9',
    signUpText: 'a.nuxt-link-exact-active.nuxt-link-active > div',
    signupIcon: 'a.nuxt-link-exact-active.nuxt-link-active .nopurge_linkIcon_271D3ec9',
    deliveryText: 'div.nopurge_navigationContainer_17G5SDQZ > div:nth-child(3) > div',
    deliveryIcon: 'div.nopurge_navigationContainer_17G5SDQZ > div:nth-child(3) .nopurge_linkIcon_271D3ec9',
    chooseRecipeText: 'div:nth-child(4) > div',
    chooseRecipeIcon: 'div:nth-child(4) .nopurge_linkIcon_271D3ec9',
    paymentText: 'div:nth-child(5) > div',
    paymentIcon: 'div:nth-child(5) .nopurge_linkIcon_271D3ec9',
  },
  userDetails: {
    image: 'div#__layout img',
    header: 'div#__layout h1',
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    email: 'input[name="email"]',
    password: 'input[name="password"]',
    submitBtn: 'form > button',
    haveAccountText: 'div.nopurge_signUpContainer_1jPSCsT8 > div > div > .nopurge_row_3E5QnM0Y',
    signInLink: 'div.nopurge_signUpContainer_1jPSCsT8 > div > div > .nopurge_row_3E5QnM0Y > a',
  },

  // ? iterates from 1 to 3
  segment2: {
    containers: 'div.nopurge_infoContainer_3bG2dzce > div:nth-child(?)',
    image: 'div:nth-child(?) > div.nopurge_iconRow_3k6A8T7S > div',
    containerHeader: 'div:nth-child(?) > div.nopurge_infoTitle_pwjCMjNw',
    bulletPoints: 'div.nopurge_infoContainer_3bG2dzce > div:nth-child(first?) > div:nth-child(3) > div:nth-child(?) > div',
    icon: 'div.nopurge_infoContainer_3bG2dzce > div:nth-child(first?) > div:nth-child(3) > div:nth-child(?) > .nopurge_iconCheck_1PwVtRdS',
  },

  // ? iterates from 1to 2
  sellingPoints: {
    spHeader: 'div:nth-child(?) > div > div.nopurge_additionalTitle_2uWBZf5L',
    spIcon: 'div:nth-child(?) > .nopurge_additionalIcon_2StKn3FB',
    spSubHeader: 'div:nth-child(?) > div > div.nopurge_additionalText_2kRIq0hQ',
  },

};

exports.signIn = {
  email: 'div#__layout div:nth-child(3) > div:nth-child(1) > div > div > div > form > label:nth-child(1) > div > input[name="email"]',
  password: 'input[name="password"]',
  signInBtn: 'div#__layout form > button',
};

exports.signupMobile = {
  nextBtn: 'div#__layout div.nopurge_content_1vvDj3dO button.nopurge_btn_1F5Y44zG.nopurge__theme_primary_3yW8hM_Y',
};
