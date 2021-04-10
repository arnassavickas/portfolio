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
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 16
      }, _this),
      subheader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
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
      }, void 0, true)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdWJIZWFkZXIiLCJpbWFnZSIsImltYWdlVGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpY29uIiwic3R5bGVzIiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVlBO0FBQ0E7QUFDQSxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQVN0QztBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLFNBTUksUUFOSkEsU0FNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLFVBSUksUUFKSkEsVUFJSTtBQUFBLE1BSEpDLFdBR0ksUUFISkEsV0FHSTtBQUFBLE1BRkpDLE9BRUksUUFGSkEsT0FFSTtBQUFBLE1BREpDLElBQ0ksUUFESkEsSUFDSTtBQUNKLHNCQUNFLHFFQUFDLDhEQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUEsNEJBQ0UscUVBQUMsb0VBQUQsQ0FDRTtBQURGO0FBR0UsV0FBSyxlQUFFLHFFQUFDLG9FQUFEO0FBQUEsa0JBQWFQO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhUO0FBSUUsZUFBUyxlQUNQO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFFUSw2REFBTSxDQUFDUCxJQUF4QjtBQUFBLG9CQUErQkE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHR0MsU0FISDtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBYUdDLEtBQUssaUJBQ0oscUVBQUMsbUVBQUQ7QUFDRSxhQUFPLEVBQUU7QUFBRU0sWUFBSSxFQUFFRCw2REFBTSxDQUFDTDtBQUFmLE9BRFg7QUFFRSxXQUFLLEVBQUVBLEtBRlQ7QUFHRSxXQUFLLEVBQUVDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKLEVBb0JHQyxXQUFXLGlCQUNWLHFFQUFDLHFFQUFEO0FBQUEsNkJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxlQUFPLEVBQUMsT0FEVjtBQUVFLGlCQUFTLEVBQUMsR0FGWjtBQUdFLGlCQUFTLEVBQUVHLDZEQUFNLENBQUNILFdBSHBCO0FBQUEsa0JBS0dBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkosRUErQkdDLE9BQU8saUJBQUkscUVBQUMsNkRBQUQ7QUFBQSxnQkFBY0E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBN0NEOztLQUFNUCxTO0FBK0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDllYTc3MTIwNjc1MDk5YzNkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkSW1hZ2UubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ2FyZEFjdGlvbnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmludGVyZmFjZSBDYXJkSW1hZ2VQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgc3ViSGVhZGVyOiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBpbWFnZVRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgYnV0dG9ucz86IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICBpY29uOiBSZWFjdC5SZWFjdE5vZGU7XG59XG4vL1RPRE8gZG9lc24ndCBmaXQgb24gbW9iaWxlXG4vL1RPRE8gYWRkIGRhdGUgb24gbW9iaWxlXG5jb25zdCBDYXJkSW1hZ2U6IFJlYWN0LkZDPENhcmRJbWFnZVByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBkYXRlLFxuICBzdWJIZWFkZXIsXG4gIGltYWdlLFxuICBpbWFnZVRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYnV0dG9ucyxcbiAgaWNvbixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCByYWlzZWQ+XG4gICAgICA8Q2FyZEhlYWRlclxuICAgICAgICAvL2F2YXRhcj17aWNvbn1cblxuICAgICAgICB0aXRsZT17PFR5cG9ncmFwaHk+e3RpdGxlfTwvVHlwb2dyYXBoeT59XG4gICAgICAgIHN1YmhlYWRlcj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAge3N1YkhlYWRlcn1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IHN0eWxlcy5pbWFnZSB9fVxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICB0aXRsZT17aW1hZ2VUaXRsZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xuICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICl9XG4gICAgICB7YnV0dG9ucyAmJiA8Q2FyZEFjdGlvbnM+e2J1dHRvbnN9PC9DYXJkQWN0aW9ucz59XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEltYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==