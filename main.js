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

  _defineProperty(this, "clearCompleted", function (list) {
    console.log('click');
    document.querySelectorAll(".".concat(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED)).forEach(function (el) {
      // console.log(el);
      _this.RemoveItems.removeItem(el, list);
    });
    return;
  });

  _defineProperty(this, "taskComplete", function (parent, id, list) {
    // console.log(el);
    // console.log(id);
    // console.log(list);
    // return;
    // const box = document.querySelector(`#task-${id} .${globals.TASK_LIST_COMPLETED}`);
    // console.log(box);
    // return;
    var checked = 1; // console.log(el);

    list.map(function (el) {
      if (Number(id) === el.index) {
        // console.log(id);
        if (el.completed === 1) {
          parent.classList.remove(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED);
          el.completed = 0;
        } else {
          parent.classList.add(_globals_js__WEBPACK_IMPORTED_MODULE_1__.TASK_LIST_COMPLETED);
          el.completed = 1;
        } // if (el.completed === 0) {
        //   // console.log("ziro");
        //   console.log(el.completed);
        // }
        // if (el.completed === 0) el.completed = 1;
        // el.completed = checked;

      }

      return el;
    });

    _this.Ls.addToLS(list); // console.log(list);
    // box.addEventListener('click', (e) => {
    //   const parentLi = e.target.parentNode.parentNode.parentNode;
    //   if (e.target.checked) {
    //     checked = 1;
    //     parentLi.classList.add(this.taskListCompleted);
    //     this.list.map((el) => {
    //       if (id === el.index) {
    //         el.completed = checked;
    //       }
    //       return el;
    //     });
    //     this.addToLS(this.list);
    //   } else {
    //     checked = 0;
    //     parentLi.classList.remove(this.taskListCompleted);
    //     this.list.map((el) => {
    //       if (id === el.index) {
    //         el.completed = checked;
    //       }
    //       return el;
    //     });
    //     this.addToLS(this.list);
    //   }
    //   this.list = list;
    // });

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
      var numId = e.currentTarget.id.replace('task-', '');
      var dragIco = e.currentTarget.querySelector('.dragndrop-ico');
      var trashIco = e.currentTarget.querySelector('.trash-ico');
      trashIco.currentParentEl = e.currentTarget;
      trashIco.currentParentId = numId;
      trashIco.addEventListener('click', function (e) {
        _this.RemoveItems.removeItem(e, _this.list);
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
      } // console.log('times');
      // if (e.target.classList.contains('tdl-checkbox')) {
      //   // this.changeCompleted(e.currentTarget, numId, e.currentTarget);
      //   // console.log(e.target);
      //   this.changeCompleted(e.currentTarget, numId);
      // }

    });

    _defineProperty(_assertThisInitialized(_this), "listItemEvent", function (list, id) {
      console.log("#task-".concat(id, " .task-list-item"));
      var listItem = document.querySelector("#task-".concat(id, ".task-list-item"));
      listItem.addEventListener('click', _this.edit);
      var checkbox = listItem.querySelector('.tdl-checkbox');
      checkbox.addEventListener('change', function (e) {
        _this.Complete.taskComplete(listItem, id, list);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "listItemEvents", function (list) {
      console.log('list');
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
          console.log(parent);

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
/* harmony import */ var _Ls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ls */ "./src/js/Ls.js");
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

    _defineProperty(_assertThisInitialized(_this), "recalculateIndexes", function (list) {
      var listItems = _toConsumableArray(document.querySelectorAll('.task-list-item'));

      var listReverse = listItems.reverse();

      for (var i = 0; i <= list.length - 1; i += 1) {
        var el = list;
        el[i].index = i;
        listReverse[i].id = "task-".concat(i);
      }

      _this.addToLS(list);
    });

    _defineProperty(_assertThisInitialized(_this), "removeItem", function (e, list) {
      console.log(e);
      var parent = e.closest('.task-list-item');
      var id = Number(parent.id.replace('task-', ''));
      console.log(id);
      console.log(parent);
      list.splice(id, 1);
      parent.remove();

      _this.recalculateIndexes(list);
    });

    return _this;
  }

  return _createClass(RemoveItems);
}(_Ls__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

      console.log(lastInsertId);

      _this.ListItem.listItemEvent(_this.list, lastInsertId);

      return;
    });

    _defineProperty(_assertThisInitialized(_this), "renderMany", function () {
      _this.list = _this.getFromLS();

      var _assertThisInitialize = _assertThisInitialized(_this),
          list = _assertThisInitialize.list;

      if (list.length === 0) return;
      list.forEach(function (el) {
        _this.renderTemplate(el, list);
      });
      console.log('many');

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
    clearBtn.addEventListener('click', function (e) {
      var list = _this.Ls.getFromLS();

      _this.Complete.clearCompleted(list);
    });
  });

  this.form = {
    tag: tag,
    inputName: inputName
  };
  this.RenderList = new _RenderList_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    listTag: document.querySelector(listTag) // listTag: "yoo"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNULENBQUQsRUFBTztNQUN4QyxJQUFNeEIsSUFBSSxHQUFHLEtBQUksQ0FBQ0osRUFBTCxDQUFRc0UsU0FBUixFQUFiOztNQUNBLEtBQUksQ0FBQ25FLFFBQUwsQ0FBY29HLGNBQWQsQ0FBNkJuRyxJQUE3QjtJQUNELENBSEQ7RUFLRCxDQS9Ca0Q7O0VBQ2pELEtBQUtSLElBQUwsR0FBWTtJQUFFQyxHQUFHLEVBQUhBLEdBQUY7SUFBT0MsU0FBUyxFQUFUQTtFQUFQLENBQVo7RUFFQSxLQUFLK0UsVUFBTCxHQUFrQixJQUFJQSxzREFBSixDQUFlO0lBQy9CbEYsT0FBTyxFQUFFWSxRQUFRLENBQUMwQixhQUFULENBQXVCdEMsT0FBdkIsQ0FEc0IsQ0FFL0I7O0VBRitCLENBQWYsQ0FBbEI7QUFJRDs7QUEyQkgsaUVBQWVGLFFBQWY7Ozs7Ozs7Ozs7Ozs7OztBQzFDQSxJQUFNZ0IsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTXNELE1BQU0sR0FBRyxVQUFmOzs7Ozs7Ozs7Ozs7QUNEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvQ29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2pzL0xpc3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9Mcy5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvUmVtb3ZlLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9SZW5kZXJMaXN0LmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvc2Nzcy9iYXNlLnNjc3M/OWMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi9qcy9Ub0RvTGlzdC5qcyc7XG5cbmNvbnN0IFRvRG8gPSBuZXcgVG9Eb0xpc3Qoe1xuICBsaXN0VGFnOiAnI2FkZC10YXNrLWxpJyxcbiAgZm9ybToge1xuICAgIHRhZzogJyNhZGQtdGFzay1saSBmb3JtJyxcbiAgICBpbnB1dE5hbWU6ICdhZGQtdGFzaycsXG4gIH0sXG59KTtcblxuVG9Eby5pbml0KCk7IiwiaW1wb3J0IExzIGZyb20gJy4vTHMuanMnO1xuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IFJlbW92ZUl0ZW1zIGZyb20gJy4vUmVtb3ZlLmpzJztcblxuY2xhc3MgQ29tcGxldGUge1xuICAvLyBMaXN0SXRlbSA9IG5ldyBMaXN0SXRlbSgpO1xuICBMcyA9IG5ldyBMcygpO1xuICBSZW1vdmVJdGVtcyA9IG5ldyBSZW1vdmVJdGVtcygpO1xuICBjbGVhckNvbXBsZXRlZCA9IChsaXN0KSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2dsb2JhbHMuVEFTS19MSVNUX0NPTVBMRVRFRH1gKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZWwpO1xuXG4gICAgICB0aGlzLlJlbW92ZUl0ZW1zLnJlbW92ZUl0ZW0oZWwsIGxpc3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuXG4gIH07XG5cblxuXG5cblxuICB0YXNrQ29tcGxldGUgPSAocGFyZW50LCBpZCwgbGlzdCkgPT4ge1xuXG4gICAgLy8gY29uc29sZS5sb2coZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKGlkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICAvLyByZXR1cm47XG4gICAgLy8gY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpZH0gLiR7Z2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEfWApO1xuXG4gICAgLy8gY29uc29sZS5sb2coYm94KTtcbiAgICAvLyByZXR1cm47XG4gICAgbGV0IGNoZWNrZWQgPSAxO1xuICAgIC8vIGNvbnNvbGUubG9nKGVsKTtcbiAgICBsaXN0Lm1hcCgoZWwpID0+IHtcbiAgICAgIGlmIChOdW1iZXIoaWQpID09PSBlbC5pbmRleCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIGlmIChlbC5jb21wbGV0ZWQgPT09IDEpIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShnbG9iYWxzLlRBU0tfTElTVF9DT01QTEVURUQpO1xuICAgICAgICAgIGVsLmNvbXBsZXRlZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoZ2xvYmFscy5UQVNLX0xJU1RfQ09NUExFVEVEKTtcbiAgICAgICAgICBlbC5jb21wbGV0ZWQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChlbC5jb21wbGV0ZWQgPT09IDApIHtcbiAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhcInppcm9cIik7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coZWwuY29tcGxldGVkKTtcblxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChlbC5jb21wbGV0ZWQgPT09IDApIGVsLmNvbXBsZXRlZCA9IDE7XG4gICAgICAgIC8vIGVsLmNvbXBsZXRlZCA9IGNoZWNrZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSk7XG5cbiAgICB0aGlzLkxzLmFkZFRvTFMobGlzdCk7XG4gICAgLy8gY29uc29sZS5sb2cobGlzdCk7XG4gICAgLy8gYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyAgIGNvbnN0IHBhcmVudExpID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAvLyAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgLy8gICAgIGNoZWNrZWQgPSAxO1xuICAgIC8vICAgICBwYXJlbnRMaS5jbGFzc0xpc3QuYWRkKHRoaXMudGFza0xpc3RDb21wbGV0ZWQpO1xuICAgIC8vICAgICB0aGlzLmxpc3QubWFwKChlbCkgPT4ge1xuICAgIC8vICAgICAgIGlmIChpZCA9PT0gZWwuaW5kZXgpIHtcbiAgICAvLyAgICAgICAgIGVsLmNvbXBsZXRlZCA9IGNoZWNrZWQ7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICAgIHJldHVybiBlbDtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHRoaXMuYWRkVG9MUyh0aGlzLmxpc3QpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY2hlY2tlZCA9IDA7XG4gICAgLy8gICAgIHBhcmVudExpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy50YXNrTGlzdENvbXBsZXRlZCk7XG4gICAgLy8gICAgIHRoaXMubGlzdC5tYXAoKGVsKSA9PiB7XG4gICAgLy8gICAgICAgaWYgKGlkID09PSBlbC5pbmRleCkge1xuICAgIC8vICAgICAgICAgZWwuY29tcGxldGVkID0gY2hlY2tlZDtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgcmV0dXJuIGVsO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgdGhpcy5hZGRUb0xTKHRoaXMubGlzdCk7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgLy8gfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRlOyIsImltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCBDb21wbGV0ZSBmcm9tICcuL0NvbXBsZXRlLmpzJztcbmltcG9ydCBSZW1vdmVJdGVtcyBmcm9tICcuL1JlbW92ZS5qcyc7XG5cbmNsYXNzIExpc3RJdGVtIGV4dGVuZHMgTHMge1xuICBsaXN0ID0gW107XG4gIENvbXBsZXRlID0gbmV3IENvbXBsZXRlKCk7XG4gIFJlbW92ZUl0ZW1zID0gbmV3IFJlbW92ZUl0ZW1zKCk7XG5cblxuICB0b2dnbGVJY29ucyA9IChjbHMsIC4uLmljbykgPT4ge1xuICAgIGljby5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGNoYW5nZUNvbXBsZXRlZCA9IChlbCwgaWQpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhlbCk7XG4gIC8vICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAvLyAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIGlkKTtcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XG4gIC8vICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlIScgKyBpZCk7XG5cbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0RnJvbUxTKHRoaXMubGlzdCkpO1xuICAvLyAgICAgLy8gY29uc29sZS5sb2coZWwpO1xuICAvLyAgICAgdGhpcy5Db21wbGV0ZS50YXNrQ29tcGxldGUoZWwsIGlkLCB0aGlzLmxpc3QpO1xuXG4gIC8vICAgICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICAgIC8vIHRoaXMuQ29tcGxldGUuY2xlYXJDb21wbGV0ZWQodGhpcy5saXN0KTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIGVkaXQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG51bUlkID0gZS5jdXJyZW50VGFyZ2V0LmlkLnJlcGxhY2UoJ3Rhc2stJywgJycpO1xuXG4gICAgY29uc3QgZHJhZ0ljbyA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZHJhZ25kcm9wLWljbycpO1xuICAgIGNvbnN0IHRyYXNoSWNvID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pY28nKTtcblxuICAgIHRyYXNoSWNvLmN1cnJlbnRQYXJlbnRFbCA9IGUuY3VycmVudFRhcmdldDtcbiAgICB0cmFzaEljby5jdXJyZW50UGFyZW50SWQgPSBudW1JZDtcbiAgICB0cmFzaEljby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLlJlbW92ZUl0ZW1zLnJlbW92ZUl0ZW0oZSwgdGhpcy5saXN0KTtcbiAgICB9KTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtZGVzYycpKSB7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnO1xuICAgICAgY29uc3QgZGVzY1RleHQgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgICBlLnRhcmdldC5vdXRlckhUTUwgPSBgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdsaXN0LWRlc2MtZWRpdCcgdmFsdWU9JyR7ZGVzY1RleHR9Jz5gO1xuXG4gICAgICBjb25zdCB0ZW1wSW5wdXQgPSBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLmxpc3QtZGVzYy1lZGl0Jyk7XG4gICAgICBjb25zdCBlbmRPZlRleHQgPSB0ZW1wSW5wdXQudmFsdWUubGVuZ3RoO1xuICAgICAgdGVtcElucHV0LnNldFNlbGVjdGlvblJhbmdlKGVuZE9mVGV4dCwgZW5kT2ZUZXh0KTtcbiAgICAgIHRlbXBJbnB1dC5mb2N1cygpO1xuICAgICAgdGhpcy50b2dnbGVJY29ucygnaGlkZScsIGRyYWdJY28sIHRyYXNoSWNvKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1kZXNjLWVkaXQnKSkge1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd1bnNldCc7XG4gICAgICBjb25zdCBkZXNjVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5saXN0Lm1hcCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmluZGV4ID09PSBOdW1iZXIobnVtSWQpKSB7XG4gICAgICAgICAgZWwuZGVzYyA9IGRlc2NUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0pO1xuICAgICAgZS50YXJnZXQub3V0ZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibGlzdC1kZXNjXCI+JHtkZXNjVGV4dH08L3NwYW4+YDtcbiAgICAgIHRoaXMuYWRkVG9MUyh0aGlzLmxpc3QpO1xuICAgICAgdGhpcy50b2dnbGVJY29ucygnaGlkZScsIGRyYWdJY28sIHRyYXNoSWNvKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ3RpbWVzJyk7XG4gICAgLy8gaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGRsLWNoZWNrYm94JykpIHtcbiAgICAvLyAgIC8vIHRoaXMuY2hhbmdlQ29tcGxldGVkKGUuY3VycmVudFRhcmdldCwgbnVtSWQsIGUuY3VycmVudFRhcmdldCk7XG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgLy8gICB0aGlzLmNoYW5nZUNvbXBsZXRlZChlLmN1cnJlbnRUYXJnZXQsIG51bUlkKTtcbiAgICAvLyB9XG4gIH07XG4gIGxpc3RJdGVtRXZlbnQgPSAobGlzdCwgaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgI3Rhc2stJHtpZH0gLnRhc2stbGlzdC1pdGVtYCk7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2lkfS50YXNrLWxpc3QtaXRlbWApO1xuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0KTtcbiAgICBjb25zdCBjaGVja2JveCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50ZGwtY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuXG4gICAgICB0aGlzLkNvbXBsZXRlLnRhc2tDb21wbGV0ZShsaXN0SXRlbSwgaWQsIGxpc3QpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgbGlzdEl0ZW1FdmVudHMgPSAobGlzdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdsaXN0Jyk7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICBsZXQgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbGlzdC1pdGVtJyk7XG5cblxuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwudG9nZ2xlRXYgPSAwO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVkaXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGRsLWNoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWxpc3QtaXRlbScpO1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnQpO1xuICAgICAgICB0aGlzLkNvbXBsZXRlLnRhc2tDb21wbGV0ZShwYXJlbnQsIHBhcmVudC5pZC5yZXBsYWNlKCd0YXNrLScsICcnKSwgdGhpcy5saXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuICB9O1xuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTsiLCJpbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5jbGFzcyBMcyB7XG5cbiAgYWRkVG9MUyA9IChvYmopID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShnbG9iYWxzLkxTX0tFWSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH07XG5cbiAgZ2V0RnJvbUxTID0gKCkgPT4ge1xuICAgIGNvbnN0IGxzRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdsb2JhbHMuTFNfS0VZKTtcbiAgICBpZiAobHNEYXRhKSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsc0RhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIHJlbW92ZUZyb21MUyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldEZyb21MUyhnbG9iYWxzLkxTX0tFWSk7XG4gICAgZGF0YS5maWx0ZXIoKGVsLCBpKSA9PiB7XG4gICAgICBpZiAoZWwuaW5kZXggPT09IE51bWJlcihpZCkpIHtcbiAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHRoaXMuYWRkVG9MUyhkYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMczsiLCJpbXBvcnQgTHMgZnJvbSAnLi9Mcyc7XG5cbmNsYXNzIFJlbW92ZUl0ZW1zIGV4dGVuZHMgTHMge1xuXG4gIHJlY2FsY3VsYXRlSW5kZXhlcyA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWxpc3QtaXRlbScpXTtcblxuICAgIGNvbnN0IGxpc3RSZXZlcnNlID0gbGlzdEl0ZW1zLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxpc3QubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbCA9IGxpc3Q7XG5cbiAgICAgIGVsW2ldLmluZGV4ID0gaTtcbiAgICAgIGxpc3RSZXZlcnNlW2ldLmlkID0gYHRhc2stJHtpfWA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRUb0xTKGxpc3QpO1xuICB9O1xuXG4gIHJlbW92ZUl0ZW0gPSAoZSwgbGlzdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IHBhcmVudCA9IGUuY2xvc2VzdCgnLnRhc2stbGlzdC1pdGVtJyk7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIocGFyZW50LmlkLnJlcGxhY2UoJ3Rhc2stJywgJycpKTtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgY29uc29sZS5sb2cocGFyZW50KTtcbiAgICBsaXN0LnNwbGljZShpZCwgMSk7XG5cbiAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUluZGV4ZXMobGlzdCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbW92ZUl0ZW1zOyIsImltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtLmpzJztcbmltcG9ydCBMcyBmcm9tICcuL0xzLmpzJztcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcblxuY2xhc3MgUmVuZGVyTGlzdCBleHRlbmRzIExzIHtcbiAgbGlzdCA9IFtdO1xuICB0YXNrTGlzdEl0ZW0gPSAndGFzay1saXN0LWl0ZW0nO1xuXG4gIGNvbnN0cnVjdG9yKHsgbGlzdFRhZyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxpc3RUYWdzID0gbGlzdFRhZztcbiAgICB0aGlzLkxpc3RJdGVtID0gbmV3IExpc3RJdGVtKCk7XG4gIH1cblxuICByZW5kZXJUZW1wbGF0ZSA9IChvYmopID0+IHtcbiAgICBjb25zdCBjaGVja0JveENscyA9ICd0ZGwtY2hlY2tib3gnO1xuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgPGxpIGlkPVwidGFzay0ke29iai5pbmRleH1cIiBjbGFzcz1cIiR7dGhpcy50YXNrTGlzdEl0ZW19JHtvYmouY29tcGxldGVkID8gYCAke2dsb2JhbHMuVEFTS19MSVNUX0NPTVBMRVRFRH1gIDogJyd9XCI+XG4gICAgPGRpdiBjbGFzcz1cInRkbC1saS1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGRsLWxpLWNvbnRlbnQtaW5uZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiJHtjaGVja0JveENsc31cIiAke29iai5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1kZXNjXCIgY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIj4ke29iai5kZXNjfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJkcmFnbmRyb3AtaWNvXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0cmFzaC1pY28gaGlkZVwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICAgIGA7XG4gICAgdGhpcy5saXN0VGFncy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7XG4gIH07XG5cbiAgcmVuZGVyT25lID0gKHRleHQpID0+IHtcbiAgICB0aGlzLmxpc3QucHVzaCh7XG4gICAgICBpbmRleDogdGhpcy5saXN0Lmxlbmd0aCxcbiAgICAgIGRlc2M6IHRleHQsXG4gICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgfSk7XG4gICAgdGhpcy5hZGRUb0xTKHRoaXMubGlzdCk7XG4gICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSh0aGlzLmxpc3QuYXQoLTEpKTtcblxuICAgIGNvbnN0IGxhc3RJbnNlcnRJZCA9IHRoaXMubGlzdC5hdCgtMSkuaW5kZXg7XG4gICAgY29uc29sZS5sb2cobGFzdEluc2VydElkKTtcbiAgICB0aGlzLkxpc3RJdGVtLmxpc3RJdGVtRXZlbnQodGhpcy5saXN0LCBsYXN0SW5zZXJ0SWQpO1xuICAgIHJldHVybjtcbiAgfTtcbiAgcmVuZGVyTWFueSA9ICgpID0+IHtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEZyb21MUygpO1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGxpc3QuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoZWwsIGxpc3QpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdtYW55Jyk7XG4gICAgdGhpcy5MaXN0SXRlbS5saXN0SXRlbUV2ZW50cyh0aGlzLmxpc3QpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJMaXN0OyIsImltcG9ydCBSZW5kZXJMaXN0IGZyb20gJy4vUmVuZGVyTGlzdC5qcyc7XG5pbXBvcnQgTHMgZnJvbSAnLi9Mcy5qcyc7XG5pbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9Db21wbGV0ZS5qcyc7XG5cbmNsYXNzIFRvRG9MaXN0IHtcbiAgbGlzdCA9IFtdO1xuICBMcyA9IG5ldyBMcygpO1xuICBDb21wbGV0ZSA9IG5ldyBDb21wbGV0ZSgpO1xuICBjb25zdHJ1Y3Rvcih7IGxpc3RUYWcsIGZvcm06IHsgdGFnLCBpbnB1dE5hbWUgfSB9KSB7XG4gICAgdGhpcy5mb3JtID0geyB0YWcsIGlucHV0TmFtZSB9O1xuXG4gICAgdGhpcy5SZW5kZXJMaXN0ID0gbmV3IFJlbmRlckxpc3Qoe1xuICAgICAgbGlzdFRhZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaXN0VGFnKSxcbiAgICAgIC8vIGxpc3RUYWc6IFwieW9vXCJcbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlRm9ybSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBpbnB1dERhdGEgPSBmb3JtRGF0YS5nZXQodGhpcy5mb3JtLmlucHV0TmFtZSk7XG4gICAgaWYgKGlucHV0RGF0YS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5SZW5kZXJMaXN0LnJlbmRlck9uZShpbnB1dERhdGEpO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQucmVzZXQoKTtcbiAgfTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5mb3JtLnRhZyk7XG5cbiAgICB0aGlzLlJlbmRlckxpc3QucmVuZGVyTWFueSgpO1xuICAgIGZvcm1FbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnBhcnNlRm9ybSk7XG5cbiAgICBjb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1hbGwgYnV0dG9uJyk7XG4gICAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IHRoaXMuTHMuZ2V0RnJvbUxTKCk7XG4gICAgICB0aGlzLkNvbXBsZXRlLmNsZWFyQ29tcGxldGVkKGxpc3QpO1xuICAgIH0pO1xuXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0OyIsImNvbnN0IFRBU0tfTElTVF9DT01QTEVURUQgPSAndGFzay1saXN0LWNvbXBsZXRlZCc7XG5jb25zdCBMU19LRVkgPSAndG9Eb0xpc3QnO1xuZXhwb3J0IHsgVEFTS19MSVNUX0NPTVBMRVRFRCwgTFNfS0VZIH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlRvRG9MaXN0IiwiVG9EbyIsImxpc3RUYWciLCJmb3JtIiwidGFnIiwiaW5wdXROYW1lIiwiaW5pdCIsIkxzIiwiZ2xvYmFscyIsIlJlbW92ZUl0ZW1zIiwiQ29tcGxldGUiLCJsaXN0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIlRBU0tfTElTVF9DT01QTEVURUQiLCJmb3JFYWNoIiwiZWwiLCJyZW1vdmVJdGVtIiwicGFyZW50IiwiaWQiLCJjaGVja2VkIiwibWFwIiwiTnVtYmVyIiwiaW5kZXgiLCJjb21wbGV0ZWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRUb0xTIiwiTGlzdEl0ZW0iLCJjbHMiLCJpY28iLCJ0b2dnbGUiLCJlIiwibnVtSWQiLCJjdXJyZW50VGFyZ2V0IiwicmVwbGFjZSIsImRyYWdJY28iLCJxdWVyeVNlbGVjdG9yIiwidHJhc2hJY28iLCJjdXJyZW50UGFyZW50RWwiLCJjdXJyZW50UGFyZW50SWQiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRlc2NUZXh0IiwiaW5uZXJUZXh0Iiwib3V0ZXJIVE1MIiwidGVtcElucHV0IiwiZW5kT2ZUZXh0IiwidmFsdWUiLCJsZW5ndGgiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImZvY3VzIiwidG9nZ2xlSWNvbnMiLCJkZXNjIiwibGlzdEl0ZW0iLCJlZGl0IiwiY2hlY2tib3giLCJ0YXNrQ29tcGxldGUiLCJsaXN0SXRlbXMiLCJ0b2dnbGVFdiIsImNsb3Nlc3QiLCJvYmoiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTFNfS0VZIiwiSlNPTiIsInN0cmluZ2lmeSIsImxzRGF0YSIsImdldEl0ZW0iLCJkYXRhIiwicGFyc2UiLCJnZXRGcm9tTFMiLCJmaWx0ZXIiLCJpIiwic3BsaWNlIiwibGlzdFJldmVyc2UiLCJyZXZlcnNlIiwicmVjYWxjdWxhdGVJbmRleGVzIiwiUmVuZGVyTGlzdCIsImNoZWNrQm94Q2xzIiwiaHRtbCIsInRhc2tMaXN0SXRlbSIsImxpc3RUYWdzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGV4dCIsInB1c2giLCJyZW5kZXJUZW1wbGF0ZSIsImF0IiwibGFzdEluc2VydElkIiwibGlzdEl0ZW1FdmVudCIsImxpc3RJdGVtRXZlbnRzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpbnB1dERhdGEiLCJnZXQiLCJ0cmltIiwicmVuZGVyT25lIiwicmVzZXQiLCJmb3JtRWwiLCJyZW5kZXJNYW55IiwicGFyc2VGb3JtIiwiY2xlYXJCdG4iLCJjbGVhckNvbXBsZXRlZCJdLCJzb3VyY2VSb290IjoiIn0=