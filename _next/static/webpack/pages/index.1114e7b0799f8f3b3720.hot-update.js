webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactBtns/ContactBtns.tsx":
/*!************************************************!*\
  !*** ./components/ContactBtns/ContactBtns.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactBtns.module.scss */ "./components/ContactBtns/ContactBtns.module.scss");
/* harmony import */ var _ContactBtns_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ContactBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\ContactBtns\\ContactBtns.tsx",
    _this = undefined;






var ContactBtns = function ContactBtns() {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ContactBtns_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contactBtns,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      onClick: smoothScrollTo,
      size: "small",
      disableRipple: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      onClick: smoothScrollTo,
      size: "small",
      disableRipple: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c = ContactBtns;
/* harmony default export */ __webpack_exports__["default"] = (ContactBtns);

var _c;

$RefreshReg$(_c, "ContactBtns");

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

/***/ "./node_modules/@material-ui/icons/LinkedIn.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/LinkedIn.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), 'LinkedIn');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0QnRucy9Db250YWN0QnRucy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW4uanMiXSwibmFtZXMiOlsiQ29udGFjdEJ0bnMiLCJzbW9vdGhTY3JvbGxUbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwic3R5bGVzIiwiY29udGFjdEJ0bnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQ2xDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUF1QztBQUM1REEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBaEI7O0FBQ0EsUUFBSUYsT0FBSixFQUFhO0FBQ1hBLGFBQU8sQ0FBQ0csY0FBUixDQUF1QjtBQUNyQkMsYUFBSyxFQUFFLE9BRGM7QUFFckJDLGdCQUFRLEVBQUU7QUFGVyxPQUF2QjtBQUlEO0FBQ0YsR0FURDs7QUFXQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsK0RBQU0sQ0FBQ0MsV0FBdkI7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBRVYsY0FBckI7QUFBcUMsVUFBSSxFQUFDLE9BQTFDO0FBQWtELG1CQUFhLE1BQS9EO0FBQUEsNkJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLDREQUFEO0FBQVksYUFBTyxFQUFFQSxjQUFyQjtBQUFxQyxVQUFJLEVBQUMsT0FBMUM7QUFBa0QsbUJBQWEsTUFBL0Q7QUFBQSw2QkFDRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0F0QkQ7O0tBQU1ELFc7QUF3QlNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjExMTRlN2IwNzk5ZjhmM2IzNzIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFjdEJ0bnMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW4nO1xuXG5jb25zdCBDb250YWN0QnRuczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHNtb290aFNjcm9sbFRvID0gKGU6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQgfSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBibG9jazogJ3N0YXJ0JyxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0QnRuc30+XG4gICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtzbW9vdGhTY3JvbGxUb30gc2l6ZT0nc21hbGwnIGRpc2FibGVSaXBwbGU+XG4gICAgICAgIDxHaXRIdWJJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtzbW9vdGhTY3JvbGxUb30gc2l6ZT0nc21hbGwnIGRpc2FibGVSaXBwbGU+XG4gICAgICAgIDxMaW5rZWRJbkljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RCdG5zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDNhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTRtLS41IDE1LjV2LTUuM2EzLjI2IDMuMjYgMCAwIDAtMy4yNi0zLjI2Yy0uODUgMC0xLjg0LjUyLTIuMzIgMS4zdi0xLjExaC0yLjc5djguMzdoMi43OXYtNC45M2MwLS43Ny42Mi0xLjQgMS4zOS0xLjRhMS40IDEuNCAwIDAgMSAxLjQgMS40djQuOTNoMi43OU02Ljg4IDguNTZhMS42OCAxLjY4IDAgMCAwIDEuNjgtMS42OGMwLS45My0uNzUtMS42OS0xLjY4LTEuNjlhMS42OSAxLjY5IDAgMCAwLTEuNjkgMS42OWMwIC45My43NiAxLjY4IDEuNjkgMS42OG0xLjM5IDkuOTR2LTguMzdINS41djguMzdoMi43N3pcIlxufSksICdMaW5rZWRJbicpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9