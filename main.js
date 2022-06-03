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
    var completed = document.querySelectorAll(".".concat(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED));
    completed.forEach(function (el) {
      _this.RemoveItems.removeItem(el);
    });
  });

  _defineProperty(this, "taskComplete", function (parent, id) {
    var list = _this.Ls.getFromLS();

    list.map(function (el) {
      if (Number(id) === el.index) {
        if (el.completed === 1) {
          parent.classList.remove(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED);
          el.completed = 0;
        } else {
          parent.classList.add(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED);
          el.completed = 1;
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
        completed: 0
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
/* harmony export */   "TASK_LIST_COMPLETED": () => (/* binding */ TASK_LIST_COMPLETED)
/* harmony export */ });
var TASK_LIST_COMPLETED = 'task-list-completed';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dG8tZG9saXN0Ly4vc3JjL2pzL0NvbXBsZXRlLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvTHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL1JlbW92ZS5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvUmVuZGVyTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL3Njc3MvYmFzZS5zY3NzPzljMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vanMvVG9Eb0xpc3QuanMnO1xuXG5jb25zdCBUb0RvID0gbmV3IFRvRG9MaXN0KHtcbiAgbGlzdFRhZzogJyNhZGQtdGFzay1saScsXG4gIGZvcm06IHtcbiAgICB0YWc6ICcjYWRkLXRhc2stbGkgZm9ybScsXG4gICAgaW5wdXROYW1lOiAnYWRkLXRhc2snLFxuICB9LFxufSk7XG5cblRvRG8uaW5pdCgpOyIsImltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCBSZW1vdmVJdGVtcyBmcm9tICcuL1JlbW92ZS5qcyc7XG5cbmNsYXNzIENvbXBsZXRlIHtcbiAgTHMgPSBuZXcgTHMoKTtcblxuICBSZW1vdmVJdGVtcyA9IG5ldyBSZW1vdmVJdGVtcygpO1xuXG4gIGNsZWFyQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2dsb2JhbHMuVEFTS19MSVNUX0NPTVBMRVRFRH1gKTtcbiAgICBjb21wbGV0ZWQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHRoaXMuUmVtb3ZlSXRlbXMucmVtb3ZlSXRlbShlbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdGFza0NvbXBsZXRlID0gKHBhcmVudCwgaWQpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5Mcy5nZXRGcm9tTFMoKTtcbiAgICBsaXN0Lm1hcCgoZWwpID0+IHtcbiAgICAgIGlmIChOdW1iZXIoaWQpID09PSBlbC5pbmRleCkge1xuXG4gICAgICAgIGlmIChlbC5jb21wbGV0ZWQgPT09IDEpIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShnbG9iYWxzLlRBU0tfTElTVF9DT01QTEVURUQpO1xuICAgICAgICAgIGVsLmNvbXBsZXRlZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoZ2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEKTtcbiAgICAgICAgICBlbC5jb21wbGV0ZWQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSk7XG4gICAgdGhpcy5Mcy5hZGRUb0xTKGxpc3QpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0ZTsiLCJpbXBvcnQgTHMgZnJvbSAnLi9Mcy5qcyc7XG5pbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9Db21wbGV0ZS5qcyc7XG5pbXBvcnQgUmVtb3ZlSXRlbXMgZnJvbSAnLi9SZW1vdmUuanMnO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIExzIHtcbiAgbGlzdCA9IFtdO1xuXG4gIENvbXBsZXRlID0gbmV3IENvbXBsZXRlKCk7XG5cbiAgUmVtb3ZlSXRlbXMgPSBuZXcgUmVtb3ZlSXRlbXMoKTtcblxuICB0b2dnbGVJY29ucyA9IChjbHMsIC4uLmljbykgPT4ge1xuICAgIGljby5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGVkaXQgPSAoZSkgPT4ge1xuICAgIC8vIGNvbnN0IGxpc3QgPSB0aGlzLmdldEZyb21MUygpXG4gICAgY29uc3QgbnVtSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQucmVwbGFjZSgndGFzay0nLCAnJyk7XG5cbiAgICBjb25zdCBkcmFnSWNvID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnbmRyb3AtaWNvJyk7XG4gICAgY29uc3QgdHJhc2hJY28gPSBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljbycpO1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0RnJvbUxTKCk7XG5cbiAgICB0cmFzaEljby5jdXJyZW50UGFyZW50RWwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgdHJhc2hJY28uY3VycmVudFBhcmVudElkID0gbnVtSWQ7XG4gICAgdHJhc2hJY28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy5SZW1vdmVJdGVtcy5yZW1vdmVJdGVtKGUudGFyZ2V0KTtcbiAgICAgIC8vIHRoaXMuUmVtb3ZlSXRlbXMucmVjYWxjdWxhdGVJbmRleGVzKCk7XG4gICAgfSk7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1kZXNjJykpIHtcbiAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYyc7XG4gICAgICBjb25zdCBkZXNjVGV4dCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nbGlzdC1kZXNjLWVkaXQnIHZhbHVlPScke2Rlc2NUZXh0fSc+XG4gICAgICA8c3BhbiBjbGFzcz1cImVkaXQtaXRlbS1wcm9tcHRcIj5DbGljayBpbnB1dCB0byBzYXZlPC9zcGFuPlxuICAgICAgYDtcblxuICAgICAgY29uc3QgdGVtcElucHV0ID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWRlc2MtZWRpdCcpO1xuICAgICAgY29uc3QgZW5kT2ZUZXh0ID0gdGVtcElucHV0LnZhbHVlLmxlbmd0aDtcbiAgICAgIHRlbXBJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShlbmRPZlRleHQsIGVuZE9mVGV4dCk7XG4gICAgICB0ZW1wSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRoaXMudG9nZ2xlSWNvbnMoJ2hpZGUnLCBkcmFnSWNvLCB0cmFzaEljbyk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1kZXNjLWVkaXQnKSkge1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd1bnNldCc7XG4gICAgICBjb25zdCBkZXNjVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5saXN0Lm1hcCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmluZGV4ID09PSBOdW1iZXIobnVtSWQpKSB7XG4gICAgICAgICAgZWwuZGVzYyA9IGRlc2NUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0pO1xuXG4gICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImxpc3QtZGVzY1wiPiR7ZGVzY1RleHR9PC9zcGFuPmA7XG4gICAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgICAgIHRoaXMudG9nZ2xlSWNvbnMoJ2hpZGUnLCBkcmFnSWNvLCB0cmFzaEljbyk7XG4gICAgfVxuICB9O1xuXG4gIGxpc3RJdGVtRXZlbnQgPSAobGlzdCwgaWQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aWR9LnRhc2stbGlzdC1pdGVtYCk7XG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVkaXQpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRkbC1jaGVja2JveCcpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuQ29tcGxldGUudGFza0NvbXBsZXRlKGxpc3RJdGVtLCBpZCk7XG4gICAgfSk7XG5cbiAgfTtcblxuICBsaXN0SXRlbUV2ZW50cyA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbGlzdC1pdGVtJyk7XG5cbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLnRvZ2dsZUV2ID0gMDtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRkbC1jaGVja2JveCcpO1xuICAgIGNoZWNrYm94LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzay1saXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQuaWQucmVwbGFjZSgndGFzay0nLCAnJyk7XG4gICAgICAgIHRoaXMuQ29tcGxldGUudGFza0NvbXBsZXRlKHBhcmVudCwgaWQsIGxpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtOyIsImltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcblxuY2xhc3MgTHMge1xuICBhZGRUb0xTID0gKG9iaikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdsb2JhbHMuTFNfS0VZLCBKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgfTtcblxuICBnZXRGcm9tTFMgPSAoKSA9PiB7XG4gICAgY29uc3QgbHNEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2xvYmFscy5MU19LRVkpO1xuICAgIGlmIChsc0RhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxzRGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgcmVtb3ZlRnJvbUxTID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RnJvbUxTKGdsb2JhbHMuTFNfS0VZKTtcbiAgICBkYXRhLmZpbHRlcigoZWwsIGkpID0+IHtcbiAgICAgIGlmIChlbC5pbmRleCA9PT0gTnVtYmVyKGlkKSkge1xuICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy5hZGRUb0xTKGRhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExzOyIsImltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcblxuY2xhc3MgUmVtb3ZlSXRlbXMgZXh0ZW5kcyBMcyB7XG4gIGxpc3Q7XG5cbiAgcmVjYWxjdWxhdGVJbmRleGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1saXN0LWl0ZW0nKV07XG4gICAgY29uc3QgbGlzdFJldmVyc2UgPSBsaXN0SXRlbXMucmV2ZXJzZSgpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsaXN0UmV2ZXJzZS5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgIHRoaXMubGlzdFtpXS5pbmRleCA9IGk7XG4gICAgICBsaXN0UmV2ZXJzZVtpXS5pZCA9IGB0YXNrLSR7aX1gO1xuICAgIH1cbiAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgfTtcblxuICByZW1vdmVJdGVtID0gKGUpID0+IHtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEZyb21MUygpO1xuICAgIGNvbnN0IHBhcmVudCA9IGUuY2xvc2VzdCgnLnRhc2stbGlzdC1pdGVtJyk7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIocGFyZW50LmlkLnJlcGxhY2UoJ3Rhc2stJywgJycpKTtcbiAgICB0aGlzLmxpc3Quc3BsaWNlKGlkLCAxKTtcblxuICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICB0aGlzLnJlY2FsY3VsYXRlSW5kZXhlcygpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVJdGVtczsiLCJpbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbS5qcyc7XG5pbXBvcnQgTHMgZnJvbSAnLi9Mcy5qcyc7XG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbmNsYXNzIFJlbmRlckxpc3QgZXh0ZW5kcyBMcyB7XG4gIGxpc3QgPSBbXTtcblxuICB0YXNrTGlzdEl0ZW0gPSAndGFzay1saXN0LWl0ZW0nO1xuXG4gIGNvbnN0cnVjdG9yKHsgbGlzdFRhZyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxpc3RUYWdzID0gbGlzdFRhZztcblxuICAgIHRoaXMuTGlzdEl0ZW0gPSBuZXcgTGlzdEl0ZW0oKTtcbiAgfVxuXG4gIHJlbmRlclRlbXBsYXRlID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IGNoZWNrQm94Q2xzID0gJ3RkbC1jaGVja2JveCc7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICA8bGkgaWQ9XCJ0YXNrLSR7b2JqLmluZGV4fVwiIGNsYXNzPVwiJHt0aGlzLnRhc2tMaXN0SXRlbX0ke29iai5jb21wbGV0ZWQgPyBgICR7Z2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEfWAgOiAnJ31cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGRsLWxpLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZGwtbGktY29udGVudC1pbm5lclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCIke2NoZWNrQm94Q2xzfVwiICR7b2JqLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZGVzYy1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LWRlc2NcIiBjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiPiR7b2JqLmRlc2N9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJkcmFnbmRyb3AtaWNvXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0cmFzaC1pY28gaGlkZVwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICAgIGA7XG4gICAgdGhpcy5saXN0VGFncy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7XG4gIH07XG5cbiAgcmVuZGVyT25lID0gKHRleHQpID0+IHtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEZyb21MUygpO1xuICAgIHRoaXMubGlzdC5wdXNoKHtcbiAgICAgIGluZGV4OiB0aGlzLmxpc3QubGVuZ3RoLFxuICAgICAgZGVzYzogdGV4dCxcbiAgICAgIGNvbXBsZXRlZDogMCxcbiAgICB9KTtcbiAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgICB0aGlzLnJlbmRlclRlbXBsYXRlKHRoaXMubGlzdC5hdCgtMSkpO1xuXG4gICAgY29uc3QgbGFzdEluc2VydElkID0gdGhpcy5saXN0LmF0KC0xKS5pbmRleDtcbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnQodGhpcy5saXN0LCBsYXN0SW5zZXJ0SWQpO1xuICB9O1xuXG4gIHJlbmRlck1hbnkgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5nZXRGcm9tTFMoKTtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBsaXN0LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKGVsKTtcbiAgICB9KTtcbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnRzKHRoaXMubGlzdCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckxpc3Q7IiwiaW1wb3J0IFJlbmRlckxpc3QgZnJvbSAnLi9SZW5kZXJMaXN0LmpzJztcbmltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCBDb21wbGV0ZSBmcm9tICcuL0NvbXBsZXRlLmpzJztcblxuY2xhc3MgVG9Eb0xpc3Qge1xuICBsaXN0ID0gW107XG5cbiAgTHMgPSBuZXcgTHMoKTtcblxuICBDb21wbGV0ZSA9IG5ldyBDb21wbGV0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHsgbGlzdFRhZywgZm9ybTogeyB0YWcsIGlucHV0TmFtZSB9IH0pIHtcbiAgICB0aGlzLmZvcm0gPSB7IHRhZywgaW5wdXROYW1lIH07XG5cbiAgICB0aGlzLlJlbmRlckxpc3QgPSBuZXcgUmVuZGVyTGlzdCh7XG4gICAgICBsaXN0VGFnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpc3RUYWcpLFxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VGb3JtID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IGlucHV0RGF0YSA9IGZvcm1EYXRhLmdldCh0aGlzLmZvcm0uaW5wdXROYW1lKTtcbiAgICBpZiAoaW5wdXREYXRhLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLlJlbmRlckxpc3QucmVuZGVyT25lKGlucHV0RGF0YSk7XG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICB9O1xuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmZvcm0udGFnKTtcblxuICAgIHRoaXMuUmVuZGVyTGlzdC5yZW5kZXJNYW55KCk7XG4gICAgZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMucGFyc2VGb3JtKTtcblxuICAgIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyLWFsbCBidXR0b24nKTtcblxuICAgIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IHRoaXMuTHMuZ2V0RnJvbUxTKCk7XG4gICAgICB0aGlzLkNvbXBsZXRlLmNsZWFyQ29tcGxldGVkKGxpc3QpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvTGlzdDsiLCJjb25zdCBUQVNLX0xJU1RfQ09NUExFVEVEID0gJ3Rhc2stbGlzdC1jb21wbGV0ZWQnO1xuY29uc3QgTFNfS0VZID0gJ3RvRG9MaXN0JztcbmV4cG9ydCB7IFRBU0tfTElTVF9DT01QTEVURUQsIExTX0tFWSB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJUb0RvTGlzdCIsIlRvRG8iLCJsaXN0VGFnIiwiZm9ybSIsInRhZyIsImlucHV0TmFtZSIsImluaXQiLCJMcyIsImdsb2JhbHMiLCJSZW1vdmVJdGVtcyIsIkNvbXBsZXRlIiwiY29tcGxldGVkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiVEFTS19MSVNUX0NPTVBMRVRFRCIsImZvckVhY2giLCJlbCIsInJlbW92ZUl0ZW0iLCJwYXJlbnQiLCJpZCIsImxpc3QiLCJnZXRGcm9tTFMiLCJtYXAiLCJOdW1iZXIiLCJpbmRleCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFkZFRvTFMiLCJMaXN0SXRlbSIsImNscyIsImljbyIsInRvZ2dsZSIsImUiLCJudW1JZCIsImN1cnJlbnRUYXJnZXQiLCJyZXBsYWNlIiwiZHJhZ0ljbyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmFzaEljbyIsImN1cnJlbnRQYXJlbnRFbCIsImN1cnJlbnRQYXJlbnRJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGVzY1RleHQiLCJpbm5lclRleHQiLCJwYXJlbnROb2RlIiwiaW5uZXJIVE1MIiwidGVtcElucHV0IiwiZW5kT2ZUZXh0IiwidmFsdWUiLCJsZW5ndGgiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImZvY3VzIiwidG9nZ2xlSWNvbnMiLCJkZXNjIiwibGlzdEl0ZW0iLCJlZGl0IiwiY2hlY2tib3giLCJ0YXNrQ29tcGxldGUiLCJsaXN0SXRlbXMiLCJ0b2dnbGVFdiIsImNsb3Nlc3QiLCJvYmoiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTFNfS0VZIiwiSlNPTiIsInN0cmluZ2lmeSIsImxzRGF0YSIsImdldEl0ZW0iLCJkYXRhIiwicGFyc2UiLCJmaWx0ZXIiLCJpIiwic3BsaWNlIiwibGlzdFJldmVyc2UiLCJyZXZlcnNlIiwicmVjYWxjdWxhdGVJbmRleGVzIiwiUmVuZGVyTGlzdCIsImNoZWNrQm94Q2xzIiwiaHRtbCIsInRhc2tMaXN0SXRlbSIsImxpc3RUYWdzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGV4dCIsInB1c2giLCJyZW5kZXJUZW1wbGF0ZSIsImF0IiwibGFzdEluc2VydElkIiwibGlzdEl0ZW1FdmVudCIsImxpc3RJdGVtRXZlbnRzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpbnB1dERhdGEiLCJnZXQiLCJ0cmltIiwicmVuZGVyT25lIiwicmVzZXQiLCJmb3JtRWwiLCJyZW5kZXJNYW55IiwicGFyc2VGb3JtIiwiY2xlYXJCdG4iLCJjbGVhckNvbXBsZXRlZCJdLCJzb3VyY2VSb290IjoiIn0=