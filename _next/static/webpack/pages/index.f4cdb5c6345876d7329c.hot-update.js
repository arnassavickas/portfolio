webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _Typewriter_Typewriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Typewriter/Typewriter */ "./components/Typewriter/Typewriter.tsx");


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
    className: _WelcomeSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbi9XZWxjb21lU2VjdGlvbi50c3giXSwibmFtZXMiOlsiV2VsY29tZVNlY3Rpb24iLCJzbW9vdGhTY3JvbGxUbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwic3R5bGVzIiwiaGVhZGluZyIsIm1vcmVCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLEdBQU07QUFDckMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQXVDO0FBQzVEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFoQjs7QUFDQSxRQUFJRixPQUFKLEVBQWE7QUFDWEEsYUFBTyxDQUFDRyxjQUFSLENBQXVCO0FBQ3JCQyxhQUFLLEVBQUUsT0FEYztBQUVyQkMsZ0JBQVEsRUFBRTtBQUZXLE9BQXZCO0FBSUQ7QUFDRixHQVREOztBQVdBLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxPQUEzQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyw0REFBRDtBQUNFLGFBQU8sRUFBRVYsY0FEWDtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsbUJBQWEsTUFIZjtBQUlFLGVBQVMsRUFBRVMsa0VBQU0sQ0FBQ0UsT0FKcEI7QUFBQSw2QkFNRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0ExQkQ7O0tBQU1aLGM7QUE0QlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY0Y2RiNWM2MzQ1ODc2ZDczMjljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vV2VsY29tZVNlY3Rpb24ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgVHlwZXdyaXR0ZXIgZnJvbSAnLi4vVHlwZXdyaXRlci9UeXBld3JpdGVyJztcblxuY29uc3QgV2VsY29tZVNlY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBzbW9vdGhTY3JvbGxUbyA9IChlOiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkIH0pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmxvY2s6ICdzdGFydCcsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgPGRpdj5CdXR0b25zPC9kaXY+XG4gICAgICA8VHlwZXdyaXR0ZXIgLz5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3Ntb290aFNjcm9sbFRvfVxuICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb3JlQnRufVxuICAgICAgPlxuICAgICAgICA8RXhwYW5kTW9yZUljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=