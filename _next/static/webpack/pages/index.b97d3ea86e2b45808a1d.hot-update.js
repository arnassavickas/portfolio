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
      avatar: icon,
      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h6",
        component: "h3",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, _this),
      subheader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "subtitle2",
        component: "h4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.date,
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, _this), subHeader]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, _this)
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
      lineNumber: 50,
      columnNumber: 9
    }, _this), description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "body2",
        component: "div",
        className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.description,
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
    }, _this), buttons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
      children: buttons
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdWJIZWFkZXIiLCJpbWFnZSIsImltYWdlVGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpY29uIiwic3R5bGVzIiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUEsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0MsT0FTdEM7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxTQU1JLFFBTkpBLFNBTUk7QUFBQSxNQUxKQyxLQUtJLFFBTEpBLEtBS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxXQUdJLFFBSEpBLFdBR0k7QUFBQSxNQUZKQyxPQUVJLFFBRkpBLE9BRUk7QUFBQSxNQURKQyxJQUNJLFFBREpBLElBQ0k7QUFDSixzQkFDRSxxRUFBQyw4REFBRDtBQUFNLFVBQU0sTUFBWjtBQUFBLDRCQUNFLHFFQUFDLG9FQUFEO0FBQ0UsWUFBTSxFQUFFQSxJQURWO0FBRUUsV0FBSyxlQUNILHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFTLEVBQUMsSUFBbkM7QUFBQSxrQkFDR1A7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFPRSxlQUFTLGVBQ1AscUVBQUMsb0VBQUQ7QUFBWSxlQUFPLEVBQUMsV0FBcEI7QUFBZ0MsaUJBQVMsRUFBQyxJQUExQztBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRVEsNkRBQU0sQ0FBQ1AsSUFBeEI7QUFBQSxvQkFBK0JBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0dDLFNBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBZ0JHQyxLQUFLLGlCQUNKLHFFQUFDLG1FQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUVNLFlBQUksRUFBRUQsNkRBQU0sQ0FBQ0w7QUFBZixPQURYO0FBRUUsV0FBSyxFQUFFQSxLQUZUO0FBR0UsV0FBSyxFQUFFQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkosRUF1QkdDLFdBQVcsaUJBQ1YscUVBQUMscUVBQUQ7QUFBQSw2QkFDRSxxRUFBQyxvRUFBRDtBQUNFLGVBQU8sRUFBQyxPQURWO0FBRUUsaUJBQVMsRUFBQyxLQUZaO0FBR0UsaUJBQVMsRUFBRUcsNkRBQU0sQ0FBQ0gsV0FIcEI7QUFBQSxrQkFLR0E7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCSixFQWtDR0MsT0FBTyxpQkFBSSxxRUFBQyw2REFBRDtBQUFBLGdCQUFjQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0FoREQ7O0tBQU1QLFM7QUFrRFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5N2QzZWE4NmUyYjQ1ODA4YTFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZEltYWdlLm1vZHVsZS5zY3NzJztcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgQ2FyZEFjdGlvbnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZEltYWdlUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIHN1YkhlYWRlcjogUmVhY3QuUmVhY3ROb2RlW10gfCBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgaW1hZ2VUaXRsZT86IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBidXR0b25zPzogUmVhY3QuUmVhY3ROb2RlW107XHJcbiAgaWNvbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBDYXJkSW1hZ2U6IFJlYWN0LkZDPENhcmRJbWFnZVByb3BzPiA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgZGF0ZSxcclxuICBzdWJIZWFkZXIsXHJcbiAgaW1hZ2UsXHJcbiAgaW1hZ2VUaXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBidXR0b25zLFxyXG4gIGljb24sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgcmFpc2VkPlxyXG4gICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgIGF2YXRhcj17aWNvbn1cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29tcG9uZW50PSdoMyc+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViaGVhZGVyPXtcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMicgY29tcG9uZW50PSdoNCc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntkYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtzdWJIZWFkZXJ9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICB7aW1hZ2UgJiYgKFxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLmltYWdlIH19XHJcbiAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICB0aXRsZT17aW1hZ2VUaXRsZX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xyXG4gICAgICAgICAgICBjb21wb25lbnQ9J2RpdidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICApfVxyXG4gICAgICB7YnV0dG9ucyAmJiA8Q2FyZEFjdGlvbnM+e2J1dHRvbnN9PC9DYXJkQWN0aW9ucz59XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRJbWFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==