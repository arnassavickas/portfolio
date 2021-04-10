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
    className: _WelcomeSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.welcomeSectioni,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbi9XZWxjb21lU2VjdGlvbi50c3giXSwibmFtZXMiOlsiV2VsY29tZVNlY3Rpb24iLCJzbW9vdGhTY3JvbGxUbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwic3R5bGVzIiwid2VsY29tZVNlY3Rpb25pIiwibW9yZUJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsR0FBTTtBQUNyQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBdUM7QUFDNURBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWhCOztBQUNBLFFBQUlGLE9BQUosRUFBYTtBQUNYQSxhQUFPLENBQUNHLGNBQVIsQ0FBdUI7QUFDckJDLGFBQUssRUFBRSxPQURjO0FBRXJCQyxnQkFBUSxFQUFFO0FBRlcsT0FBdkI7QUFJRDtBQUNGLEdBVEQ7O0FBV0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGtFQUFNLENBQUNDLGVBQTNCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLDREQUFEO0FBQ0UsYUFBTyxFQUFFVixjQURYO0FBRUUsVUFBSSxFQUFDLE9BRlA7QUFHRSxtQkFBYSxNQUhmO0FBSUUsZUFBUyxFQUFFUyxrRUFBTSxDQUFDRSxPQUpwQjtBQUFBLDZCQU1FLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQTFCRDs7S0FBTVosYztBQTRCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI2MGY5NWIyNjkwM2I5NTYwMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9XZWxjb21lU2VjdGlvbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBUeXBld3JpdHRlciBmcm9tICcuLi9UeXBld3JpdGVyL1R5cGV3cml0ZXInO1xuXG5jb25zdCBXZWxjb21lU2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHNtb290aFNjcm9sbFRvID0gKGU6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQgfSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBibG9jazogJ3N0YXJ0JyxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMud2VsY29tZVNlY3Rpb25pfT5cbiAgICAgIDxkaXY+QnV0dG9uczwvZGl2PlxuICAgICAgPFR5cGV3cml0dGVyIC8+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtzbW9vdGhTY3JvbGxUb31cbiAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9yZUJ0bn1cbiAgICAgID5cbiAgICAgICAgPEV4cGFuZE1vcmVJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZVNlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9