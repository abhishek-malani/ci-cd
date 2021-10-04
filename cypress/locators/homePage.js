exports.homePage = {
  menubar: {
    title: '.nopurge_headerLogo_4EA__2JT #__9gAI8i4__horizontal-bell-pepper-red',
    ourPlans: '.nopurge_link_3BwhQepq[href="/our-plans"]',
    weeklyMenu: '.nopurge_link_3BwhQepq[href="/weekly-menu"]',
    howItWorks: 'div#__layout div.nopurge_link_3BwhQepq',
    // checkoutCart : '.nopurge_link_3BwhQepq[href="/checkout/resume"]',
    signIn: 'div#__layout a.nopurge_btnSignIn_13y74gON',
    getStartedBtn: 'div#__layout a.nopurge_btn_2Ixwweha',
    banner: 'div.nopurge_bannerContainer_21krjSfX h1.nopurge_centered_2uAVPJyt',
    smallBanner: '.nopurge_bannerInfo_1NgxIWN9 .nopurge_bannerDescription_15wNVxP2',
    bckgCanvas: 'div.nopurge_bannerContainer_21krjSfX',
  },

  whyChooseUsSegment: {
    header: 'div:nth-child(2) div:nth-child(1) > h1',
    subHeader: 'div.nopurge_description_3JTTt0J4',
    // ?  will iterate over elements 1 to 3
    subSectionImage: '.nopurge_reasonBlock_XXVXH6Hh > div:nth-child(?) img',
    subSectionHeader: 'div:nth-child(?) > div.nopurge_itemTitle_3aWcQGAq > h2',
    // first ? iterates from 1-3, second one from 3-5
    subSectionSubText: 'div.nopurge_reasonBlock_XXVXH6Hh > div:nth-child(first?) > div:nth-child(second?) > div',
    subSectionCheckBox: 'div:nth-child(first?) > div:nth-child(second?) >span.nopurge_iconCheck_3yJyEUia',
  },

  howItWorksSegment: {
    image: 'div.nopurge_imgBlock_2WbEXdGJ',
    bckgCanvas: 'div#__layout div.nopurge_howItWorksBlock_3PVtvteh',
    headerText: 'div.nopurge_howItWorksTitle_PdsQOW4j',
    subText: 'div.nopurge_howItWorksSubtitle_2rXt4Z8z',
    // ?  will iterate over elements 1 to 3
    stepText: 'div:nth-child(?) > div.nopurge_stepText_2lh5Sk0b',
    stepNumber: 'div:nth-child(?) > div.nopurge_stepNumber_piIwxjkc',
    learnMoreBtn: 'div.nopurge_howItWorksBlock_3PVtvteh a',
  },

  sectionFour: {
    header: 'div:nth-child(4) div:nth-child(1) h1',
    subHeader: 'div:nth-child(4) div.nopurge_bannerDescription_15wNVxP2',
    viewMenuBtn: 'div#__layout div:nth-child(3) > div:nth-child(4) > div > div > a',
    bckgImage: 'div#__layout div.nopurge_imgBlock_2WbEXdGJ',
  },

  customersSaySegment: {
    instagramImage: 'img[alt="Instagram"]',
    hashTag: 'div:nth-child(5) div div a span',
    // ?  will iterate over elements 1 to 4
    foodImages: 'a div img:nth-child(?)',
    headerText: 'div.nopurge_googleInfo_A4H7EM7-',
    ratingsNumber: 'div.nopurge_pointsRow_1i9xGp2l > div',
    ratingStars: 'div.nopurge_pointsRow_1i9xGp2l > span',
    reviewsOnGoogle: 'div.nopurge_summary_38ye0S96',
  },

  hungryForMore: {
    header: 'div.nopurge_box_wmL6jwdB  div:nth-child(1)  h1',
    subtext: 'div.nopurge_box_wmL6jwdB div.nopurge_bannerDescription_15wNVxP2',
    inputEmail: 'div#__layout div.nopurge_box_wmL6jwdB > form > label > div > input[name="email"]',
    subscribeBtn: 'div#__layout div.nopurge_box_wmL6jwdB > form[name="index"] > label > div > button',
    finePrint: 'div.nopurge_additionalInfo_1EkoYaW0',
    bckgImage: 'div.nopurge_subscribeContainer_2gJ86Hcj',
  },
  miscellaneous: {
    // intercom : 'div.intercom-lightweight-app-launcher-icon'
  },
};

exports.newsLetter = {
  subscribeToNL: {
    subscribeToNLBtn: '.input-group > .btn',
    subscribeToNLErrorText: '.invalid-feedback',
  },
};

exports.mobileHomePage = {
  icon: 'div #__layout .nopurge_iconMenu_3k15BaiT',
};
