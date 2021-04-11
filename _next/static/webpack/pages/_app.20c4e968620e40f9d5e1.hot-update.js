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
    },
    h5: {
      fontWeight: 500
    },
    h4: {
      fontWeight: 500
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
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImZvbnRXZWlnaHRSZWd1bGFyIiwiZm9udFdlaWdodExpZ2h0IiwiZm9udFdlaWdodEJvbGQiLCJzdWJ0aXRsZTIiLCJmb250V2VpZ2h0IiwiYm9keTIiLCJoNSIsImg0Iiwib3ZlcnJpZGVzIiwiTXVpVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQiLCJyb290IiwiZGlzcGxheSIsIk11aVRpbWVsaW5lU2VwYXJhdG9yIiwiTXVpVGltZWxpbmUiLCJtYXhXaWR0aCIsIk11aVRpbWVsaW5lSXRlbSIsImFsaWduQWx0ZXJuYXRlIiwidGV4dEFsaWduIiwiTXVpVGltZWxpbmVDb250ZW50IiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsIk11aUNhcmRIZWFkZXIiLCJhdmF0YXIiLCJmbGV4RGlyZWN0aW9uIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVzcG9uc2l2ZUZvbnRTaXplcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUUsQ0FDVixXQURVLEVBRVYsV0FGVSxFQUdWLFFBSFUsRUFJVixrQkFKVSxFQUtWLE9BTFUsRUFNVixZQU5VLEVBT1ZDLElBUFUsQ0FPTCxHQVBLLENBREY7QUFTVkMscUJBQWlCLEVBQUUsR0FUVDtBQVVWQyxtQkFBZSxFQUFFLEdBVlA7QUFXVkMsa0JBQWMsRUFBRSxHQVhOO0FBWVZDLGFBQVMsRUFBRTtBQUNUQyxnQkFBVSxFQUFFO0FBREgsS0FaRDtBQWVWQyxTQUFLLEVBQUU7QUFDTEQsZ0JBQVUsRUFBRTtBQURQLEtBZkc7QUFrQlZFLE1BQUUsRUFBRTtBQUNGRixnQkFBVSxFQUFFO0FBRFYsS0FsQk07QUFxQlZHLE1BQUUsRUFBRTtBQUNGSCxnQkFBVSxFQUFFO0FBRFY7QUFyQk0sR0FEZTtBQTBCM0JJLFdBQVMsRUFBRTtBQUNUO0FBQ0E7QUFDQUMsOEJBQTBCLEVBQUU7QUFDMUJDLFVBQUksRUFBRSxvSUFDSCwwQkFEQyxFQUM0QjtBQUM1QkMsZUFBTyxFQUFFO0FBRG1CLE9BRDVCO0FBRHNCLEtBSG5CO0FBVVRDLHdCQUFvQixFQUFFO0FBQ3BCRixVQUFJLEVBQUUsb0lBQ0gsMEJBREMsRUFDNEI7QUFDNUJDLGVBQU8sRUFBRTtBQURtQixPQUQ1QjtBQURnQixLQVZiO0FBaUJURSxlQUFXLEVBQUU7QUFDWEgsVUFBSSxFQUFFO0FBQ0pJLGdCQUFRLEVBQUU7QUFETjtBQURLLEtBakJKO0FBc0JUQyxtQkFBZSxFQUFFO0FBQ2ZDLG9CQUFjLEVBQUU7QUFDZCwwTEFDRywwQkFESCxFQUNnQztBQUM1QkMsbUJBQVMsRUFBRTtBQURpQixTQURoQztBQURjO0FBREQsS0F0QlI7QUErQlRDLHNCQUFrQixFQUFFO0FBQ2xCUixVQUFJLEVBQUU7QUFDSlMsb0JBQVksRUFBRTtBQURaLFNBRUQsMEJBRkMsRUFFNEI7QUFDNUJDLGVBQU8sRUFBRTtBQURtQixPQUY1QjtBQURjLEtBL0JYO0FBdUNUQyxpQkFBYSxFQUFFO0FBQ2JDLFlBQU0sRUFBRSxvSUFDTCwwQkFERyxFQUMwQjtBQUM1QlgsZUFBTyxFQUFFO0FBRG1CLE9BRDFCLENBRE87QUFNYkQsVUFBSSxFQUFFLG9JQUNILDBCQURDLEVBQzRCO0FBQzVCYSxxQkFBYSxFQUFFLGFBRGE7QUFFNUJILGVBQU8sRUFBRTtBQUZtQixPQUQ1QjtBQU5TO0FBdkNOO0FBMUJnQixDQUFELENBQTVCO0FBaUZlLFNBQVNJLEdBQVQsT0FBdUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3BELHNCQUNFLHFFQUFDLHNFQUFEO0FBQWUsU0FBSyxFQUFFQyxvRkFBbUIsQ0FBQ2hDLEtBQUQsQ0FBekM7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlK0IsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7S0FOdUJGLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMGM0ZTk2ODYyMGU0MGY5ZDVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTXVpVGhlbWUsXG4gIFRoZW1lUHJvdmlkZXIsXG4gIHJlc3BvbnNpdmVGb250U2l6ZXMsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogW1xuICAgICAgJ0ZpcmEgQ29kZScsXG4gICAgICAnbW9ub3NwYWNlJyxcbiAgICAgICdSb2JvdG8nLFxuICAgICAgJ1wiSGVsdmV0aWNhIE5ldWVcIicsXG4gICAgICAnQXJpYWwnLFxuICAgICAgJ3NhbnMtc2VyaWYnLFxuICAgIF0uam9pbignLCcpLFxuICAgIGZvbnRXZWlnaHRSZWd1bGFyOiA0MDAsXG4gICAgZm9udFdlaWdodExpZ2h0OiA0MDAsXG4gICAgZm9udFdlaWdodEJvbGQ6IDQwMCxcbiAgICBzdWJ0aXRsZTI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB9LFxuICB9LFxuICBvdmVycmlkZXM6IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIE11aVRpbWVsaW5lT3Bwb3NpdGVDb250ZW50OiB7XG4gICAgICByb290OiB7XG4gICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGltZWxpbmVTZXBhcmF0b3I6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgWydAbWVkaWEgKG1heC13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUaW1lbGluZToge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtYXhXaWR0aDogJzEyMDBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpVGltZWxpbmVJdGVtOiB7XG4gICAgICBhbGlnbkFsdGVybmF0ZToge1xuICAgICAgICAnJjpudGgtY2hpbGQoZXZlbikgLk11aVRpbWVsaW5lSXRlbS1jb250ZW50Jzoge1xuICAgICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQgIWltcG9ydGFudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUaW1lbGluZUNvbnRlbnQ6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMnJlbScsXG4gICAgICAgIFsnQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpJ106IHtcbiAgICAgICAgICBwYWRkaW5nOiAnNnB4IDAnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUNhcmRIZWFkZXI6IHtcbiAgICAgIGF2YXRhcjoge1xuICAgICAgICBbJ0BtZWRpYSAobWluLXdpZHRoOjc4MHB4KSddOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgWydAbWVkaWEgKG1heC13aWR0aDo3ODBweCknXToge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17cmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZSl9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=