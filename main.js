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

/***/ "./src/js/Complete.js":
/*!****************************!*\
  !*** ./src/js/Complete.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ls.js */ "./src/js/Ls.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ "./src/js/globals.js");
/* harmony import */ var _Remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Remove.js */ "./src/js/Remove.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Complete = /*#__PURE__*/_createClass(function Complete() {
  var _this = this;

  _classCallCheck(this, Complete);

  _defineProperty(this, "Ls", new _Ls_js__WEBPACK_IMPORTED_MODULE_0__["default"]());

  _defineProperty(this, "RemoveItems", new _Remove_js__WEBPACK_IMPORTED_MODULE_2__["default"]());

  _defineProperty(this, "clearCompleted", function () {
    var completed = _toConsumableArray(document.querySelectorAll(".".concat(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_ITEM)));

    completed.filter(function (el, i, arr) {
      if (el.classList.contains(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED)) {
        _this.RemoveItems.removeItem(el);
      }
    });
  });

  _defineProperty(this, "taskComplete", function (parent, id) {
    var list = _this.Ls.getFromLS();

    list.map(function (el) {
      if (Number(id) === el.index) {
        if (el.completed === true) {
          parent.classList.remove(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED);
          el.completed = false;
        } else {
          parent.classList.add(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED);
          el.completed = true;
        }
      }

      return el;
    });

    _this.Ls.addToLS(list);
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Complete);

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
/* harmony import */ var _Complete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Complete.js */ "./src/js/Complete.js");
/* harmony import */ var _Remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Remove.js */ "./src/js/Remove.js");
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

    _defineProperty(_assertThisInitialized(_this), "Complete", new _Complete_js__WEBPACK_IMPORTED_MODULE_1__["default"]());

    _defineProperty(_assertThisInitialized(_this), "RemoveItems", new _Remove_js__WEBPACK_IMPORTED_MODULE_2__["default"]());

    _defineProperty(_assertThisInitialized(_this), "toggleIcons", function (cls) {
      for (var _len2 = arguments.length, ico = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        ico[_key2 - 1] = arguments[_key2];
      }

      ico.forEach(function (el) {
        el.classList.toggle(cls);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "edit", function (e) {
      // const list = this.getFromLS()
      var numId = e.currentTarget.id.replace('task-', '');
      var dragIco = e.currentTarget.querySelector('.dragndrop-ico');
      var trashIco = e.currentTarget.querySelector('.trash-ico');
      _this.list = _this.getFromLS();
      trashIco.currentParentEl = e.currentTarget;
      trashIco.currentParentId = numId;
      trashIco.addEventListener('click', function (e) {
        _this.RemoveItems.removeItem(e.target); // this.RemoveItems.recalculateIndexes();

      });

      if (e.target.classList.contains('list-desc')) {
        e.currentTarget.style.backgroundColor = '#ccc';
        var descText = e.target.innerText;
        e.target.parentNode.innerHTML = "<input type='text' class='list-desc-edit' value='".concat(descText, "'>\n      <span class=\"edit-item-prompt\">Click input to save</span>\n      ");
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

        e.target.parentNode.innerHTML = "<span class=\"list-desc\">".concat(_descText, "</span>");

        _this.addToLS(_this.list);

        _this.toggleIcons('hide', dragIco, trashIco);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "listItemEvent", function (list, id) {
      var listItem = document.querySelector("#task-".concat(id, ".task-list-item"));
      listItem.addEventListener('click', _this.edit);
      var checkbox = listItem.querySelector('.tdl-checkbox');
      checkbox.addEventListener('change', function () {
        _this.Complete.taskComplete(listItem, id);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "listItemEvents", function (list) {
      var listItems = document.querySelectorAll('.task-list-item');
      listItems.forEach(function (el) {
        el.toggleEv = 0;
        el.addEventListener('click', _this.edit);
      });
      var checkbox = document.querySelectorAll('.tdl-checkbox');
      checkbox.forEach(function (el) {
        el.addEventListener('change', function (e) {
          var parent = e.target.closest('.task-list-item');
          var id = parent.id.replace('task-', '');

          _this.Complete.taskComplete(parent, id, list);
        });
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
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/js/globals.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Ls = /*#__PURE__*/_createClass(function Ls() {
  var _this = this;

  _classCallCheck(this, Ls);

  _defineProperty(this, "addToLS", function (obj) {
    localStorage.setItem(_globals_js__WEBPACK_IMPORTED_MODULE_0__.LS_KEY, JSON.stringify(obj));
  });

  _defineProperty(this, "getFromLS", function () {
    var lsData = localStorage.getItem(_globals_js__WEBPACK_IMPORTED_MODULE_0__.LS_KEY);

    if (lsData) {
      var data = JSON.parse(lsData);
      return data;
    }

    return [];
  });

  _defineProperty(this, "removeFromLS", function (id) {
    var data = _this.getFromLS(_globals_js__WEBPACK_IMPORTED_MODULE_0__.LS_KEY);

    data.filter(function (el, i) {
      if (el.index === Number(id)) {
        data.splice(i, 1);

        _this.addToLS(data);
      }

      return true;
    });
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ls);

/***/ }),

/***/ "./src/js/Remove.js":
/*!**************************!*\
  !*** ./src/js/Remove.js ***!
  \**************************/
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



var RemoveItems = /*#__PURE__*/function (_Ls) {
  _inherits(RemoveItems, _Ls);

  var _super = _createSuper(RemoveItems);

  function RemoveItems() {
    var _this;

    _classCallCheck(this, RemoveItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "list", void 0);

    _defineProperty(_assertThisInitialized(_this), "recalculateIndexes", function () {
      var listItems = _toConsumableArray(document.querySelectorAll('.task-list-item'));

      var listReverse = listItems.reverse();

      for (var i = 0; i <= listReverse.length - 1; i += 1) {
        _this.list[i].index = i;
        listReverse[i].id = "task-".concat(i);
      }

      _this.addToLS(_this.list);
    });

    _defineProperty(_assertThisInitialized(_this), "removeItem", function (e) {
      _this.list = _this.getFromLS();
      var parent = e.closest('.task-list-item');
      var id = Number(parent.id.replace('task-', ''));

      _this.list.splice(id, 1);

      parent.remove();

      _this.recalculateIndexes();
    });

    return _this;
  }

  return _createClass(RemoveItems);
}(_Ls_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveItems);

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
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.js */ "./src/js/globals.js");
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

    var listTag = _ref.listTag;

    _classCallCheck(this, RenderList);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "list", []);

    _defineProperty(_assertThisInitialized(_this), "taskListItem", 'task-list-item');

    _defineProperty(_assertThisInitialized(_this), "renderTemplate", function (obj) {
      var checkBoxCls = 'tdl-checkbox';
      var html = "\n    <li id=\"task-".concat(obj.index, "\" class=\"").concat(_this.taskListItem).concat(obj.completed ? " ".concat(_globals_js__WEBPACK_IMPORTED_MODULE_2__.TASK_LIST_COMPLETED) : '', "\">\n    <div class=\"tdl-li-content\">\n      <div class=\"tdl-li-content-inner\">\n        <input type=\"checkbox\" class=\"").concat(checkBoxCls, "\" ").concat(obj.completed ? 'checked' : '', ">\n        <div class=\"list-desc-container\">\n        <span class=\"list-desc\" contenteditable=\"false\">").concat(obj.desc, "</span>\n        </div>\n      </div>\n      <span class=\"dragndrop-ico\"></span>\n      <span class=\"trash-ico hide\"></span>\n    </div>\n    </li>\n    ");

      _this.listTags.insertAdjacentHTML('afterend', html);
    });

    _defineProperty(_assertThisInitialized(_this), "renderOne", function (text) {
      _this.list = _this.getFromLS();

      _this.list.push({
        index: _this.list.length,
        desc: text,
        completed: false
      });

      _this.addToLS(_this.list);

      _this.renderTemplate(_this.list.at(-1));

      var lastInsertId = _this.list.at(-1).index;

      _this.ListItem.listItemEvent(_this.list, lastInsertId);
    });

    _defineProperty(_assertThisInitialized(_this), "renderMany", function () {
      _this.list = _this.getFromLS();

      var _assertThisInitialize = _assertThisInitialized(_this),
          list = _assertThisInitialize.list;

      if (list.length === 0) return;
      list.forEach(function (el) {
        _this.renderTemplate(el);
      });

      _this.ListItem.listItemEvents(_this.list);
    });

    _this.listTags = listTag;
    _this.ListItem = new _ListItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
/* harmony import */ var _Ls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ls.js */ "./src/js/Ls.js");
/* harmony import */ var _Complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Complete.js */ "./src/js/Complete.js");
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

  _defineProperty(this, "Ls", new _Ls_js__WEBPACK_IMPORTED_MODULE_1__["default"]());

  _defineProperty(this, "Complete", new _Complete_js__WEBPACK_IMPORTED_MODULE_2__["default"]());

  _defineProperty(this, "parseForm", function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var inputData = formData.get(_this.form.inputName);

    if (inputData.trim().length > 0) {
      _this.RenderList.renderOne(inputData);
    }

    event.target.reset();
  });

  _defineProperty(this, "init", function () {
    var formEl = document.querySelector(_this.form.tag);

    _this.RenderList.renderMany();

    formEl.addEventListener('submit', _this.parseForm);
    var clearBtn = document.querySelector('#clear-all button');
    clearBtn.addEventListener('click', function () {
      var list = _this.Ls.getFromLS();

      _this.Complete.clearCompleted(list);
    });
  });

  this.form = {
    tag: tag,
    inputName: inputName
  };
  this.RenderList = new _RenderList_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    listTag: document.querySelector(listTag)
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ }),

/***/ "./src/js/globals.js":
/*!***************************!*\
  !*** ./src/js/globals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LS_KEY": () => (/* binding */ LS_KEY),
/* harmony export */   "TASK_LIST_COMPLETED": () => (/* binding */ TASK_LIST_COMPLETED),
/* harmony export */   "TASK_LIST_ITEM": () => (/* binding */ TASK_LIST_ITEM)
/* harmony export */ });
var TASK_LIST_COMPLETED = 'task-list-completed';
var TASK_LIST_ITEM = 'task-list-item';
var LS_KEY = 'toDoList';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxxQkFBNUI7QUFDQSxJQUFNUCxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTTJELE1BQU0sR0FBRyxVQUFmOzs7Ozs7Ozs7Ozs7QUNGQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvQ29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL0xpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9Mcy5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvUmVtb3ZlLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9SZW5kZXJMaXN0LmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvc2Nzcy9iYXNlLnNjc3M/OWMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9qcy9Ub0RvTGlzdC5qcyc7XG5cbmNvbnN0IFRvRG8gPSBuZXcgVG9Eb0xpc3Qoe1xuICBsaXN0VGFnOiAnI2FkZC10YXNrLWxpJyxcbiAgZm9ybToge1xuICAgIHRhZzogJyNhZGQtdGFzay1saSBmb3JtJyxcbiAgICBpbnB1dE5hbWU6ICdhZGQtdGFzaycsXG4gIH0sXG59KTtcblxuVG9Eby5pbml0KCk7IiwiaW1wb3J0IExzIGZyb20gJy4vTHMuanMnO1xuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IFJlbW92ZUl0ZW1zIGZyb20gJy4vUmVtb3ZlLmpzJztcblxuY2xhc3MgQ29tcGxldGUge1xuICBMcyA9IG5ldyBMcygpO1xuXG4gIFJlbW92ZUl0ZW1zID0gbmV3IFJlbW92ZUl0ZW1zKCk7XG5cbiAgY2xlYXJDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVkID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2dsb2JhbHMuVEFTS19MSVNUX0lURU19YCldO1xuICAgIGNvbXBsZXRlZC5maWx0ZXIoKGVsLCBpLCBhcnIpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoZ2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEKSkge1xuICAgICAgICB0aGlzLlJlbW92ZUl0ZW1zLnJlbW92ZUl0ZW0oZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHRhc2tDb21wbGV0ZSA9IChwYXJlbnQsIGlkKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuTHMuZ2V0RnJvbUxTKCk7XG4gICAgbGlzdC5tYXAoKGVsKSA9PiB7XG4gICAgICBpZiAoTnVtYmVyKGlkKSA9PT0gZWwuaW5kZXgpIHtcbiAgICAgICAgaWYgKGVsLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKGdsb2JhbHMuVEFTS19MSVNUX0NPTVBMRVRFRCk7XG4gICAgICAgICAgZWwuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoZ2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEKTtcbiAgICAgICAgICBlbC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSk7XG4gICAgdGhpcy5Mcy5hZGRUb0xTKGxpc3QpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0ZTsiLCJpbXBvcnQgTHMgZnJvbSAnLi9Mcy5qcyc7XG5pbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9Db21wbGV0ZS5qcyc7XG5pbXBvcnQgUmVtb3ZlSXRlbXMgZnJvbSAnLi9SZW1vdmUuanMnO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIExzIHtcbiAgbGlzdCA9IFtdO1xuXG4gIENvbXBsZXRlID0gbmV3IENvbXBsZXRlKCk7XG5cbiAgUmVtb3ZlSXRlbXMgPSBuZXcgUmVtb3ZlSXRlbXMoKTtcblxuICB0b2dnbGVJY29ucyA9IChjbHMsIC4uLmljbykgPT4ge1xuICAgIGljby5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGVkaXQgPSAoZSkgPT4ge1xuICAgIC8vIGNvbnN0IGxpc3QgPSB0aGlzLmdldEZyb21MUygpXG4gICAgY29uc3QgbnVtSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQucmVwbGFjZSgndGFzay0nLCAnJyk7XG5cbiAgICBjb25zdCBkcmFnSWNvID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnbmRyb3AtaWNvJyk7XG4gICAgY29uc3QgdHJhc2hJY28gPSBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljbycpO1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0RnJvbUxTKCk7XG5cbiAgICB0cmFzaEljby5jdXJyZW50UGFyZW50RWwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgdHJhc2hJY28uY3VycmVudFBhcmVudElkID0gbnVtSWQ7XG4gICAgdHJhc2hJY28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy5SZW1vdmVJdGVtcy5yZW1vdmVJdGVtKGUudGFyZ2V0KTtcbiAgICAgIC8vIHRoaXMuUmVtb3ZlSXRlbXMucmVjYWxjdWxhdGVJbmRleGVzKCk7XG4gICAgfSk7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1kZXNjJykpIHtcbiAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYyc7XG4gICAgICBjb25zdCBkZXNjVGV4dCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nbGlzdC1kZXNjLWVkaXQnIHZhbHVlPScke2Rlc2NUZXh0fSc+XG4gICAgICA8c3BhbiBjbGFzcz1cImVkaXQtaXRlbS1wcm9tcHRcIj5DbGljayBpbnB1dCB0byBzYXZlPC9zcGFuPlxuICAgICAgYDtcblxuICAgICAgY29uc3QgdGVtcElucHV0ID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWRlc2MtZWRpdCcpO1xuICAgICAgY29uc3QgZW5kT2ZUZXh0ID0gdGVtcElucHV0LnZhbHVlLmxlbmd0aDtcbiAgICAgIHRlbXBJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShlbmRPZlRleHQsIGVuZE9mVGV4dCk7XG4gICAgICB0ZW1wSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRoaXMudG9nZ2xlSWNvbnMoJ2hpZGUnLCBkcmFnSWNvLCB0cmFzaEljbyk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1kZXNjLWVkaXQnKSkge1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd1bnNldCc7XG4gICAgICBjb25zdCBkZXNjVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5saXN0Lm1hcCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmluZGV4ID09PSBOdW1iZXIobnVtSWQpKSB7XG4gICAgICAgICAgZWwuZGVzYyA9IGRlc2NUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0pO1xuXG4gICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImxpc3QtZGVzY1wiPiR7ZGVzY1RleHR9PC9zcGFuPmA7XG4gICAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgICAgIHRoaXMudG9nZ2xlSWNvbnMoJ2hpZGUnLCBkcmFnSWNvLCB0cmFzaEljbyk7XG4gICAgfVxuICB9O1xuXG4gIGxpc3RJdGVtRXZlbnQgPSAobGlzdCwgaWQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aWR9LnRhc2stbGlzdC1pdGVtYCk7XG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVkaXQpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRkbC1jaGVja2JveCcpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuQ29tcGxldGUudGFza0NvbXBsZXRlKGxpc3RJdGVtLCBpZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgbGlzdEl0ZW1FdmVudHMgPSAobGlzdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWxpc3QtaXRlbScpO1xuXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC50b2dnbGVFdiA9IDA7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWRpdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZGwtY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2stbGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyZW50LmlkLnJlcGxhY2UoJ3Rhc2stJywgJycpO1xuICAgICAgICB0aGlzLkNvbXBsZXRlLnRhc2tDb21wbGV0ZShwYXJlbnQsIGlkLCBsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTsiLCJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbmNsYXNzIExzIHtcbiAgYWRkVG9MUyA9IChvYmopID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShnbG9iYWxzLkxTX0tFWSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH07XG5cbiAgZ2V0RnJvbUxTID0gKCkgPT4ge1xuICAgIGNvbnN0IGxzRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdsb2JhbHMuTFNfS0VZKTtcbiAgICBpZiAobHNEYXRhKSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsc0RhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIHJlbW92ZUZyb21MUyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldEZyb21MUyhnbG9iYWxzLkxTX0tFWSk7XG4gICAgZGF0YS5maWx0ZXIoKGVsLCBpKSA9PiB7XG4gICAgICBpZiAoZWwuaW5kZXggPT09IE51bWJlcihpZCkpIHtcbiAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHRoaXMuYWRkVG9MUyhkYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMczsiLCJpbXBvcnQgTHMgZnJvbSAnLi9Mcy5qcyc7XG5cbmNsYXNzIFJlbW92ZUl0ZW1zIGV4dGVuZHMgTHMge1xuICBsaXN0O1xuXG4gIHJlY2FsY3VsYXRlSW5kZXhlcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbGlzdC1pdGVtJyldO1xuICAgIGNvbnN0IGxpc3RSZXZlcnNlID0gbGlzdEl0ZW1zLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxpc3RSZXZlcnNlLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgdGhpcy5saXN0W2ldLmluZGV4ID0gaTtcbiAgICAgIGxpc3RSZXZlcnNlW2ldLmlkID0gYHRhc2stJHtpfWA7XG4gICAgfVxuICAgIHRoaXMuYWRkVG9MUyh0aGlzLmxpc3QpO1xuICB9O1xuXG4gIHJlbW92ZUl0ZW0gPSAoZSkgPT4ge1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0RnJvbUxTKCk7XG4gICAgY29uc3QgcGFyZW50ID0gZS5jbG9zZXN0KCcudGFzay1saXN0LWl0ZW0nKTtcbiAgICBjb25zdCBpZCA9IE51bWJlcihwYXJlbnQuaWQucmVwbGFjZSgndGFzay0nLCAnJykpO1xuICAgIHRoaXMubGlzdC5zcGxpY2UoaWQsIDEpO1xuXG4gICAgcGFyZW50LnJlbW92ZSgpO1xuICAgIHRoaXMucmVjYWxjdWxhdGVJbmRleGVzKCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbW92ZUl0ZW1zOyIsImltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtLmpzJztcbmltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcblxuY2xhc3MgUmVuZGVyTGlzdCBleHRlbmRzIExzIHtcbiAgbGlzdCA9IFtdO1xuXG4gIHRhc2tMaXN0SXRlbSA9ICd0YXNrLWxpc3QtaXRlbSc7XG5cbiAgY29uc3RydWN0b3IoeyBsaXN0VGFnIH0pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubGlzdFRhZ3MgPSBsaXN0VGFnO1xuXG4gICAgdGhpcy5MaXN0SXRlbSA9IG5ldyBMaXN0SXRlbSgpO1xuICB9XG5cbiAgcmVuZGVyVGVtcGxhdGUgPSAob2JqKSA9PiB7XG4gICAgY29uc3QgY2hlY2tCb3hDbHMgPSAndGRsLWNoZWNrYm94JztcbiAgICBjb25zdCBodG1sID0gYFxuICAgIDxsaSBpZD1cInRhc2stJHtvYmouaW5kZXh9XCIgY2xhc3M9XCIke3RoaXMudGFza0xpc3RJdGVtfSR7b2JqLmNvbXBsZXRlZCA/IGAgJHtnbG9iYWxzLlRBU0tfTElTVF9DT01QTEVURUR9YCA6ICcnfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZGwtbGktY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRkbC1saS1jb250ZW50LWlubmVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIiR7Y2hlY2tCb3hDbHN9XCIgJHtvYmouY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1kZXNjLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtZGVzY1wiIGNvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCI+JHtvYmouZGVzY308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImRyYWduZHJvcC1pY29cIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRyYXNoLWljbyBoaWRlXCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICAgYDtcbiAgICB0aGlzLmxpc3RUYWdzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sKTtcbiAgfTtcblxuICByZW5kZXJPbmUgPSAodGV4dCkgPT4ge1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0RnJvbUxTKCk7XG4gICAgdGhpcy5saXN0LnB1c2goe1xuICAgICAgaW5kZXg6IHRoaXMubGlzdC5sZW5ndGgsXG4gICAgICBkZXNjOiB0ZXh0LFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICB9KTtcbiAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgICB0aGlzLnJlbmRlclRlbXBsYXRlKHRoaXMubGlzdC5hdCgtMSkpO1xuXG4gICAgY29uc3QgbGFzdEluc2VydElkID0gdGhpcy5saXN0LmF0KC0xKS5pbmRleDtcbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnQodGhpcy5saXN0LCBsYXN0SW5zZXJ0SWQpO1xuICB9O1xuXG4gIHJlbmRlck1hbnkgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5nZXRGcm9tTFMoKTtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBsaXN0LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKGVsKTtcbiAgICB9KTtcbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnRzKHRoaXMubGlzdCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckxpc3Q7IiwiaW1wb3J0IFJlbmRlckxpc3QgZnJvbSAnLi9SZW5kZXJMaXN0LmpzJztcbmltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCBDb21wbGV0ZSBmcm9tICcuL0NvbXBsZXRlLmpzJztcblxuY2xhc3MgVG9Eb0xpc3Qge1xuICBsaXN0ID0gW107XG5cbiAgTHMgPSBuZXcgTHMoKTtcblxuICBDb21wbGV0ZSA9IG5ldyBDb21wbGV0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHsgbGlzdFRhZywgZm9ybTogeyB0YWcsIGlucHV0TmFtZSB9IH0pIHtcbiAgICB0aGlzLmZvcm0gPSB7IHRhZywgaW5wdXROYW1lIH07XG5cbiAgICB0aGlzLlJlbmRlckxpc3QgPSBuZXcgUmVuZGVyTGlzdCh7XG4gICAgICBsaXN0VGFnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpc3RUYWcpLFxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VGb3JtID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IGlucHV0RGF0YSA9IGZvcm1EYXRhLmdldCh0aGlzLmZvcm0uaW5wdXROYW1lKTtcbiAgICBpZiAoaW5wdXREYXRhLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLlJlbmRlckxpc3QucmVuZGVyT25lKGlucHV0RGF0YSk7XG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICB9O1xuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmZvcm0udGFnKTtcblxuICAgIHRoaXMuUmVuZGVyTGlzdC5yZW5kZXJNYW55KCk7XG4gICAgZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMucGFyc2VGb3JtKTtcblxuICAgIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyLWFsbCBidXR0b24nKTtcblxuICAgIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IHRoaXMuTHMuZ2V0RnJvbUxTKCk7XG4gICAgICB0aGlzLkNvbXBsZXRlLmNsZWFyQ29tcGxldGVkKGxpc3QpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvTGlzdDsiLCJjb25zdCBUQVNLX0xJU1RfQ09NUExFVEVEID0gJ3Rhc2stbGlzdC1jb21wbGV0ZWQnO1xuY29uc3QgVEFTS19MSVNUX0lURU0gPSAndGFzay1saXN0LWl0ZW0nO1xuY29uc3QgTFNfS0VZID0gJ3RvRG9MaXN0JztcbmV4cG9ydCB7IFRBU0tfTElTVF9DT01QTEVURUQsIExTX0tFWSwgVEFTS19MSVNUX0lURU0gfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiVG9Eb0xpc3QiLCJUb0RvIiwibGlzdFRhZyIsImZvcm0iLCJ0YWciLCJpbnB1dE5hbWUiLCJpbml0IiwiTHMiLCJnbG9iYWxzIiwiUmVtb3ZlSXRlbXMiLCJDb21wbGV0ZSIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIlRBU0tfTElTVF9JVEVNIiwiZmlsdGVyIiwiZWwiLCJpIiwiYXJyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJUQVNLX0xJU1RfQ09NUExFVEVEIiwicmVtb3ZlSXRlbSIsInBhcmVudCIsImlkIiwibGlzdCIsImdldEZyb21MUyIsIm1hcCIsIk51bWJlciIsImluZGV4IiwicmVtb3ZlIiwiYWRkIiwiYWRkVG9MUyIsIkxpc3RJdGVtIiwiY2xzIiwiaWNvIiwiZm9yRWFjaCIsInRvZ2dsZSIsImUiLCJudW1JZCIsImN1cnJlbnRUYXJnZXQiLCJyZXBsYWNlIiwiZHJhZ0ljbyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmFzaEljbyIsImN1cnJlbnRQYXJlbnRFbCIsImN1cnJlbnRQYXJlbnRJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRlc2NUZXh0IiwiaW5uZXJUZXh0IiwicGFyZW50Tm9kZSIsImlubmVySFRNTCIsInRlbXBJbnB1dCIsImVuZE9mVGV4dCIsInZhbHVlIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJmb2N1cyIsInRvZ2dsZUljb25zIiwiZGVzYyIsImxpc3RJdGVtIiwiZWRpdCIsImNoZWNrYm94IiwidGFza0NvbXBsZXRlIiwibGlzdEl0ZW1zIiwidG9nZ2xlRXYiLCJjbG9zZXN0Iiwib2JqIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkxTX0tFWSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsc0RhdGEiLCJnZXRJdGVtIiwiZGF0YSIsInBhcnNlIiwic3BsaWNlIiwibGlzdFJldmVyc2UiLCJyZXZlcnNlIiwicmVjYWxjdWxhdGVJbmRleGVzIiwiUmVuZGVyTGlzdCIsImNoZWNrQm94Q2xzIiwiaHRtbCIsInRhc2tMaXN0SXRlbSIsImxpc3RUYWdzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGV4dCIsInB1c2giLCJyZW5kZXJUZW1wbGF0ZSIsImF0IiwibGFzdEluc2VydElkIiwibGlzdEl0ZW1FdmVudCIsImxpc3RJdGVtRXZlbnRzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpbnB1dERhdGEiLCJnZXQiLCJ0cmltIiwicmVuZGVyT25lIiwicmVzZXQiLCJmb3JtRWwiLCJyZW5kZXJNYW55IiwicGFyc2VGb3JtIiwiY2xlYXJCdG4iLCJjbGVhckNvbXBsZXRlZCJdLCJzb3VyY2VSb290IjoiIn0=