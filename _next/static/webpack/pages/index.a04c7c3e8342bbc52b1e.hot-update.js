webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CardImage/CardImage.tsx":
/*!********************************************!*\
  !*** ./components/CardImage/CardImage.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardImage.module.scss */ "./components/CardImage/CardImage.module.scss");
/* harmony import */ var _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\CardImage\\CardImage.tsx",
    _this = undefined;










//TODO doesn't fit on mobile
//TODO add date on mobile
var CardImage = function CardImage(_ref) {
  var title = _ref.title,
      date = _ref.date,
      subHeader = _ref.subHeader,
      image = _ref.image,
      imageTitle = _ref.imageTitle,
      description = _ref.description,
      buttons = _ref.buttons,
      icon = _ref.icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    raised: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: title,
      subheader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.date,
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, _this), subHeader]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
      classes: {
        root: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image
      },
      image: image,
      title: imageTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, _this), description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "body2",
        component: "p",
        className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.description,
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this), buttons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
      children: buttons
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_c = CardImage;
/* harmony default export */ __webpack_exports__["default"] = (CardImage);

var _c;

$RefreshReg$(_c, "CardImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdWJIZWFkZXIiLCJpbWFnZSIsImltYWdlVGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpY29uIiwic3R5bGVzIiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBO0FBQ0E7QUFDQSxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQVN0QztBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLFNBTUksUUFOSkEsU0FNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLFVBSUksUUFKSkEsVUFJSTtBQUFBLE1BSEpDLFdBR0ksUUFISkEsV0FHSTtBQUFBLE1BRkpDLE9BRUksUUFGSkEsT0FFSTtBQUFBLE1BREpDLElBQ0ksUUFESkEsSUFDSTtBQUNKLHNCQUNFLHFFQUFDLDhEQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUEsNEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxXQUFLLEVBQUVQLEtBRFQ7QUFFRSxlQUFTLGVBQ1A7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUVRLDZEQUFNLENBQUNQLElBQXhCO0FBQUEsb0JBQStCQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdHQyxTQUhIO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFXR0MsS0FBSyxpQkFDSixxRUFBQyxtRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFFTSxZQUFJLEVBQUVELDZEQUFNLENBQUNMO0FBQWYsT0FEWDtBQUVFLFdBQUssRUFBRUEsS0FGVDtBQUdFLFdBQUssRUFBRUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkosRUFrQkdDLFdBQVcsaUJBQ1YscUVBQUMscUVBQUQ7QUFBQSw2QkFDRSxxRUFBQyxvRUFBRDtBQUNFLGVBQU8sRUFBQyxPQURWO0FBRUUsaUJBQVMsRUFBQyxHQUZaO0FBR0UsaUJBQVMsRUFBRUcsNkRBQU0sQ0FBQ0gsV0FIcEI7QUFBQSxrQkFLR0E7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSixFQTZCR0MsT0FBTyxpQkFBSSxxRUFBQyw2REFBRDtBQUFBLGdCQUFjQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQ0QsQ0EzQ0Q7O0tBQU1QLFM7QUE2Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEwNGM3YzNlODM0MmJiYzUyYjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmRJbWFnZS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlcic7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDYXJkQWN0aW9ucyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW50ZXJmYWNlIENhcmRJbWFnZVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBzdWJIZWFkZXI6IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGltYWdlVGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogUmVhY3QuUmVhY3ROb2RlO1xuICBidXR0b25zPzogUmVhY3QuUmVhY3ROb2RlW107XG59XG4vL1RPRE8gZG9lc24ndCBmaXQgb24gbW9iaWxlXG4vL1RPRE8gYWRkIGRhdGUgb24gbW9iaWxlXG5jb25zdCBDYXJkSW1hZ2U6IFJlYWN0LkZDPENhcmRJbWFnZVByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBkYXRlLFxuICBzdWJIZWFkZXIsXG4gIGltYWdlLFxuICBpbWFnZVRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYnV0dG9ucyxcbiAgaWNvblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHJhaXNlZD5cbiAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgc3ViaGVhZGVyPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7c3ViSGVhZGVyfVxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAge2ltYWdlICYmIChcbiAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLmltYWdlIH19XG4gICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgIHRpdGxlPXtpbWFnZVRpdGxlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD0nYm9keTInXG4gICAgICAgICAgICBjb21wb25lbnQ9J3AnXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgKX1cbiAgICAgIHtidXR0b25zICYmIDxDYXJkQWN0aW9ucz57YnV0dG9uc308L0NhcmRBY3Rpb25zPn1cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkSW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9