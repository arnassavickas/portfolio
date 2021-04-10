webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CardImage/CardImage.module.scss":
/*!****************************************************!*\
  !*** ./components/CardImage/CardImage.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./CardImage.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/CardImage/CardImage.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./CardImage.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/CardImage/CardImage.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./CardImage.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/CardImage/CardImage.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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



var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\TimelineSection\\CardImage\\CardImage.tsx",
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
      buttons = _ref.buttons;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: title,
      subheader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.date,
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this), subHeader]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
      classes: {
        root: _CardImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image
      },
      image: image,
      title: imageTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "body2",
        component: "p",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
      children: buttons
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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

/***/ "./components/ProjectsSection/CardImage/CardImage.module.scss":
false,

/***/ "./components/ProjectsSection/CardImage/CardImage.tsx":
false,

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
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
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
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
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
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
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
        image: "/images/karolinavaitonyte.jpg",
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
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, _this)
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
        lineNumber: 131,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "alert-dialog-description",
          children: "At this moment, Photoproof is developed for custom usage only, thus demo link can only be provided in private."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "alert-dialog-description",
          children: "If I have contacted you, there should be demo instructions attached. Otherwise, you can contact me, and will gladly share it with you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
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
          lineNumber: 143,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
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

/***/ }),

/***/ "./components/ProjectsSection/TimelineCard/TimelineCard.tsx":
false,

/***/ "./components/TimelineCard/TimelineCard.tsx":
/*!**************************************************!*\
  !*** ./components/TimelineCard/TimelineCard.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/index.js");
/* harmony import */ var _material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/TimelineSeparator */ "./node_modules/@material-ui/lab/esm/TimelineSeparator/index.js");
/* harmony import */ var _material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/TimelineConnector */ "./node_modules/@material-ui/lab/esm/TimelineConnector/index.js");
/* harmony import */ var _material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/TimelineContent */ "./node_modules/@material-ui/lab/esm/TimelineContent/index.js");
/* harmony import */ var _material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/TimelineOppositeContent */ "./node_modules/@material-ui/lab/esm/TimelineOppositeContent/index.js");
/* harmony import */ var _material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/TimelineDot */ "./node_modules/@material-ui/lab/esm/TimelineDot/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _CardImage_CardImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CardImage/CardImage */ "./components/CardImage/CardImage.tsx");


var _jsxFileName = "D:\\Projektai\\arnassavickas\\components\\TimelineSection\\TimelineCard\\TimelineCard.tsx",
    _this = undefined;







 //import styles from './TimelineItem.module.scss';



