/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,300;0,400;0,700;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  background-color: #bfbebd;\n  font-family: \"Lato\", sans-serif;\n  height: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n\nh1 {\n  font-size: 32px;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 19px;\n}\n\nh4 {\n  font-size: 16px;\n}\n\nh5 {\n  font-size: 13px;\n}\n\nh6 {\n  font-size: 11px;\n}\n\np {\n  margin: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.container {\n  background-color: #fdfdfc;\n  box-shadow: rgba(100, 100, 111, 0.9) 0 21px 87px 0;\n  width: 100%;\n  max-width: 1180px;\n  min-width: 320px;\n  margin: 0 auto 50px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  margin: 100px auto;\n}\n\n.container_menu {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 50;\n}\n.header:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  z-index: 2;\n}\n.header .header__body {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  height: auto;\n  align-items: center;\n}\n.header .header__logo {\n  flex: 0 0 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  z-index: 3;\n}\n.header .header__logo img {\n  max-width: 100%;\n  display: block;\n}\n.header .header__burger {\n  display: none;\n}\n.header .header__menu {\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\n}\n.header .header__list {\n  display: flex;\n  position: relative;\n  z-index: 2;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  justify-content: space-between;\n  border-right: 1px solid #999;\n}\n.header .header__list li {\n  list-style: none;\n  margin: 0;\n}\n.header .header__link {\n  color: #565656;\n  font-size: 18px;\n  text-decoration: none;\n  border: 1px solid #999;\n  border-right: none;\n  background-color: #fff;\n  padding: 5px 20px;\n}\n.header .header__link:hover {\n  background-color: #ffff80;\n}\n.header .header__link:first-letter {\n  text-transform: uppercase;\n}\n.header .header__link:last-child {\n  flex: 1 1 auto;\n}\n.header .header__link a {\n  color: #3e392a;\n}\n\n@media (max-width: 767px) {\n  body.lock {\n    overflow: hidden;\n  }\n\n  .header .header__burger {\n    display: block;\n    position: relative;\n    width: 5%;\n    height: 20px;\n    left: 90%;\n    z-index: 3;\n  }\n  .header .header__burger:before, .header .header__burger:after {\n    content: \"\";\n    background-color: #565656;\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    left: 0;\n    transition: all 0.3s ease 0s;\n  }\n  .header .header__burger:before {\n    top: 0;\n  }\n  .header .header__burger:after {\n    bottom: 0;\n  }\n  .header .header__burger span {\n    position: absolute;\n    background-color: #565656;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    top: 9px;\n    transition: all 0.3s ease 0s;\n  }\n  .header .header__burger.active:before {\n    transform: rotate(45deg);\n    top: 9px;\n  }\n  .header .header__burger.active:after {\n    transform: rotate(-45deg);\n    bottom: 9px;\n  }\n  .header .header__burger.active span {\n    transform: scale(0);\n  }\n  .header .header__menu {\n    position: fixed;\n    top: -100%;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    padding: 70px 0 0 0;\n    transition: all 0.6s ease 0s;\n    overflow: auto;\n  }\n  .header .header__menu.active {\n    top: 0;\n  }\n  .header .header__logo {\n    flex: 0 0 40px;\n  }\n  .header .header__body {\n    height: 50px;\n  }\n  .header .header__list {\n    display: block;\n    border: none;\n  }\n  .header .header__list li {\n    margin: 0;\n  }\n  .header .header__link {\n    font-size: 24px;\n    border-right: 1px solid #565656;\n  }\n}\n@media (max-width: 469px) {\n  .header .header__burger {\n    left: 85%;\n    width: 7%;\n  }\n}\n@media (max-width: 309px) {\n  .header .header__burger {\n    left: 80%;\n    width: 10%;\n  }\n}\n.container .header-row {\n  display: flex;\n}\n.container .header-row .col-left {\n  width: 40%;\n  min-width: 200px;\n  margin: 0 10px;\n  background-color: #e3be90;\n}\n.container .header-row .col-left .img-cv {\n  margin: 10px auto 50px;\n  max-width: 300px;\n  width: 100%;\n  max-height: 300px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.container .header-row .col-left .img-cv img {\n  width: 100%;\n  height: auto;\n}\n.container .header-row .col-right {\n  width: 60%;\n  margin: 0 10px;\n}\n.container .header-row .col-right .board-name {\n  width: 100%;\n  min-height: 310px;\n  background-color: #3e392a;\n  color: #fdfdfc;\n  padding: 35px 15px 55px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container .header-row .col-right .board-name .title {\n  text-transform: uppercase;\n  font-size: 34px;\n  font-weight: 400;\n  text-align: center;\n  margin: auto 0;\n  line-height: 145%;\n  letter-spacing: 20px;\n  font-family: \"Neuton\", serif;\n  padding-bottom: 10px;\n}\n.container .header-row .col-right .board-name .subtitle {\n  text-transform: uppercase;\n  font-weight: 800;\n  line-height: 145%;\n  text-align: center;\n  letter-spacing: 6px;\n  margin: auto 0;\n}\n.container .section-row {\n  display: flex;\n}\n.container .section-row .coll-left-info {\n  width: 40%;\n  min-width: 200px;\n  margin: 0 10px;\n  background-color: #e3be90;\n}\n.container .section-row .coll-left-info .info-content {\n  margin: 20px auto;\n  max-width: 300px;\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  overflow: no-content;\n}\n.container .section-row .coll-left-info .info-content .info-content_title {\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  line-height: 145%;\n  background-color: #3e392a;\n  color: #fdfdfc;\n  padding-left: 5px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n.container .section-row .coll-left-info .info-content p {\n  width: 100%;\n  font-size: calc(12px + 0.3vw);\n  font-weight: bold;\n  line-height: 145%;\n  overflow: hidden;\n}\n.container .section-row .coll-left-info .info-content p:hover {\n  overflow: auto;\n}\n.container .section-row .coll-left-info .info-content p a {\n  color: inherit;\n}\n.container .section-row .coll-left-info .info-content ul li {\n  margin-left: 25px;\n}\n.container .section-row .coll-right-info {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 10px;\n}\n.container .section-row .coll-right-info .right-info-content {\n  margin: 20px 0;\n}\n.container .section-row .coll-right-info .right-info-content .info-content_title {\n  text-transform: uppercase;\n  font-weight: 800;\n  line-height: 145%;\n  text-align: left;\n  letter-spacing: 6px;\n  margin-bottom: 30px;\n}\n.container .section-row .coll-right-info .right-info-content .job {\n  margin: 0 0 15px;\n}\n.container .section-row .coll-right-info .right-info-content .job .title_job {\n  text-transform: uppercase;\n  line-height: 145%;\n  font-weight: 400;\n}\n.container .section-row .coll-right-info .right-info-content .job .info-about-job {\n  padding-bottom: 15px;\n}\n.container .section-row .coll-right-info .right-info-content .job p {\n  line-height: 145%;\n}\n.container .section-row .coll-right-info .right-info-content .job ul li {\n  margin-left: 25px;\n  line-height: 145%;\n}\n\n@media (max-width: 1260px) {\n  .container {\n    max-width: 1020px;\n  }\n  .container .header-row .col-left .img-cv {\n    max-width: 260px;\n    max-height: 260px;\n  }\n  .container .header-row .col-right .board-name {\n    min-height: 270px;\n  }\n  .container .header-row .col-right .board-name .title {\n    font-size: calc(14px + 1.3vw);\n    letter-spacing: calc(11px + 0.6vw);\n  }\n  .container .section-row .coll-left-info .info-content {\n    max-width: 260px;\n  }\n}\n@media (max-width: 1100px) {\n  .container {\n    max-width: 870px;\n    margin: 50px auto 50px;\n  }\n  .container .header-row .col-left .img-cv {\n    max-width: 230px;\n    max-height: 230px;\n  }\n  .container .header-row .col-right .board-name {\n    min-height: 240px;\n  }\n  .container .header-row .col-right .board-name .title {\n    font-size: calc(14px + 1vw);\n    letter-spacing: calc(10px + 0.4vw);\n  }\n  .container .section-row .coll-left-info .info-content {\n    max-width: 230px;\n  }\n}\n@media (max-width: 775px) {\n  .container {\n    margin: 0;\n  }\n  .container .header-row {\n    flex-direction: column;\n    padding: 0 20px;\n  }\n  .container .header-row .col-left {\n    width: 100%;\n    margin: 0;\n  }\n  .container .header-row .col-left .img-cv {\n    max-width: 230px;\n    max-height: 230px;\n    margin: 30px auto;\n  }\n  .container .header-row .col-right {\n    width: 100%;\n    margin: 0;\n  }\n  .container .header-row .col-right .board-name {\n    margin-bottom: 0;\n    min-height: 150px;\n  }\n  .container .header-row .col-right .board-name .subtitle {\n    font-size: 14px;\n  }\n  .container .section-row {\n    flex-direction: column;\n    padding: 0 20px;\n  }\n  .container .section-row .coll-left-info {\n    width: 100%;\n    margin: 0;\n  }\n  .container .section-row .coll-left-info .info-content {\n    max-width: 90%;\n  }\n  .container .section-row .coll-left-info .info-content p {\n    padding-left: 5px;\n  }\n  .container .section-row .coll-right-info {\n    width: 100%;\n    margin: 0;\n  }\n}\n@media (max-width: 450px) {\n  .container .header-row .col-left .img-cv {\n    max-width: 200px;\n    max-height: 200px;\n    margin: 10px auto;\n  }\n  .container .header-row .col-right .board-name {\n    min-height: 110px;\n  }\n  .container .header-row .col-right .board-name .title {\n    letter-spacing: 6px;\n  }\n  .container .header-row .col-right .board-name .subtitle {\n    font-size: 12px;\n  }\n}\n.container form {\n  padding: 30px 30px 20px 40px;\n}\n.container form .field {\n  width: 100%;\n  padding-bottom: 10px;\n  padding-left: 10%;\n  display: flex;\n}\n.container form .field label {\n  width: 15%;\n  padding-right: 20px;\n  font-weight: 700;\n  text-align: right;\n  height: auto;\n  line-height: 25px;\n}\n.container form .field .field-right {\n  min-width: 65%;\n  max-width: 100%;\n  font-size: 16px;\n}\n.container form .field .field-right input[name=name],\n.container form .field .field-right input[name=mail],\n.container form .field .field-right input[name=birthday],\n.container form .field .field-right input[name=password],\n.container form .field .field-right select[name=hobbies],\n.container form .field .field-right textarea[name=someWords],\n.container form .field .field-right input[name=photo] {\n  width: 100%;\n  border: 2px solid #aaa;\n  box-shadow: 1px 1px 2px 0 #aaa;\n  border-radius: 5px;\n  height: 32px;\n  vertical-align: middle;\n}\n.container form .field .field-right input,\n.container form .field .field-right input::placeholder,\n.container form .field .field-right select,\n.container form .field .field-right option,\n.container form .field .field-right button {\n  font-size: 16px;\n}\n.container form .field .field-right select[name=contact],\n.container form .field .field-right select[name=contact2],\n.container form .field .field-right input[name=contact-name],\n.container form .field .field-right input[name=contact2-title-site],\n.container form .field .field-right input[name=contact2-name] {\n  border: 2px solid #aaa;\n  box-shadow: 1px 1px 2px 0 #aaa;\n  border-radius: 5px;\n  height: 32px;\n  vertical-align: middle;\n  background-color: #fff;\n  margin-right: 3px;\n}\n.container form .field .field-right input[name=contact2-name],\n.container form .field .field-right input[name=contact-name],\n.container form .field .field-right input[name=contact2-title-site] {\n  width: 40%;\n}\n.container form .field .field-right select[name=hobbies] {\n  height: 80px;\n}\n.container form .field .field-right textarea[name=someWords] {\n  height: 64px;\n}\n.container form .field .field-right button[name=delete] {\n  color: #0044ff;\n  border: none;\n  background: inherit;\n  padding: 0;\n}\n.container form .field .field-right button[name=delete]:hover {\n  color: #0099ff;\n}\n.container form .field .field-right .btn {\n  padding: 5px 10px;\n  border: 2px solid #aaa;\n  border-radius: 3px;\n}\n.container form .field .field-right .btn-blue {\n  color: #fff;\n  background-color: #0099ff;\n  border-color: #0099ff;\n}\n.container form .field .field-right .btn-blue:hover {\n  background-color: #0044ee;\n  border-color: #0044ee;\n}\n.container form .field .field-right .btn-white {\n  color: #121212;\n  background-color: #fff;\n  border-color: #aaa;\n}\n.container form .field .field-right .btn-white:hover {\n  background-color: #ddd;\n  border-color: #aaa;\n}\n.container form .field .field-right .btn-gray {\n  color: #121212;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n.container form .field .field-right .btn-gray:hover {\n  background-color: #ddd;\n  border-color: #ccc;\n}\n\n@media (max-width: 890px) {\n  .container form .field .field-right {\n    max-width: 70%;\n  }\n}\n@media (max-width: 650px) {\n  .container form .field label {\n    width: 20%;\n  }\n\n  .container form .field .field-right input[name=contact2-name],\n.container form .field .field-right input[name=contact-name],\n.container form .field .field-right input[name=contact2-title-site] {\n    width: 55%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/_main.scss","webpack://./src/style.scss","webpack://./src/style/_header.scss","webpack://./src/style/cv.scss","webpack://./src/style/_form.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');\n//font-family: 'Lato', sans-serif;\n@import url('https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,300;0,400;0,700;1,400&display=swap');\n//font-family: 'Neuton', serif;\n\n//global\nbody {\n  margin: 0;\n  background-color: #bfbebd;\n  font-family: 'Lato', sans-serif;\n  height: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n\nh1 {\n  font-size: 32px;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 19px;\n}\n\nh4 {\n  font-size: 16px;\n}\n\nh5 {\n  font-size: 13px;\n}\n\nh6 {\n  font-size: 11px;\n}\n\np {\n  margin: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.container {\n  background-color: #fdfdfc;\n  box-shadow: rgba(100, 100, 111, 0.9) 0 21px 87px 0;\n  width: 100%;\n  max-width: 1180px;\n  min-width: 320px;\n  margin: 0 auto 50px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  margin: 100px auto;\n}","@import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,300;0,400;0,700;1,400&display=swap\");\nbody {\n  margin: 0;\n  background-color: #bfbebd;\n  font-family: \"Lato\", sans-serif;\n  height: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n\nh1 {\n  font-size: 32px;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 19px;\n}\n\nh4 {\n  font-size: 16px;\n}\n\nh5 {\n  font-size: 13px;\n}\n\nh6 {\n  font-size: 11px;\n}\n\np {\n  margin: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.container {\n  background-color: #fdfdfc;\n  box-shadow: rgba(100, 100, 111, 0.9) 0 21px 87px 0;\n  width: 100%;\n  max-width: 1180px;\n  min-width: 320px;\n  margin: 0 auto 50px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  margin: 100px auto;\n}\n\n.container_menu {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 50;\n}\n.header:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  z-index: 2;\n}\n.header .header__body {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  height: auto;\n  align-items: center;\n}\n.header .header__logo {\n  flex: 0 0 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  z-index: 3;\n}\n.header .header__logo img {\n  max-width: 100%;\n  display: block;\n}\n.header .header__burger {\n  display: none;\n}\n.header .header__menu {\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\n}\n.header .header__list {\n  display: flex;\n  position: relative;\n  z-index: 2;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  justify-content: space-between;\n  border-right: 1px solid #999;\n}\n.header .header__list li {\n  list-style: none;\n  margin: 0;\n}\n.header .header__link {\n  color: #565656;\n  font-size: 18px;\n  text-decoration: none;\n  border: 1px solid #999;\n  border-right: none;\n  background-color: #fff;\n  padding: 5px 20px;\n}\n.header .header__link:hover {\n  background-color: #ffff80;\n}\n.header .header__link:first-letter {\n  text-transform: uppercase;\n}\n.header .header__link:last-child {\n  flex: 1 1 auto;\n}\n.header .header__link a {\n  color: #3e392a;\n}\n\n@media (max-width: 767px) {\n  body.lock {\n    overflow: hidden;\n  }\n\n  .header .header__burger {\n    display: block;\n    position: relative;\n    width: 5%;\n    height: 20px;\n    left: 90%;\n    z-index: 3;\n  }\n  .header .header__burger:before, .header .header__burger:after {\n    content: \"\";\n    background-color: #565656;\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    left: 0;\n    transition: all 0.3s ease 0s;\n  }\n  .header .header__burger:before {\n    top: 0;\n  }\n  .header .header__burger:after {\n    bottom: 0;\n  }\n  .header .header__burger span {\n    position: absolute;\n    background-color: #565656;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    top: 9px;\n    transition: all 0.3s ease 0s;\n  }\n  .header .header__burger.active:before {\n    transform: rotate(45deg);\n    top: 9px;\n  }\n  .header .header__burger.active:after {\n    transform: rotate(-45deg);\n    bottom: 9px;\n  }\n  .header .header__burger.active span {\n    transform: scale(0);\n  }\n  .header .header__menu {\n    position: fixed;\n    top: -100%;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    padding: 70px 0 0 0;\n    transition: all 0.6s ease 0s;\n    overflow: auto;\n  }\n  .header .header__menu.active {\n    top: 0;\n  }\n  .header .header__logo {\n    flex: 0 0 40px;\n  }\n  .header .header__body {\n    height: 50px;\n  }\n  .header .header__list {\n    display: block;\n    border: none;\n  }\n  .header .header__list li {\n    margin: 0;\n  }\n  .header .header__link {\n    font-size: 24px;\n    border-right: 1px solid #565656;\n  }\n}\n@media (max-width: 469px) {\n  .header .header__burger {\n    left: 85%;\n    width: 7%;\n  }\n}\n@media (max-width: 309px) {\n  .header .header__burger {\n    left: 80%;\n    width: 10%;\n  }\n}\n.container .header-row {\n  display: flex;\n}\n.container .header-row .col-left {\n  width: 40%;\n  min-width: 200px;\n  margin: 0 10px;\n  background-color: #e3be90;\n}\n.container .header-row .col-left .img-cv {\n  margin: 10px auto 50px;\n  max-width: 300px;\n  width: 100%;\n  max-height: 300px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.container .header-row .col-left .img-cv img {\n  width: 100%;\n  height: auto;\n}\n.container .header-row .col-right {\n  width: 60%;\n  margin: 0 10px;\n}\n.container .header-row .col-right .board-name {\n  width: 100%;\n  min-height: 310px;\n  background-color: #3e392a;\n  color: #fdfdfc;\n  padding: 35px 15px 55px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container .header-row .col-right .board-name .title {\n  text-transform: uppercase;\n  font-size: 34px;\n  font-weight: 400;\n  text-align: center;\n  margin: auto 0;\n  line-height: 145%;\n  letter-spacing: 20px;\n  font-family: \"Neuton\", serif;\n  padding-bottom: 10px;\n}\n.container .header-row .col-right .board-name .subtitle {\n  text-transform: uppercase;\n  font-weight: 800;\n  line-height: 145%;\n  text-align: center;\n  letter-spacing: 6px;\n  margin: auto 0;\n}\n.container .section-row {\n  display: flex;\n}\n.container .section-row .coll-left-info {\n  width: 40%;\n  min-width: 200px;\n  margin: 0 10px;\n  background-color: #e3be90;\n}\n.container .section-row .coll-left-info .info-content {\n  margin: 20px auto;\n  max-width: 300px;\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  overflow: no-content;\n}\n.container .section-row .coll-left-info .info-content .info-content_title {\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  line-height: 145%;\n  background-color: #3e392a;\n  color: #fdfdfc;\n  padding-left: 5px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n.container .section-row .coll-left-info .info-content p {\n  width: 100%;\n  font-size: calc(12px + 0.3vw);\n  font-weight: bold;\n  line-height: 145%;\n  overflow: hidden;\n}\n.container .section-row .coll-left-info .info-content p:hover {\n  overflow: auto;\n}\n.container .section-row .coll-left-info .info-content p a {\n  color: inherit;\n}\n.container .section-row .coll-left-info .info-content ul li {\n  margin-left: 25px;\n}\n.container .section-row .coll-right-info {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 10px;\n}\n.container .section-row .coll-right-info .right-info-content {\n  margin: 20px 0;\n}\n.container .section-row .coll-right-info .right-info-content .info-content_title {\n  text-transform: uppercase;\n  font-weight: 800;\n  line-height: 145%;\n  text-align: left;\n  letter-spacing: 6px;\n  margin-bottom: 30px;\n}\n.container .section-row .coll-right-info .right-info-content .job {\n  margin: 0 0 15px;\n}\n.container .section-row .coll-right-info .right-info-content .job .title_job {\n  text-transform: uppercase;\n  line-height: 145%;\n  font-weight: 400;\n}\n.container .section-row .coll-right-info .right-info-content .job .info-about-job {\n  padding-bottom: 15px;\n}\n.container .section-row .coll-right-info .right-info-content .job p {\n  line-height: 145%;\n}\n.container .section-row .coll-right-info .right-info-content .job ul li {\n  margin-left: 25px;\n  line-height: 145%;\n}\n\n@media (max-width: 1260px) {\n  .container {\n    max-width: 1020px;\n  }\n  .container .header-row .col-left .img-cv {\n    max-width: 260px;\n    max-height: 260px;\n  }\n  .container .header-row .col-right .board-name {\n    min-height: 270px;\n  }\n  .container .header-row .col-right .board-name .title {\n    font-size: calc(14px + 1.3vw);\n    letter-spacing: calc(11px + 0.6vw);\n  }\n  .container .section-row .coll-left-info .info-content {\n    max-width: 260px;\n  }\n}\n@media (max-width: 1100px) {\n  .container {\n    max-width: 870px;\n    margin: 50px auto 50px;\n  }\n  .container .header-row .col-left .img-cv {\n    max-width: 230px;\n    max-height: 230px;\n  }\n  .container .header-row .col-right .board-name {\n    min-height: 240px;\n  }\n  .container .header-row .col-right .board-name .title {\n    font-size: calc(14px + 1vw);\n    letter-spacing: calc(10px + 0.4vw);\n  }\n  .container .section-row .coll-left-info .info-content {\n    max-width: 230px;\n  }\n}\n@media (max-width: 775px) {\n  .container {\n    margin: 0;\n  }\n  .container .header-row {\n    flex-direction: column;\n    padding: 0 20px;\n  }\n  .container .header-row .col-left {\n    width: 100%;\n    margin: 0;\n  }\n  .container .header-row .col-left .img-cv {\n    max-width: 230px;\n    max-height: 230px;\n    margin: 30px auto;\n  }\n  .container .header-row .col-right {\n    width: 100%;\n    margin: 0;\n  }\n  .container .header-row .col-right .board-name {\n    margin-bottom: 0;\n    min-height: 150px;\n  }\n  .container .header-row .col-right .board-name .subtitle {\n    font-size: 14px;\n  }\n  .container .section-row {\n    flex-direction: column;\n    padding: 0 20px;\n  }\n  .container .section-row .coll-left-info {\n    width: 100%;\n    margin: 0;\n  }\n  .container .section-row .coll-left-info .info-content {\n    max-width: 90%;\n  }\n  .container .section-row .coll-left-info .info-content p {\n    padding-left: 5px;\n  }\n  .container .section-row .coll-right-info {\n    width: 100%;\n    margin: 0;\n  }\n}\n@media (max-width: 450px) {\n  .container .header-row .col-left .img-cv {\n    max-width: 200px;\n    max-height: 200px;\n    margin: 10px auto;\n  }\n  .container .header-row .col-right .board-name {\n    min-height: 110px;\n  }\n  .container .header-row .col-right .board-name .title {\n    letter-spacing: 6px;\n  }\n  .container .header-row .col-right .board-name .subtitle {\n    font-size: 12px;\n  }\n}\n.container form {\n  padding: 30px 30px 20px 40px;\n}\n.container form .field {\n  width: 100%;\n  padding-bottom: 10px;\n  padding-left: 10%;\n  display: flex;\n}\n.container form .field label {\n  width: 15%;\n  padding-right: 20px;\n  font-weight: 700;\n  text-align: right;\n  height: auto;\n  line-height: 25px;\n}\n.container form .field .field-right {\n  min-width: 65%;\n  max-width: 100%;\n  font-size: 16px;\n}\n.container form .field .field-right input[name=name],\n.container form .field .field-right input[name=mail],\n.container form .field .field-right input[name=birthday],\n.container form .field .field-right input[name=password],\n.container form .field .field-right select[name=hobbies],\n.container form .field .field-right textarea[name=someWords],\n.container form .field .field-right input[name=photo] {\n  width: 100%;\n  border: 2px solid #aaa;\n  box-shadow: 1px 1px 2px 0 #aaa;\n  border-radius: 5px;\n  height: 32px;\n  vertical-align: middle;\n}\n.container form .field .field-right input,\n.container form .field .field-right input::placeholder,\n.container form .field .field-right select,\n.container form .field .field-right option,\n.container form .field .field-right button {\n  font-size: 16px;\n}\n.container form .field .field-right select[name=contact],\n.container form .field .field-right select[name=contact2],\n.container form .field .field-right input[name=contact-name],\n.container form .field .field-right input[name=contact2-title-site],\n.container form .field .field-right input[name=contact2-name] {\n  border: 2px solid #aaa;\n  box-shadow: 1px 1px 2px 0 #aaa;\n  border-radius: 5px;\n  height: 32px;\n  vertical-align: middle;\n  background-color: #fff;\n  margin-right: 3px;\n}\n.container form .field .field-right input[name=contact2-name],\n.container form .field .field-right input[name=contact-name],\n.container form .field .field-right input[name=contact2-title-site] {\n  width: 40%;\n}\n.container form .field .field-right select[name=hobbies] {\n  height: 80px;\n}\n.container form .field .field-right textarea[name=someWords] {\n  height: 64px;\n}\n.container form .field .field-right button[name=delete] {\n  color: #0044ff;\n  border: none;\n  background: inherit;\n  padding: 0;\n}\n.container form .field .field-right button[name=delete]:hover {\n  color: #0099ff;\n}\n.container form .field .field-right .btn {\n  padding: 5px 10px;\n  border: 2px solid #aaa;\n  border-radius: 3px;\n}\n.container form .field .field-right .btn-blue {\n  color: #fff;\n  background-color: #0099ff;\n  border-color: #0099ff;\n}\n.container form .field .field-right .btn-blue:hover {\n  background-color: #0044ee;\n  border-color: #0044ee;\n}\n.container form .field .field-right .btn-white {\n  color: #121212;\n  background-color: #fff;\n  border-color: #aaa;\n}\n.container form .field .field-right .btn-white:hover {\n  background-color: #ddd;\n  border-color: #aaa;\n}\n.container form .field .field-right .btn-gray {\n  color: #121212;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n.container form .field .field-right .btn-gray:hover {\n  background-color: #ddd;\n  border-color: #ccc;\n}\n\n@media (max-width: 890px) {\n  .container form .field .field-right {\n    max-width: 70%;\n  }\n}\n@media (max-width: 650px) {\n  .container form .field label {\n    width: 20%;\n  }\n\n  .container form .field .field-right input[name=contact2-name],\n.container form .field .field-right input[name=contact-name],\n.container form .field .field-right input[name=contact2-title-site] {\n    width: 55%;\n  }\n}",".container_menu {\n  //max-width: 1180px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 50;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    z-index: 2;\n  }\n\n  .header__body {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: center;\n  }\n\n  .header__logo {\n    flex: 0 0 60px;\n    border-radius: 50%;\n    overflow: hidden;\n    position: relative;\n    z-index: 3;\n\n    img {\n      max-width: 100%;\n      display: block;\n    }\n  }\n\n  .header__burger {\n    display: none;\n  }\n\n  .header__menu {\n    width: 100%;\n    box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\n  }\n\n  .header__list {\n    display: flex;\n    position: relative;\n    z-index: 2;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    justify-content: space-between;\n    border-right: 1px solid #999;\n\n    li {\n      list-style: none;\n      margin: 0;\n    }\n  }\n\n  .header__link {\n    color: #565656;\n    font-size: 18px;\n    text-decoration: none;\n    border: 1px solid #999;\n    border-right: none;\n    background-color: #fff;\n    padding: 5px 20px;\n    &:hover {\n      background-color: #ffff80;\n    }\n\n    &:first-letter {\n      text-transform: uppercase;\n    }\n\n    &:last-child {\n      flex:1 1 auto;\n    }\n\n    a {\n      color: #3e392a;\n    }\n  }\n}\n\n@media (max-width: 767px) {\n  body.lock {\n    overflow: hidden;\n  }\n\n  .header {\n    .header__burger {\n      display: block;\n      position: relative;\n      width: 5%;\n      height: 20px;\n      left: 90%;\n      z-index: 3;\n\n      &:before,\n      &:after {\n        content: '';\n        background-color: #565656;\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        left: 0;\n        transition: all 0.3s ease 0s;\n      }\n\n      &:before {\n        top: 0;\n      }\n\n      &:after {\n        bottom: 0;\n      }\n\n      span {\n        position: absolute;\n        background-color: #565656;\n        left: 0;\n        width: 100%;\n        height: 2px;\n        top: 9px;\n        transition: all 0.3s ease 0s;\n      }\n    }\n\n    .header__burger.active:before {\n      transform: rotate(45deg);\n      top: 9px;\n    }\n\n    .header__burger.active:after {\n      transform: rotate(-45deg);\n      bottom: 9px;\n    }\n\n    .header__burger.active span {\n      transform: scale(0);\n    }\n\n    .header__menu {\n      position: fixed;\n      top: -100%;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: #fff;\n      padding: 70px 0 0 0;\n      transition: all 0.6s ease 0s;\n      overflow: auto;\n    }\n\n    .header__menu.active {\n      top: 0;\n    }\n\n    .header__logo {\n      flex: 0 0 40px;\n    }\n\n    .header__body {\n      height: 50px;\n    }\n\n    .header__list {\n      display: block;\n      border: none;\n\n      li {\n        margin: 0;\n      }\n    }\n\n    .header__link {\n      font-size: 24px;\n      border-right: 1px solid #565656;\n    }\n  }\n}\n\n@media (max-width: 469px) {\n  .header .header__burger {\n    left: 85%;\n    width: 7%;\n  }\n}\n\n@media (max-width: 309px) {\n  .header .header__burger {\n    left: 80%;\n    width: 10%;\n  }\n}",".container {\n  .header-row {\n    display: flex;\n\n    .col-left {\n      width: 40%;\n      min-width: 200px;\n      margin: 0 10px;\n      background-color: #e3be90;\n\n      .img-cv {\n        margin: 10px auto 50px;\n        max-width: 300px;\n        width: 100%;\n        max-height: 300px;\n        display: flex;\n        align-items: center;\n        overflow: hidden;\n        border-radius: 50%;\n\n        img {\n          width: 100%;\n          height: auto;\n        }\n      }\n    }\n\n    .col-right {\n      width: 60%;\n      margin: 0 10px;\n\n      .board-name {\n        width: 100%;\n        min-height: 310px;\n        background-color: #3e392a;\n        color: #fdfdfc;\n        padding: 35px 15px 55px;\n        margin-bottom: 30px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        .title {\n          text-transform: uppercase;\n          font-size: 34px;\n          font-weight: 400;\n          text-align: center;\n          margin: auto 0;\n          line-height: 145%;\n          letter-spacing: 20px;\n          font-family: 'Neuton', serif;\n          padding-bottom: 10px;\n        }\n\n        .subtitle {\n          text-transform: uppercase;\n          font-weight: 800;\n          line-height: 145%;\n          text-align: center;\n          letter-spacing: 6px;\n          margin: auto 0;\n        }\n      }\n    }\n  }\n\n  .section-row {\n    display: flex;\n\n    .coll-left-info {\n      width: 40%;\n      min-width: 200px;\n      margin: 0 10px;\n      background-color: #e3be90;\n\n      .info-content {\n        margin: 20px auto;\n        max-width: 300px;\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        overflow: no-content;\n\n        .info-content_title {\n          text-transform: uppercase;\n          letter-spacing: 4px;\n          line-height: 145%;\n          background-color: #3e392a;\n          color: #fdfdfc;\n          padding-left: 5px;\n          font-weight: 800;\n          margin-bottom: 12px;\n        }\n\n        p {\n          width: 100%;\n          font-size: calc(12px + 0.3vw);\n          font-weight: bold;\n          line-height: 145%;\n          overflow: hidden;\n\n          &:hover {\n            overflow: auto;\n          }\n\n          a {\n            color: inherit;\n          }\n        }\n\n        ul li {\n          margin-left: 25px;\n        }\n      }\n    }\n\n    .coll-right-info {\n      width: 60%;\n      display: flex;\n      flex-direction: column;\n      margin: 0 10px;\n\n      .right-info-content {\n        margin: 20px 0;\n\n        .info-content_title {\n          text-transform: uppercase;\n          font-weight: 800;\n          line-height: 145%;\n          text-align: left;\n          letter-spacing: 6px;\n          margin-bottom: 30px;\n        }\n\n        .job {\n          margin: 0 0 15px;\n\n          .title_job {\n            text-transform: uppercase;\n            line-height: 145%;\n            font-weight: 400;\n          }\n\n          .info-about-job {\n            padding-bottom: 15px;\n          }\n\n          p {\n            line-height: 145%;\n          }\n\n          ul li {\n            margin-left: 25px;\n            line-height: 145%;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n@media (max-width: 1260px) {\n  .container {\n    max-width: 1020px;\n\n    .header-row {\n      .col-left .img-cv {\n        max-width: 260px;\n        max-height: 260px;\n      }\n\n      .col-right .board-name {\n        min-height: 270px;\n\n        .title {\n          font-size: calc(14px + 1.3vw);\n          letter-spacing: calc(11px + 0.6vw);\n        }\n      }\n    }\n\n    .section-row .coll-left-info {\n      .info-content {\n        max-width: 260px;\n      }\n    }\n  }\n}\n\n@media (max-width: 1100px) {\n  .container {\n    max-width: 870px;\n    margin: 50px auto 50px;\n\n    .header-row {\n      .col-left .img-cv {\n        max-width: 230px;\n        max-height: 230px;\n      }\n\n      .col-right .board-name {\n        min-height: 240px;\n\n        .title {\n          font-size: calc(14px + 1vw);\n          letter-spacing: calc(10px + 0.4vw);\n        }\n      }\n    }\n\n    .section-row .coll-left-info {\n      .info-content {\n        max-width: 230px;\n      }\n    }\n  }\n}\n\n@media (max-width: 775px) {\n  .container {\n    margin: 0;\n\n    .header-row {\n      flex-direction: column;\n      padding: 0 20px;\n\n      .col-left {\n        width: 100%;\n        margin: 0;\n\n        .img-cv {\n          max-width: 230px;\n          max-height: 230px;\n          margin: 30px auto;\n        }\n      }\n\n      .col-right {\n        width: 100%;\n        margin: 0;\n\n        .board-name {\n          margin-bottom: 0;\n          min-height: 150px;\n\n          .subtitle {\n            font-size: 14px;\n          }\n        }\n      }\n    }\n\n    .section-row {\n      flex-direction: column;\n      padding: 0 20px;\n\n      .coll-left-info {\n        width: 100%;\n        margin: 0;\n\n\n        .info-content {\n          max-width: 90%;\n\n          p {\n            padding-left: 5px;\n          }\n        }\n      }\n\n      .coll-right-info {\n        width: 100%;\n        margin: 0;\n      }\n    }\n  }\n}\n\n@media (max-width: 450px) {\n  .container {\n    .header-row {\n      .col-left {\n        .img-cv {\n          max-width: 200px;\n          max-height: 200px;\n          margin: 10px auto;\n        }\n      }\n\n      .col-right {\n        .board-name {\n          min-height: 110px;\n\n          .title {\n            letter-spacing: 6px;\n          }\n\n          .subtitle {\n            font-size: 12px;\n          }\n        }\n      }\n    }\n  }\n}",".container {\n  form {\n    padding: 30px 30px 20px 40px;\n\n    .field {\n      width: 100%;\n      padding-bottom: 10px;\n      padding-left: 10%;\n      display: flex;\n\n      label {\n        width: 15%;\n        padding-right: 20px;\n        font-weight: 700;\n        text-align: right;\n        height: auto;\n        line-height: 25px;\n      }\n\n      .field-right {\n        min-width: 65%;\n        max-width: 100%;\n        font-size: 16px;\n\n        input[name=name],\n        input[name=mail],\n        input[name=birthday],\n        input[name=password],\n        select[name=hobbies],\n        textarea[name=someWords],\n        input[name=photo] {\n          width: 100%;\n          border: 2px solid #aaa;\n          box-shadow: 1px 1px 2px 0 #aaa;\n          border-radius: 5px;\n          height: 32px;\n          vertical-align: middle;\n        }\n\n        input,\n        input::placeholder,\n        select,\n        option,\n        button {\n          font-size: 16px;\n        }\n\n        select[name=contact],\n        select[name=contact2],\n        input[name=contact-name],\n        input[name=contact2-title-site],\n        input[name=contact2-name] {\n          border: 2px solid #aaa;\n          box-shadow: 1px 1px 2px 0 #aaa;\n          border-radius: 5px;\n          height: 32px;\n          vertical-align: middle;\n          background-color: #fff;\n          margin-right: 3px;\n        }\n\n        input[name=contact2-name],\n        input[name=contact-name],\n        input[name=contact2-title-site] {\n          width: 40%;\n        }\n\n        select[name=hobbies] {\n          height: 80px;\n        }\n\n        textarea[name=someWords] {\n          height: 64px;\n        }\n\n        button[name=delete] {\n          color: #0044ff;\n          border: none;\n          background: inherit;\n          padding: 0;\n\n          &:hover {\n            color: #0099ff;\n          }\n        }\n\n        .btn {\n          padding: 5px 10px;\n          border: 2px solid #aaa;\n          border-radius: 3px;\n        }\n\n        .btn-blue {\n          color: #fff;\n          background-color: #0099ff;\n          border-color: #0099ff;\n\n          &:hover {\n            background-color: #0044ee;\n            border-color: #0044ee;\n          }\n        }\n\n        .btn-white {\n          color: #121212;\n          background-color: #fff;\n          border-color: #aaa;\n\n          &:hover {\n            background-color: #ddd;\n            border-color: #aaa;\n          }\n        }\n\n        .btn-gray {\n          color: #121212;\n          background-color: #ccc;\n          border-color: #ccc;\n\n          &:hover {\n            background-color: #ddd;\n            border-color: #ccc;\n          }\n        }\n      }\n    }\n  }\n}\n\n@media (max-width: 890px) {\n  .container form .field .field-right  {\n    max-width: 70%;\n  }\n}\n\n@media (max-width: 650px) {\n  .container form .field label {\n    width: 20%;\n  }\n\n  .container form .field .field-right {\n    input[name=contact2-name],\n    input[name=contact-name],\n    input[name=contact2-title-site] {\n      width: 55%;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

$(document).ready(function () {
  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map