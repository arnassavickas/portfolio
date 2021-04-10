webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Typewriter/Typewriter.tsx":
false,

/***/ "./components/Typewriter/Typewritter.module.scss":
false,

/***/ "./components/WelcomeSection/Typewriter/Typewriter.tsx":
/*!*************************************************************!*\
  !*** ./components/WelcomeSection/Typewriter/Typewriter.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typewritter.module.scss */ "./components/WelcomeSection/Typewriter/Typewritter.module.scss");
/* harmony import */ var _Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\Typewriter\\Typewritter.tsx",
    _this = undefined;



var Typewritter = function Typewritter() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.typewriter,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "".concat(_Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lines, " ").concat(_Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.firstLine),
        children: "Hi,"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "".concat(_Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lines, " ").concat(_Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondLine),
        children: "I'm Arnas Savickas,"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "".concat(_Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lines, " ").concat(_Typewritter_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.thirdLine),
        children: "a web developer."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = Typewritter;
/* harmony default export */ __webpack_exports__["default"] = (Typewritter);

var _c;

$RefreshReg$(_c, "Typewritter");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/WelcomeSection/Typewriter/Typewritter.module.scss":
/*!**********************************************************************!*\
  !*** ./components/WelcomeSection/Typewriter/Typewritter.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Typewritter.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/WelcomeSection/Typewriter/Typewritter.module.scss");

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
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Typewritter.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/WelcomeSection/Typewriter/Typewritter.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Typewritter.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/WelcomeSection/Typewriter/Typewritter.module.scss");

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

/***/ "./components/WelcomeSection/WelcomeSection.tsx":
/*!******************************************************!*\
  !*** ./components/WelcomeSection/WelcomeSection.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WelcomeSection_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WelcomeSection.module.scss */ "./components/WelcomeSection/WelcomeSection.module.scss");
/* harmony import */ var _WelcomeSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WelcomeSection_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Typewriter_Typewriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Typewriter/Typewriter */ "./components/WelcomeSection/Typewriter/Typewriter.tsx");


var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\WelcomeSection\\WelcomeSection.tsx",
    _this = undefined;






