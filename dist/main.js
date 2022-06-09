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

    completed.filter(function (el) {
      if (el.classList.contains(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED)) {
        _this.RemoveItems.removeItem(el);
      }

      return el;
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

    _defineProperty(_assertThisInitialized(_this), "dragIco", void 0);

    _defineProperty(_assertThisInitialized(_this), "trashIco", void 0);

    _defineProperty(_assertThisInitialized(_this), "toggleIcons", function (cls) {
      for (var _len2 = arguments.length, ico = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        ico[_key2 - 1] = arguments[_key2];
      }

      ico.forEach(function (el) {
        el.classList.toggle(cls);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveListDescription", function (element, list, elId) {
      element.currentTarget.style.backgroundColor = 'unset';
      var descText = element.target.value;
      list.map(function (el) {
        if (el.index === Number(elId)) {
          el.desc = descText;
        }

        return el;
      });
      element.target.parentNode.innerHTML = "<span class=\"list-desc\">".concat(descText, "</span>");

      _this.addToLS(list);

      _this.toggleIcons('hide', _this.dragIco, _this.trashIco);
    });

    _defineProperty(_assertThisInitialized(_this), "editListDescription", function (element) {
      element.currentTarget.style.backgroundColor = '#ccc';
      var descText = element.target.innerText;
      element.target.parentNode.innerHTML = "<input type='text' class='list-desc-edit' value='".concat(descText, "'>\n    <span class=\"edit-item-prompt\">Click input to save</span>\n    ");
      var tempInput = element.currentTarget.querySelector('.list-desc-edit');
      var endOfText = tempInput.value.length;
      tempInput.setSelectionRange(endOfText, endOfText);
      tempInput.focus();

      _this.toggleIcons('hide', _this.dragIco, _this.trashIco);
    });

    _defineProperty(_assertThisInitialized(_this), "edit", function (e) {
      var numId = e.currentTarget.id.replace('task-', '');
      _this.dragIco = e.currentTarget.querySelector('.dragndrop-ico');
      _this.trashIco = e.currentTarget.querySelector('.trash-ico');
      _this.list = _this.getFromLS();
      _this.trashIco.currentParentEl = e.currentTarget;
      _this.trashIco.currentParentId = numId;

      _this.trashIco.addEventListener('click', function (e) {
        _this.RemoveItems.removeItem(e.target);
      });

      if (e.target.classList.contains('list-desc')) {
        _this.editListDescription(e);
      }

      if (e.target.classList.contains('list-desc-edit')) {
        _this.saveListDescription(e, _this.list, numId);
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
      var newId = _this.list.length;

      _this.list.push({
        index: newId,
        desc: text,
        completed: false
      });

      _this.addToLS(_this.list);

      _this.renderTemplate(_this.list[_this.list.length - 1]);

      var lastInsertId = _this.list[_this.list.length - 1].index;

      _this.ListItem.listItemEvent(_this.list, lastInsertId);

      return newId;
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
      _this.Complete.clearCompleted();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPQyxTQUFTLEVBQVRBO0VBQVAsQ0FBWjtFQUVBLEtBQUtrRixVQUFMLEdBQWtCLElBQUlBLHNEQUFKLENBQWU7SUFDL0JyRixPQUFPLEVBQUVVLFFBQVEsQ0FBQ3dDLGFBQVQsQ0FBdUJsRCxPQUF2QjtFQURzQixDQUFmLENBQWxCO0FBR0Q7O0FBMEJILGlFQUFlRixRQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBLElBQU1tQixtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNTCxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTTZELE1BQU0sR0FBRyxVQUFmOzs7Ozs7Ozs7Ozs7QUNGQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvQ29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL0xpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9Mcy5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvUmVtb3ZlLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9SZW5kZXJMaXN0LmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvc2Nzcy9iYXNlLnNjc3M/OWMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9qcy9Ub0RvTGlzdC5qcyc7XG5cbmNvbnN0IFRvRG8gPSBuZXcgVG9Eb0xpc3Qoe1xuICBsaXN0VGFnOiAnI2FkZC10YXNrLWxpJyxcbiAgZm9ybToge1xuICAgIHRhZzogJyNhZGQtdGFzay1saSBmb3JtJyxcbiAgICBpbnB1dE5hbWU6ICdhZGQtdGFzaycsXG4gIH0sXG59KTtcblxuVG9Eby5pbml0KCk7IiwiaW1wb3J0IExzIGZyb20gJy4vTHMuanMnO1xuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IFJlbW92ZUl0ZW1zIGZyb20gJy4vUmVtb3ZlLmpzJztcblxuY2xhc3MgQ29tcGxldGUge1xuICBMcyA9IG5ldyBMcygpO1xuXG4gIFJlbW92ZUl0ZW1zID0gbmV3IFJlbW92ZUl0ZW1zKCk7XG5cbiAgY2xlYXJDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVkID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2dsb2JhbHMuVEFTS19MSVNUX0lURU19YCldO1xuICAgIGNvbXBsZXRlZC5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGdsb2JhbHMuVEFTS19MSVNUX0NPTVBMRVRFRCkpIHtcbiAgICAgICAgdGhpcy5SZW1vdmVJdGVtcy5yZW1vdmVJdGVtKGVsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbDtcbiAgICB9KTtcbiAgfTtcblxuICB0YXNrQ29tcGxldGUgPSAocGFyZW50LCBpZCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLkxzLmdldEZyb21MUygpO1xuICAgIGxpc3QubWFwKChlbCkgPT4ge1xuICAgICAgaWYgKE51bWJlcihpZCkgPT09IGVsLmluZGV4KSB7XG4gICAgICAgIGlmIChlbC5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShnbG9iYWxzLlRBU0tfTElTVF9DT01QTEVURUQpO1xuICAgICAgICAgIGVsLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKGdsb2JhbHMuVEFTS19MSVNUX0NPTVBMRVRFRCk7XG4gICAgICAgICAgZWwuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsO1xuICAgIH0pO1xuICAgIHRoaXMuTHMuYWRkVG9MUyhsaXN0KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGxldGU7IiwiaW1wb3J0IExzIGZyb20gJy4vTHMuanMnO1xuaW1wb3J0IENvbXBsZXRlIGZyb20gJy4vQ29tcGxldGUuanMnO1xuaW1wb3J0IFJlbW92ZUl0ZW1zIGZyb20gJy4vUmVtb3ZlLmpzJztcblxuY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBMcyB7XG4gIGxpc3QgPSBbXTtcblxuICBDb21wbGV0ZSA9IG5ldyBDb21wbGV0ZSgpO1xuXG4gIFJlbW92ZUl0ZW1zID0gbmV3IFJlbW92ZUl0ZW1zKCk7XG5cbiAgZHJhZ0ljbztcblxuICB0cmFzaEljbztcblxuICB0b2dnbGVJY29ucyA9IChjbHMsIC4uLmljbykgPT4ge1xuICAgIGljby5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHNhdmVMaXN0RGVzY3JpcHRpb24gPSAoZWxlbWVudCwgbGlzdCwgZWxJZCkgPT4ge1xuICAgIGVsZW1lbnQuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndW5zZXQnO1xuICAgIGNvbnN0IGRlc2NUZXh0ID0gZWxlbWVudC50YXJnZXQudmFsdWU7XG4gICAgbGlzdC5tYXAoKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuaW5kZXggPT09IE51bWJlcihlbElkKSkge1xuICAgICAgICBlbC5kZXNjID0gZGVzY1RleHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSk7XG5cbiAgICBlbGVtZW50LnRhcmdldC5wYXJlbnROb2RlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImxpc3QtZGVzY1wiPiR7ZGVzY1RleHR9PC9zcGFuPmA7XG4gICAgdGhpcy5hZGRUb0xTKGxpc3QpO1xuICAgIHRoaXMudG9nZ2xlSWNvbnMoJ2hpZGUnLCB0aGlzLmRyYWdJY28sIHRoaXMudHJhc2hJY28pO1xuICB9O1xuXG4gIGVkaXRMaXN0RGVzY3JpcHRpb24gPSAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYyc7XG4gICAgY29uc3QgZGVzY1RleHQgPSBlbGVtZW50LnRhcmdldC5pbm5lclRleHQ7XG4gICAgZWxlbWVudC50YXJnZXQucGFyZW50Tm9kZS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdsaXN0LWRlc2MtZWRpdCcgdmFsdWU9JyR7ZGVzY1RleHR9Jz5cbiAgICA8c3BhbiBjbGFzcz1cImVkaXQtaXRlbS1wcm9tcHRcIj5DbGljayBpbnB1dCB0byBzYXZlPC9zcGFuPlxuICAgIGA7XG5cbiAgICBjb25zdCB0ZW1wSW5wdXQgPSBlbGVtZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLmxpc3QtZGVzYy1lZGl0Jyk7XG4gICAgY29uc3QgZW5kT2ZUZXh0ID0gdGVtcElucHV0LnZhbHVlLmxlbmd0aDtcbiAgICB0ZW1wSW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoZW5kT2ZUZXh0LCBlbmRPZlRleHQpO1xuICAgIHRlbXBJbnB1dC5mb2N1cygpO1xuICAgIHRoaXMudG9nZ2xlSWNvbnMoJ2hpZGUnLCB0aGlzLmRyYWdJY28sIHRoaXMudHJhc2hJY28pO1xuICB9O1xuXG4gIGVkaXQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG51bUlkID0gZS5jdXJyZW50VGFyZ2V0LmlkLnJlcGxhY2UoJ3Rhc2stJywgJycpO1xuXG4gICAgdGhpcy5kcmFnSWNvID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnbmRyb3AtaWNvJyk7XG4gICAgdGhpcy50cmFzaEljbyA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvJyk7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5nZXRGcm9tTFMoKTtcblxuICAgIHRoaXMudHJhc2hJY28uY3VycmVudFBhcmVudEVsID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIHRoaXMudHJhc2hJY28uY3VycmVudFBhcmVudElkID0gbnVtSWQ7XG4gICAgdGhpcy50cmFzaEljby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLlJlbW92ZUl0ZW1zLnJlbW92ZUl0ZW0oZS50YXJnZXQpO1xuICAgIH0pO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtZGVzYycpKSB7XG4gICAgICB0aGlzLmVkaXRMaXN0RGVzY3JpcHRpb24oZSk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1kZXNjLWVkaXQnKSkge1xuICAgICAgdGhpcy5zYXZlTGlzdERlc2NyaXB0aW9uKGUsIHRoaXMubGlzdCwgbnVtSWQpO1xuICAgIH1cbiAgfTtcblxuICBsaXN0SXRlbUV2ZW50ID0gKGxpc3QsIGlkKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2lkfS50YXNrLWxpc3QtaXRlbWApO1xuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0KTtcbiAgICBjb25zdCBjaGVja2JveCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50ZGwtY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLkNvbXBsZXRlLnRhc2tDb21wbGV0ZShsaXN0SXRlbSwgaWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGxpc3RJdGVtRXZlbnRzID0gKGxpc3QpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1saXN0LWl0ZW0nKTtcblxuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwudG9nZ2xlRXYgPSAwO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVkaXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGRsLWNoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBpZCA9IHBhcmVudC5pZC5yZXBsYWNlKCd0YXNrLScsICcnKTtcbiAgICAgICAgdGhpcy5Db21wbGV0ZS50YXNrQ29tcGxldGUocGFyZW50LCBpZCwgbGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07IiwiaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuXG5jbGFzcyBMcyB7XG4gIGFkZFRvTFMgPSAob2JqKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2xvYmFscy5MU19LRVksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICB9O1xuXG4gIGdldEZyb21MUyA9ICgpID0+IHtcbiAgICBjb25zdCBsc0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnbG9iYWxzLkxTX0tFWSk7XG4gICAgaWYgKGxzRGF0YSkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobHNEYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICByZW1vdmVGcm9tTFMgPSAoaWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRGcm9tTFMoZ2xvYmFscy5MU19LRVkpO1xuICAgIGRhdGEuZmlsdGVyKChlbCwgaSkgPT4ge1xuICAgICAgaWYgKGVsLmluZGV4ID09PSBOdW1iZXIoaWQpKSB7XG4gICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICB0aGlzLmFkZFRvTFMoZGF0YSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTHM7IiwiaW1wb3J0IExzIGZyb20gJy4vTHMuanMnO1xuXG5jbGFzcyBSZW1vdmVJdGVtcyBleHRlbmRzIExzIHtcbiAgbGlzdDtcblxuICByZWNhbGN1bGF0ZUluZGV4ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWxpc3QtaXRlbScpXTtcbiAgICBjb25zdCBsaXN0UmV2ZXJzZSA9IGxpc3RJdGVtcy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsaXN0UmV2ZXJzZS5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgIHRoaXMubGlzdFtpXS5pbmRleCA9IGk7XG4gICAgICBsaXN0UmV2ZXJzZVtpXS5pZCA9IGB0YXNrLSR7aX1gO1xuICAgIH1cbiAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgfTtcblxuICByZW1vdmVJdGVtID0gKGUpID0+IHtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEZyb21MUygpO1xuICAgIGNvbnN0IHBhcmVudCA9IGUuY2xvc2VzdCgnLnRhc2stbGlzdC1pdGVtJyk7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIocGFyZW50LmlkLnJlcGxhY2UoJ3Rhc2stJywgJycpKTtcbiAgICB0aGlzLmxpc3Quc3BsaWNlKGlkLCAxKTtcblxuICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICB0aGlzLnJlY2FsY3VsYXRlSW5kZXhlcygpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVJdGVtczsiLCJpbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbS5qcyc7XG5pbXBvcnQgTHMgZnJvbSAnLi9Mcy5qcyc7XG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbmNsYXNzIFJlbmRlckxpc3QgZXh0ZW5kcyBMcyB7XG4gIGxpc3QgPSBbXTtcblxuICB0YXNrTGlzdEl0ZW0gPSAndGFzay1saXN0LWl0ZW0nO1xuXG4gIGNvbnN0cnVjdG9yKHsgbGlzdFRhZyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxpc3RUYWdzID0gbGlzdFRhZztcblxuICAgIHRoaXMuTGlzdEl0ZW0gPSBuZXcgTGlzdEl0ZW0oKTtcbiAgfVxuXG4gIHJlbmRlclRlbXBsYXRlID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IGNoZWNrQm94Q2xzID0gJ3RkbC1jaGVja2JveCc7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICA8bGkgaWQ9XCJ0YXNrLSR7b2JqLmluZGV4fVwiIGNsYXNzPVwiJHt0aGlzLnRhc2tMaXN0SXRlbX0ke29iai5jb21wbGV0ZWQgPyBgICR7Z2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEfWAgOiAnJ31cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGRsLWxpLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZGwtbGktY29udGVudC1pbm5lclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCIke2NoZWNrQm94Q2xzfVwiICR7b2JqLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZGVzYy1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LWRlc2NcIiBjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiPiR7b2JqLmRlc2N9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJkcmFnbmRyb3AtaWNvXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0cmFzaC1pY28gaGlkZVwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICAgIGA7XG4gICAgdGhpcy5saXN0VGFncy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7XG4gIH07XG5cbiAgcmVuZGVyT25lID0gKHRleHQpID0+IHtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEZyb21MUygpO1xuICAgIGNvbnN0IG5ld0lkID0gdGhpcy5saXN0Lmxlbmd0aDtcbiAgICB0aGlzLmxpc3QucHVzaCh7XG4gICAgICBpbmRleDogbmV3SWQsXG4gICAgICBkZXNjOiB0ZXh0LFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICB9KTtcbiAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgICB0aGlzLnJlbmRlclRlbXBsYXRlKHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoIC0gMV0pO1xuXG4gICAgY29uc3QgbGFzdEluc2VydElkID0gdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGggLSAxXS5pbmRleDtcbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnQodGhpcy5saXN0LCBsYXN0SW5zZXJ0SWQpO1xuXG4gICAgcmV0dXJuIG5ld0lkO1xuICB9O1xuXG4gIHJlbmRlck1hbnkgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5nZXRGcm9tTFMoKTtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXM7XG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgbGlzdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZShlbCk7XG4gICAgfSk7XG4gICAgdGhpcy5MaXN0SXRlbS5saXN0SXRlbUV2ZW50cyh0aGlzLmxpc3QpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJMaXN0OyIsImltcG9ydCBSZW5kZXJMaXN0IGZyb20gJy4vUmVuZGVyTGlzdC5qcyc7XG5pbXBvcnQgTHMgZnJvbSAnLi9Mcy5qcyc7XG5pbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9Db21wbGV0ZS5qcyc7XG5cbmNsYXNzIFRvRG9MaXN0IHtcbiAgbGlzdCA9IFtdO1xuXG4gIExzID0gbmV3IExzKCk7XG5cbiAgQ29tcGxldGUgPSBuZXcgQ29tcGxldGUoKTtcblxuICBjb25zdHJ1Y3Rvcih7IGxpc3RUYWcsIGZvcm06IHsgdGFnLCBpbnB1dE5hbWUgfSB9KSB7XG4gICAgdGhpcy5mb3JtID0geyB0YWcsIGlucHV0TmFtZSB9O1xuXG4gICAgdGhpcy5SZW5kZXJMaXN0ID0gbmV3IFJlbmRlckxpc3Qoe1xuICAgICAgbGlzdFRhZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaXN0VGFnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlRm9ybSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBpbnB1dERhdGEgPSBmb3JtRGF0YS5nZXQodGhpcy5mb3JtLmlucHV0TmFtZSk7XG4gICAgaWYgKGlucHV0RGF0YS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5SZW5kZXJMaXN0LnJlbmRlck9uZShpbnB1dERhdGEpO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQucmVzZXQoKTtcbiAgfTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5mb3JtLnRhZyk7XG5cbiAgICB0aGlzLlJlbmRlckxpc3QucmVuZGVyTWFueSgpO1xuICAgIGZvcm1FbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnBhcnNlRm9ybSk7XG5cbiAgICBjb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1hbGwgYnV0dG9uJyk7XG5cbiAgICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuQ29tcGxldGUuY2xlYXJDb21wbGV0ZWQoKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7IiwiY29uc3QgVEFTS19MSVNUX0NPTVBMRVRFRCA9ICd0YXNrLWxpc3QtY29tcGxldGVkJztcbmNvbnN0IFRBU0tfTElTVF9JVEVNID0gJ3Rhc2stbGlzdC1pdGVtJztcbmNvbnN0IExTX0tFWSA9ICd0b0RvTGlzdCc7XG5leHBvcnQgeyBUQVNLX0xJU1RfQ09NUExFVEVELCBMU19LRVksIFRBU0tfTElTVF9JVEVNIH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlRvRG9MaXN0IiwiVG9EbyIsImxpc3RUYWciLCJmb3JtIiwidGFnIiwiaW5wdXROYW1lIiwiaW5pdCIsIkxzIiwiZ2xvYmFscyIsIlJlbW92ZUl0ZW1zIiwiQ29tcGxldGUiLCJjb21wbGV0ZWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJUQVNLX0xJU1RfSVRFTSIsImZpbHRlciIsImVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJUQVNLX0xJU1RfQ09NUExFVEVEIiwicmVtb3ZlSXRlbSIsInBhcmVudCIsImlkIiwibGlzdCIsImdldEZyb21MUyIsIm1hcCIsIk51bWJlciIsImluZGV4IiwicmVtb3ZlIiwiYWRkIiwiYWRkVG9MUyIsIkxpc3RJdGVtIiwiY2xzIiwiaWNvIiwiZm9yRWFjaCIsInRvZ2dsZSIsImVsZW1lbnQiLCJlbElkIiwiY3VycmVudFRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGVzY1RleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlc2MiLCJwYXJlbnROb2RlIiwiaW5uZXJIVE1MIiwidG9nZ2xlSWNvbnMiLCJkcmFnSWNvIiwidHJhc2hJY28iLCJpbm5lclRleHQiLCJ0ZW1wSW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiZW5kT2ZUZXh0IiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJmb2N1cyIsImUiLCJudW1JZCIsInJlcGxhY2UiLCJjdXJyZW50UGFyZW50RWwiLCJjdXJyZW50UGFyZW50SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWRpdExpc3REZXNjcmlwdGlvbiIsInNhdmVMaXN0RGVzY3JpcHRpb24iLCJsaXN0SXRlbSIsImVkaXQiLCJjaGVja2JveCIsInRhc2tDb21wbGV0ZSIsImxpc3RJdGVtcyIsInRvZ2dsZUV2IiwiY2xvc2VzdCIsIm9iaiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJMU19LRVkiLCJKU09OIiwic3RyaW5naWZ5IiwibHNEYXRhIiwiZ2V0SXRlbSIsImRhdGEiLCJwYXJzZSIsImkiLCJzcGxpY2UiLCJsaXN0UmV2ZXJzZSIsInJldmVyc2UiLCJyZWNhbGN1bGF0ZUluZGV4ZXMiLCJSZW5kZXJMaXN0IiwiY2hlY2tCb3hDbHMiLCJodG1sIiwidGFza0xpc3RJdGVtIiwibGlzdFRhZ3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZXh0IiwibmV3SWQiLCJwdXNoIiwicmVuZGVyVGVtcGxhdGUiLCJsYXN0SW5zZXJ0SWQiLCJsaXN0SXRlbUV2ZW50IiwibGlzdEl0ZW1FdmVudHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImlucHV0RGF0YSIsImdldCIsInRyaW0iLCJyZW5kZXJPbmUiLCJyZXNldCIsImZvcm1FbCIsInJlbmRlck1hbnkiLCJwYXJzZUZvcm0iLCJjbGVhckJ0biIsImNsZWFyQ29tcGxldGVkIl0sInNvdXJjZVJvb3QiOiIifQ==