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
    document.querySelectorAll(".".concat(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED)).forEach(function (el) {
      _this.RemoveItems.removeItem(el);
    });
  });

  _defineProperty(this, "taskComplete", function (parent, id, list) {
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
      trashIco.currentParentEl = e.currentTarget;
      trashIco.currentParentId = numId;
      trashIco.addEventListener('click', function (e) {
        _this.RemoveItems.removeItem(e.target, _this.list);
      });

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

    _defineProperty(_assertThisInitialized(_this), "listItemEvent", function (list, id) {
      var listItem = document.querySelector("#task-".concat(id, ".task-list-item"));
      listItem.addEventListener('click', _this.edit);
      var checkbox = listItem.querySelector('.tdl-checkbox');
      checkbox.addEventListener('change', function () {
        _this.Complete.taskComplete(listItem, id, list);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "listItemEvents", function (list) {
      _this.list = list;
      var listItems = document.querySelectorAll('.task-list-item');
      listItems.forEach(function (el) {
        el.toggleEv = 0;
        el.addEventListener('click', _this.edit);
      });
      var checkbox = document.querySelectorAll('.tdl-checkbox');
      checkbox.forEach(function (el) {
        el.addEventListener('change', function (e) {
          var parent = e.target.closest('.task-list-item');

          _this.Complete.taskComplete(parent, parent.id.replace('task-', ''), _this.list);
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

    _defineProperty(_assertThisInitialized(_this), "list", _this.getFromLS());

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
      var html = "\n    <li id=\"task-".concat(obj.index, "\" class=\"").concat(_this.taskListItem).concat(obj.completed ? " ".concat(_globals_js__WEBPACK_IMPORTED_MODULE_2__.TASK_LIST_COMPLETED) : '', "\">\n    <div class=\"tdl-li-content\">\n      <div class=\"tdl-li-content-inner\">\n        <input type=\"checkbox\" class=\"").concat(checkBoxCls, "\" ").concat(obj.completed ? 'checked' : '', ">\n        <span class=\"list-desc\" contenteditable=\"false\">").concat(obj.desc, "</span>\n      </div>\n      <span class=\"dragndrop-ico\"></span>\n      <span class=\"trash-ico hide\"></span>\n    </div>\n    </li>\n    ");

      _this.listTags.insertAdjacentHTML('afterend', html);
    });

    _defineProperty(_assertThisInitialized(_this), "renderOne", function (text) {
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
        _this.renderTemplate(el, list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDMEIsYUFBVCxDQUF1QixLQUFJLENBQUNsQyxJQUFMLENBQVVDLEdBQWpDLENBQWY7O0lBRUEsS0FBSSxDQUFDNkUsVUFBTCxDQUFnQnVCLFVBQWhCOztJQUNBRCxNQUFNLENBQUM5RCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFJLENBQUNnRSxTQUF2QztJQUVBLElBQU1DLFFBQVEsR0FBRy9GLFFBQVEsQ0FBQzBCLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWpCO0lBRUFxRSxRQUFRLENBQUNqRSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO01BQ3ZDLElBQU10QixJQUFJLEdBQUcsS0FBSSxDQUFDWixFQUFMLENBQVFtRSxTQUFSLEVBQWI7O01BQ0EsS0FBSSxDQUFDaEUsUUFBTCxDQUFjaUcsY0FBZCxDQUE2QnhGLElBQTdCO0lBQ0QsQ0FIRDtFQUlELENBOUJrRDs7RUFDakQsS0FBS2hCLElBQUwsR0FBWTtJQUFFQyxHQUFHLEVBQUhBLEdBQUY7SUFBT0MsU0FBUyxFQUFUQTtFQUFQLENBQVo7RUFFQSxLQUFLNEUsVUFBTCxHQUFrQixJQUFJQSxzREFBSixDQUFlO0lBQy9CL0UsT0FBTyxFQUFFUyxRQUFRLENBQUMwQixhQUFULENBQXVCbkMsT0FBdkI7RUFEc0IsQ0FBZixDQUFsQjtBQUdEOztBQTJCSCxpRUFBZUYsUUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBLElBQU1hLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1zRCxNQUFNLEdBQUcsVUFBZjs7Ozs7Ozs7Ozs7O0FDREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL0NvbXBsZXRlLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvTHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL1JlbW92ZS5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvUmVuZGVyTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL3Njc3MvYmFzZS5zY3NzPzljMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vanMvVG9Eb0xpc3QuanMnO1xuXG5jb25zdCBUb0RvID0gbmV3IFRvRG9MaXN0KHtcbiAgbGlzdFRhZzogJyNhZGQtdGFzay1saScsXG4gIGZvcm06IHtcbiAgICB0YWc6ICcjYWRkLXRhc2stbGkgZm9ybScsXG4gICAgaW5wdXROYW1lOiAnYWRkLXRhc2snLFxuICB9LFxufSk7XG5cblRvRG8uaW5pdCgpOyIsImltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCBSZW1vdmVJdGVtcyBmcm9tICcuL1JlbW92ZS5qcyc7XG5cbmNsYXNzIENvbXBsZXRlIHtcbiAgTHMgPSBuZXcgTHMoKTtcblxuICBSZW1vdmVJdGVtcyA9IG5ldyBSZW1vdmVJdGVtcygpO1xuXG4gIGNsZWFyQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2dsb2JhbHMuVEFTS19MSVNUX0NPTVBMRVRFRH1gKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgdGhpcy5SZW1vdmVJdGVtcy5yZW1vdmVJdGVtKGVsKTtcbiAgICB9KTtcbiAgfTtcblxuICB0YXNrQ29tcGxldGUgPSAocGFyZW50LCBpZCwgbGlzdCkgPT4ge1xuICAgIGxpc3QubWFwKChlbCkgPT4ge1xuICAgICAgaWYgKE51bWJlcihpZCkgPT09IGVsLmluZGV4KSB7XG4gICAgICAgIGlmIChlbC5jb21wbGV0ZWQgPT09IDEpIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShnbG9iYWxzLlRBU0tfTElTVF9DT01QTEVURUQpO1xuICAgICAgICAgIGVsLmNvbXBsZXRlZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoZ2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEKTtcbiAgICAgICAgICBlbC5jb21wbGV0ZWQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSk7XG5cbiAgICB0aGlzLkxzLmFkZFRvTFMobGlzdCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRlOyIsImltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCBDb21wbGV0ZSBmcm9tICcuL0NvbXBsZXRlLmpzJztcbmltcG9ydCBSZW1vdmVJdGVtcyBmcm9tICcuL1JlbW92ZS5qcyc7XG5cbmNsYXNzIExpc3RJdGVtIGV4dGVuZHMgTHMge1xuICBsaXN0ID0gW107XG5cbiAgQ29tcGxldGUgPSBuZXcgQ29tcGxldGUoKTtcblxuICBSZW1vdmVJdGVtcyA9IG5ldyBSZW1vdmVJdGVtcygpO1xuXG4gIHRvZ2dsZUljb25zID0gKGNscywgLi4uaWNvKSA9PiB7XG4gICAgaWNvLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKGNscyk7XG4gICAgfSk7XG4gIH07XG5cbiAgZWRpdCA9IChlKSA9PiB7XG4gICAgLy8gY29uc3QgbGlzdCA9IHRoaXMuZ2V0RnJvbUxTKClcbiAgICBjb25zdCBudW1JZCA9IGUuY3VycmVudFRhcmdldC5pZC5yZXBsYWNlKCd0YXNrLScsICcnKTtcblxuICAgIGNvbnN0IGRyYWdJY28gPSBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLmRyYWduZHJvcC1pY28nKTtcbiAgICBjb25zdCB0cmFzaEljbyA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvJyk7XG5cbiAgICB0cmFzaEljby5jdXJyZW50UGFyZW50RWwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgdHJhc2hJY28uY3VycmVudFBhcmVudElkID0gbnVtSWQ7XG4gICAgdHJhc2hJY28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy5SZW1vdmVJdGVtcy5yZW1vdmVJdGVtKGUudGFyZ2V0LCB0aGlzLmxpc3QpO1xuICAgIH0pO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1kZXNjJykpIHtcbiAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYyc7XG4gICAgICBjb25zdCBkZXNjVGV4dCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgIGUudGFyZ2V0Lm91dGVySFRNTCA9IGA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J2xpc3QtZGVzYy1lZGl0JyB2YWx1ZT0nJHtkZXNjVGV4dH0nPmA7XG5cbiAgICAgIGNvbnN0IHRlbXBJbnB1dCA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcubGlzdC1kZXNjLWVkaXQnKTtcbiAgICAgIGNvbnN0IGVuZE9mVGV4dCA9IHRlbXBJbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICB0ZW1wSW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoZW5kT2ZUZXh0LCBlbmRPZlRleHQpO1xuICAgICAgdGVtcElucHV0LmZvY3VzKCk7XG4gICAgICB0aGlzLnRvZ2dsZUljb25zKCdoaWRlJywgZHJhZ0ljbywgdHJhc2hJY28pO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaXN0LWRlc2MtZWRpdCcpKSB7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3Vuc2V0JztcbiAgICAgIGNvbnN0IGRlc2NUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLmxpc3QubWFwKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwuaW5kZXggPT09IE51bWJlcihudW1JZCkpIHtcbiAgICAgICAgICBlbC5kZXNjID0gZGVzY1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfSk7XG4gICAgICBlLnRhcmdldC5vdXRlckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJsaXN0LWRlc2NcIj4ke2Rlc2NUZXh0fTwvc3Bhbj5gO1xuICAgICAgdGhpcy5hZGRUb0xTKHRoaXMubGlzdCk7XG4gICAgICB0aGlzLnRvZ2dsZUljb25zKCdoaWRlJywgZHJhZ0ljbywgdHJhc2hJY28pO1xuICAgIH1cbiAgfTtcblxuICBsaXN0SXRlbUV2ZW50ID0gKGxpc3QsIGlkKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2lkfS50YXNrLWxpc3QtaXRlbWApO1xuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0KTtcbiAgICBjb25zdCBjaGVja2JveCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50ZGwtY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLkNvbXBsZXRlLnRhc2tDb21wbGV0ZShsaXN0SXRlbSwgaWQsIGxpc3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGxpc3RJdGVtRXZlbnRzID0gKGxpc3QpID0+IHtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWxpc3QtaXRlbScpO1xuXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC50b2dnbGVFdiA9IDA7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWRpdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZGwtY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2stbGlzdC1pdGVtJyk7XG4gICAgICAgIHRoaXMuQ29tcGxldGUudGFza0NvbXBsZXRlKHBhcmVudCwgcGFyZW50LmlkLnJlcGxhY2UoJ3Rhc2stJywgJycpLCB0aGlzLmxpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtOyIsImltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcblxuY2xhc3MgTHMge1xuICBhZGRUb0xTID0gKG9iaikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdsb2JhbHMuTFNfS0VZLCBKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgfTtcblxuICBnZXRGcm9tTFMgPSAoKSA9PiB7XG4gICAgY29uc3QgbHNEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2xvYmFscy5MU19LRVkpO1xuICAgIGlmIChsc0RhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxzRGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgcmVtb3ZlRnJvbUxTID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RnJvbUxTKGdsb2JhbHMuTFNfS0VZKTtcbiAgICBkYXRhLmZpbHRlcigoZWwsIGkpID0+IHtcbiAgICAgIGlmIChlbC5pbmRleCA9PT0gTnVtYmVyKGlkKSkge1xuICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy5hZGRUb0xTKGRhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExzOyIsImltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcblxuY2xhc3MgUmVtb3ZlSXRlbXMgZXh0ZW5kcyBMcyB7XG4gIGxpc3QgPSB0aGlzLmdldEZyb21MUygpO1xuXG4gIHJlY2FsY3VsYXRlSW5kZXhlcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbGlzdC1pdGVtJyldO1xuXG4gICAgY29uc3QgbGlzdFJldmVyc2UgPSBsaXN0SXRlbXMucmV2ZXJzZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGlzdFJldmVyc2UubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICB0aGlzLmxpc3RbaV0uaW5kZXggPSBpO1xuICAgICAgbGlzdFJldmVyc2VbaV0uaWQgPSBgdGFzay0ke2l9YDtcbiAgICB9XG5cbiAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgfTtcblxuICByZW1vdmVJdGVtID0gKGUpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBlLmNsb3Nlc3QoJy50YXNrLWxpc3QtaXRlbScpO1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKHBhcmVudC5pZC5yZXBsYWNlKCd0YXNrLScsICcnKSk7XG5cbiAgICB0aGlzLmxpc3Quc3BsaWNlKGlkLCAxKTtcblxuICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICB0aGlzLnJlY2FsY3VsYXRlSW5kZXhlcygpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVJdGVtczsiLCJpbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbS5qcyc7XG5pbXBvcnQgTHMgZnJvbSAnLi9Mcy5qcyc7XG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbmNsYXNzIFJlbmRlckxpc3QgZXh0ZW5kcyBMcyB7XG4gIGxpc3QgPSBbXTtcblxuICB0YXNrTGlzdEl0ZW0gPSAndGFzay1saXN0LWl0ZW0nO1xuXG4gIGNvbnN0cnVjdG9yKHsgbGlzdFRhZyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxpc3RUYWdzID0gbGlzdFRhZztcblxuICAgIHRoaXMuTGlzdEl0ZW0gPSBuZXcgTGlzdEl0ZW0oKTtcbiAgfVxuXG4gIHJlbmRlclRlbXBsYXRlID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IGNoZWNrQm94Q2xzID0gJ3RkbC1jaGVja2JveCc7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICA8bGkgaWQ9XCJ0YXNrLSR7b2JqLmluZGV4fVwiIGNsYXNzPVwiJHt0aGlzLnRhc2tMaXN0SXRlbX0ke29iai5jb21wbGV0ZWQgPyBgICR7Z2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEfWAgOiAnJ31cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGRsLWxpLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZGwtbGktY29udGVudC1pbm5lclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCIke2NoZWNrQm94Q2xzfVwiICR7b2JqLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LWRlc2NcIiBjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiPiR7b2JqLmRlc2N9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImRyYWduZHJvcC1pY29cIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRyYXNoLWljbyBoaWRlXCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICAgYDtcbiAgICB0aGlzLmxpc3RUYWdzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sKTtcbiAgfTtcblxuICByZW5kZXJPbmUgPSAodGV4dCkgPT4ge1xuICAgIHRoaXMubGlzdC5wdXNoKHtcbiAgICAgIGluZGV4OiB0aGlzLmxpc3QubGVuZ3RoLFxuICAgICAgZGVzYzogdGV4dCxcbiAgICAgIGNvbXBsZXRlZDogMCxcbiAgICB9KTtcbiAgICB0aGlzLmFkZFRvTFModGhpcy5saXN0KTtcbiAgICB0aGlzLnJlbmRlclRlbXBsYXRlKHRoaXMubGlzdC5hdCgtMSkpO1xuXG4gICAgY29uc3QgbGFzdEluc2VydElkID0gdGhpcy5saXN0LmF0KC0xKS5pbmRleDtcbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnQodGhpcy5saXN0LCBsYXN0SW5zZXJ0SWQpO1xuICB9O1xuXG4gIHJlbmRlck1hbnkgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5nZXRGcm9tTFMoKTtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBsaXN0LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKGVsLCBsaXN0KTtcbiAgICB9KTtcbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnRzKHRoaXMubGlzdCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckxpc3Q7IiwiaW1wb3J0IFJlbmRlckxpc3QgZnJvbSAnLi9SZW5kZXJMaXN0LmpzJztcbmltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCBDb21wbGV0ZSBmcm9tICcuL0NvbXBsZXRlLmpzJztcblxuY2xhc3MgVG9Eb0xpc3Qge1xuICBsaXN0ID0gW107XG5cbiAgTHMgPSBuZXcgTHMoKTtcblxuICBDb21wbGV0ZSA9IG5ldyBDb21wbGV0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHsgbGlzdFRhZywgZm9ybTogeyB0YWcsIGlucHV0TmFtZSB9IH0pIHtcbiAgICB0aGlzLmZvcm0gPSB7IHRhZywgaW5wdXROYW1lIH07XG5cbiAgICB0aGlzLlJlbmRlckxpc3QgPSBuZXcgUmVuZGVyTGlzdCh7XG4gICAgICBsaXN0VGFnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpc3RUYWcpLFxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VGb3JtID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IGlucHV0RGF0YSA9IGZvcm1EYXRhLmdldCh0aGlzLmZvcm0uaW5wdXROYW1lKTtcbiAgICBpZiAoaW5wdXREYXRhLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLlJlbmRlckxpc3QucmVuZGVyT25lKGlucHV0RGF0YSk7XG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICB9O1xuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmZvcm0udGFnKTtcblxuICAgIHRoaXMuUmVuZGVyTGlzdC5yZW5kZXJNYW55KCk7XG4gICAgZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMucGFyc2VGb3JtKTtcblxuICAgIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyLWFsbCBidXR0b24nKTtcblxuICAgIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IHRoaXMuTHMuZ2V0RnJvbUxTKCk7XG4gICAgICB0aGlzLkNvbXBsZXRlLmNsZWFyQ29tcGxldGVkKGxpc3QpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvTGlzdDsiLCJjb25zdCBUQVNLX0xJU1RfQ09NUExFVEVEID0gJ3Rhc2stbGlzdC1jb21wbGV0ZWQnO1xuY29uc3QgTFNfS0VZID0gJ3RvRG9MaXN0JztcbmV4cG9ydCB7IFRBU0tfTElTVF9DT01QTEVURUQsIExTX0tFWSB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJUb0RvTGlzdCIsIlRvRG8iLCJsaXN0VGFnIiwiZm9ybSIsInRhZyIsImlucHV0TmFtZSIsImluaXQiLCJMcyIsImdsb2JhbHMiLCJSZW1vdmVJdGVtcyIsIkNvbXBsZXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiVEFTS19MSVNUX0NPTVBMRVRFRCIsImZvckVhY2giLCJlbCIsInJlbW92ZUl0ZW0iLCJwYXJlbnQiLCJpZCIsImxpc3QiLCJtYXAiLCJOdW1iZXIiLCJpbmRleCIsImNvbXBsZXRlZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFkZFRvTFMiLCJMaXN0SXRlbSIsImNscyIsImljbyIsInRvZ2dsZSIsImUiLCJudW1JZCIsImN1cnJlbnRUYXJnZXQiLCJyZXBsYWNlIiwiZHJhZ0ljbyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmFzaEljbyIsImN1cnJlbnRQYXJlbnRFbCIsImN1cnJlbnRQYXJlbnRJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGVzY1RleHQiLCJpbm5lclRleHQiLCJvdXRlckhUTUwiLCJ0ZW1wSW5wdXQiLCJlbmRPZlRleHQiLCJ2YWx1ZSIsImxlbmd0aCIsInNldFNlbGVjdGlvblJhbmdlIiwiZm9jdXMiLCJ0b2dnbGVJY29ucyIsImRlc2MiLCJsaXN0SXRlbSIsImVkaXQiLCJjaGVja2JveCIsInRhc2tDb21wbGV0ZSIsImxpc3RJdGVtcyIsInRvZ2dsZUV2IiwiY2xvc2VzdCIsIm9iaiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJMU19LRVkiLCJKU09OIiwic3RyaW5naWZ5IiwibHNEYXRhIiwiZ2V0SXRlbSIsImRhdGEiLCJwYXJzZSIsImdldEZyb21MUyIsImZpbHRlciIsImkiLCJzcGxpY2UiLCJsaXN0UmV2ZXJzZSIsInJldmVyc2UiLCJyZWNhbGN1bGF0ZUluZGV4ZXMiLCJSZW5kZXJMaXN0IiwiY2hlY2tCb3hDbHMiLCJodG1sIiwidGFza0xpc3RJdGVtIiwibGlzdFRhZ3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZXh0IiwicHVzaCIsInJlbmRlclRlbXBsYXRlIiwiYXQiLCJsYXN0SW5zZXJ0SWQiLCJsaXN0SXRlbUV2ZW50IiwibGlzdEl0ZW1FdmVudHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImlucHV0RGF0YSIsImdldCIsInRyaW0iLCJyZW5kZXJPbmUiLCJyZXNldCIsImZvcm1FbCIsInJlbmRlck1hbnkiLCJwYXJzZUZvcm0iLCJjbGVhckJ0biIsImNsZWFyQ29tcGxldGVkIl0sInNvdXJjZVJvb3QiOiIifQ==