var WelcomeSection = function WelcomeSection() {
  var smoothScrollTo = function smoothScrollTo(e) {
    e.preventDefault();
    var element = document.getElementById('about');

    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _WelcomeSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.welcomeSection,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Buttons"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Typewriter_Typewriter__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      onClick: smoothScrollTo,
      size: "small",
      disableRipple: true,
      className: _WelcomeSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.moreBtn,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c = WelcomeSection;
/* harmony default export */ __webpack_exports__["default"] = (WelcomeSection);

var _c;

$RefreshReg$(_c, "WelcomeSection");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/Typewriter/Typewritter.module.scss":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/WelcomeSection/Typewriter/Typewritter.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/WelcomeSection/Typewriter/Typewritter.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Typewritter_typewriter__3rvUc {\n  width: 300px;\n}\n.Typewritter_typewriter__3rvUc div {\n  display: table;\n}\n.Typewritter_typewriter__3rvUc .Typewritter_lines__2UvHs {\n  display: inline-block;\n  overflow: hidden;\n  border-right: 0.15em solid rgba(255, 255, 255, 0);\n  white-space: nowrap;\n  margin: 0 auto;\n}\n.Typewritter_typewriter__3rvUc .Typewritter_firstLine__37EvB {\n  -webkit-animation: Typewritter_typing__1b0SK 0.3s steps(3, end) 1s both, Typewritter_blink-caret__164zV 0.75s step-end 3;\n          animation: Typewritter_typing__1b0SK 0.3s steps(3, end) 1s both, Typewritter_blink-caret__164zV 0.75s step-end 3;\n}\n.Typewritter_typewriter__3rvUc .Typewritter_secondLine__27SuV {\n  -webkit-animation: Typewritter_typing__1b0SK 1.9s steps(19, end) 2.5s both, Typewritter_blink-caret__164zV 0.75s step-end 4 2s;\n          animation: Typewritter_typing__1b0SK 1.9s steps(19, end) 2.5s both, Typewritter_blink-caret__164zV 0.75s step-end 4 2s;\n}\n.Typewritter_typewriter__3rvUc .Typewritter_thirdLine__26Dy6 {\n  -webkit-animation: Typewritter_typing__1b0SK 1.5s steps(16, end) 5.2s both, Typewritter_blink-caret__164zV 0.75s step-end infinite 5.2s;\n          animation: Typewritter_typing__1b0SK 1.5s steps(16, end) 5.2s both, Typewritter_blink-caret__164zV 0.75s step-end infinite 5.2s;\n}\n\n@-webkit-keyframes Typewritter_typing__1b0SK {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes Typewritter_typing__1b0SK {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@-webkit-keyframes Typewritter_blink-caret__164zV {\n  from, to {\n    border-color: white;\n  }\n  50% {\n    border-color: transparent;\n  }\n}\n@keyframes Typewritter_blink-caret__164zV {\n  from, to {\n    border-color: white;\n  }\n  50% {\n    border-color: transparent;\n  }\n}", "",{"version":3,"sources":["webpack://Typewritter.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;AACF;AAAE;EACE,cAAA;AAEJ;AACE;EACE,qBAAA;EACA,gBAAA;EACA,iDAAA;EACA,mBAAA;EACA,cAAA;AACJ;AACE;EACE,wHAAA;UAAA,gHAAA;AACJ;AAEE;EACE,8HAAA;UAAA,sHAAA;AAAJ;AAGE;EACE,uIAAA;UAAA,+HAAA;AADJ;;AAMA;EACE;IACE,QAAA;EAHF;EAKA;IACE,WAAA;EAHF;AACF;;AAHA;EACE;IACE,QAAA;EAHF;EAKA;IACE,WAAA;EAHF;AACF;AAMA;EACE;IAEE,mBAAA;EALF;EAOA;IACE,yBAAA;EALF;AACF;AAFA;EACE;IAEE,mBAAA;EALF;EAOA;IACE,yBAAA;EALF;AACF","sourcesContent":[".typewriter {\n  width: 300px;\n  div {\n    display: table;\n  }\n\n  .lines {\n    display: inline-block;\n    overflow: hidden;\n    border-right: 0.15em solid rgba(255, 255, 255, 0);\n    white-space: nowrap;\n    margin: 0 auto;\n  }\n  .firstLine {\n    animation: typing 0.3s steps(3, end) 1s both, blink-caret 0.75s step-end 3;\n  }\n\n  .secondLine {\n    animation: typing 1.9s steps(19, end) 2.5s both,\n      blink-caret 0.75s step-end 4 2s;\n  }\n  .thirdLine {\n    animation: typing 1.5s steps(16, end) 5.2s both,\n      blink-caret 0.75s step-end infinite 5.2s;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes blink-caret {\n  from,\n  to {\n    border-color: rgb(255, 255, 255);\n  }\n  50% {\n    border-color: transparent;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"typewriter": "Typewritter_typewriter__3rvUc",
	"lines": "Typewritter_lines__2UvHs",
	"firstLine": "Typewritter_firstLine__37EvB",
	"typing": "Typewritter_typing__1b0SK",
	"blink-caret": "Typewritter_blink-caret__164zV",
	"secondLine": "Typewritter_secondLine__27SuV",
	"thirdLine": "Typewritter_thirdLine__26Dy6"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UeXBld3JpdGVyL1R5cGV3cml0dGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbi9UeXBld3JpdGVyL1R5cGV3cml0dGVyLm1vZHVsZS5zY3NzPzEzYzIiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2VsY29tZVNlY3Rpb24vV2VsY29tZVNlY3Rpb24udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dlbGNvbWVTZWN0aW9uL1R5cGV3cml0ZXIvVHlwZXdyaXR0ZXIubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsiVHlwZXdyaXR0ZXIiLCJzdHlsZXMiLCJ0eXBld3JpdGVyIiwibGluZXMiLCJmaXJzdExpbmUiLCJzZWNvbmRMaW5lIiwidGhpcmRMaW5lIiwiV2VsY29tZVNlY3Rpb24iLCJzbW9vdGhTY3JvbGxUbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwid2VsY29tZVNlY3Rpb24iLCJtb3JlQnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFDbEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLFVBQXZCO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLFlBQUtELCtEQUFNLENBQUNFLEtBQVosY0FBcUJGLCtEQUFNLENBQUNHLFNBQTVCLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFBLDZCQUNFO0FBQUksaUJBQVMsWUFBS0gsK0RBQU0sQ0FBQ0UsS0FBWixjQUFxQkYsK0RBQU0sQ0FB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QUFtSSxtSUFBbUksR0FBRyxnRUFBZ0UsNElBQTRJLDRJQUE0SSxHQUFHLGtEQUFrRCxVQUFVLGVBQWUsS0FBSyxRQUFRLGtCQUFrQixLQUFLLEdBQUcsMENBQTBDLFVBQVUsZUFBZSxLQUFLLFFBQVEsa0JBQWtCLEtBQUssR0FBRyxxREFBcUQsY0FBYywwQkFBMEIsS0FBSyxTQUFTLGdDQUFnQyxLQUFLLEdBQUcsNkNBQTZDLGNBQWMsMEJBQTBCLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSyxHQUFHLE9BQU8sd0ZBQXdGLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssc0NBQXNDLGlCQUFpQixTQUFTLHFCQUFxQixLQUFLLGNBQWMsNEJBQTRCLHVCQUF1Qix3REFBd0QsMEJBQTBCLHFCQUFxQixLQUFLLGdCQUFnQixpRkFBaUYsS0FBSyxtQkFBbUIsOEZBQThGLEtBQUssZ0JBQWdCLHVHQUF1RyxLQUFLLEdBQUcsdUJBQXVCLFVBQVUsZUFBZSxLQUFLLFFBQVEsa0JBQWtCLEtBQUssR0FBRyw0QkFBNEIsaUJBQWlCLHVDQUF1QyxLQUFLLFNBQVMsZ0NBQWdDLEtBQUssR0FBRyxxQkFBcUI7QUFDeG9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMThlZjIwOTI0NzkyOTdlNTI1NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9UeXBld3JpdHRlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFR5cGV3cml0dGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR5cGV3cml0ZXJ9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmVzfSAke3N0eWxlcy5maXJzdExpbmV9YH0+SGksPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmVzfSAke3N0eWxlcy5zZWNvbmRMaW5lfWB9PlxuICAgICAgICAgIHtgSSdtIEFybmFzIFNhdmlja2FzLGB9XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5lc30gJHtzdHlsZXMudGhpcmRMaW5lfWB9PlxuICAgICAgICAgIGEgd2ViIGRldmVsb3Blci5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZXdyaXR0ZXI7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1R5cGV3cml0dGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9UeXBld3JpdHRlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1R5cGV3cml0dGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9XZWxjb21lU2VjdGlvbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBUeXBld3JpdHRlciBmcm9tICcuL1R5cGV3cml0ZXIvVHlwZXdyaXRlcic7XG5cbmNvbnN0IFdlbGNvbWVTZWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgc21vb3RoU2Nyb2xsVG8gPSAoZTogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZCB9KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53ZWxjb21lU2VjdGlvbn0+XG4gICAgICA8ZGl2PkJ1dHRvbnM8L2Rpdj5cbiAgICAgIDxUeXBld3JpdHRlciAvPlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgb25DbGljaz17c21vb3RoU2Nyb2xsVG99XG4gICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vcmVCdG59XG4gICAgICA+XG4gICAgICAgIDxFeHBhbmRNb3JlSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVTZWN0aW9uO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlR5cGV3cml0dGVyX3R5cGV3cml0ZXJfXzNydlVjIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuLlR5cGV3cml0dGVyX3R5cGV3cml0ZXJfXzNydlVjIGRpdiB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLlR5cGV3cml0dGVyX3R5cGV3cml0ZXJfXzNydlVjIC5UeXBld3JpdHRlcl9saW5lc19fMlV2SHMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yaWdodDogMC4xNWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5UeXBld3JpdHRlcl90eXBld3JpdGVyX18zcnZVYyAuVHlwZXdyaXR0ZXJfZmlyc3RMaW5lX18zN0V2QiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogVHlwZXdyaXR0ZXJfdHlwaW5nX18xYjBTSyAwLjNzIHN0ZXBzKDMsIGVuZCkgMXMgYm90aCwgVHlwZXdyaXR0ZXJfYmxpbmstY2FyZXRfXzE2NHpWIDAuNzVzIHN0ZXAtZW5kIDM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogVHlwZXdyaXR0ZXJfdHlwaW5nX18xYjBTSyAwLjNzIHN0ZXBzKDMsIGVuZCkgMXMgYm90aCwgVHlwZXdyaXR0ZXJfYmxpbmstY2FyZXRfXzE2NHpWIDAuNzVzIHN0ZXAtZW5kIDM7XFxufVxcbi5UeXBld3JpdHRlcl90eXBld3JpdGVyX18zcnZVYyAuVHlwZXdyaXR0ZXJfc2Vjb25kTGluZV9fMjdTdVYge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFR5cGV3cml0dGVyX3R5cGluZ19fMWIwU0sgMS45cyBzdGVwcygxOSwgZW5kKSAyLjVzIGJvdGgsIFR5cGV3cml0dGVyX2JsaW5rLWNhcmV0X18xNjR6ViAwLjc1cyBzdGVwLWVuZCA0IDJzO1xcbiAgICAgICAgICBhbmltYXRpb246IFR5cGV3cml0dGVyX3R5cGluZ19fMWIwU0sgMS45cyBzdGVwcygxOSwgZW5kKSAyLjVzIGJvdGgsIFR5cGV3cml0dGVyX2JsaW5rLWNhcmV0X18xNjR6ViAwLjc1cyBzdGVwLWVuZCA0IDJzO1xcbn1cXG4uVHlwZXdyaXR0ZXJfdHlwZXdyaXRlcl9fM3J2VWMgLlR5cGV3cml0dGVyX3RoaXJkTGluZV9fMjZEeTYge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFR5cGV3cml0dGVyX3R5cGluZ19fMWIwU0sgMS41cyBzdGVwcygxNiwgZW5kKSA1LjJzIGJvdGgsIFR5cGV3cml0dGVyX2JsaW5rLWNhcmV0X18xNjR6ViAwLjc1cyBzdGVwLWVuZCBpbmZpbml0ZSA1LjJzO1xcbiAgICAgICAgICBhbmltYXRpb246IFR5cGV3cml0dGVyX3R5cGluZ19fMWIwU0sgMS41cyBzdGVwcygxNiwgZW5kKSA1LjJzIGJvdGgsIFR5cGV3cml0dGVyX2JsaW5rLWNhcmV0X18xNjR6ViAwLjc1cyBzdGVwLWVuZCBpbmZpbml0ZSA1LjJzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgVHlwZXdyaXR0ZXJfdHlwaW5nX18xYjBTSyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIFR5cGV3cml0dGVyX3R5cGluZ19fMWIwU0sge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIFR5cGV3cml0dGVyX2JsaW5rLWNhcmV0X18xNjR6ViB7XFxuICBmcm9tLCB0byB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIFR5cGV3cml0dGVyX2JsaW5rLWNhcmV0X18xNjR6ViB7XFxuICBmcm9tLCB0byB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vVHlwZXdyaXR0ZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLGNBQUE7QUFFSjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDRTtFQUNFLHdIQUFBO1VBQUEsZ0hBQUE7QUFDSjtBQUVFO0VBQ0UsOEhBQUE7VUFBQSxzSEFBQTtBQUFKO0FBR0U7RUFDRSx1SUFBQTtVQUFBLCtIQUFBO0FBREo7O0FBTUE7RUFDRTtJQUNFLFFBQUE7RUFIRjtFQUtBO0lBQ0UsV0FBQTtFQUhGO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLFFBQUE7RUFIRjtFQUtBO0lBQ0UsV0FBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFO0lBRUUsbUJBQUE7RUFMRjtFQU9BO0lBQ0UseUJBQUE7RUFMRjtBQUNGO0FBRkE7RUFDRTtJQUVFLG1CQUFBO0VBTEY7RUFPQTtJQUNFLHlCQUFBO0VBTEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudHlwZXdyaXRlciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXYge1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gIH1cXG5cXG4gIC5saW5lcyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjE1ZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICAuZmlyc3RMaW5lIHtcXG4gICAgYW5pbWF0aW9uOiB0eXBpbmcgMC4zcyBzdGVwcygzLCBlbmQpIDFzIGJvdGgsIGJsaW5rLWNhcmV0IDAuNzVzIHN0ZXAtZW5kIDM7XFxuICB9XFxuXFxuICAuc2Vjb25kTGluZSB7XFxuICAgIGFuaW1hdGlvbjogdHlwaW5nIDEuOXMgc3RlcHMoMTksIGVuZCkgMi41cyBib3RoLFxcbiAgICAgIGJsaW5rLWNhcmV0IDAuNzVzIHN0ZXAtZW5kIDQgMnM7XFxuICB9XFxuICAudGhpcmRMaW5lIHtcXG4gICAgYW5pbWF0aW9uOiB0eXBpbmcgMS41cyBzdGVwcygxNiwgZW5kKSA1LjJzIGJvdGgsXFxuICAgICAgYmxpbmstY2FyZXQgMC43NXMgc3RlcC1lbmQgaW5maW5pdGUgNS4ycztcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0eXBpbmcge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XFxuICBmcm9tLFxcbiAgdG8ge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInR5cGV3cml0ZXJcIjogXCJUeXBld3JpdHRlcl90eXBld3JpdGVyX18zcnZVY1wiLFxuXHRcImxpbmVzXCI6IFwiVHlwZXdyaXR0ZXJfbGluZXNfXzJVdkhzXCIsXG5cdFwiZmlyc3RMaW5lXCI6IFwiVHlwZXdyaXR0ZXJfZmlyc3RMaW5lX18zN0V2QlwiLFxuXHRcInR5cGluZ1wiOiBcIlR5cGV3cml0dGVyX3R5cGluZ19fMWIwU0tcIixcblx0XCJibGluay1jYXJldFwiOiBcIlR5cGV3cml0dGVyX2JsaW5rLWNhcmV0X18xNjR6VlwiLFxuXHRcInNlY29uZExpbmVcIjogXCJUeXBld3JpdHRlcl9zZWNvbmRMaW5lX18yN1N1VlwiLFxuXHRcInRoaXJkTGluZVwiOiBcIlR5cGV3cml0dGVyX3RoaXJkTGluZV9fMjZEeTZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9