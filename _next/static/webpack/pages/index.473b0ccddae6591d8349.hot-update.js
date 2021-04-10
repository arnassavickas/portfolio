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
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Typewriter_Typewriter__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      onClick: smoothScrollTo,
      size: "small",
      disableRipple: true,
      className: _WelcomeSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.moreBtn,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbi9XZWxjb21lU2VjdGlvbi50c3giXSwibmFtZXMiOlsiV2VsY29tZVNlY3Rpb24iLCJzbW9vdGhTY3JvbGxUbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwic3R5bGVzIiwid2VsY29tZVNlY3Rpb24iLCJtb3JlQnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQ3JDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUF1QztBQUM1REEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBaEI7O0FBQ0EsUUFBSUYsT0FBSixFQUFhO0FBQ1hBLGFBQU8sQ0FBQ0csY0FBUixDQUF1QjtBQUNyQkMsYUFBSyxFQUFFLE9BRGM7QUFFckJDLGdCQUFRLEVBQUU7QUFGVyxPQUF2QjtBQUlEO0FBQ0YsR0FURDs7QUFXQSxzQkFDRTtBQUFTLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsY0FBM0I7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UscUVBQUMsNERBQUQ7QUFDRSxhQUFPLEVBQUVWLGNBRFg7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLG1CQUFhLE1BSGY7QUFJRSxlQUFTLEVBQUVTLGtFQUFNLENBQUNFLE9BSnBCO0FBQUEsNkJBTUUscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBMUJEOztLQUFNWixjO0FBNEJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NzNiMGNjZGRhZTY1OTFkODM0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1dlbGNvbWVTZWN0aW9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFR5cGV3cml0dGVyIGZyb20gJy4vVHlwZXdyaXRlci9UeXBld3JpdGVyJztcbmltcG9ydCBDb250YWN0QnRucyBmcm9tICcuLi9Db250YWN0QnRucy9jb24nXG5cbmNvbnN0IFdlbGNvbWVTZWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgc21vb3RoU2Nyb2xsVG8gPSAoZTogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZCB9KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53ZWxjb21lU2VjdGlvbn0+XG4gICAgICA8ZGl2PkJ1dHRvbnM8L2Rpdj5cbiAgICAgIDxUeXBld3JpdHRlciAvPlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgb25DbGljaz17c21vb3RoU2Nyb2xsVG99XG4gICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vcmVCdG59XG4gICAgICA+XG4gICAgICAgIDxFeHBhbmRNb3JlSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==