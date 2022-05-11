/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const burger = __webpack_require__(/*! ./module/burger.js */ \"./src/js/module/burger.js\");\r\nconst anim = __webpack_require__(/*! ./module/anim.js */ \"./src/js/module/anim.js\");\r\nconst scroll = __webpack_require__(/*! ./module/scroll.js */ \"./src/js/module/scroll.js\");\n\n//# sourceURL=webpack://WorkDirectory/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/anim.js":
/*!*******************************!*\
  !*** ./src/js/module/anim.js ***!
  \*******************************/
/***/ (function() {

eval("AOS.init();\r\n\r\nAOS.init({\r\n\t// Global settings:\r\n\tdisable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function\r\n\tstartEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on\r\n\tinitClassName: 'aos-init', // class applied after initialization\r\n\tanimatedClassName: 'aos-animate', // class applied on animation\r\n\tuseClassNames: false, // if true, will add content of `data-aos` as classes on scroll\r\n\tdisableMutationObserver: false, // disables automatic mutations' detections (advanced)\r\n\tdebounceDelay: 50, // the delay on debounce used while resizing window (advanced)\r\n\tthrottleDelay: 99, // the delay on throttle used while scrolling the page (advanced)\r\n\r\n\r\n\t// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:\r\n\toffset: 120, // offset (in px) from the original trigger point\r\n\tdelay: 0, // values from 0 to 3000, with step 50ms\r\n\tduration: 400, // values from 0 to 3000, with step 50ms\r\n\teasing: 'ease', // default easing for AOS animations\r\n\tonce: true, // whether animation should happen only once - while scrolling down\r\n\tmirror: false, // whether elements should animate out while scrolling past them\r\n\tanchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation\r\n\r\n});\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/anim.js?");

/***/ }),

/***/ "./src/js/module/burger.js":
/*!*********************************!*\
  !*** ./src/js/module/burger.js ***!
  \*********************************/
/***/ (function() {

eval("const burgerTrigger = document.querySelectorAll(\".burger__trigger\");\r\nconst burgerBody = document.querySelectorAll(\".burger__body\");\r\nlet htmlBody = document.getElementsByTagName(\"body\");\r\nlet subMenu = document.querySelectorAll(\".header__nav-sub-menu\")\r\nlet navItem = document.querySelectorAll(\".header__nav-item\")\r\nconst style = \"active\";\r\nconst contentWidth = \"100vh\";\r\n\r\n\r\nburgerTrigger.forEach((item, i) => {\r\n    burgerBody[i].style.height = \"0\";\r\n    item.addEventListener(\"click\", () => {\r\n        if (!(style === \"none\")) { item.classList.toggle(style) };\r\n        item.classList.contains(\"active\")\r\n            ? htmlBody[0].style.overflow = \"hidden\"\r\n            : htmlBody[0].style.overflowY = \"scroll\";\r\n        burgerBody[i].style.height === \"0px\"\r\n            ? burgerBody[i].style.height = contentWidth\r\n            : burgerBody[i].style.height = \"0\";\r\n    });\r\n    window.addEventListener(\"resize\", () => {\r\n        let pageWidth = document.documentElement.scrollWidth;\r\n        if (pageWidth >= 1000) {\r\n            burgerBody[i].style.height = \"0\";\r\n            item.classList.remove(\"active\")\r\n        }\r\n        if (!(item.classList.contains(\"active\"))) htmlBody[0].style.overflowY = \"scroll\";\r\n\r\n    })\r\n});\r\nnavItem.forEach((nav) => {\r\n    nav.addEventListener(\"click\", (event) => {\r\n        let currentItem = event.target.nextElementSibling\r\n        if (typeof (currentItem) != 'undefined' && currentItem != null) { currentItem.classList.toggle(\"sub-menu-active\"); }\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/burger.js?");

/***/ }),

/***/ "./src/js/module/scroll.js":
/*!*********************************!*\
  !*** ./src/js/module/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("const smoothLinks = document.querySelectorAll('a[href^=\"#\"]');\r\nfor (let smoothLink of smoothLinks) {\r\n\tsmoothLink.addEventListener('click', function (e) {\r\n\t\te.preventDefault();\r\n\t\tconst id = smoothLink.getAttribute('href');\r\n\r\n\t\tdocument.querySelector(id).scrollIntoView({\r\n\t\t\tbehavior: 'smooth',\r\n\t\t\tblock: 'start'\r\n\t\t});\r\n\t});\r\n};\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;