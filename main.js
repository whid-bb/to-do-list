"use strict";
(self["webpackChunkto_dolist"] = self["webpackChunkto_dolist"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ToDoList */ "./src/js/ToDoList.js");

var ToDo = new _js_ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"]({
  listTag: 'add-task-li'
});
ToDo.init();

/***/ }),

/***/ "./src/js/ToDoList.js":
/*!****************************!*\
  !*** ./src/js/ToDoList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToDoList = /*#__PURE__*/_createClass(function ToDoList(_ref) {
  var _this = this;

  var listTag = _ref.listTag;

  _classCallCheck(this, ToDoList);

  _defineProperty(this, "list", []);

  _defineProperty(this, "renderList", function () {
    var html = "\n    \n    ";

    _this.list.forEach(function (el) {
      html += "\n      <li>\n      <div class=\"tdl-li-content\">\n        <div class=\"tdl-li-content-inner\">\n          <input type=\"checkbox\" class=\"tdl-checkbox\" ".concat(el.completed ? 'checked' : '', ">\n          <span class=\"list-desc\">").concat(el.desc, "</span>\n        </div>\n        <span class=\"dragndrop-ico\"></span>\n      </div>\n    </li>\n      ");
    });

    _this.listTag.insertAdjacentHTML('afterend', html);
  });

  _defineProperty(this, "init", function () {
    _this.list.push({
      index: '1',
      desc: 'First item',
      completed: 0
    }, {
      index: '2',
      desc: 'Second item',
      completed: 0
    }, {
      index: '3',
      desc: 'third item',
      completed: 1
    }, {
      index: '4',
      desc: 'fourth item',
      completed: 0
    });

    _this.renderList();
  });

  this.listTag = document.getElementById(listTag);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"), __webpack_exec__("./src/scss/base.scss"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlELG9EQUFKLENBQWE7RUFDeEJFLE9BQU8sRUFBRTtBQURlLENBQWIsQ0FBYjtBQUlBRCxJQUFJLENBQUNFLElBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNOTUgscUNBR0osd0JBQXlCO0VBQUE7O0VBQUEsSUFBWEUsT0FBVyxRQUFYQSxPQUFXOztFQUFBOztFQUFBLDhCQUZsQixFQUVrQjs7RUFBQSxvQ0FJWixZQUFNO0lBQ2pCLElBQUlFLElBQUksaUJBQVI7O0lBSUEsS0FBSSxDQUFDQyxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsVUFBQ0MsRUFBRCxFQUFRO01BQ3hCSCxJQUFJLDBLQUk4Q0csRUFBRSxDQUFDQyxTQUFILEdBQWUsU0FBZixHQUEyQixFQUp6RSxvREFLMEJELEVBQUUsQ0FBQ0UsSUFMN0IsNEdBQUo7SUFXRCxDQVpEOztJQWNBLEtBQUksQ0FBQ1AsT0FBTCxDQUFhUSxrQkFBYixDQUFnQyxVQUFoQyxFQUE0Q04sSUFBNUM7RUFDRCxDQXhCd0I7O0VBQUEsOEJBMEJsQixZQUFNO0lBQ1gsS0FBSSxDQUFDQyxJQUFMLENBQVVNLElBQVYsQ0FDRTtNQUNFQyxLQUFLLEVBQUUsR0FEVDtNQUVFSCxJQUFJLEVBQUUsWUFGUjtNQUdFRCxTQUFTLEVBQUU7SUFIYixDQURGLEVBTUU7TUFDRUksS0FBSyxFQUFFLEdBRFQ7TUFFRUgsSUFBSSxFQUFFLGFBRlI7TUFHRUQsU0FBUyxFQUFFO0lBSGIsQ0FORixFQVdFO01BQ0VJLEtBQUssRUFBRSxHQURUO01BRUVILElBQUksRUFBRSxZQUZSO01BR0VELFNBQVMsRUFBRTtJQUhiLENBWEYsRUFnQkU7TUFDRUksS0FBSyxFQUFFLEdBRFQ7TUFFRUgsSUFBSSxFQUFFLGFBRlI7TUFHRUQsU0FBUyxFQUFFO0lBSGIsQ0FoQkY7O0lBc0JBLEtBQUksQ0FBQ0ssVUFBTDtFQUNELENBbER3Qjs7RUFDdkIsS0FBS1gsT0FBTCxHQUFlWSxRQUFRLENBQUNDLGNBQVQsQ0FBd0JiLE9BQXhCLENBQWY7QUFDRDs7QUFtREgsaUVBQWVGLFFBQWY7Ozs7Ozs7Ozs7O0FDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvc2Nzcy9iYXNlLnNjc3M/OWMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9qcy9Ub0RvTGlzdCc7XG5cbmNvbnN0IFRvRG8gPSBuZXcgVG9Eb0xpc3Qoe1xuICBsaXN0VGFnOiAnYWRkLXRhc2stbGknLFxufSk7XG5cblRvRG8uaW5pdCgpOyIsImNsYXNzIFRvRG9MaXN0IHtcbiAgbGlzdCA9IFtdXG5cbiAgY29uc3RydWN0b3IoeyBsaXN0VGFnIH0pIHtcbiAgICB0aGlzLmxpc3RUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0VGFnKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgbGV0IGh0bWwgPSBgXG4gICAgXG4gICAgYDtcblxuICAgIHRoaXMubGlzdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaHRtbCArPSBgXG4gICAgICA8bGk+XG4gICAgICA8ZGl2IGNsYXNzPVwidGRsLWxpLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRkbC1saS1jb250ZW50LWlubmVyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGRsLWNoZWNrYm94XCIgJHtlbC5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LWRlc2NcIj4ke2VsLmRlc2N9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkcmFnbmRyb3AtaWNvXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgICAgIGA7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxpc3RUYWcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWwpO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLmxpc3QucHVzaChcbiAgICAgIHtcbiAgICAgICAgaW5kZXg6ICcxJyxcbiAgICAgICAgZGVzYzogJ0ZpcnN0IGl0ZW0nLFxuICAgICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleDogJzInLFxuICAgICAgICBkZXNjOiAnU2Vjb25kIGl0ZW0nLFxuICAgICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleDogJzMnLFxuICAgICAgICBkZXNjOiAndGhpcmQgaXRlbScsXG4gICAgICAgIGNvbXBsZXRlZDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4OiAnNCcsXG4gICAgICAgIGRlc2M6ICdmb3VydGggaXRlbScsXG4gICAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlckxpc3QoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvTGlzdDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiVG9Eb0xpc3QiLCJUb0RvIiwibGlzdFRhZyIsImluaXQiLCJodG1sIiwibGlzdCIsImZvckVhY2giLCJlbCIsImNvbXBsZXRlZCIsImRlc2MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwdXNoIiwiaW5kZXgiLCJyZW5kZXJMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=