var TimelineCard = function TimelineCard(_ref) {
  var date = _ref.date,
      title = _ref.title,
      subHeader = _ref.subHeader,
      image = _ref.image,
      imageTitle = _ref.imageTitle,
      description = _ref.description,
      buttons = _ref.buttons,
      icon = _ref.icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h6",
        color: "textSecondary",
        children: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CardImage_CardImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        date: date,
        title: title,
        subHeader: subHeader,
        image: image,
        imageTitle: imageTitle,
        description: description,
        buttons: buttons
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_c = TimelineCard;
/* harmony default export */ __webpack_exports__["default"] = (TimelineCard);

var _c;

$RefreshReg$(_c, "TimelineCard");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/CardImage/CardImage.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/CardImage/CardImage.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".CardImage_image__MaVeW {\n  object-fit: contain;\n  aspect-ratio: 1;\n  background-size: contain;\n}\n\n.CardImage_date__1ts0A {\n  display: none;\n  color: black;\n}\n@media (max-width: 780px) {\n  .CardImage_date__1ts0A {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://CardImage.module.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,eAAA;EACA,wBAAA;AACF;;AAEA;EACE,aAAA;EAIA,YAAA;AAFF;AADE;EAFF;IAGI,cAAA;EAIF;AACF","sourcesContent":[".image {\n  object-fit: contain;\n  aspect-ratio: 1;\n  background-size: contain;\n}\n\n.date {\n  display: none;\n  @media (max-width: 780px) {\n    display: block;\n  }\n  color: black;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"image": "CardImage_image__MaVeW",
	"date": "CardImage_date__1ts0A"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/ProjectsSection/CardImage/CardImage.module.scss":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLm1vZHVsZS5zY3NzP2ZiY2MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGltZWxpbmVTZWN0aW9uL0NhcmRJbWFnZS9DYXJkSW1hZ2UudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi9Qcm9qZWN0c1NlY3Rpb24udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RpbWVsaW5lU2VjdGlvbi9UaW1lbGluZUNhcmQvVGltZWxpbmVDYXJkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2UvQ2FyZEltYWdlLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIkNhcmRJbWFnZSIsInRpdGxlIiwiZGF0ZSIsInN1YkhlYWRlciIsImltYWdlIiwiaW1hZ2VUaXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsInN0eWxlcyIsInJvb3QiLCJQcm9qZWN0c1NlY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJzZWN0aW9uIiwiVGltZWxpbmVDYXJkIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLHNOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQywrbEJBQWtWOztBQUVwWDs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSwrbEJB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QixrQkFBa0IsaUJBQWlCLEdBQUcsNkJBQTZCLDRCQUE0QixxQkFBcUIsS0FBSyxHQUFHLE9BQU8sc0ZBQXNGLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLGlDQUFpQyx3QkFBd0Isb0JBQW9CLDZCQUE2QixHQUFHLFdBQVcsa0JBQWtCLCtCQUErQixxQkFBcUIsS0FBSyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFDN3NCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YjAzYThjYmE1YWViNzY3YTNiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9DYXJkSW1hZ2UubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NhcmRJbWFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NhcmRJbWFnZS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmRJbWFnZS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlcic7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDYXJkQWN0aW9ucyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW50ZXJmYWNlIENhcmRJbWFnZVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBzdWJIZWFkZXI6IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGltYWdlVGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGJ1dHRvbnM6IFJlYWN0LlJlYWN0Tm9kZVtdO1xufVxuLy9UT0RPIGRvZXNuJ3QgZml0IG9uIG1vYmlsZVxuLy9UT0RPIGFkZCBkYXRlIG9uIG1vYmlsZVxuY29uc3QgQ2FyZEltYWdlOiBSZWFjdC5GQzxDYXJkSW1hZ2VQcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgZGF0ZSxcbiAgc3ViSGVhZGVyLFxuICBpbWFnZSxcbiAgaW1hZ2VUaXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGJ1dHRvbnMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZEhlYWRlclxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHN1YmhlYWRlcj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAge3N1YkhlYWRlcn1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IHN0eWxlcy5pbWFnZSB9fVxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICB0aXRsZT17aW1hZ2VUaXRsZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIGNvbXBvbmVudD0ncCc+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zPntidXR0b25zfTwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEltYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9qZWN0c1NlY3Rpb24ubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZSc7XG5pbXBvcnQgUGhvdG9DYW1lcmFJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XG5pbXBvcnQgUGljdHVyZUFzUGRmSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGljdHVyZUFzUGRmJztcbmltcG9ydCBXb3JrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV29yayc7XG5pbXBvcnQgUGhvdG9MaWJyYXJ5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9MaWJyYXJ5JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuXG5pbXBvcnQgVGltZWxpbmVDYXJkIGZyb20gJy4uL1RpbWVsaW5lQ2FyZC9UaW1lbGluZUNhcmQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCBQcm9qZWN0c1NlY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD0ndGltZWxpbmUnIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDInPlxuICAgICAgICBQcm9qZWN0c1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFRpbWVsaW5lIGFsaWduPSdhbHRlcm5hdGUnPlxuICAgICAgICA8VGltZWxpbmVDYXJkXG4gICAgICAgICAgZGF0ZT0nMDItMjAyMSAtIFByZXNlbnQnXG4gICAgICAgICAgdGl0bGU9J1Bob3RvcHJvb2YnXG4gICAgICAgICAgc3ViSGVhZGVyPSdSZWFjdCwgRmlyZWJhc2UsIE1hdGVyaWFsLVVJJ1xuICAgICAgICAgIGltYWdlPScvaW1hZ2VzL3Bob3RvcHJvb2YuanBnJ1xuICAgICAgICAgIGltYWdlVGl0bGU9J1Bob3RvcHJvb2Ygc2NyZWVuc2hvdCdcbiAgICAgICAgICBkZXNjcmlwdGlvbj0nQWR2YW5jZWQgUmVhY3Qgd2ViIGFwcCBidWlsdCBmb3IgYVxuICAgICAgICAgICAgICBwaG90b2dyYXBoZXIgdG8gaGVscCBjbGllbnRzIHNlbGVjdCBhbmQgY29tbWVudFxuICAgICAgICAgICAgICBwaG90b3MgYWZ0ZXIgYSBwaG90b3Nob290LidcbiAgICAgICAgICBidXR0b25zPXtbXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT0ncGhvdG9wcm9vZmdpdGh1YidcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9hcm5hc3Nhdmlja2FzL3Bob3RvcHJvb2YnXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAga2V5PSdwaG90b3Byb29mZGVtbydcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlbW9cbiAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICBdfVxuICAgICAgICAgIGljb249ezxQaG90b0xpYnJhcnlJY29uIC8+fVxuICAgICAgICAvPlxuICAgICAgICA8VGltZWxpbmVDYXJkXG4gICAgICAgICAgZGF0ZT0nMDMtMjAyMSdcbiAgICAgICAgICB0aXRsZT0nYWlyaWRlYS5sdCdcbiAgICAgICAgICBzdWJIZWFkZXI9J1dvcmRwcmVzcywgY3VzdG9tIFNFTywgY29udGVudCBjcmVhdGlvbidcbiAgICAgICAgICBpbWFnZT0nL2ltYWdlcy9haXJpZGVhLmpwZydcbiAgICAgICAgICBpbWFnZVRpdGxlPSdBaXJpZGVhLmx0IHNjcmVlbnNob3QnXG4gICAgICAgICAgZGVzY3JpcHRpb249J0NvbXBhbnnigJlzIHdlYnNpdGUgdG8gcHJvdmlkZSBkZXRhaWxzXG4gICAgICAgICAgb2Ygc3VwcGxpZWQgcHJvZHVjdHMgYW5kIGVxdWlwbWVudCBmb3IgcHJpbnRpbmcgaG91c2VzLidcbiAgICAgICAgICBidXR0b25zPXtbXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT0nYWlyaWRlYWRlbW8nXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwOi8vYWlyaWRlYS5sdC8nXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMaXZlIHNpdGVcbiAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICBdfVxuICAgICAgICAgIGljb249ezxXb3JrSWNvbiAvPn1cbiAgICAgICAgLz5cbiAgICAgICAgPFRpbWVsaW5lQ2FyZFxuICAgICAgICAgIGRhdGU9JzAxLTIwMjEnXG4gICAgICAgICAgdGl0bGU9J0xldHRlcmhlYWQnXG4gICAgICAgICAgc3ViSGVhZGVyPSdSZWFjdCdcbiAgICAgICAgICBpbWFnZT0nL2ltYWdlcy9sZXR0ZXJoZWFkLmpwZydcbiAgICAgICAgICBpbWFnZVRpdGxlPSdMZXR0ZXJoZWFkIHNjcmVlbnNob3QnXG4gICAgICAgICAgZGVzY3JpcHRpb249J0Vhc3ktdG8tdXNlIFJlYWN0IHdlYiBhcHAgdG8gYXBwbHkgYVxuICAgICAgICAgIGNvbXBhbnnigJlzIGxldHRlcmhlYWQgdG8gYSBwZGYgZmlsZS4nXG4gICAgICAgICAgYnV0dG9ucz17W1xuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9J2xldHRlcmhlYWRnaXRodWInXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYXJuYXNzYXZpY2thcy9sZXR0ZXJoZWFkLXBkZidcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9J2xldHRlcmhlYWRkZW1vJ1xuICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9sZXR0ZXJoZWFkLmFybmFzc2F2aWNrYXMubHQvJ1xuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVtb1xuICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgIF19XG4gICAgICAgICAgaWNvbj17PFBpY3R1cmVBc1BkZkljb24gLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxUaW1lbGluZUNhcmRcbiAgICAgICAgICBkYXRlPScwMy0yMDIwJ1xuICAgICAgICAgIHRpdGxlPSdrYXJvbGluYXZhaXRvbnl0ZS5sdCdcbiAgICAgICAgICBzdWJIZWFkZXI9J1dvcmRwcmVzcywgY3VzdG9tIFNFTydcbiAgICAgICAgICBpbWFnZT0nL2ltYWdlcy9rYXJvbGluYXZhaXRvbnl0ZS5qcGcnXG4gICAgICAgICAgaW1hZ2VUaXRsZT0nTGV0dGVyaGVhZCBzY3JlZW5zaG90J1xuICAgICAgICAgIGRlc2NyaXB0aW9uPSdQcm9mZXNzaW9uYWwgcGhvdG9ncmFwaGVy4oCZcyB3ZWJzaXRlXG4gICAgICAgICAgdG8gc2hvd2Nhc2Ugd29ya3MgYW5kIGRlbGl2ZXIgZmluaXNoZWQgcGhvdG9zaG9vdHMgdG8gY2xpZW50cy4nXG4gICAgICAgICAgYnV0dG9ucz17W1xuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9J2xldHRlcmhlYWRkZW1vJ1xuICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cua2Fyb2xpbmF2YWl0b255dGUubHQvJ1xuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTGl2ZSBzaXRlXG4gICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgXX1cbiAgICAgICAgICBpY29uPXs8UGhvdG9DYW1lcmFJY29uIC8+fVxuICAgICAgICAvPlxuICAgICAgPC9UaW1lbGluZT5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT0nYWxlcnQtZGlhbG9nLXRpdGxlJ1xuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSdhbGVydC1kaWFsb2ctZGVzY3JpcHRpb24nXG4gICAgICA+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD0nYWxlcnQtZGlhbG9nLXRpdGxlJz57J0RlbW8gaXMgcHJpdmF0ZSd9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPSdhbGVydC1kaWFsb2ctZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgQXQgdGhpcyBtb21lbnQsIFBob3RvcHJvb2YgaXMgZGV2ZWxvcGVkIGZvciBjdXN0b20gdXNhZ2Ugb25seSwgdGh1c1xuICAgICAgICAgICAgZGVtbyBsaW5rIGNhbiBvbmx5IGJlIHByb3ZpZGVkIGluIHByaXZhdGUuXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQgaWQ9J2FsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgICBJZiBJIGhhdmUgY29udGFjdGVkIHlvdSwgdGhlcmUgc2hvdWxkIGJlIGRlbW8gaW5zdHJ1Y3Rpb25zIGF0dGFjaGVkLlxuICAgICAgICAgICAgT3RoZXJ3aXNlLCB5b3UgY2FuIGNvbnRhY3QgbWUsIGFuZCB3aWxsIGdsYWRseSBzaGFyZSBpdCB3aXRoIHlvdS5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IGNvbG9yPSdwcmltYXJ5JyBhdXRvRm9jdXM+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247XG4iLCJpbXBvcnQgVGltZWxpbmVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVJdGVtJztcbmltcG9ydCBUaW1lbGluZVNlcGFyYXRvciBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lU2VwYXJhdG9yJztcbmltcG9ydCBUaW1lbGluZUNvbm5lY3RvciBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lQ29ubmVjdG9yJztcbmltcG9ydCBUaW1lbGluZUNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUNvbnRlbnQnO1xuaW1wb3J0IFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQnO1xuaW1wb3J0IFRpbWVsaW5lRG90IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVEb3QnO1xuXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5Jztcbi8vaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RpbWVsaW5lSXRlbS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBDYXJkSW1hZ2UgZnJvbSAnLi4vQ2FyZEltYWdlL0NhcmRJbWFnZSc7XG5cbmludGVyZmFjZSBUaW1lbGluZUNhcmRQcm9wcyB7XG4gIGRhdGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3ViSGVhZGVyOiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBpbWFnZVRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBidXR0b25zOiBSZWFjdC5SZWFjdE5vZGVbXTtcbiAgaWNvbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBUaW1lbGluZUNhcmQ6IFJlYWN0LkZDPFRpbWVsaW5lQ2FyZFByb3BzPiA9ICh7XG4gIGRhdGUsXG4gIHRpdGxlLFxuICBzdWJIZWFkZXIsXG4gIGltYWdlLFxuICBpbWFnZVRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYnV0dG9ucyxcbiAgaWNvbixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGltZWxpbmVJdGVtPlxuICAgICAgPFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29sb3I9J3RleHRTZWNvbmRhcnknPlxuICAgICAgICAgIHtkYXRlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1RpbWVsaW5lT3Bwb3NpdGVDb250ZW50PlxuICAgICAgPFRpbWVsaW5lU2VwYXJhdG9yPlxuICAgICAgICA8VGltZWxpbmVEb3Q+e2ljb259PC9UaW1lbGluZURvdD5cbiAgICAgICAgPFRpbWVsaW5lQ29ubmVjdG9yIC8+XG4gICAgICA8L1RpbWVsaW5lU2VwYXJhdG9yPlxuICAgICAgPFRpbWVsaW5lQ29udGVudD5cbiAgICAgICAgPENhcmRJbWFnZVxuICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YkhlYWRlcj17c3ViSGVhZGVyfVxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICBpbWFnZVRpdGxlPXtpbWFnZVRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBidXR0b25zPXtidXR0b25zfVxuICAgICAgICAvPlxuICAgICAgPC9UaW1lbGluZUNvbnRlbnQ+XG4gICAgPC9UaW1lbGluZUl0ZW0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUNhcmQ7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ2FyZEltYWdlX2ltYWdlX19NYVZlVyB7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uQ2FyZEltYWdlX2RhdGVfXzF0czBBIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xcbiAgLkNhcmRJbWFnZV9kYXRlX18xdHMwQSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQ2FyZEltYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFJQSxZQUFBO0FBRkY7QUFERTtFQUZGO0lBR0ksY0FBQTtFQUlGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmltYWdlIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5kYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImltYWdlXCI6IFwiQ2FyZEltYWdlX2ltYWdlX19NYVZlV1wiLFxuXHRcImRhdGVcIjogXCJDYXJkSW1hZ2VfZGF0ZV9fMXRzMEFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9