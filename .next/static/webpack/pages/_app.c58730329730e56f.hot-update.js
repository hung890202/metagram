"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SidebarStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarStyles */ \"./components/SidebarStyles.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/h892a/Desktop/mategram/metagram/components/Sidebar.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar DropDown = function DropDown(_ref) {\n  var isOpen = _ref.isOpen,\n      toggle = _ref.toggle;\n\n  var ContactUs = function ContactUs(e) {\n    e.preventDefault();\n    window.open(\"https://www.instagram.com/astn.0820_/\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: !isOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarStyles__WEBPACK_IMPORTED_MODULE_1__.StyledSidebar, {\n      initial: {\n        y: -500\n      },\n      animate: {\n        y: 0\n      },\n      transition: {\n        duration: 1\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SidebarStyles__WEBPACK_IMPORTED_MODULE_1__.CloseBtn, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleUp,\n          onClick: toggle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, false)\n  }, void 0, false);\n};\n\n_c = DropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDown);\n\nvar _c;\n\n$RefreshReg$(_c, \"DropDown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7Ozs7QUFLQSxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF3QjtBQUFBLE1BQXJCQyxNQUFxQixRQUFyQkEsTUFBcUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBRXZDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHVDQUFaO0FBQ0QsR0FIRDs7QUFLQSxzQkFDSTtBQUFBLGNBQ0MsQ0FBQ04sTUFBRCxnQkFDSyw4REFBQyx5REFBRDtBQUNBLGFBQU8sRUFBRTtBQUFFTyxRQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFOLE9BRFQ7QUFFQSxhQUFPLEVBQUU7QUFBRUEsUUFBQUEsQ0FBQyxFQUFFO0FBQUwsT0FGVDtBQUdBLGdCQUFVLEVBQUU7QUFBRUMsUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FIWjtBQUFBLDZCQUtJLDhEQUFDLG9EQUFEO0FBQUEsK0JBQ0EsOERBQUMsMkVBQUQ7QUFBaUIsY0FBSSxFQUFFVix3RUFBdkI7QUFBa0MsaUJBQU8sRUFBRUc7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREwsZ0JBV0g7QUFaRSxtQkFESjtBQWtCRCxDQXpCRDs7S0FBTUY7QUEwQk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzPzNkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgXG4gICAgU3R5bGVkU2lkZWJhcixcbiAgICBDbG9zZUJ0blxuIH0gZnJvbSBcIi4vU2lkZWJhclN0eWxlc1wiO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFuZ2xlVXAgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cblxuXG5cbmNvbnN0IERyb3BEb3duID0gKHsgaXNPcGVuLCB0b2dnbGUgfSkgPT4ge1xuXG4gIGNvbnN0IENvbnRhY3RVcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hc3RuLjA4MjBfL1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHshaXNPcGVuID8gKFxuICAgICAgICAgICAgPFN0eWxlZFNpZGViYXJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogLTUwMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENsb3NlQnRuPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBbmdsZVVwfSBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgICAgICAgICAgPC9DbG9zZUJ0bj5cbiAgICAgICAgICAgIDwvU3R5bGVkU2lkZWJhcj5cbiAgICApOihcbiAgICA8PlxuICAgIDwvPlxuICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRHJvcERvd247XG4iXSwibmFtZXMiOlsiTGluayIsIlN0eWxlZFNpZGViYXIiLCJDbG9zZUJ0biIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQW5nbGVVcCIsIkRyb3BEb3duIiwiaXNPcGVuIiwidG9nZ2xlIiwiQ29udGFjdFVzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwib3BlbiIsInkiLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});