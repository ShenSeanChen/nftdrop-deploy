/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshenseanchen%2FDesktop%2FFull-Stack-Deploy%2FnftDrop-Deploy%2Fpages%2Findex.tsx&page=%2F!":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshenseanchen%2FDesktop%2FFull-Stack-Deploy%2FnftDrop-Deploy%2Fpages%2Findex.tsx&page=%2F! ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnNoZW5zZWFuY2hlbiUyRkRlc2t0b3AlMkZGdWxsLVN0YWNrLURlcGxveSUyRm5mdERyb3AtRGVwbG95JTJGcGFnZXMlMkZpbmRleC50c3gmcGFnZT0lMkYhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQW1CO0FBQzFDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9jYWYwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshenseanchen%2FDesktop%2FFull-Stack-Deploy%2FnftDrop-Deploy%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Home = ()=>{\n    // 1. search: tailwind nextjs -> https://v2.tailwindcss.com/docs/guides/nextjs\n    // -> npx create-next-app -e with-tailwindcss nftdrop-deploy\n    // index.tsx is the home page; _app.tsx is the starting point\n    // TailwindCSS is mobile first, meaning everything fits to the smallest screen first -> only applies to big screen sizes if we apply 'break points'\n    // Exp for break points: className = \"lg:h-96 lg:w-72\" --> responsive design\n    // 2. docs.thirdweb.com/react\n    // 3. git remote -v --> check if the git repo is the right one. If not --> git remote remove origin\n    // Use the create new branch option instead of adding to existing folder option when creating new repo\n    // -> git remote add origin https://github.com/shenseanchen/nftDrop-deploy.git\n    // if you get error config bad config option: userkeychain -> open ~/.ssh/config -> https://www.unixtutorial.org/ssh-bad-configuration-option-usekeychain/\n    // -> git remote set-url origin https://github.com/<user_name>/<repo_name>.git\n    // https://stackoverflow.com/questions/30068298/git-fatal-could-not-read-from-remote-repository-please-make-sure-you-have-th \n    // 3. Create a folder called nft under pages and add in [id].tsx for NFTDROP collections\n    // 4. Responsive design ([id].tsx): \n    // -> lg:h-96 lg:w-72\n    // -> flex on mobile(default) screen and grid on large screen: flex h-screen flex-col lg:grid lg:grid-cols-10\n    // -> make one div to take up 4 columns in large screen: lg:col-span-4 \n    // Space out components b/w each other -> justify-between\n    // use up as much room as possible in a flex box -> flex flex-1\n    // add horizontal line: <hr />\n    // 5. thirdweb: docs.thirdweb.com/react\n    // -> npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers\n    // Use thirdweb as a higher order component to wrap my entire app within a provider (just like redux)\n    // Anything inside the app can tap into what thirdweb has to offer\n    // Need to go back to our starting point -> _app.tsx\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"NFT Drop\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shenseanchen/Desktop/Full-Stack-Deploy/nftDrop-Deploy/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shenseanchen/Desktop/Full-Stack-Deploy/nftDrop-Deploy/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shenseanchen/Desktop/Full-Stack-Deploy/nftDrop-Deploy/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-red-500 text-4-xl\",\n                children: \"Welcome to Web 3.0!\"\n            }, void 0, false, {\n                fileName: \"/Users/shenseanchen/Desktop/Full-Stack-Deploy/nftDrop-Deploy/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shenseanchen/Desktop/Full-Stack-Deploy/nftDrop-Deploy/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUM0QjtBQUc1QixNQUFNQyxPQUFpQixJQUFNO0lBRTNCLDhFQUE4RTtJQUN4RSw0REFBNEQ7SUFDNUQsNkRBQTZEO0lBQzdELG1KQUFtSjtJQUNuSiw0RUFBNEU7SUFDbEYsNkJBQTZCO0lBQzdCLG1HQUFtRztJQUM3RixzR0FBc0c7SUFDdEcsOEVBQThFO0lBQzlFLDBKQUEwSjtJQUMxSiw4RUFBOEU7SUFDMUUsNkhBQTZIO0lBQ3ZJLHdGQUF3RjtJQUN4RixvQ0FBb0M7SUFDOUIscUJBQXFCO0lBQ3JCLDZHQUE2RztJQUM3Ryx1RUFBdUU7SUFDdkUseURBQXlEO0lBQ3pELCtEQUErRDtJQUMvRCw4QkFBOEI7SUFDbEMsdUNBQXVDO0lBQ25DLDhEQUE4RDtJQUM5RCxxR0FBcUc7SUFDckcsa0VBQWtFO0lBQ2xFLG9EQUFvRDtJQUcxRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNILGtEQUFJQTs7a0NBQ0gsOERBQUNJO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFBR0wsV0FBVTswQkFBeUI7Ozs7Ozs7Ozs7OztBQUk3QztLQXhDTUY7QUEwQ04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgLy8gMS4gc2VhcmNoOiB0YWlsd2luZCBuZXh0anMgLT4gaHR0cHM6Ly92Mi50YWlsd2luZGNzcy5jb20vZG9jcy9ndWlkZXMvbmV4dGpzXG4gICAgICAgIC8vIC0+IG5weCBjcmVhdGUtbmV4dC1hcHAgLWUgd2l0aC10YWlsd2luZGNzcyBuZnRkcm9wLWRlcGxveVxuICAgICAgICAvLyBpbmRleC50c3ggaXMgdGhlIGhvbWUgcGFnZTsgX2FwcC50c3ggaXMgdGhlIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgIC8vIFRhaWx3aW5kQ1NTIGlzIG1vYmlsZSBmaXJzdCwgbWVhbmluZyBldmVyeXRoaW5nIGZpdHMgdG8gdGhlIHNtYWxsZXN0IHNjcmVlbiBmaXJzdCAtPiBvbmx5IGFwcGxpZXMgdG8gYmlnIHNjcmVlbiBzaXplcyBpZiB3ZSBhcHBseSAnYnJlYWsgcG9pbnRzJ1xuICAgICAgICAvLyBFeHAgZm9yIGJyZWFrIHBvaW50czogY2xhc3NOYW1lID0gXCJsZzpoLTk2IGxnOnctNzJcIiAtLT4gcmVzcG9uc2l2ZSBkZXNpZ25cbiAgLy8gMi4gZG9jcy50aGlyZHdlYi5jb20vcmVhY3RcbiAgLy8gMy4gZ2l0IHJlbW90ZSAtdiAtLT4gY2hlY2sgaWYgdGhlIGdpdCByZXBvIGlzIHRoZSByaWdodCBvbmUuIElmIG5vdCAtLT4gZ2l0IHJlbW90ZSByZW1vdmUgb3JpZ2luXG4gICAgICAgIC8vIFVzZSB0aGUgY3JlYXRlIG5ldyBicmFuY2ggb3B0aW9uIGluc3RlYWQgb2YgYWRkaW5nIHRvIGV4aXN0aW5nIGZvbGRlciBvcHRpb24gd2hlbiBjcmVhdGluZyBuZXcgcmVwb1xuICAgICAgICAvLyAtPiBnaXQgcmVtb3RlIGFkZCBvcmlnaW4gaHR0cHM6Ly9naXRodWIuY29tL3NoZW5zZWFuY2hlbi9uZnREcm9wLWRlcGxveS5naXRcbiAgICAgICAgLy8gaWYgeW91IGdldCBlcnJvciBjb25maWcgYmFkIGNvbmZpZyBvcHRpb246IHVzZXJrZXljaGFpbiAtPiBvcGVuIH4vLnNzaC9jb25maWcgLT4gaHR0cHM6Ly93d3cudW5peHR1dG9yaWFsLm9yZy9zc2gtYmFkLWNvbmZpZ3VyYXRpb24tb3B0aW9uLXVzZWtleWNoYWluL1xuICAgICAgICAvLyAtPiBnaXQgcmVtb3RlIHNldC11cmwgb3JpZ2luIGh0dHBzOi8vZ2l0aHViLmNvbS88dXNlcl9uYW1lPi88cmVwb19uYW1lPi5naXRcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMDY4Mjk4L2dpdC1mYXRhbC1jb3VsZC1ub3QtcmVhZC1mcm9tLXJlbW90ZS1yZXBvc2l0b3J5LXBsZWFzZS1tYWtlLXN1cmUteW91LWhhdmUtdGggXG4gIC8vIDMuIENyZWF0ZSBhIGZvbGRlciBjYWxsZWQgbmZ0IHVuZGVyIHBhZ2VzIGFuZCBhZGQgaW4gW2lkXS50c3ggZm9yIE5GVERST1AgY29sbGVjdGlvbnNcbiAgLy8gNC4gUmVzcG9uc2l2ZSBkZXNpZ24gKFtpZF0udHN4KTogXG4gICAgICAgIC8vIC0+IGxnOmgtOTYgbGc6dy03MlxuICAgICAgICAvLyAtPiBmbGV4IG9uIG1vYmlsZShkZWZhdWx0KSBzY3JlZW4gYW5kIGdyaWQgb24gbGFyZ2Ugc2NyZWVuOiBmbGV4IGgtc2NyZWVuIGZsZXgtY29sIGxnOmdyaWQgbGc6Z3JpZC1jb2xzLTEwXG4gICAgICAgIC8vIC0+IG1ha2Ugb25lIGRpdiB0byB0YWtlIHVwIDQgY29sdW1ucyBpbiBsYXJnZSBzY3JlZW46IGxnOmNvbC1zcGFuLTQgXG4gICAgICAgIC8vIFNwYWNlIG91dCBjb21wb25lbnRzIGIvdyBlYWNoIG90aGVyIC0+IGp1c3RpZnktYmV0d2VlblxuICAgICAgICAvLyB1c2UgdXAgYXMgbXVjaCByb29tIGFzIHBvc3NpYmxlIGluIGEgZmxleCBib3ggLT4gZmxleCBmbGV4LTFcbiAgICAgICAgLy8gYWRkIGhvcml6b250YWwgbGluZTogPGhyIC8+XG4gICAgLy8gNS4gdGhpcmR3ZWI6IGRvY3MudGhpcmR3ZWIuY29tL3JlYWN0XG4gICAgICAgIC8vIC0+IG5wbSBpbnN0YWxsIEB0aGlyZHdlYi1kZXYvcmVhY3QgQHRoaXJkd2ViLWRldi9zZGsgZXRoZXJzXG4gICAgICAgIC8vIFVzZSB0aGlyZHdlYiBhcyBhIGhpZ2hlciBvcmRlciBjb21wb25lbnQgdG8gd3JhcCBteSBlbnRpcmUgYXBwIHdpdGhpbiBhIHByb3ZpZGVyIChqdXN0IGxpa2UgcmVkdXgpXG4gICAgICAgIC8vIEFueXRoaW5nIGluc2lkZSB0aGUgYXBwIGNhbiB0YXAgaW50byB3aGF0IHRoaXJkd2ViIGhhcyB0byBvZmZlclxuICAgICAgICAvLyBOZWVkIHRvIGdvIGJhY2sgdG8gb3VyIHN0YXJ0aW5nIHBvaW50IC0+IF9hcHAudHN4XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5GVCBEcm9wPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiBcbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1yZWQtNTAwIHRleHQtNC14bCc+V2VsY29tZSB0byBXZWIgMy4wITwvaDE+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshenseanchen%2FDesktop%2FFull-Stack-Deploy%2FnftDrop-Deploy%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);