exports.ourBoxesLocators = {
  headerTextOB: 'div#__layout div.nopurge_header_Fh7K6wXA > h1',
  customiseYourPlan: 'div#__layout h3',
  numberOfPeople: 'div:nth-child(1) > div > div.nopurge_label_PKBYT7ro',
  recipePerWeek: 'div:nth-child(2) > div > div.nopurge_label_PKBYT7ro',
  planBreakUp: 'div#__layout div.nopurge_infoRow_25hLB1o8.nopurge_customization_cIBhs91H > div.nopurge_info_3brZnr1t',
  servingPerWeekText: 'div.nopurge_customization_cIBhs91H > div.nopurge_info_3brZnr1t',
  servingsPerWeek: 'div.nopurge_infoRow_25hLB1o8  div.nopurge_value_1Qhbk-KP',
  pricePerServingText: 'div.nopurge_customization_cIBhs91H > div:nth-child(1) > div.nopurge_info_3brZnr1t',
  pricePerServingNumber: 'div.nopurge_customization_cIBhs91H > div:nth-child(1) > div.nopurge_value_1Qhbk-KP',
  weeklyTotalText: 'div:nth-child(2) > div.nopurge_info_3brZnr1t',
  weeklyTotalNumber: 'div:nth-child(2) > div.nopurge_value_1Qhbk-KP',
  selectPlanBtn: 'div#__layout div.nopurge_btnRow_3PchGAM9 > a',
  // weeklyMenu
  menuHeader: 'div.nopurge_menuContainer_1ZxgnQ9M div:nth-child(1) h1',
  menuSubHeader: 'div.nopurge_description_1K9mBUYm',
  nextBtn: 'div#__layout div.swiper-button-next',
  // customerReview
  headerTextCR: 'div.nopurge_header_FWKJoEmo > h1',
  // FAQ
  headerTextFAQ: 'div.nopurge_header_1GUlh3kU > h1',
};

exports.weeklyMenu = {
  // ? will be replaced with int from 1 to 20 to iterate over matching elements
  image: 'div:nth-child(?) > div > div > div.nopurge_imgContainer_11OE_CUa',
  imageText: 'div:nth-child(?) > div > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_link_1Mrb1Rm1 > div.nopurge_title_3z5aznrK',
  imageCookingTime: 'div:nth-child(?) > div > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_infoRow_384dZgcz > div.nopurge_cookingTime_3tW78Wa5',
  imageCalorie: 'div:nth-child(?) > div > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_infoRow_384dZgcz > div.nopurge_calorie_1oLYBqP3',
  imageTags: 'div:nth-child(?) > div > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_featuresBlock_1tmqTQfM > div.nopurge_feature_3SlNJyOV',
  // gourmentSurcharge : 'div.nopurge_btnContainer_35bGxgBj > div'
};

exports.customerReviewWeb = {
  custPhoto: 'div#__layout div:nth-child(?) > div.nopurge_headRow_3QZqD-IB > div.nopurge_logo_2Fkjs3X8',
  custName: 'div#__layout div:nth-child(?) > div.nopurge_headRow_3QZqD-IB > div.nopurge_headInfo_3X-iGgKO > div.nopurge_name_bP1Q3tuE',
  custStars: 'div#__layout div:nth-child(?) > div.nopurge_headRow_3QZqD-IB > div.nopurge_headInfo_3X-iGgKO > div.nopurge_info_oL4drWnu',
  custReview: 'div#__layout div:nth-child(?) > div.nopurge_feedback_2LeP1Xqy',
};

exports.customerReview = {
  // ? will be replaced with int from 1 to 4 to iterate over matching elements
  custPhoto: '.swiper-slide.swiper-slide-active .nopurge_logo_2Fkjs3X8',
  custName: '.swiper-slide.swiper-slide-active .nopurge_name_bP1Q3tuE',
  custStars: '.swiper-slide.swiper-slide-active .nopurge_info_oL4drWnu',
  custReview: '.swiper-slide.swiper-slide-active .nopurge_feedback_2LeP1Xqy',
};

exports.FAQ = {
  // ? will be replaced with int from 1 to 4 to iterate over matching elements
  faq: 'div:nth-child(?) > div.nopurge_title_PLU0bY9Q',
  faqAnswer: 'div:nth-child(?) > div.nopurge_text_1w0PbUq7',
};

exports.variableCSS = {
  numberOfPeople: 'div:nth-child(1) > div > div.nopurge_buttonsRow_3F0OAwsr > button:nth-child(?)',
  recipePerWeek: 'div:nth-child(2) > div > div.nopurge_buttonsRow_3F0OAwsr > button:nth-child(?)',
};

exports.mobileOurBoxLocators = {
  headerTextOB: 'div.nopurge_header_1Yk7scjV h1',
  customiseYourPlan: 'div#__layout h3',
  numberOfPeople: 'div:nth-child(1) > div > div.nopurge_label_PKBYT7ro',
  recipePerWeek: 'div:nth-child(2) > div > div.nopurge_label_PKBYT7ro',
  planBreakUp: 'div#__layout div.nopurge_infoRow_25hLB1o8.nopurge_customization_cIBhs91H > div.nopurge_info_3brZnr1t',
  servingPerWeekText: 'div.nopurge_customization_cIBhs91H > div.nopurge_info_3brZnr1t',
  servingsPerWeek: 'div.nopurge_infoRow_25hLB1o8  div.nopurge_value_1Qhbk-KP',
  pricePerServingText: 'div.nopurge_customization_cIBhs91H > div:nth-child(1) > div.nopurge_info_3brZnr1t',
  pricePerServingNumber: 'div.nopurge_customization_cIBhs91H > div:nth-child(1) > div.nopurge_value_1Qhbk-KP',
  weeklyTotalText: 'div:nth-child(2) > div.nopurge_info_3brZnr1t',
  weeklyTotalNumber: 'div:nth-child(2) > div.nopurge_value_1Qhbk-KP',
  selectPlanBtn: 'div#__layout div.nopurge_btnRow_1vj_Uv4X > div .nopurge_content_1vvDj3dO > a',
  finePrintText: 'div.nopurge_notice_1Yn7McfW',
};
exports.ourBoxesMobile = {
  logo: 'div #__layout .nopurge_headerLogo_4EA__2JT',
  // iterate ? from 2 to 5
  breadCrumbs: 'div#__layout div.nopurge_navigationContainer_17G5SDQZ > div:nth-child(?) > div',
  selectBox: 'div#__layout div.nopurge_navigationContainer_17G5SDQZ > a:nth-child(1) > div',
};
