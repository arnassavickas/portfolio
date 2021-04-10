webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FooterSection/FooterSection.module.scss":
/*!************************************************************!*\
  !*** ./components/FooterSection/FooterSection.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FooterSection.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/FooterSection/FooterSection.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FooterSection.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/FooterSection/FooterSection.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FooterSection.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/FooterSection/FooterSection.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/FooterSection/FooterSection.tsx":
/*!****************************************************!*\
  !*** ./components/FooterSection/FooterSection.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterSection_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterSection.module.scss */ "./components/FooterSection/FooterSection.module.scss");
/* harmony import */ var _FooterSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FooterSection_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\FooterSection\\FooterSection.tsx",
    _this = undefined;




var FooterSection = function FooterSection() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "about",
    className: _FooterSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/images/profile.jpg",
      alt: "Picture of the author",
      className: _FooterSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h4",
      component: "h2",
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _FooterSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph,
      children: ["Since learning how to reinstall Windows XP in 5th grade, I have always felt like I should be doing", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "italic",
        children: "something with the computers"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _FooterSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph,
      children: "Unfortunatelly, one decision after another, and I have moved my life at an entirely different direction - engineering and sales."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _FooterSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph,
      children: "But the time has come to follow my dreams and finally become a developer. So please take a look at what I have learned and done so far :)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = FooterSection;
/* harmony default export */ __webpack_exports__["default"] = (FooterSection);

var _c;

$RefreshReg$(_c, "FooterSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/FooterSection/FooterSection.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/FooterSection/FooterSection.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".FooterSection_section__3cvf2 {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding: 4rem 1rem;\n}\n\n.FooterSection_paragraph__id7C_ {\n  max-width: 600px;\n  text-align: center;\n}\n\n.FooterSection_profile__1VsnB {\n  border: 5px solid #799ec9 !important;\n  border-radius: 50%;\n  width: 200px;\n}", "",{"version":3,"sources":["webpack://FooterSection.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,oCAAA;EACA,kBAAA;EACA,YAAA;AACF","sourcesContent":[".section {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding: 4rem 1rem;\n}\n\n.paragraph {\n  max-width: 600px;\n  text-align: center;\n}\n\n.profile {\n  border: 5px solid rgb(121, 158, 201) !important;\n  border-radius: 50%;\n  width: 200px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": "FooterSection_section__3cvf2",
	"paragraph": "FooterSection_paragraph__id7C_",
	"profile": "FooterSection_profile__1VsnB"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.tsx");
/* harmony import */ var _components_WelcomeSection_WelcomeSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WelcomeSection/WelcomeSection */ "./components/WelcomeSection/WelcomeSection.tsx");
/* harmony import */ var _components_AboutMeSection_AboutMeSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMeSection/AboutMeSection */ "./components/AboutMeSection/AboutMeSection.tsx");
/* harmony import */ var _components_ProjectsSection_ProjectsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectsSection/ProjectsSection */ "./components/ProjectsSection/ProjectsSection.tsx");
/* harmony import */ var _components_JourneySection_JourneySection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/JourneySection/JourneySection */ "./components/JourneySection/JourneySection.tsx");
/* harmony import */ var _components_FooterSection_FooterSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FooterSection/FooterSection */ "./components/FooterSection/FooterSection.tsx");


var _jsxFileName = "D:\\Projektai\\arnassavickas\\pages\\index.tsx",
    _this = undefined;









