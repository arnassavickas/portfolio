webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "D:\\Projektai\\arnassavickas\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  typography: {
    fontFamily: ['Fira Code', 'monospace', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    fontw: fontw
  },
  overrides: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    MuiTimelineOppositeContent: {
      root: Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, '@media (max-width:780px)', {
        display: 'none'
      })
    },
    MuiTimelineSeparator: {
      root: Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, '@media (max-width:780px)', {
        display: 'none'
      })
    },
    MuiTimeline: {
      root: {
        maxWidth: '1200px'
      }
    },
    MuiTimelineItem: {
      alignAlternate: {
        '&:nth-child(even) .MuiTimelineItem-content': Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, '@media (max-width:780px)', {
          textAlign: 'left !important'
        })
      }
    },
    MuiCardHeader: {
      avatar: Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, '@media (min-width:780px)', {
        display: 'none'
      }),
      root: Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, '@media (max-width:780px)', {
        flexDirection: 'row-reverse',
        padding: '10px'
      })
    }
  }
});
function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["responsiveFontSizes"])(theme),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
_c = App;

var _c;

$RefreshReg$(_c, "App");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImZvbnR3Iiwib3ZlcnJpZGVzIiwiTXVpVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQiLCJyb290IiwiZGlzcGxheSIsIk11aVRpbWVsaW5lU2VwYXJhdG9yIiwiTXVpVGltZWxpbmUiLCJtYXhXaWR0aCIsIk11aVRpbWVsaW5lSXRlbSIsImFsaWduQWx0ZXJuYXRlIiwidGV4dEFsaWduIiwiTXVpQ2FyZEhlYWRlciIsImF2YXRhciIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVzcG9uc2l2ZUZvbnRTaXplcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUUsQ0FDVixXQURVLEVBRVYsV0FGVSxFQUdWLFFBSFUsRUFJVixrQkFKVSxFQUtWLE9BTFUsRUFNVixZQU5VLEVBT1ZDLElBUFUsQ0FPTCxHQVBLLENBREY7QUFTVkMsU0FBSyxFQUFMQTtBQVRVLEdBRGU7QUFZM0JDLFdBQVMsRUFBRTtBQUNUO0FBQ0E7QUFDQUMsOEJBQTBCLEVBQUU7QUFDMUJDLFVBQUksRUFBRSxvSUFDSCwwQkFEQyxFQUM0QjtBQUM1QkMsZUFBTyxFQUFFO0FBRG1CLE9BRDVCO0FBRHNCLEtBSG5CO0FBVVRDLHdCQUFvQixFQUFFO0FBQ3BCRixVQUFJLEVBQUUsb0lBQ0gsMEJBREMsRUFDNEI7QUFDNUJDLGVBQU8sRUFBRTtBQURtQixPQUQ1QjtBQURnQixLQVZiO0FBaUJURSxlQUFXLEVBQUU7QUFDWEgsVUFBSSxFQUFFO0FBQ0pJLGdCQUFRLEVBQUU7QUFETjtBQURLLEtBakJKO0FBc0JUQyxtQkFBZSxFQUFFO0FBQ2ZDLG9CQUFjLEVBQUU7QUFDZCwwTEFDRywwQkFESCxFQUNnQztBQUM1QkMsbUJBQVMsRUFBRTtBQURpQixTQURoQztBQURjO0FBREQsS0F0QlI7QUErQlRDLGlCQUFhLEVBQUU7QUFDYkMsWUFBTSxFQUFFLG9JQUNMLDBCQURHLEVBQzBCO0FBQzVCUixlQUFPLEVBQUU7QUFEbUIsT0FEMUIsQ0FETztBQU1iRCxVQUFJLEVBQUUsb0lBQ0gsMEJBREMsRUFDNEI7QUFDNUJVLHFCQUFhLEVBQUUsYUFEYTtBQUU1QkMsZUFBTyxFQUFFO0FBRm1CLE9BRDVCO0FBTlM7QUEvQk47QUFaZ0IsQ0FBRCxDQUE1QjtBQTJEZSxTQUFTQyxHQUFULE9BQXVDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNwRCxzQkFDRSxxRUFBQyxzRUFBRDtBQUFlLFNBQUssRUFBRUMsb0ZBQW1CLENBQUN2QixLQUFELENBQXpDO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZXNCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0tBTnVCRixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDdlMDg4OGEzYTk5ZjdlZGI4YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXMgKi9cbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zY3NzJztcbmltcG9ydCB7XG4gIGNyZWF0ZU11aVRoZW1lLFxuICBUaGVtZVByb3ZpZGVyLFxuICByZXNwb25zaXZlRm9udFNpemVzLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICdGaXJhIENvZGUnLFxuICAgICAgJ21vbm9zcGFjZScsXG4gICAgICAnUm9ib3RvJyxcbiAgICAgICdcIkhlbHZldGljYSBOZXVlXCInLFxuICAgICAgJ0FyaWFsJyxcbiAgICAgICdzYW5zLXNlcmlmJyxcbiAgICBdLmpvaW4oJywnKSxcbiAgICBmb250d1xuICB9LFxuICBvdmVycmlkZXM6IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIE11aVRpbWVsaW5lT3Bwb3NpdGVDb250ZW50OiB7XG4gICAgICByb290OiB7XG4gICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGltZWxpbmVTZXBhcmF0b3I6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgWydAbWVkaWEgKG1heC13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUaW1lbGluZToge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtYXhXaWR0aDogJzEyMDBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGltZWxpbmVJdGVtOiB7XG4gICAgICBhbGlnbkFsdGVybmF0ZToge1xuICAgICAgICAnJjpudGgtY2hpbGQoZXZlbikgLk11aVRpbWVsaW5lSXRlbS1jb250ZW50Jzoge1xuICAgICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQgIWltcG9ydGFudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlDYXJkSGVhZGVyOiB7XG4gICAgICBhdmF0YXI6IHtcbiAgICAgICAgWydAbWVkaWEgKG1pbi13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb290OiB7XG4gICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3Jlc3BvbnNpdmVGb250U2l6ZXModGhlbWUpfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9