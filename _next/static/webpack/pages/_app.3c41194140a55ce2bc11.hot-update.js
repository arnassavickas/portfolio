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
  typography: Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    fontFamily: ['Fira Code', 'monospace', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300
  }, "fontWeightLight", 300),
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
      lineNumber: 72,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImZvbnRXZWlnaHRMaWdodCIsIm92ZXJyaWRlcyIsIk11aVRpbWVsaW5lT3Bwb3NpdGVDb250ZW50Iiwicm9vdCIsImRpc3BsYXkiLCJNdWlUaW1lbGluZVNlcGFyYXRvciIsIk11aVRpbWVsaW5lIiwibWF4V2lkdGgiLCJNdWlUaW1lbGluZUl0ZW0iLCJhbGlnbkFsdGVybmF0ZSIsInRleHRBbGlnbiIsIk11aUNhcmRIZWFkZXIiLCJhdmF0YXIiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlc3BvbnNpdmVGb250U2l6ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFLENBQ1YsV0FEVSxFQUVWLFdBRlUsRUFHVixRQUhVLEVBSVYsa0JBSlUsRUFLVixPQUxVLEVBTVYsWUFOVSxFQU9WQyxJQVBVLENBT0wsR0FQSyxDQURKO0FBU1JDLG1CQUFlLEVBQUU7QUFUVCx3QkFVUyxHQVZULENBRGlCO0FBYTNCQyxXQUFTLEVBQUU7QUFDVDtBQUNBO0FBQ0FDLDhCQUEwQixFQUFFO0FBQzFCQyxVQUFJLEVBQUUsb0lBQ0gsMEJBREMsRUFDNEI7QUFDNUJDLGVBQU8sRUFBRTtBQURtQixPQUQ1QjtBQURzQixLQUhuQjtBQVVUQyx3QkFBb0IsRUFBRTtBQUNwQkYsVUFBSSxFQUFFLG9JQUNILDBCQURDLEVBQzRCO0FBQzVCQyxlQUFPLEVBQUU7QUFEbUIsT0FENUI7QUFEZ0IsS0FWYjtBQWlCVEUsZUFBVyxFQUFFO0FBQ1hILFVBQUksRUFBRTtBQUNKSSxnQkFBUSxFQUFFO0FBRE47QUFESyxLQWpCSjtBQXNCVEMsbUJBQWUsRUFBRTtBQUNmQyxvQkFBYyxFQUFFO0FBQ2QsMExBQ0csMEJBREgsRUFDZ0M7QUFDNUJDLG1CQUFTLEVBQUU7QUFEaUIsU0FEaEM7QUFEYztBQURELEtBdEJSO0FBK0JUQyxpQkFBYSxFQUFFO0FBQ2JDLFlBQU0sRUFBRSxvSUFDTCwwQkFERyxFQUMwQjtBQUM1QlIsZUFBTyxFQUFFO0FBRG1CLE9BRDFCLENBRE87QUFNYkQsVUFBSSxFQUFFLG9JQUNILDBCQURDLEVBQzRCO0FBQzVCVSxxQkFBYSxFQUFFLGFBRGE7QUFFNUJDLGVBQU8sRUFBRTtBQUZtQixPQUQ1QjtBQU5TO0FBL0JOO0FBYmdCLENBQUQsQ0FBNUI7QUE0RGUsU0FBU0MsR0FBVCxPQUF1QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDcEQsc0JBQ0UscUVBQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVDLG9GQUFtQixDQUFDdkIsS0FBRCxDQUF6QztBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVzQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtLQU51QkYsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNjNDExOTQxNDBhNTVjZTJiYzExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XG5pbXBvcnQge1xuICBjcmVhdGVNdWlUaGVtZSxcbiAgVGhlbWVQcm92aWRlcixcbiAgcmVzcG9uc2l2ZUZvbnRTaXplcyxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiBbXG4gICAgICAnRmlyYSBDb2RlJyxcbiAgICAgICdtb25vc3BhY2UnLFxuICAgICAgJ1JvYm90bycsXG4gICAgICAnXCJIZWx2ZXRpY2EgTmV1ZVwiJyxcbiAgICAgICdBcmlhbCcsXG4gICAgICAnc2Fucy1zZXJpZicsXG4gICAgXS5qb2luKCcsJyksXG4gICAgZm9udFdlaWdodExpZ2h0OiAzMDAsXG4gICAgZm9udFdlaWdodExpZ2h0OiAzMDAsXG4gIH0sXG4gIG92ZXJyaWRlczoge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgTXVpVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQ6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgWydAbWVkaWEgKG1heC13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUaW1lbGluZVNlcGFyYXRvcjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBbJ0BtZWRpYSAobWF4LXdpZHRoOjc4MHB4KSddOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRpbWVsaW5lOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1heFdpZHRoOiAnMTIwMHB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUaW1lbGluZUl0ZW06IHtcbiAgICAgIGFsaWduQWx0ZXJuYXRlOiB7XG4gICAgICAgICcmOm50aC1jaGlsZChldmVuKSAuTXVpVGltZWxpbmVJdGVtLWNvbnRlbnQnOiB7XG4gICAgICAgICAgWydAbWVkaWEgKG1heC13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCAhaW1wb3J0YW50JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUNhcmRIZWFkZXI6IHtcbiAgICAgIGF2YXRhcjoge1xuICAgICAgICBbJ0BtZWRpYSAobWluLXdpZHRoOjc4MHB4KSddOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgWydAbWVkaWEgKG1heC13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17cmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZSl9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=