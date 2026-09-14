/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js"
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
(module) {

eval("{const calculate = () => {\r\n  let p = Number(document.getElementById(\"principal\").value);\r\n  let r = Number(document.getElementById(\"rate\").value);\r\n  let t = Number(document.getElementById(\"time\").value);\r\n  let simpleInterest = calculateSimpleInterest(p, r, t);\r\n  let amount = calculateTotalPayableAmount(p, simpleInterest);\r\n\r\n  let result = document.getElementById(\"result\");\r\n\r\n  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>\r\n  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>\r\n  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;\r\n};\r\n\r\nconst calculateSimpleInterest = (principal, rate, time) => {\r\n  return (principal * rate * time) / 100;\r\n}\r\n\r\nconst calculateTotalPayableAmount = (principal, interestAmount) => {\r\n  return principal + interestAmount;\r\n}\r\n\r\nif (true)\r\n  module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };\r\n\n\n//# sourceURL=webpack:///./src/script.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	let __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	const __webpack_export_target__ = window;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;