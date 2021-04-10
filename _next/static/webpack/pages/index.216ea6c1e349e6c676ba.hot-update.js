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
      title: imageTitle
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
        lineNumber: 57,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, _this), buttons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardActions"], {
      children: buttons
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdWJIZWFkZXIiLCJpbWFnZSIsImltYWdlVGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpY29uIiwiaW1hZ2VQcm9wcyIsInN0eWxlcyIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWNBLElBQU1BLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BVXRDO0FBQUEsTUFUSkMsS0FTSSxRQVRKQSxLQVNJO0FBQUEsTUFSSkMsSUFRSSxRQVJKQSxJQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JO0FBQUEsTUFOSkMsS0FNSSxRQU5KQSxLQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsV0FJSSxRQUpKQSxXQUlJO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsSUFFSSxRQUZKQSxJQUVJO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJO0FBQ0osc0JBQ0UscUVBQUMsOERBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQSw0QkFDRSxxRUFBQyxvRUFBRDtBQUNFLFlBQU0sRUFBRUQsSUFEVjtBQUVFLFdBQUssZUFBRSxxRUFBQyxvRUFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBLGtCQUEwQlA7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZUO0FBR0UsZUFBUyxlQUNQLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLFdBQXBCO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFFUyw2REFBTSxDQUFDUixJQUF4QjtBQUFBLG9CQUErQkE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHR0MsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFZR0MsS0FBSyxpQkFDSixxRUFBQyxtRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFFTyxZQUFJLEVBQUVELDZEQUFNLENBQUNOO0FBQWYsT0FEWDtBQUVFLFNBQUcsRUFBRUEsS0FGUDtBQUdFLFdBQUssRUFBRUM7QUFIVCxPQUlNSSxVQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSixFQW9CR0gsV0FBVyxpQkFDVixxRUFBQyxxRUFBRDtBQUFBLDZCQUNFLHFFQUFDLG9FQUFEO0FBQ0UsZUFBTyxFQUFDLE9BRFY7QUFFRSxpQkFBUyxFQUFDLEdBRlo7QUFHRSxpQkFBUyxFQUFFSSw2REFBTSxDQUFDSixXQUhwQjtBQUFBLGtCQUtHQTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJKLEVBK0JHQyxPQUFPLGlCQUFJLHFFQUFDLDZEQUFEO0FBQUEsZ0JBQWNBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1DRCxDQTlDRDs7S0FBTVAsUztBQWdEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjE2ZWE2YzFlMzQ5ZTZjNjc2YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZEltYWdlLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IENhcmRBY3Rpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbnRlcmZhY2UgQ2FyZEltYWdlUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIHN1YkhlYWRlcjogUmVhY3QuUmVhY3ROb2RlW10gfCBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBpbWFnZVRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgYnV0dG9ucz86IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICBpY29uOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGltYWdlUHJvcHM/OiB1bmtub3duW107XG59XG5cbmNvbnN0IENhcmRJbWFnZTogUmVhY3QuRkM8Q2FyZEltYWdlUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGRhdGUsXG4gIHN1YkhlYWRlcixcbiAgaW1hZ2UsXG4gIGltYWdlVGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBidXR0b25zLFxuICBpY29uLFxuICBpbWFnZVByb3BzLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHJhaXNlZD5cbiAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgIGF2YXRhcj17aWNvbn1cbiAgICAgICAgdGl0bGU9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz57dGl0bGV9PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgc3ViaGVhZGVyPXtcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7c3ViSGVhZGVyfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IHN0eWxlcy5pbWFnZSB9fVxuICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgdGl0bGU9e2ltYWdlVGl0bGV9XG4gICAgICAgICAgey4uLmltYWdlUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PSdib2R5MidcbiAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICApfVxuICAgICAge2J1dHRvbnMgJiYgPENhcmRBY3Rpb25zPntidXR0b25zfTwvQ2FyZEFjdGlvbnM+fVxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRJbWFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=