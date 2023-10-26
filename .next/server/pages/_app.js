/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__]);\n_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/_app.tsx\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.documentElement.classList.add(\"dark\");\n        const handleStart = ()=>{\n            // Show the loading bar when a route change starts\n            setLoading(true);\n        };\n        const handleComplete = ()=>{\n            // Hide the loading bar when a route change is complete\n            setLoading(false);\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NextUIProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            children: [\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                    isOpen: loading,\n                    hideCloseButton: true,\n                    isDismissable: false,\n                    style: {\n                        width: \"90px\",\n                        height: \"90px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, {\n                                color: \"primary\",\n                                size: \"large\",\n                                className: \"fixed top-0 left-0 z-50 w-screen h-screen\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"min-h-screen retro-vibes text-foreground bg-background\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                    children: \"Urlcut\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"title\",\n                                    content: \"Urlcut - Shorten Your Links.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"description\",\n                                    content: \"Quick, easy, and free URL shortener.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:title\",\n                                    content: \"Urlcut - Shorten Your Links\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:description\",\n                                    content: \"Quick, easy, and free URL shortener.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:image\",\n                                    content: \"https://storage.tally.so/e62ccd35-f7cc-41a0-884a-722b3b7bfe7a/Urlcut.png\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    property: \"og:url\",\n                                    content: \"https://urlcut.app/\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:card\",\n                                    content: \"summary_large_image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:title\",\n                                    content: \"Urlcut - Shorten Your Links\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:description\",\n                                    content: \"Quick, easy, and free URL shortener.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"twitter:image\",\n                                    content: \"https://urlcut.app/assets/twitter-card.png\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"author\",\n                                    content: \"Urlcut\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                    name: \"keywords\",\n                                    content: \"URL shortener, link shortener, shorten URLs\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fuzzb\\\\Documents\\\\New folder\\\\viewer\\\\viewer\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQjs7QUFDYztBQUNvQjtBQVN4QjtBQUMyQztBQUNKO0FBQ3JDO0FBQ1c7QUFFekIsU0FBU2lCLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNb0IsU0FBU04sc0RBQVNBO0lBRXhCZixnREFBU0EsQ0FBQztRQUNSc0IsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUN2QyxNQUFNQyxjQUFjO1lBQ2xCLGtEQUFrRDtZQUNsRE4sV0FBVztRQUNiO1FBRUEsTUFBTU8saUJBQWlCO1lBQ3JCLHVEQUF1RDtZQUN2RFAsV0FBVztRQUNiO1FBRUFDLE9BQU9PLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQkg7UUFDckNMLE9BQU9PLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QkY7UUFDeENOLE9BQU9PLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQkY7UUFFckMsT0FBTztZQUNMTixPQUFPTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0JKO1lBQ3RDTCxPQUFPTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJIO1lBQ3pDTixPQUFPTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0JIO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNsQiw2REFBY0E7a0JBQ2IsNEVBQUNJLHNEQUFrQkE7O2dCQUNoQk0sd0JBQ0MsOERBQUNqQixvREFBS0E7b0JBQ0o2QixRQUFRWjtvQkFDUmEsZUFBZTtvQkFDZkMsZUFBZTtvQkFDZkMsT0FBTzt3QkFBRUMsT0FBTzt3QkFBUUMsUUFBUTtvQkFBTzs4QkFFdkMsNEVBQUNqQywyREFBWUE7a0NBQ1gsNEVBQUNFLHdEQUFTQTtzQ0FDUiw0RUFBQ00sc0RBQU9BO2dDQUNOMEIsT0FBTTtnQ0FDTkMsTUFBSztnQ0FDTEMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBS2hCOzhCQUNKLDhEQUFDQztvQkFBS0QsV0FBVTs7c0NBQ2QsOERBQUN6QixrREFBSUE7OzhDQUNILDhEQUFDMkI7OENBQU07Ozs7Ozs4Q0FDUCw4REFBQ0M7b0NBQUtDLE1BQUs7b0NBQVFDLFNBQVE7Ozs7Ozs4Q0FDM0IsOERBQUNGO29DQUNDQyxNQUFLO29DQUNMQyxTQUFROzs7Ozs7OENBSVYsOERBQUNGO29DQUFLRyxVQUFTO29DQUFXRCxTQUFROzs7Ozs7OENBQ2xDLDhEQUFDRjtvQ0FDQ0csVUFBUztvQ0FDVEQsU0FBUTs7Ozs7OzhDQUVWLDhEQUFDRjtvQ0FDQ0csVUFBUztvQ0FDVEQsU0FBUTs7Ozs7OzhDQUVWLDhEQUFDRjtvQ0FBS0csVUFBUztvQ0FBU0QsU0FBUTs7Ozs7OzhDQUdoQyw4REFBQ0Y7b0NBQUtDLE1BQUs7b0NBQWVDLFNBQVE7Ozs7Ozs4Q0FDbEMsOERBQUNGO29DQUFLQyxNQUFLO29DQUFnQkMsU0FBUTs7Ozs7OzhDQUNuQyw4REFBQ0Y7b0NBQ0NDLE1BQUs7b0NBQ0xDLFNBQVE7Ozs7Ozs4Q0FFViw4REFBQ0Y7b0NBQ0NDLE1BQUs7b0NBQ0xDLFNBQVE7Ozs7Ozs4Q0FJViw4REFBQ0Y7b0NBQUtDLE1BQUs7b0NBQVNDLFNBQVE7Ozs7Ozs4Q0FDNUIsOERBQUNGO29DQUNDQyxNQUFLO29DQUNMQyxTQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUMzQjs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZXdlci8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC50c3hcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbEJvZHksXG4gIE1vZGFsRm9vdGVyLFxuICBCdXR0b24sXG4gIHVzZURpc2Nsb3N1cmUsXG59IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFVJUHJvdmlkZXIsIFByb2dyZXNzLCBTcGlubmVyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIGFzIE5leHRUaGVtZXNQcm92aWRlciB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICAgIC8vIFNob3cgdGhlIGxvYWRpbmcgYmFyIHdoZW4gYSByb3V0ZSBjaGFuZ2Ugc3RhcnRzXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIC8vIEhpZGUgdGhlIGxvYWRpbmcgYmFyIHdoZW4gYSByb3V0ZSBjaGFuZ2UgaXMgY29tcGxldGVcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVTdGFydCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlQ29tcGxldGUpO1xuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGhhbmRsZUNvbXBsZXRlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlU3RhcnQpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPE5leHRVSVByb3ZpZGVyPlxuICAgICAgPE5leHRUaGVtZXNQcm92aWRlcj5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBpc09wZW49e2xvYWRpbmd9XG4gICAgICAgICAgICBoaWRlQ2xvc2VCdXR0b25cbiAgICAgICAgICAgIGlzRGlzbWlzc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTBweFwiLCBoZWlnaHQ6IFwiOTBweFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgei01MCB3LXNjcmVlbiBoLXNjcmVlblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHJldHJvLXZpYmVzIHRleHQtZm9yZWdyb3VuZCBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+VXJsY3V0PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCJVcmxjdXQgLSBTaG9ydGVuIFlvdXIgTGlua3MuXCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJRdWljaywgZWFzeSwgYW5kIGZyZWUgVVJMIHNob3J0ZW5lci5cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgey8qIE9wZW4gR3JhcGggKE9HKSBtZXRhIHRhZ3MgZm9yIHNvY2lhbCBzaGFyaW5nICovfVxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJVcmxjdXQgLSBTaG9ydGVuIFlvdXIgTGlua3NcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJRdWljaywgZWFzeSwgYW5kIGZyZWUgVVJMIHNob3J0ZW5lci5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9zdG9yYWdlLnRhbGx5LnNvL2U2MmNjZDM1LWY3Y2MtNDFhMC04ODRhLTcyMmIzYjdiZmU3YS9VcmxjdXQucG5nXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3VybGN1dC5hcHAvXCIgLz5cblxuICAgICAgICAgICAgey8qIFR3aXR0ZXIgQ2FyZCBtZXRhIHRhZ3MgZm9yIFR3aXR0ZXIgc2hhcmluZyAqL31cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJVcmxjdXQgLSBTaG9ydGVuIFlvdXIgTGlua3NcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBjb250ZW50PVwiUXVpY2ssIGVhc3ksIGFuZCBmcmVlIFVSTCBzaG9ydGVuZXIuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidHdpdHRlcjppbWFnZVwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3VybGN1dC5hcHAvYXNzZXRzL3R3aXR0ZXItY2FyZC5wbmdcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgey8qIEFkZGl0aW9uYWwgbWV0YSB0YWdzICovfVxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJVcmxjdXRcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICAgICAgY29udGVudD1cIlVSTCBzaG9ydGVuZXIsIGxpbmsgc2hvcnRlbmVyLCBzaG9ydGVuIFVSTHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L05leHRUaGVtZXNQcm92aWRlcj5cbiAgICA8L05leHRVSVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJCdXR0b24iLCJ1c2VEaXNjbG9zdXJlIiwiTmV4dFVJUHJvdmlkZXIiLCJQcm9ncmVzcyIsIlNwaW5uZXIiLCJUaGVtZVByb3ZpZGVyIiwiTmV4dFRoZW1lc1Byb3ZpZGVyIiwiSGVhZCIsInVzZVJvdXRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVTdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJvZmYiLCJpc09wZW4iLCJoaWRlQ2xvc2VCdXR0b24iLCJpc0Rpc21pc3NhYmxlIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwic2l6ZSIsImNsYXNzTmFtZSIsIm1haW4iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@nextui-org/react");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();