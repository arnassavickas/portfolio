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
      image: image,
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

/***/ }),

/***/ "./components/ProjectsSection/ProjectsSection.tsx":
/*!********************************************************!*\
  !*** ./components/ProjectsSection/ProjectsSection.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProjectsSection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsSection.module.scss */ "./components/ProjectsSection/ProjectsSection.module.scss");
/* harmony import */ var _ProjectsSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectsSection_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Timeline */ "./node_modules/@material-ui/lab/esm/Timeline/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PictureAsPdf */ "./node_modules/@material-ui/icons/PictureAsPdf.js");
/* harmony import */ var _material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Work */ "./node_modules/@material-ui/icons/Work.js");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PhotoLibrary */ "./node_modules/@material-ui/icons/PhotoLibrary.js");
/* harmony import */ var _material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _TimelineCard_TimelineCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../TimelineCard/TimelineCard */ "./components/TimelineCard/TimelineCard.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\ProjectsSection\\ProjectsSection.tsx",
    _this = undefined,
    _s = $RefreshSig$();

















var ProjectsSection = function ProjectsSection() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(D_Projektai_arnassavickas_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "timeline",
    className: _ProjectsSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "h4",
      component: "h2",
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "alternate",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TimelineCard_TimelineCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
        date: "02-2021 - Present",
        title: "Photoproof",
        subHeader: "React, Firebase, Material-UI",
        image: "/images/photoproof.jpg",
        imageTitle: "Photoproof screenshot",
        description: "Advanced React web app built for a photographer to help clients select and comment photos after a photoshoot.",
        buttons: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          variant: "outlined",
          href: "https://github.com/arnassavickas/photoproof",
          target: "_blank",
          children: "GitHub"
        }, 'photoproofgithub', false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          onClick: function onClick() {
            return setOpen(true);
          },
          variant: "outlined",
          children: "Demo"
        }, 'photoproofdemo', false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this)],
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_8___default.a, {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TimelineCard_TimelineCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
        date: "03-2021",
        title: "airidea.lt",
        subHeader: "Wordpress, custom SEO, content creation",
        image: "/images/airidea.jpg",
        imageTitle: "Airidea.lt screenshot",
        description: "Company\u2019s website to provide details of supplied products and equipment for printing houses.",
        buttons: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          variant: "outlined",
          href: "http://airidea.lt/",
          target: "_blank",
          children: "Live site"
        }, 'airideademo', false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, _this)],
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_7___default.a, {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TimelineCard_TimelineCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
        date: "01-2021",
        title: "Letterhead",
        subHeader: "React",
        image: "/images/letterhead.jpg",
        imageTitle: "Letterhead screenshot",
        description: "Easy-to-use React web app to apply a company\u2019s letterhead to a pdf file.",
        buttons: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          variant: "outlined",
          href: "https://github.com/arnassavickas/letterhead-pdf",
          target: "_blank",
          children: "GitHub"
        }, 'letterheadgithub', false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          variant: "outlined",
          href: "https://letterhead.arnassavickas.lt/",
          target: "_blank",
          children: "Demo"
        }, 'letterheaddemo', false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, _this)],
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TimelineCard_TimelineCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
        date: "03-2020",
        title: "karolinavaitonyte.lt",
        subHeader: "Wordpress, custom SEO",
        image: "/test.jpg",
        imageTitle: "Letterhead screenshot",
        description: "Professional photographer\u2019s website to showcase works and deliver finished photoshoots to clients.",
        buttons: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          variant: "outlined",
          href: "https://www.karolinavaitonyte.lt/",
          target: "_blank",
          children: "Live site"
        }, 'letterheaddemo', false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, _this)],
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5___default.a, {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, _this),
        imageProps: []
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: open,
      onClose: function onClose() {
        return setOpen(false);
      },
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "alert-dialog-title",
        children: 'Demo is private'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "alert-dialog-description",
          children: "At this moment, Photoproof is developed for custom usage only, thus demo link can only be provided in private."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "alert-dialog-description",
          children: "If I have contacted you, there should be demo instructions attached. Otherwise, you can contact me, and will gladly share it with you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          onClick: function onClick() {
            return setOpen(false);
          },
          color: "primary",
          autoFocus: true,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(ProjectsSection, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");

_c = ProjectsSection;
/* harmony default export */ __webpack_exports__["default"] = (ProjectsSection);

var _c;

$RefreshReg$(_c, "ProjectsSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24vUHJvamVjdHNTZWN0aW9uLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdWJIZWFkZXIiLCJpbWFnZSIsImltYWdlVGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpY29uIiwiaW1hZ2VQcm9wcyIsInN0eWxlcyIsInJvb3QiLCJQcm9qZWN0c1NlY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJzZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFjQSxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQVV0QztBQUFBLE1BVEpDLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLElBUUksUUFSSkEsSUFRSTtBQUFBLE1BUEpDLFNBT0ksUUFQSkEsU0FPSTtBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFdBSUksUUFKSkEsV0FJSTtBQUFBLE1BSEpDLE9BR0ksUUFISkEsT0FHSTtBQUFBLE1BRkpDLElBRUksUUFGSkEsSUFFSTtBQUFBLE1BREpDLFVBQ0ksUUFESkEsVUFDSTtBQUNKLHNCQUNFLHFFQUFDLDhEQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUEsNEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxZQUFNLEVBQUVELElBRFY7QUFFRSxXQUFLLGVBQUUscUVBQUMsb0VBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBQSxrQkFBMEJQO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGVDtBQUdFLGVBQVMsZUFDUCxx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QUQ7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1BLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxXQUFqQjtBQUF1QyxlQUFLLEVBQUMsU0FBN0M7QUFBdUQsbUJBQVMsTUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlJRCxDQXBJRDs7R0FBTUosZTs7S0FBQUEsZTtBQXNJU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTE1YzY0Y2UzNzU2YjIzOTc3Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZEltYWdlLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IENhcmRBY3Rpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbnRlcmZhY2UgQ2FyZEltYWdlUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIHN1YkhlYWRlcjogUmVhY3QuUmVhY3ROb2RlW10gfCBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBpbWFnZVRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgYnV0dG9ucz86IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICBpY29uOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGltYWdlUHJvcHM/OiB1bmtub3duW107XG59XG5cbmNvbnN0IENhcmRJbWFnZTogUmVhY3QuRkM8Q2FyZEltYWdlUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGRhdGUsXG4gIHN1YkhlYWRlcixcbiAgaW1hZ2UsXG4gIGltYWdlVGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBidXR0b25zLFxuICBpY29uLFxuICBpbWFnZVByb3BzLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHJhaXNlZD5cbiAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgIGF2YXRhcj17aWNvbn1cbiAgICAgICAgdGl0bGU9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz57dGl0bGV9PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgc3ViaGVhZGVyPXtcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7c3ViSGVhZGVyfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IHN0eWxlcy5pbWFnZSB9fVxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICB0aXRsZT17aW1hZ2VUaXRsZX1cbiAgICAgICAgICB7Li4uaW1hZ2VQcm9wc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9J2JvZHkyJ1xuICAgICAgICAgICAgY29tcG9uZW50PSdwJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICl9XG4gICAgICB7YnV0dG9ucyAmJiA8Q2FyZEFjdGlvbnM+e2J1dHRvbnN9PC9DYXJkQWN0aW9ucz59XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEltYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9qZWN0c1NlY3Rpb24ubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZSc7XG5pbXBvcnQgUGhvdG9DYW1lcmFJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XG5pbXBvcnQgUGljdHVyZUFzUGRmSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGljdHVyZUFzUGRmJztcbmltcG9ydCBXb3JrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV29yayc7XG5pbXBvcnQgUGhvdG9MaWJyYXJ5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9MaWJyYXJ5JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuXG5pbXBvcnQgVGltZWxpbmVDYXJkIGZyb20gJy4uL1RpbWVsaW5lQ2FyZC9UaW1lbGluZUNhcmQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCBQcm9qZWN0c1NlY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD0ndGltZWxpbmUnIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDInPlxuICAgICAgICBQcm9qZWN0c1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFRpbWVsaW5lIGFsaWduPSdhbHRlcm5hdGUnPlxuICAgICAgICA8VGltZWxpbmVDYXJkXG4gICAgICAgICAgZGF0ZT0nMDItMjAyMSAtIFByZXNlbnQnXG4gICAgICAgICAgdGl0bGU9J1Bob3RvcHJvb2YnXG4gICAgICAgICAgc3ViSGVhZGVyPSdSZWFjdCwgRmlyZWJhc2UsIE1hdGVyaWFsLVVJJ1xuICAgICAgICAgIGltYWdlPScvaW1hZ2VzL3Bob3RvcHJvb2YuanBnJ1xuICAgICAgICAgIGltYWdlVGl0bGU9J1Bob3RvcHJvb2Ygc2NyZWVuc2hvdCdcbiAgICAgICAgICBkZXNjcmlwdGlvbj0nQWR2YW5jZWQgUmVhY3Qgd2ViIGFwcCBidWlsdCBmb3IgYVxuICAgICAgICAgICAgICBwaG90b2dyYXBoZXIgdG8gaGVscCBjbGllbnRzIHNlbGVjdCBhbmQgY29tbWVudFxuICAgICAgICAgICAgICBwaG90b3MgYWZ0ZXIgYSBwaG90b3Nob290LidcbiAgICAgICAgICBidXR0b25zPXtbXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT0ncGhvdG9wcm9vZmdpdGh1YidcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9hcm5hc3Nhdmlja2FzL3Bob3RvcHJvb2YnXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAga2V5PSdwaG90b3Byb29mZGVtbydcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlbW9cbiAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICBdfVxuICAgICAgICAgIGljb249ezxQaG90b0xpYnJhcnlJY29uIGNvbG9yPSdwcmltYXJ5JyAvPn1cbiAgICAgICAgLz5cbiAgICAgICAgPFRpbWVsaW5lQ2FyZFxuICAgICAgICAgIGRhdGU9JzAzLTIwMjEnXG4gICAgICAgICAgdGl0bGU9J2FpcmlkZWEubHQnXG4gICAgICAgICAgc3ViSGVhZGVyPSdXb3JkcHJlc3MsIGN1c3RvbSBTRU8sIGNvbnRlbnQgY3JlYXRpb24nXG4gICAgICAgICAgaW1hZ2U9Jy9pbWFnZXMvYWlyaWRlYS5qcGcnXG4gICAgICAgICAgaW1hZ2VUaXRsZT0nQWlyaWRlYS5sdCBzY3JlZW5zaG90J1xuICAgICAgICAgIGRlc2NyaXB0aW9uPSdDb21wYW554oCZcyB3ZWJzaXRlIHRvIHByb3ZpZGUgZGV0YWlsc1xuICAgICAgICAgIG9mIHN1cHBsaWVkIHByb2R1Y3RzIGFuZCBlcXVpcG1lbnQgZm9yIHByaW50aW5nIGhvdXNlcy4nXG4gICAgICAgICAgYnV0dG9ucz17W1xuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9J2FpcmlkZWFkZW1vJ1xuICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgaHJlZj0naHR0cDovL2FpcmlkZWEubHQvJ1xuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTGl2ZSBzaXRlXG4gICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgXX1cbiAgICAgICAgICBpY29uPXs8V29ya0ljb24gY29sb3I9J3ByaW1hcnknIC8+fVxuICAgICAgICAvPlxuICAgICAgICA8VGltZWxpbmVDYXJkXG4gICAgICAgICAgZGF0ZT0nMDEtMjAyMSdcbiAgICAgICAgICB0aXRsZT0nTGV0dGVyaGVhZCdcbiAgICAgICAgICBzdWJIZWFkZXI9J1JlYWN0J1xuICAgICAgICAgIGltYWdlPScvaW1hZ2VzL2xldHRlcmhlYWQuanBnJ1xuICAgICAgICAgIGltYWdlVGl0bGU9J0xldHRlcmhlYWQgc2NyZWVuc2hvdCdcbiAgICAgICAgICBkZXNjcmlwdGlvbj0nRWFzeS10by11c2UgUmVhY3Qgd2ViIGFwcCB0byBhcHBseSBhXG4gICAgICAgICAgY29tcGFueeKAmXMgbGV0dGVyaGVhZCB0byBhIHBkZiBmaWxlLidcbiAgICAgICAgICBidXR0b25zPXtbXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT0nbGV0dGVyaGVhZGdpdGh1YidcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9hcm5hc3Nhdmlja2FzL2xldHRlcmhlYWQtcGRmJ1xuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT0nbGV0dGVyaGVhZGRlbW8nXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2xldHRlcmhlYWQuYXJuYXNzYXZpY2thcy5sdC8nXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZW1vXG4gICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgXX1cbiAgICAgICAgICBpY29uPXs8UGljdHVyZUFzUGRmSWNvbiBjb2xvcj0ncHJpbWFyeScgLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxUaW1lbGluZUNhcmRcbiAgICAgICAgICBkYXRlPScwMy0yMDIwJ1xuICAgICAgICAgIHRpdGxlPSdrYXJvbGluYXZhaXRvbnl0ZS5sdCdcbiAgICAgICAgICBzdWJIZWFkZXI9J1dvcmRwcmVzcywgY3VzdG9tIFNFTydcbiAgICAgICAgICBpbWFnZT0nL3Rlc3QuanBnJ1xuICAgICAgICAgIGltYWdlVGl0bGU9J0xldHRlcmhlYWQgc2NyZWVuc2hvdCdcbiAgICAgICAgICBkZXNjcmlwdGlvbj0nUHJvZmVzc2lvbmFsIHBob3RvZ3JhcGhlcuKAmXMgd2Vic2l0ZVxuICAgICAgICAgIHRvIHNob3djYXNlIHdvcmtzIGFuZCBkZWxpdmVyIGZpbmlzaGVkIHBob3Rvc2hvb3RzIHRvIGNsaWVudHMuJ1xuICAgICAgICAgIGJ1dHRvbnM9e1tcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAga2V5PSdsZXR0ZXJoZWFkZGVtbydcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lmthcm9saW5hdmFpdG9ueXRlLmx0LydcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExpdmUgc2l0ZVxuICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgIF19XG4gICAgICAgICAgaWNvbj17PFBob3RvQ2FtZXJhSWNvbiBjb2xvcj0ncHJpbWFyeScgLz59XG4gICAgICAgICAgaW1hZ2VQcm9wcz17W119XG4gICAgICAgIC8+XG4gICAgICA8L1RpbWVsaW5lPlxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdhbGVydC1kaWFsb2ctdGl0bGUnXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9J2FsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvbidcbiAgICAgID5cbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPSdhbGVydC1kaWFsb2ctdGl0bGUnPnsnRGVtbyBpcyBwcml2YXRlJ308L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQgaWQ9J2FsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgICBBdCB0aGlzIG1vbWVudCwgUGhvdG9wcm9vZiBpcyBkZXZlbG9wZWQgZm9yIGN1c3RvbSB1c2FnZSBvbmx5LCB0aHVzXG4gICAgICAgICAgICBkZW1vIGxpbmsgY2FuIG9ubHkgYmUgcHJvdmlkZWQgaW4gcHJpdmF0ZS5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD0nYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIElmIEkgaGF2ZSBjb250YWN0ZWQgeW91LCB0aGVyZSBzaG91bGQgYmUgZGVtbyBpbnN0cnVjdGlvbnMgYXR0YWNoZWQuXG4gICAgICAgICAgICBPdGhlcndpc2UsIHlvdSBjYW4gY29udGFjdCBtZSwgYW5kIHdpbGwgZ2xhZGx5IHNoYXJlIGl0IHdpdGggeW91LlxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gY29sb3I9J3ByaW1hcnknIGF1dG9Gb2N1cz5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=