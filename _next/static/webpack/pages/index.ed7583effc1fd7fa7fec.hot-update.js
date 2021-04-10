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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"] //avatar={icon}
    , {
      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h5",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 16
      }, _this),
      subheader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "body1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.date,
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
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
      lineNumber: 35,
      columnNumber: 7
    }, _this), image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
      classes: {
        root: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image
      },
      image: image,
      title: imageTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this), description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "body2",
        component: "p",
        className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.description,
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, _this), buttons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
      children: buttons
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdWJIZWFkZXIiLCJpbWFnZSIsImltYWdlVGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpY29uIiwic3R5bGVzIiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUE7QUFDQTtBQUNBLElBQU1BLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BU3RDO0FBQUEsTUFSSkMsS0FRSSxRQVJKQSxLQVFJO0FBQUEsTUFQSkMsSUFPSSxRQVBKQSxJQU9JO0FBQUEsTUFOSkMsU0FNSSxRQU5KQSxTQU1JO0FBQUEsTUFMSkMsS0FLSSxRQUxKQSxLQUtJO0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsSUFDSSxRQURKQSxJQUNJO0FBQ0osc0JBQ0UscUVBQUMsOERBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQSw0QkFDRSxxRUFBQyxvRUFBRCxDQUNFO0FBREY7QUFHRSxXQUFLLGVBQUUscUVBQUMsb0VBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBQSxrQkFBMEJQO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIVDtBQUlFLGVBQVMsZUFDUCxxRUFBQyxvRUFBRDtBQUFZLGVBQU8sRUFBQyxPQUFwQjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRVEsNkRBQU0sQ0FBQ1AsSUFBeEI7QUFBQSxvQkFBK0JBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0dDLFNBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBYUdDLEtBQUssaUJBQ0oscUVBQUMsbUVBQUQ7QUFDRSxhQUFPLEVBQUU7QUFBRU0sWUFBSSxFQUFFRCw2REFBTSxDQUFDTDtBQUFmLE9BRFg7QUFFRSxXQUFLLEVBQUVBLEtBRlQ7QUFHRSxXQUFLLEVBQUVDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKLEVBb0JHQyxXQUFXLGlCQUNWLHFFQUFDLHFFQUFEO0FBQUEsNkJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxlQUFPLEVBQUMsT0FEVjtBQUVFLGlCQUFTLEVBQUMsR0FGWjtBQUdFLGlCQUFTLEVBQUVHLDZEQUFNLENBQUNILFdBSHBCO0FBQUEsa0JBS0dBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkosRUErQkdDLE9BQU8saUJBQUkscUVBQUMsNkRBQUQ7QUFBQSxnQkFBY0E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBN0NEOztLQUFNUCxTO0FBK0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZDc1ODNlZmZjMWZkN2ZhN2ZlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkSW1hZ2UubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ2FyZEFjdGlvbnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmludGVyZmFjZSBDYXJkSW1hZ2VQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgc3ViSGVhZGVyOiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBpbWFnZVRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgYnV0dG9ucz86IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICBpY29uOiBSZWFjdC5SZWFjdE5vZGU7XG59XG4vL1RPRE8gZG9lc24ndCBmaXQgb24gbW9iaWxlXG4vL1RPRE8gYWRkIGRhdGUgb24gbW9iaWxlXG5jb25zdCBDYXJkSW1hZ2U6IFJlYWN0LkZDPENhcmRJbWFnZVByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBkYXRlLFxuICBzdWJIZWFkZXIsXG4gIGltYWdlLFxuICBpbWFnZVRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYnV0dG9ucyxcbiAgaWNvbixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCByYWlzZWQ+XG4gICAgICA8Q2FyZEhlYWRlclxuICAgICAgICAvL2F2YXRhcj17aWNvbn1cblxuICAgICAgICB0aXRsZT17PFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPnt0aXRsZX08L1R5cG9ncmFwaHk+fVxuICAgICAgICBzdWJoZWFkZXI9e1xuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAge3N1YkhlYWRlcn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgY2xhc3Nlcz17eyByb290OiBzdHlsZXMuaW1hZ2UgfX1cbiAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgdGl0bGU9e2ltYWdlVGl0bGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PSdib2R5MidcbiAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICApfVxuICAgICAge2J1dHRvbnMgJiYgPENhcmRBY3Rpb25zPntidXR0b25zfTwvQ2FyZEFjdGlvbnM+fVxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRJbWFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=