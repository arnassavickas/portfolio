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
    fontWeightRegular: 400,
    fontWeightLight: 400,
    fontWeightBold: 400,
    subtitle2: {
      fontWeight: 500
    },
    body2: {
      fontWeight: 300
    }
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
    MuiTimelineContent: {
      root: Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
        marginBottom: '2rem'
      }, '@media (max-width:780px)', {
        padding: '6px 0'
      })
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
      lineNumber: 88,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImZvbnRXZWlnaHRSZWd1bGFyIiwiZm9udFdlaWdodExpZ2h0IiwiZm9udFdlaWdodEJvbGQiLCJzdWJ0aXRsZTIiLCJmb250V2VpZ2h0IiwiYm9keTIiLCJvdmVycmlkZXMiLCJNdWlUaW1lbGluZU9wcG9zaXRlQ29udGVudCIsInJvb3QiLCJkaXNwbGF5IiwiTXVpVGltZWxpbmVTZXBhcmF0b3IiLCJNdWlUaW1lbGluZSIsIm1heFdpZHRoIiwiTXVpVGltZWxpbmVJdGVtIiwiYWxpZ25BbHRlcm5hdGUiLCJ0ZXh0QWxpZ24iLCJNdWlUaW1lbGluZUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIiwiTXVpQ2FyZEhlYWRlciIsImF2YXRhciIsImZsZXhEaXJlY3Rpb24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZXNwb25zaXZlRm9udFNpemVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsWUFBVSxFQUFFO0FBQ1ZDLGNBQVUsRUFBRSxDQUNWLFdBRFUsRUFFVixXQUZVLEVBR1YsUUFIVSxFQUlWLGtCQUpVLEVBS1YsT0FMVSxFQU1WLFlBTlUsRUFPVkMsSUFQVSxDQU9MLEdBUEssQ0FERjtBQVNWQyxxQkFBaUIsRUFBRSxHQVRUO0FBVVZDLG1CQUFlLEVBQUUsR0FWUDtBQVdWQyxrQkFBYyxFQUFFLEdBWE47QUFZVkMsYUFBUyxFQUFFO0FBQ1RDLGdCQUFVLEVBQUU7QUFESCxLQVpEO0FBZVZDLFNBQUssRUFBRTtBQUNMRCxnQkFBVSxFQUFFO0FBRFA7QUFmRyxHQURlO0FBcUIzQkUsV0FBUyxFQUFFO0FBQ1Q7QUFDQTtBQUNBQyw4QkFBMEIsRUFBRTtBQUMxQkMsVUFBSSxFQUFFLG9JQUNILDBCQURDLEVBQzRCO0FBQzVCQyxlQUFPLEVBQUU7QUFEbUIsT0FENUI7QUFEc0IsS0FIbkI7QUFVVEMsd0JBQW9CLEVBQUU7QUFDcEJGLFVBQUksRUFBRSxvSUFDSCwwQkFEQyxFQUM0QjtBQUM1QkMsZUFBTyxFQUFFO0FBRG1CLE9BRDVCO0FBRGdCLEtBVmI7QUFpQlRFLGVBQVcsRUFBRTtBQUNYSCxVQUFJLEVBQUU7QUFDSkksZ0JBQVEsRUFBRTtBQUROO0FBREssS0FqQko7QUFzQlRDLG1CQUFlLEVBQUU7QUFDZkMsb0JBQWMsRUFBRTtBQUNkLDBMQUNHLDBCQURILEVBQ2dDO0FBQzVCQyxtQkFBUyxFQUFFO0FBRGlCLFNBRGhDO0FBRGM7QUFERCxLQXRCUjtBQStCVEMsc0JBQWtCLEVBQUU7QUFDbEJSLFVBQUksRUFBRTtBQUNKUyxvQkFBWSxFQUFFO0FBRFosU0FFRCwwQkFGQyxFQUU0QjtBQUM1QkMsZUFBTyxFQUFFO0FBRG1CLE9BRjVCO0FBRGMsS0EvQlg7QUF1Q1RDLGlCQUFhLEVBQUU7QUFDYkMsWUFBTSxFQUFFLG9JQUNMLDBCQURHLEVBQzBCO0FBQzVCWCxlQUFPLEVBQUU7QUFEbUIsT0FEMUIsQ0FETztBQU1iRCxVQUFJLEVBQUUsb0lBQ0gsMEJBREMsRUFDNEI7QUFDNUJhLHFCQUFhLEVBQUUsYUFEYTtBQUU1QkgsZUFBTyxFQUFFO0FBRm1CLE9BRDVCO0FBTlM7QUF2Q047QUFyQmdCLENBQUQsQ0FBNUI7QUE0RWUsU0FBU0ksR0FBVCxPQUF1QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDcEQsc0JBQ0UscUVBQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVDLG9GQUFtQixDQUFDOUIsS0FBRCxDQUF6QztBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWU2QixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtLQU51QkYsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZlMDNkYjMyMTA2NzU2YTA4Mjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XG5pbXBvcnQge1xuICBjcmVhdGVNdWlUaGVtZSxcbiAgVGhlbWVQcm92aWRlcixcbiAgcmVzcG9uc2l2ZUZvbnRTaXplcyxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiBbXG4gICAgICAnRmlyYSBDb2RlJyxcbiAgICAgICdtb25vc3BhY2UnLFxuICAgICAgJ1JvYm90bycsXG4gICAgICAnXCJIZWx2ZXRpY2EgTmV1ZVwiJyxcbiAgICAgICdBcmlhbCcsXG4gICAgICAnc2Fucy1zZXJpZicsXG4gICAgXS5qb2luKCcsJyksXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IDQwMCxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IDQwMCxcbiAgICBmb250V2VpZ2h0Qm9sZDogNDAwLFxuICAgIHN1YnRpdGxlMjoge1xuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgIH0sXG4gICAgYm9keTI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICB9LFxuICAgIFxuICB9LFxuICBvdmVycmlkZXM6IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIE11aVRpbWVsaW5lT3Bwb3NpdGVDb250ZW50OiB7XG4gICAgICByb290OiB7XG4gICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGltZWxpbmVTZXBhcmF0b3I6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgWydAbWVkaWEgKG1heC13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUaW1lbGluZToge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtYXhXaWR0aDogJzEyMDBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGltZWxpbmVJdGVtOiB7XG4gICAgICBhbGlnbkFsdGVybmF0ZToge1xuICAgICAgICAnJjpudGgtY2hpbGQoZXZlbikgLk11aVRpbWVsaW5lSXRlbS1jb250ZW50Jzoge1xuICAgICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQgIWltcG9ydGFudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUaW1lbGluZUNvbnRlbnQ6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMnJlbScsXG4gICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICBwYWRkaW5nOiAnNnB4IDAnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUNhcmRIZWFkZXI6IHtcbiAgICAgIGF2YXRhcjoge1xuICAgICAgICBbJ0BtZWRpYSAobWluLXdpZHRoOjc4MHB4KSddOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgWydAbWVkaWEgKG1heC13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17cmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZSl9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=