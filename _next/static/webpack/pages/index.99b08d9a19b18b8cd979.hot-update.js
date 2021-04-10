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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0QnRucy9Db250YWN0QnRucy50c3giXSwibmFtZXMiOlsiQ29udGFjdEJ0bnMiLCJzbW9vdGhTY3JvbGxUbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwic3R5bGVzIiwiY29udGFjdEJ0bnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFDbEMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQXVDO0FBQzVEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFoQjs7QUFDQSxRQUFJRixPQUFKLEVBQWE7QUFDWEEsYUFBTyxDQUFDRyxjQUFSLENBQXVCO0FBQ3JCQyxhQUFLLEVBQUUsT0FEYztBQUVyQkMsZ0JBQVEsRUFBRTtBQUZXLE9BQXZCO0FBSUQ7QUFDRixHQVREOztBQVdBLHNCQUNFO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxXQUF2QjtBQUFBLDRCQUNFLHFFQUFDLDREQUFEO0FBQVksYUFBTyxFQUFFVixjQUFyQjtBQUFxQyxVQUFJLEVBQUMsT0FBMUM7QUFBa0QsbUJBQWEsTUFBL0Q7QUFBQSw2QkFDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUVBLGNBQXJCO0FBQXFDLFVBQUksRUFBQyxPQUExQztBQUFrRCxtQkFBYSxNQUEvRDtBQUFBLDZCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQXRCRDs7S0FBTUQsVztBQXdCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTliMDhkOWExOWIxOGI4Y2Q5NzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0QnRucy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XG5cbmNvbnN0IENvbnRhY3RCdG5zOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgc21vb3RoU2Nyb2xsVG8gPSAoZTogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZCB9KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RCdG5zfT5cbiAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3Ntb290aFNjcm9sbFRvfSBzaXplPSdzbWFsbCcgZGlzYWJsZVJpcHBsZT5cbiAgICAgICAgPEdpdEh1Ykljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3Ntb290aFNjcm9sbFRvfSBzaXplPSdzbWFsbCcgZGlzYWJsZVJpcHBsZT5cbiAgICAgICAgPEdpdEh1Ykljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RCdG5zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==