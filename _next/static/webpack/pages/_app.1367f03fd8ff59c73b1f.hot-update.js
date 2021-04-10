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
    fontWeightLight: 300,
    fontWeightBold: 300,
    subtitle2: {
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
      lineNumber: 75,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImZvbnRXZWlnaHRMaWdodCIsImZvbnRXZWlnaHRCb2xkIiwic3VidGl0bGUyIiwiZm9udFdlaWdodCIsIm92ZXJyaWRlcyIsIk11aVRpbWVsaW5lT3Bwb3NpdGVDb250ZW50Iiwicm9vdCIsImRpc3BsYXkiLCJNdWlUaW1lbGluZVNlcGFyYXRvciIsIk11aVRpbWVsaW5lIiwibWF4V2lkdGgiLCJNdWlUaW1lbGluZUl0ZW0iLCJhbGlnbkFsdGVybmF0ZSIsInRleHRBbGlnbiIsIk11aUNhcmRIZWFkZXIiLCJhdmF0YXIiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlc3BvbnNpdmVGb250U2l6ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFLENBQ1YsV0FEVSxFQUVWLFdBRlUsRUFHVixRQUhVLEVBSVYsa0JBSlUsRUFLVixPQUxVLEVBTVYsWUFOVSxFQU9WQyxJQVBVLENBT0wsR0FQSyxDQURGO0FBU1ZDLG1CQUFlLEVBQUUsR0FUUDtBQVVWQyxrQkFBYyxFQUFFLEdBVk47QUFXVkMsYUFBUyxFQUFFO0FBQ1RDLGdCQUFVLEVBQUU7QUFESDtBQVhELEdBRGU7QUFnQjNCQyxXQUFTLEVBQUU7QUFDVDtBQUNBO0FBQ0FDLDhCQUEwQixFQUFFO0FBQzFCQyxVQUFJLEVBQUUsb0lBQ0gsMEJBREMsRUFDNEI7QUFDNUJDLGVBQU8sRUFBRTtBQURtQixPQUQ1QjtBQURzQixLQUhuQjtBQVVUQyx3QkFBb0IsRUFBRTtBQUNwQkYsVUFBSSxFQUFFLG9JQUNILDBCQURDLEVBQzRCO0FBQzVCQyxlQUFPLEVBQUU7QUFEbUIsT0FENUI7QUFEZ0IsS0FWYjtBQWlCVEUsZUFBVyxFQUFFO0FBQ1hILFVBQUksRUFBRTtBQUNKSSxnQkFBUSxFQUFFO0FBRE47QUFESyxLQWpCSjtBQXNCVEMsbUJBQWUsRUFBRTtBQUNmQyxvQkFBYyxFQUFFO0FBQ2QsMExBQ0csMEJBREgsRUFDZ0M7QUFDNUJDLG1CQUFTLEVBQUU7QUFEaUIsU0FEaEM7QUFEYztBQURELEtBdEJSO0FBK0JUQyxpQkFBYSxFQUFFO0FBQ2JDLFlBQU0sRUFBRSxvSUFDTCwwQkFERyxFQUMwQjtBQUM1QlIsZUFBTyxFQUFFO0FBRG1CLE9BRDFCLENBRE87QUFNYkQsVUFBSSxFQUFFLG9JQUNILDBCQURDLEVBQzRCO0FBQzVCVSxxQkFBYSxFQUFFLGFBRGE7QUFFNUJDLGVBQU8sRUFBRTtBQUZtQixPQUQ1QjtBQU5TO0FBL0JOO0FBaEJnQixDQUFELENBQTVCO0FBK0RlLFNBQVNDLEdBQVQsT0FBdUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3BELHNCQUNFLHFFQUFDLHNFQUFEO0FBQWUsU0FBSyxFQUFFQyxvRkFBbUIsQ0FBQzFCLEtBQUQsQ0FBekM7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFleUIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7S0FOdUJGLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMzY3ZjAzZmQ4ZmY1OWM3M2IxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTXVpVGhlbWUsXG4gIFRoZW1lUHJvdmlkZXIsXG4gIHJlc3BvbnNpdmVGb250U2l6ZXMsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogW1xuICAgICAgJ0ZpcmEgQ29kZScsXG4gICAgICAnbW9ub3NwYWNlJyxcbiAgICAgICdSb2JvdG8nLFxuICAgICAgJ1wiSGVsdmV0aWNhIE5ldWVcIicsXG4gICAgICAnQXJpYWwnLFxuICAgICAgJ3NhbnMtc2VyaWYnLFxuICAgIF0uam9pbignLCcpLFxuICAgIGZvbnRXZWlnaHRMaWdodDogMzAwLFxuICAgIGZvbnRXZWlnaHRCb2xkOiAzMDAsXG4gICAgc3VidGl0bGUyOiB7XG4gICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgfSxcbiAgfSxcbiAgb3ZlcnJpZGVzOiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBNdWlUaW1lbGluZU9wcG9zaXRlQ29udGVudDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBbJ0BtZWRpYSAobWF4LXdpZHRoOjc4MHB4KSddOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRpbWVsaW5lU2VwYXJhdG9yOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGltZWxpbmU6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbWF4V2lkdGg6ICcxMjAwcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRpbWVsaW5lSXRlbToge1xuICAgICAgYWxpZ25BbHRlcm5hdGU6IHtcbiAgICAgICAgJyY6bnRoLWNoaWxkKGV2ZW4pIC5NdWlUaW1lbGluZUl0ZW0tY29udGVudCc6IHtcbiAgICAgICAgICBbJ0BtZWRpYSAobWF4LXdpZHRoOjc4MHB4KSddOiB7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0ICFpbXBvcnRhbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQ2FyZEhlYWRlcjoge1xuICAgICAgYXZhdGFyOiB7XG4gICAgICAgIFsnQG1lZGlhIChtaW4td2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm9vdDoge1xuICAgICAgICBbJ0BtZWRpYSAobWF4LXdpZHRoOjc4MHB4KSddOiB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtyZXNwb25zaXZlRm9udFNpemVzKHRoZW1lKX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==