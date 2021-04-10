webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CardImage/CardImage.tsx":
/*!********************************************!*\
  !*** ./components/CardImage/CardImage.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardImage.module.scss */ "./components/CardImage/CardImage.module.scss");
/* harmony import */ var _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CardImage_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\CardImage\\CardImage.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var CardImage = function CardImage(_ref) {
  var title = _ref.title,
      date = _ref.date,
      subHeader = _ref.subHeader,
      image = _ref.image,
      imageTitle = _ref.imageTitle,
      description = _ref.description,
      buttons = _ref.buttons,
      icon = _ref.icon,
      imageProps = _ref.imageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    raised: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      avatar: icon,
      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h6",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 16
      }, _this),
      subheader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "subtitle2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, _this), subHeader]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({
      classes: {
        root: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image
      },
      src: image,
      title: imageTitle,
      component: "image"
    }, imageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this), description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "body2",
        component: "p",
        className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this), buttons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardActions"], {
      children: buttons
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdWJIZWFkZXIiLCJpbWFnZSIsImltYWdlVGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpY29uIiwiaW1hZ2VQcm9wcyIsInN0eWxlcyIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWNBLElBQU1BLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BVXRDO0FBQUEsTUFUSkMsS0FTSSxRQVRKQSxLQVNJO0FBQUEsTUFSSkMsSUFRSSxRQVJKQSxJQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JO0FBQUEsTUFOSkMsS0FNSSxRQU5KQSxLQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsV0FJSSxRQUpKQSxXQUlJO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsSUFFSSxRQUZKQSxJQUVJO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJO0FBQ0osc0JBQ0UscUVBQUMsOERBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQSw0QkFDRSxxRUFBQyxvRUFBRDtBQUNFLFlBQU0sRUFBRUQsSUFEVjtBQUVFLFdBQUssZUFBRSxxRUFBQyxvRUFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBLGtCQUEwQlA7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZUO0FBR0UsZUFBUyxlQUNQLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLFdBQXBCO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFFUyw2REFBTSxDQUFDUixJQUF4QjtBQUFBLG9CQUErQkE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHR0MsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFZR0MsS0FBSyxpQkFDSixxRUFBQyxtRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFFTyxZQUFJLEVBQUVELDZEQUFNLENBQUNOO0FBQWYsT0FEWDtBQUVFLFNBQUcsRUFBRUEsS0FGUDtBQUdFLFdBQUssRUFBRUMsVUFIVDtBQUlFLGVBQVMsRUFBQztBQUpaLE9BS01JLFVBTE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKLEVBcUJHSCxXQUFXLGlCQUNWLHFFQUFDLHFFQUFEO0FBQUEsNkJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxlQUFPLEVBQUMsT0FEVjtBQUVFLGlCQUFTLEVBQUMsR0FGWjtBQUdFLGlCQUFTLEVBQUVJLDZEQUFNLENBQUNKLFdBSHBCO0FBQUEsa0JBS0dBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkosRUFnQ0dDLE9BQU8saUJBQUkscUVBQUMsNkRBQUQ7QUFBQSxnQkFBY0E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaENkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBL0NEOztLQUFNUCxTO0FBaURTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xM2Q3NGNiZmJmZTAxMTE3NjA3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkSW1hZ2UubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ2FyZEFjdGlvbnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmludGVyZmFjZSBDYXJkSW1hZ2VQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgc3ViSGVhZGVyOiBSZWFjdC5SZWFjdE5vZGVbXSB8IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGltYWdlVGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogUmVhY3QuUmVhY3ROb2RlO1xuICBidXR0b25zPzogUmVhY3QuUmVhY3ROb2RlW107XG4gIGljb246IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaW1hZ2VQcm9wcz86IHVua25vd25bXTtcbn1cblxuY29uc3QgQ2FyZEltYWdlOiBSZWFjdC5GQzxDYXJkSW1hZ2VQcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgZGF0ZSxcbiAgc3ViSGVhZGVyLFxuICBpbWFnZSxcbiAgaW1hZ2VUaXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGJ1dHRvbnMsXG4gIGljb24sXG4gIGltYWdlUHJvcHMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENhcmQgcmFpc2VkPlxuICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgYXZhdGFyPXtpY29ufVxuICAgICAgICB0aXRsZT17PFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPnt0aXRsZX08L1R5cG9ncmFwaHk+fVxuICAgICAgICBzdWJoZWFkZXI9e1xuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHtzdWJIZWFkZXJ9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAge2ltYWdlICYmIChcbiAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLmltYWdlIH19XG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICB0aXRsZT17aW1hZ2VUaXRsZX1cbiAgICAgICAgICBjb21wb25lbnQ9J2ltYWdlJ1xuICAgICAgICAgIHsuLi5pbWFnZVByb3BzfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD0nYm9keTInXG4gICAgICAgICAgICBjb21wb25lbnQ9J3AnXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgKX1cbiAgICAgIHtidXR0b25zICYmIDxDYXJkQWN0aW9ucz57YnV0dG9uc308L0NhcmRBY3Rpb25zPn1cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkSW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9