var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["siteTitle"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WelcomeSection_WelcomeSection__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AboutMeSection_AboutMeSection__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProjectsSection_ProjectsSection__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_JourneySection_JourneySection__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FooterSection_FooterSection__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXJTZWN0aW9uL0Zvb3RlclNlY3Rpb24ubW9kdWxlLnNjc3M/ZDRmMiIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXJTZWN0aW9uL0Zvb3RlclNlY3Rpb24udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3RlclNlY3Rpb24vRm9vdGVyU2VjdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkZvb3RlclNlY3Rpb24iLCJzdHlsZXMiLCJzZWN0aW9uIiwicHJvZmlsZSIsInBhcmFncmFwaCIsIkhvbWUiLCJzaXRlVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVUsbUJBQU8sQ0FBQyxzTkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMsMm1CQUFzVjs7QUFFeFg7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0Esa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQTtBQUNBLE1BQU0sMm1CQUFzVjtBQUM1VjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJtQkFBc1Y7O0FBRWhYOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEIsR0FBTTtBQUNwQyxzQkFDRTtBQUFTLE1BQUUsRUFBQyxPQUFaO0FBQW9CLGFBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsT0FBdEM7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBQyxxQkFETjtBQUVFLFNBQUcsRUFBQyx1QkFGTjtBQUdFLGVBQVMsRUFBRUQsaUVBQU0sQ0FBQ0U7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBUyxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFTRTtBQUFHLGVBQVMsRUFBRUYsaUVBQU0sQ0FBQ0csU0FBckI7QUFBQSx1SEFFOEIsR0FGOUIsZUFHRTtBQUFNLGlCQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQWNFO0FBQUcsZUFBUyxFQUFFSCxpRUFBTSxDQUFDRyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGLGVBa0JFO0FBQUcsZUFBUyxFQUFFSCxpRUFBTSxDQUFDRyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTNCRDs7S0FBTUosYTtBQTZCU0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsa0NBQWtDLGtCQUFrQixzQkFBc0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHVCQUF1QixHQUFHLHFDQUFxQyxxQkFBcUIsdUJBQXVCLEdBQUcsbUNBQW1DLHlDQUF5Qyx1QkFBdUIsaUJBQWlCLEdBQUcsT0FBTywwRkFBMEYsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxtQ0FBbUMsa0JBQWtCLHNCQUFzQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix1QkFBdUIsdUJBQXVCLEdBQUcsZ0JBQWdCLHFCQUFxQix1QkFBdUIsR0FBRyxjQUFjLG9EQUFvRCx1QkFBdUIsaUJBQWlCLEdBQUcscUJBQXFCO0FBQ2prQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFDM0Isc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQVFDLG1FQUFTQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUUscUVBQUMsbUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0UscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUUscUVBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FiRDs7S0FBTUQsSTtBQWVTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMzAwOGQyODhiMGQyNzY4NzQ0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Gb290ZXJTZWN0aW9uLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Gb290ZXJTZWN0aW9uLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyU2VjdGlvbi5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyU2VjdGlvbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCBGb290ZXJTZWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD0nYWJvdXQnIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9Jy9pbWFnZXMvcHJvZmlsZS5qcGcnXG4gICAgICAgIGFsdD0nUGljdHVyZSBvZiB0aGUgYXV0aG9yJ1xuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfVxuICAgICAgLz5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2gyJz5cbiAgICAgICAgQWJvdXQgTWVcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgIFNpbmNlIGxlYXJuaW5nIGhvdyB0byByZWluc3RhbGwgV2luZG93cyBYUCBpbiA1dGggZ3JhZGUsIEkgaGF2ZSBhbHdheXNcbiAgICAgICAgZmVsdCBsaWtlIEkgc2hvdWxkIGJlIGRvaW5neycgJ31cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpdGFsaWMnPnNvbWV0aGluZyB3aXRoIHRoZSBjb21wdXRlcnM8L3NwYW4+LlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgVW5mb3J0dW5hdGVsbHksIG9uZSBkZWNpc2lvbiBhZnRlciBhbm90aGVyLCBhbmQgSSBoYXZlIG1vdmVkIG15IGxpZmUgYXRcbiAgICAgICAgYW4gZW50aXJlbHkgZGlmZmVyZW50IGRpcmVjdGlvbiAtIGVuZ2luZWVyaW5nIGFuZCBzYWxlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgIEJ1dCB0aGUgdGltZSBoYXMgY29tZSB0byBmb2xsb3cgbXkgZHJlYW1zIGFuZCBmaW5hbGx5IGJlY29tZSBhXG4gICAgICAgIGRldmVsb3Blci4gU28gcGxlYXNlIHRha2UgYSBsb29rIGF0IHdoYXQgSSBoYXZlIGxlYXJuZWQgYW5kIGRvbmUgc28gZmFyXG4gICAgICAgIDopXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyU2VjdGlvbjtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Gb290ZXJTZWN0aW9uX3NlY3Rpb25fXzNjdmYyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA0cmVtIDFyZW07XFxufVxcblxcbi5Gb290ZXJTZWN0aW9uX3BhcmFncmFwaF9faWQ3Q18ge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkZvb3RlclNlY3Rpb25fcHJvZmlsZV9fMVZzbkIge1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzc5OWVjOSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vRm9vdGVyU2VjdGlvbi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDRyZW0gMXJlbTtcXG59XFxuXFxuLnBhcmFncmFwaCB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvZmlsZSB7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTIxLCAxNTgsIDIwMSkgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2VjdGlvblwiOiBcIkZvb3RlclNlY3Rpb25fc2VjdGlvbl9fM2N2ZjJcIixcblx0XCJwYXJhZ3JhcGhcIjogXCJGb290ZXJTZWN0aW9uX3BhcmFncmFwaF9faWQ3Q19cIixcblx0XCJwcm9maWxlXCI6IFwiRm9vdGVyU2VjdGlvbl9wcm9maWxlX18xVnNuQlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgV2VsY29tZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbi9XZWxjb21lU2VjdGlvbic7XG5pbXBvcnQgQWJvdXRNZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dE1lU2VjdGlvbi9BYm91dE1lU2VjdGlvbic7XG5pbXBvcnQgVGltZWxpbmVTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uL1Byb2plY3RzU2VjdGlvbic7XG5pbXBvcnQgSm91cm5leVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Kb3VybmV5U2VjdGlvbi9Kb3VybmV5U2VjdGlvbic7XG5pbXBvcnQgRm9vdGVyU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlclNlY3Rpb24vRm9vdGVyU2VjdGlvbic7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxXZWxjb21lU2VjdGlvbiAvPlxuICAgICAgPEFib3V0TWVTZWN0aW9uIC8+XG4gICAgICA8VGltZWxpbmVTZWN0aW9uIC8+XG4gICAgICA8Sm91cm5leVNlY3Rpb24gLz5cbiAgICAgIDxGb290ZXJTZWN0aW9uIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==