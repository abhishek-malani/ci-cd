exports.selectRecipeLocators = {
  headerText: 'div#__layout h1',
  subHeaderText: 'div.nopurge_headline_26pvrrNT > div > div',
  topContinueBtn: 'button.nopurge_btn_1F5Y44zG.nopurge__theme_primary_3yW8hM_Y.nopurge__size_sm_md-h3ku_.nopurge_desktopBtnSubmit_pyb6nCKj',
  modifyPlanBtn: 'button.nopurge_btn_1F5Y44zG.nopurge__theme_inverted_3oqvLE5u.nopurge_modifyPlanBtn_HPqHCFFv',
  recipeChoosenText: 'div.nopurge_chosenTitle_3RESC_SV',
  recipeChosenCount: '.nopurge_active_2U0Xe7i0.nopurge_chosenNum_31QQARIT',
  recipeToChooseCount: '.nopurge_chosenRow_2Xidleob .nopurge_chosenNum_31QQARIT',
  recipeCardsActions: {
    unselectedRecipe: 'div#__layout div:nth-child(?) > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_btnContainer_35bGxgBj > button.nopurge__theme_secondary_1bzBlPR2',
    selectedRecipe: 'div#__layout div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_btnContainer_35bGxgBj > button.nopurge__theme_inverted_3oqvLE5u',
  },
  recipeCards: {
    recipeImage: 'div:nth-child(?) > div > div.nopurge_imgContainer_11OE_CUa',
    recipeTitle: 'div:nth-child(?) > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_link_1Mrb1Rm1 > div.nopurge_title_3z5aznrK',
    recipeCalories: 'div:nth-child(?) > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_infoRow_384dZgcz > div.nopurge_calorie_1oLYBqP3',
    recipeCookingTime: 'div:nth-child(?) > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_infoRow_384dZgcz > div.nopurge_cookingTime_3tW78Wa5',
    recipeTags: 'div:nth-child(?) > div > div.nopurge_infoContainer_2BPqf1x4 > div.nopurge_featuresBlock_1tmqTQfM',
  },
  gourmetSurcharge: 'div.nopurge_additionalPrice_33s78n38',
  recipePDF: {
    headerText: 'a > div.nopurge_recipeTitle_2h34crFf > h1',
    recipeTgas: 'div.nopurge_mainInfoRowDesktop_2MLtWIOy > div:nth-child(1) > div',
    cheesyText: 'div.nopurge_infoSubtitle_3-j4Wbt9',
    cookingTime: 'div.nopurge_mainRowInfo_3veuubx4 > div > div.nopurge_time_3lsC6jj5',
    nutrition: 'div.nopurge_mainRowInfo_3veuubx4 > div > div.nopurge_calories_1lhlDdEy',
    recipeImage: 'div.nopurge_recipeImg_2AtaiCya > img',
    closeBtn: 'div.nopurge_container_1nEZHHnH.nopurge_recipePopup_i5bUSeYQ > div.nopurge_iconBorder_34F2WeX7',
    instructions: {
      headerText: 'div#__layout h2',
      downloadPDFBtn: 'div#__layout div.nopurge_desktopRight_hwIzanz7 > a',
      // ? iterates from 2 to 7 not including 3
      stepImage: 'div#__layout div:nth-child(?) > img',
      // ? iterates from 2 to 7
      stepHeader: 'div#__layout div:nth-child(?) > div > div.nopurge_stepTitle_1Ft1-yb8',
      stepBody: 'div#__layout div:nth-child(?) > div > div.nopurge_text_21GmYejx',
      step2Image: 'div#__layout div.nopurge_instructionContainer_xWgz2w-t > div:nth-child(3) > img',
      // ? iterated from 1 to 2
      extraInfoHeader: 'div#__layout div:nth-child(?) > div.nopurge_headline_1D0h3Cg8',
      extraInfoBody: 'div#__layout div:nth-child(?) > div.nopurge_tip_EO161IdR',
      chooseRecipeBtn: 'div#__layout div.nopurge_fixed_bsflid8g.nopurge_desktop_1XzYL6Qu.nopurge_inPopup_3hlV_7Di > div > div > button',
    },
    ingredients: {
      ingredientsHeader: 'div#__layout div.nopurge_desktopRight_hwIzanz7 > div > div.nopurge_header_Xbpcc4hi',
      noOfPeopleText: 'div#__layout div.nopurge_desktopRight_hwIzanz7 > div > div:nth-child(2) > div.nopurge_label_PKBYT7ro',
      listOfIngredients: 'div#__layout div.nopurge_desktopRight_hwIzanz7 > div > h3',
      // ? iterates from 1 to 3
      noOfPeopleSelector: 'div#__layout div.nopurge_desktopRight_hwIzanz7 > div > div:nth-child(2) > div.nopurge_buttonsRow_3F0OAwsr > button:nth-child(?)',
    },
  },
  mobileElements: {
    continueBtn: '.nopurge_controlsRow_PzWAgdXi .nopurge_btnSubmit_3b49sWVp',
    modifyPlanBtn: '.nopurge_controlsRow_PzWAgdXi .nopurge__theme_inverted_3oqvLE5u',
  },
};
exports.recipePDFMobile = {
  headerText: 'div.nopurge_titleRowMob_18RjStDy',
  recipeTags: 'div.nopurge_featuresBlockMob_2zbYQZ3E',
  cookingTime: 'div#__layout div.nopurge_infoMob_-lfjZ_bS > div.nopurge_time_3lsC6jj5',
  nutrition: 'div.nopurge_mainRowInfo_3veuubx4 > div > div.nopurge_calories_1lhlDdEy',
  calories: 'div#__layout div.nopurge_infoMob_-lfjZ_bS > div.nopurge_calories_1lhlDdEy',
  introduction: 'div#__layout div.nopurge_introduction_3ljeR6Gs',
  recipeImage: 'div.nopurge_recipeImg_2AtaiCya > img',
  closeBtn: 'div.nopurge_container_1nEZHHnH.nopurge_recipePopup_i5bUSeYQ > div.nopurge_iconBorder_34F2WeX7',
  tryHCNowBtn: 'div .nopurge_btnMobileRow_3HiOjhHS',
  downloadRecipeBtn: 'div .nopurge_additionalInfo_3YxBw7k6 a:nth-child(1)',
  seeFullRecipe: 'div .nopurge_paddedContent_1oiex3Ru .nopurge__theme_primary_3yW8hM_Y',
  ingredients: {
    ingredientsHeader: 'div#__layout div.nopurge_paddedContent_1oiex3Ru > div > div.nopurge_header_Xbpcc4hi',
    noOfPeopleText: 'div#__layout div.nopurge_paddedContent_1oiex3Ru > div > div:nth-child(2) > div.nopurge_label_PKBYT7ro',
    listOfIngredients: 'div#__layout div.nopurge_paddedContent_1oiex3Ru > div .nopurge_ingredient_3C9Xk9BP',
    // ? iterates from 1 to 3
    noOfPeopleSelector: 'div#__layout div.nopurge_paddedContent_1oiex3Ru > div > div:nth-child(2) > div.nopurge_buttonsRow_3F0OAwsr > button:nth-child(?)',
  },
};
