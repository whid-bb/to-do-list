"use strict";
(self["webpackChunkto_dolist"] = self["webpackChunkto_dolist"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_ToDoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ToDoList.js */ "./src/js/ToDoList.js");

var ToDo = new _js_ToDoList_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  listTag: '#add-task-li',
  form: {
    tag: '#add-task-li form',
    inputName: 'add-task'
  }
});
ToDo.init();

/***/ }),

/***/ "./src/js/ListItem.js":
/*!****************************!*\
  !*** ./src/js/ListItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ls.js */ "./src/js/Ls.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ListItem = /*#__PURE__*/function (_Ls) {
  _inherits(ListItem, _Ls);

  var _super = _createSuper(ListItem);

  function ListItem() {
    var _this;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "list", []);

    _defineProperty(_assertThisInitialized(_this), "recalculateIndexes", function () {
      var listItems = _toConsumableArray(document.querySelectorAll('.task-list-item'));

      var listReverse = listItems.reverse();

      for (var i = 0; i <= _this.list.length - 1; i += 1) {
        var el = _this.list;
        el[i].index = i;
        listReverse[i].id = "task-".concat(i);
      }

      _this.addToLS(_this.list);
    });

    _defineProperty(_assertThisInitialized(_this), "removeItem", function (e) {
      var parent = e.target.currentParentEl;
      var id = e.target.currentParentId;

      _this.list.splice(id, 1);

      parent.remove();

      _this.recalculateIndexes();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleIcons", function (cls) {
      for (var _len2 = arguments.length, ico = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        ico[_key2 - 1] = arguments[_key2];
      }

      ico.forEach(function (el) {
        el.classList.toggle(cls);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "edit", function (e) {
      var numId = e.currentTarget.id.replace('task-', '');
      var dragIco = e.currentTarget.querySelector('.dragndrop-ico');
      var trashIco = e.currentTarget.querySelector('.trash-ico');
      trashIco.currentParentEl = e.currentTarget;
      trashIco.currentParentId = numId;
      trashIco.addEventListener('click', _this.removeItem);

      if (e.target.classList.contains('list-desc')) {
        e.currentTarget.style.backgroundColor = '#ccc';
        var descText = e.target.innerText;
        e.target.outerHTML = "<input type='text' class='list-desc-edit' value='".concat(descText, "'>");
        var tempInput = e.currentTarget.querySelector('.list-desc-edit');
        var endOfText = tempInput.value.length;
        tempInput.setSelectionRange(endOfText, endOfText);
        tempInput.focus();

        _this.toggleIcons('hide', dragIco, trashIco);
      }

      if (e.target.classList.contains('list-desc-edit')) {
        e.currentTarget.style.backgroundColor = 'unset';
        var _descText = e.target.value;

        _this.list.map(function (el) {
          if (el.index === Number(numId)) {
            el.desc = _descText;
          }

          return el;
        });

        e.target.outerHTML = "<span class=\"list-desc\">".concat(_descText, "</span>");

        _this.addToLS(_this.list);

        _this.toggleIcons('hide', dragIco, trashIco);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "listItemEvents", function (list) {
      var one = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      _this.list = list;
      var listItems = document.querySelectorAll('.task-list-item');

      if (one) {
        listItems = [document.querySelector('.task-list-item')];
      }

      listItems.forEach(function (el) {
        el.toggleEv = 0;
        el.addEventListener('click', _this.edit);
      });
    });

    return _this;
  }

  return _createClass(ListItem);
}(_Ls_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./src/js/Ls.js":
/*!**********************!*\
  !*** ./src/js/Ls.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Ls = /*#__PURE__*/_createClass(function Ls(lsKey) {
  var _this = this;

  _classCallCheck(this, Ls);

  _defineProperty(this, "addToLS", function (obj) {
    localStorage.setItem(_this.lsKey, JSON.stringify(obj));
  });

  _defineProperty(this, "getFromLS", function () {
    var lsData = localStorage.getItem(_this.lsKey);

    if (lsData) {
      var data = JSON.parse(lsData);
      return data;
    }

    return [];
  });

  _defineProperty(this, "removeFromLS", function (id) {
    var data = _this.getFromLS(_this.lsKey);

    data.filter(function (el, i) {
      if (el.index === Number(id)) {
        data.splice(i, 1);

        _this.addToLS(data);
      }

      return true;
    });
  });

  this.lsKey = lsKey;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ls);

/***/ }),

/***/ "./src/js/RenderList.js":
/*!******************************!*\
  !*** ./src/js/RenderList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem.js */ "./src/js/ListItem.js");
/* harmony import */ var _Ls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ls.js */ "./src/js/Ls.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RenderList = /*#__PURE__*/function (_Ls) {
  _inherits(RenderList, _Ls);

  var _super = _createSuper(RenderList);

  function RenderList(_ref) {
    var _this;

    var listTag = _ref.listTag,
        listKey = _ref.listKey;

    _classCallCheck(this, RenderList);

    _this = _super.call(this, listKey);

    _defineProperty(_assertThisInitialized(_this), "list", []);

    _defineProperty(_assertThisInitialized(_this), "taskListItem", 'task-list-item');

    _defineProperty(_assertThisInitialized(_this), "taskListCompleted", 'task-list-completed');

    _defineProperty(_assertThisInitialized(_this), "renderTemplate", function (obj) {
      var checkBoxCls = 'tdl-checkbox';
      var html = "\n    <li id=\"task-".concat(obj.index, "\" class=\"").concat(_this.taskListItem).concat(obj.completed ? " ".concat(_this.taskListCompleted) : '', "\">\n    <div class=\"tdl-li-content\">\n      <div class=\"tdl-li-content-inner\">\n        <input type=\"checkbox\" class=\"").concat(checkBoxCls, "\" ").concat(obj.completed ? 'checked' : '', ">\n        <span class=\"list-desc\" contenteditable=\"false\">").concat(obj.desc, "</span>\n      </div>\n      <span class=\"dragndrop-ico\"></span>\n      <span class=\"trash-ico hide\"></span>\n    </div>\n    </li>\n    ");

      _this.listTag.insertAdjacentHTML('afterend', html);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var one = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      _this.list = _this.getFromLS();

      var _assertThisInitialize = _assertThisInitialized(_this),
          list = _assertThisInitialize.list;

      if (one) {
        list.push({
          index: list.length,
          desc: one,
          completed: 0
        });

        _this.addToLS(list);

        _this.renderTemplate(list.at(-1), list);

        _this.ListItem.listItemEvents(_this.list, 'one');

        return;
      }

      if (list.length === 0) return;
      list.forEach(function (el) {
        _this.renderTemplate(el, list);
      });

      _this.ListItem.listItemEvents(_this.list);
    });

    _this.listTag = listTag;
    _this.ListItem = new _ListItem_js__WEBPACK_IMPORTED_MODULE_0__["default"](listKey);
    return _this;
  }

  return _createClass(RenderList);
}(_Ls_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderList);

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
/* harmony import */ var _RenderList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderList.js */ "./src/js/RenderList.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ToDoList = /*#__PURE__*/_createClass(function ToDoList(_ref) {
  var _this = this;

  var listTag = _ref.listTag,
      _ref$form = _ref.form,
      tag = _ref$form.tag,
      inputName = _ref$form.inputName;

  _classCallCheck(this, ToDoList);

  _defineProperty(this, "list", []);

  _defineProperty(this, "parseForm", function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var inputData = formData.get(_this.form.inputName);

    if (inputData.trim().length > 0) {
      _this.RenderList.render(inputData);
    }

    event.target.reset();
  });

  _defineProperty(this, "init", function () {
    var formEl = document.querySelector(_this.form.tag);

    _this.RenderList.render();

    formEl.addEventListener('submit', _this.parseForm);
  });

  var listKey = 'toDoList';
  this.form = {
    tag: tag,
    inputName: inputName
  };
  this.RenderList = new _RenderList_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    listTag: document.querySelector(listTag),
    listKey: listKey
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3RGLElBQUwsQ0FBVUUsU0FBdkIsQ0FBbEI7O0lBQ0EsSUFBSW1GLFNBQVMsQ0FBQ0UsSUFBVixHQUFpQjFFLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDO01BQy9CLEtBQUksQ0FBQ3dELFVBQUwsQ0FBZ0JtQixNQUFoQixDQUF1QkgsU0FBdkI7SUFDRDs7SUFDREosS0FBSyxDQUFDN0QsTUFBTixDQUFhcUUsS0FBYjtFQUNELENBakJrRDs7RUFBQSw4QkFtQjVDLFlBQU07SUFDWCxJQUFNQyxNQUFNLEdBQUduRixRQUFRLENBQUM0QixhQUFULENBQXVCLEtBQUksQ0FBQ25DLElBQUwsQ0FBVUMsR0FBakMsQ0FBZjs7SUFFQSxLQUFJLENBQUNvRSxVQUFMLENBQWdCbUIsTUFBaEI7O0lBQ0FFLE1BQU0sQ0FBQ3JELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUksQ0FBQ3NELFNBQXZDO0VBQ0QsQ0F4QmtEOztFQUNqRCxJQUFNckIsT0FBTyxHQUFHLFVBQWhCO0VBQ0EsS0FBS3RFLElBQUwsR0FBWTtJQUFFQyxHQUFHLEVBQUhBLEdBQUY7SUFBT0MsU0FBUyxFQUFUQTtFQUFQLENBQVo7RUFDQSxLQUFLbUUsVUFBTCxHQUFrQixJQUFJQSxzREFBSixDQUFlO0lBQy9CdEUsT0FBTyxFQUFFUSxRQUFRLENBQUM0QixhQUFULENBQXVCcEMsT0FBdkIsQ0FEc0I7SUFFL0J1RSxPQUFPLEVBQVBBO0VBRitCLENBQWYsQ0FBbEI7QUFJRDs7QUFvQkgsaUVBQWV6RSxRQUFmOzs7Ozs7Ozs7OztBQ2hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL0xzLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9SZW5kZXJMaXN0LmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvc2Nzcy9iYXNlLnNjc3M/OWMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9qcy9Ub0RvTGlzdC5qcyc7XG5cbmNvbnN0IFRvRG8gPSBuZXcgVG9Eb0xpc3Qoe1xuICBsaXN0VGFnOiAnI2FkZC10YXNrLWxpJyxcbiAgZm9ybToge1xuICAgIHRhZzogJyNhZGQtdGFzay1saSBmb3JtJyxcbiAgICBpbnB1dE5hbWU6ICdhZGQtdGFzaycsXG4gIH0sXG59KTtcblxuVG9Eby5pbml0KCk7IiwiaW1wb3J0IExzIGZyb20gJy4vTHMuanMnO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIExzIHtcbiAgbGlzdCA9IFtdO1xuXG4gIHJlY2FsY3VsYXRlSW5kZXhlcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbGlzdC1pdGVtJyldO1xuXG4gICAgY29uc3QgbGlzdFJldmVyc2UgPSBsaXN0SXRlbXMucmV2ZXJzZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5saXN0Lmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmxpc3Q7XG5cbiAgICAgIGVsW2ldLmluZGV4ID0gaTtcbiAgICAgIGxpc3RSZXZlcnNlW2ldLmlkID0gYHRhc2stJHtpfWA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRUb0xTKHRoaXMubGlzdCk7XG4gIH07XG5cbiAgcmVtb3ZlSXRlbSA9IChlKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQuY3VycmVudFBhcmVudEVsO1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY3VycmVudFBhcmVudElkO1xuXG4gICAgdGhpcy5saXN0LnNwbGljZShpZCwgMSk7XG5cbiAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUluZGV4ZXMoKTtcbiAgfTtcblxuICB0b2dnbGVJY29ucyA9IChjbHMsIC4uLmljbykgPT4ge1xuICAgIGljby5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGVkaXQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG51bUlkID0gZS5jdXJyZW50VGFyZ2V0LmlkLnJlcGxhY2UoJ3Rhc2stJywgJycpO1xuXG4gICAgY29uc3QgZHJhZ0ljbyA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZHJhZ25kcm9wLWljbycpO1xuICAgIGNvbnN0IHRyYXNoSWNvID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pY28nKTtcblxuICAgIHRyYXNoSWNvLmN1cnJlbnRQYXJlbnRFbCA9IGUuY3VycmVudFRhcmdldDtcbiAgICB0cmFzaEljby5jdXJyZW50UGFyZW50SWQgPSBudW1JZDtcbiAgICB0cmFzaEljby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlSXRlbSk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaXN0LWRlc2MnKSkge1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjJztcbiAgICAgIGNvbnN0IGRlc2NUZXh0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgZS50YXJnZXQub3V0ZXJIVE1MID0gYDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nbGlzdC1kZXNjLWVkaXQnIHZhbHVlPScke2Rlc2NUZXh0fSc+YDtcblxuICAgICAgY29uc3QgdGVtcElucHV0ID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWRlc2MtZWRpdCcpO1xuICAgICAgY29uc3QgZW5kT2ZUZXh0ID0gdGVtcElucHV0LnZhbHVlLmxlbmd0aDtcbiAgICAgIHRlbXBJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShlbmRPZlRleHQsIGVuZE9mVGV4dCk7XG4gICAgICB0ZW1wSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRoaXMudG9nZ2xlSWNvbnMoJ2hpZGUnLCBkcmFnSWNvLCB0cmFzaEljbyk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtZGVzYy1lZGl0JykpIHtcbiAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndW5zZXQnO1xuICAgICAgY29uc3QgZGVzY1RleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMubGlzdC5tYXAoKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5pbmRleCA9PT0gTnVtYmVyKG51bUlkKSkge1xuICAgICAgICAgIGVsLmRlc2MgPSBkZXNjVGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9KTtcbiAgICAgIGUudGFyZ2V0Lm91dGVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImxpc3QtZGVzY1wiPiR7ZGVzY1RleHR9PC9zcGFuPmA7XG4gICAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgICAgIHRoaXMudG9nZ2xlSWNvbnMoJ2hpZGUnLCBkcmFnSWNvLCB0cmFzaEljbyk7XG4gICAgfVxuICB9O1xuXG4gIGxpc3RJdGVtRXZlbnRzID0gKGxpc3QsIG9uZSA9IGZhbHNlKSA9PiB7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICBsZXQgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbGlzdC1pdGVtJyk7XG4gICAgaWYgKG9uZSkge1xuICAgICAgbGlzdEl0ZW1zID0gW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QtaXRlbScpXTtcbiAgICB9XG5cbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLnRvZ2dsZUV2ID0gMDtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0KTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07IiwiY2xhc3MgTHMge1xuICBjb25zdHJ1Y3Rvcihsc0tleSkge1xuICAgIHRoaXMubHNLZXkgPSBsc0tleTtcbiAgfVxuXG4gIGFkZFRvTFMgPSAob2JqKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sc0tleSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH07XG5cbiAgZ2V0RnJvbUxTID0gKCkgPT4ge1xuICAgIGNvbnN0IGxzRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubHNLZXkpO1xuICAgIGlmIChsc0RhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxzRGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgcmVtb3ZlRnJvbUxTID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RnJvbUxTKHRoaXMubHNLZXkpO1xuICAgIGRhdGEuZmlsdGVyKChlbCwgaSkgPT4ge1xuICAgICAgaWYgKGVsLmluZGV4ID09PSBOdW1iZXIoaWQpKSB7XG4gICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICB0aGlzLmFkZFRvTFMoZGF0YSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTHM7IiwiaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0uanMnO1xuaW1wb3J0IExzIGZyb20gJy4vTHMuanMnO1xuXG5jbGFzcyBSZW5kZXJMaXN0IGV4dGVuZHMgTHMge1xuICBsaXN0ID0gW107XG5cbiAgdGFza0xpc3RJdGVtID0gJ3Rhc2stbGlzdC1pdGVtJztcblxuICB0YXNrTGlzdENvbXBsZXRlZCA9ICd0YXNrLWxpc3QtY29tcGxldGVkJztcblxuICBjb25zdHJ1Y3Rvcih7IGxpc3RUYWcsIGxpc3RLZXkgfSkge1xuICAgIHN1cGVyKGxpc3RLZXkpO1xuICAgIHRoaXMubGlzdFRhZyA9IGxpc3RUYWc7XG4gICAgdGhpcy5MaXN0SXRlbSA9IG5ldyBMaXN0SXRlbShsaXN0S2V5KTtcbiAgfVxuXG4gIHJlbmRlclRlbXBsYXRlID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IGNoZWNrQm94Q2xzID0gJ3RkbC1jaGVja2JveCc7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICA8bGkgaWQ9XCJ0YXNrLSR7b2JqLmluZGV4fVwiIGNsYXNzPVwiJHt0aGlzLnRhc2tMaXN0SXRlbX0ke29iai5jb21wbGV0ZWQgPyBgICR7dGhpcy50YXNrTGlzdENvbXBsZXRlZH1gIDogJyd9XCI+XG4gICAgPGRpdiBjbGFzcz1cInRkbC1saS1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGRsLWxpLWNvbnRlbnQtaW5uZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiJHtjaGVja0JveENsc31cIiAke29iai5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1kZXNjXCIgY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIj4ke29iai5kZXNjfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJkcmFnbmRyb3AtaWNvXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0cmFzaC1pY28gaGlkZVwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICAgIGA7XG4gICAgdGhpcy5saXN0VGFnLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sKTtcbiAgfTtcblxuICByZW5kZXIgPSAob25lID0gbnVsbCkgPT4ge1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0RnJvbUxTKCk7XG4gICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzO1xuICAgIGlmIChvbmUpIHtcbiAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgIGluZGV4OiBsaXN0Lmxlbmd0aCxcbiAgICAgICAgZGVzYzogb25lLFxuICAgICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkVG9MUyhsaXN0KTtcbiAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUobGlzdC5hdCgtMSksIGxpc3QpO1xuICAgICAgdGhpcy5MaXN0SXRlbS5saXN0SXRlbUV2ZW50cyh0aGlzLmxpc3QsICdvbmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgbGlzdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZShlbCwgbGlzdCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnRzKHRoaXMubGlzdCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckxpc3Q7IiwiaW1wb3J0IFJlbmRlckxpc3QgZnJvbSAnLi9SZW5kZXJMaXN0LmpzJztcblxuY2xhc3MgVG9Eb0xpc3Qge1xuICBsaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IoeyBsaXN0VGFnLCBmb3JtOiB7IHRhZywgaW5wdXROYW1lIH0gfSkge1xuICAgIGNvbnN0IGxpc3RLZXkgPSAndG9Eb0xpc3QnO1xuICAgIHRoaXMuZm9ybSA9IHsgdGFnLCBpbnB1dE5hbWUgfTtcbiAgICB0aGlzLlJlbmRlckxpc3QgPSBuZXcgUmVuZGVyTGlzdCh7XG4gICAgICBsaXN0VGFnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpc3RUYWcpLFxuICAgICAgbGlzdEtleSxcbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlRm9ybSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBpbnB1dERhdGEgPSBmb3JtRGF0YS5nZXQodGhpcy5mb3JtLmlucHV0TmFtZSk7XG4gICAgaWYgKGlucHV0RGF0YS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5SZW5kZXJMaXN0LnJlbmRlcihpbnB1dERhdGEpO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQucmVzZXQoKTtcbiAgfTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5mb3JtLnRhZyk7XG5cbiAgICB0aGlzLlJlbmRlckxpc3QucmVuZGVyKCk7XG4gICAgZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMucGFyc2VGb3JtKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlRvRG9MaXN0IiwiVG9EbyIsImxpc3RUYWciLCJmb3JtIiwidGFnIiwiaW5wdXROYW1lIiwiaW5pdCIsIkxzIiwiTGlzdEl0ZW0iLCJsaXN0SXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaXN0UmV2ZXJzZSIsInJldmVyc2UiLCJpIiwibGlzdCIsImxlbmd0aCIsImVsIiwiaW5kZXgiLCJpZCIsImFkZFRvTFMiLCJlIiwicGFyZW50IiwidGFyZ2V0IiwiY3VycmVudFBhcmVudEVsIiwiY3VycmVudFBhcmVudElkIiwic3BsaWNlIiwicmVtb3ZlIiwicmVjYWxjdWxhdGVJbmRleGVzIiwiY2xzIiwiaWNvIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm51bUlkIiwiY3VycmVudFRhcmdldCIsInJlcGxhY2UiLCJkcmFnSWNvIiwicXVlcnlTZWxlY3RvciIsInRyYXNoSWNvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUl0ZW0iLCJjb250YWlucyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGVzY1RleHQiLCJpbm5lclRleHQiLCJvdXRlckhUTUwiLCJ0ZW1wSW5wdXQiLCJlbmRPZlRleHQiLCJ2YWx1ZSIsInNldFNlbGVjdGlvblJhbmdlIiwiZm9jdXMiLCJ0b2dnbGVJY29ucyIsIm1hcCIsIk51bWJlciIsImRlc2MiLCJvbmUiLCJ0b2dnbGVFdiIsImVkaXQiLCJsc0tleSIsIm9iaiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibHNEYXRhIiwiZ2V0SXRlbSIsImRhdGEiLCJwYXJzZSIsImdldEZyb21MUyIsImZpbHRlciIsIlJlbmRlckxpc3QiLCJsaXN0S2V5IiwiY2hlY2tCb3hDbHMiLCJodG1sIiwidGFza0xpc3RJdGVtIiwiY29tcGxldGVkIiwidGFza0xpc3RDb21wbGV0ZWQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwdXNoIiwicmVuZGVyVGVtcGxhdGUiLCJhdCIsImxpc3RJdGVtRXZlbnRzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpbnB1dERhdGEiLCJnZXQiLCJ0cmltIiwicmVuZGVyIiwicmVzZXQiLCJmb3JtRWwiLCJwYXJzZUZvcm0iXSwic291cmNlUm9vdCI6IiJ9