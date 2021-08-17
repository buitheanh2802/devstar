/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/canvas.js":
/*!*******************************!*\
  !*** ./src/helpers/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onHandleCanvas\": function() { return /* binding */ onHandleCanvas; }\n/* harmony export */ });\nvar onHandleCanvas = function onHandleCanvas() {\n  var num = 200;\n  var w = window.innerWidth;\n  var h = window.innerHeight;\n  var max = 100;\n  var _x = 0;\n  var _y = 0;\n  var _z = 150;\n\n  var dtr = function dtr(d) {\n    return d * Math.PI / 180;\n  };\n\n  var rnd = function rnd() {\n    return Math.sin(Math.floor(Math.random() * 360) * Math.PI / 180);\n  };\n\n  var dist = function dist(p1, p2, p3) {\n    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) + Math.pow(p2.z - p1.z, 2));\n  };\n\n  var cam = {\n    obj: {\n      x: _x,\n      y: _y,\n      z: _z\n    },\n    dest: {\n      x: 0,\n      y: 0,\n      z: 1\n    },\n    dist: {\n      x: 0,\n      y: 0,\n      z: 200\n    },\n    ang: {\n      cplane: 0,\n      splane: 0,\n      ctheta: 0,\n      stheta: 0\n    },\n    zoom: 1,\n    disp: {\n      x: w / 2,\n      y: h / 2,\n      z: 0\n    },\n    upd: function upd() {\n      cam.dist.x = cam.dest.x - cam.obj.x;\n      cam.dist.y = cam.dest.y - cam.obj.y;\n      cam.dist.z = cam.dest.z - cam.obj.z;\n      cam.ang.cplane = -cam.dist.z / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);\n      cam.ang.splane = cam.dist.x / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);\n      cam.ang.ctheta = Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z);\n      cam.ang.stheta = -cam.dist.y / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z);\n    }\n  };\n  var trans = {\n    parts: {\n      sz: function sz(p, _sz) {\n        return {\n          x: p.x * _sz.x,\n          y: p.y * _sz.y,\n          z: p.z * _sz.z\n        };\n      },\n      rot: {\n        x: function x(p, rot) {\n          return {\n            x: p.x,\n            y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),\n            z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x))\n          };\n        },\n        y: function y(p, rot) {\n          return {\n            x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),\n            y: p.y,\n            z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y))\n          };\n        },\n        z: function z(p, rot) {\n          return {\n            x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),\n            y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),\n            z: p.z\n          };\n        }\n      },\n      pos: function pos(p, _pos) {\n        return {\n          x: p.x + _pos.x,\n          y: p.y + _pos.y,\n          z: p.z + _pos.z\n        };\n      }\n    },\n    pov: {\n      plane: function plane(p) {\n        return {\n          x: p.x * cam.ang.cplane + p.z * cam.ang.splane,\n          y: p.y,\n          z: p.x * -cam.ang.splane + p.z * cam.ang.cplane\n        };\n      },\n      theta: function theta(p) {\n        return {\n          x: p.x,\n          y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,\n          z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta\n        };\n      },\n      set: function set(p) {\n        return {\n          x: p.x - cam.obj.x,\n          y: p.y - cam.obj.y,\n          z: p.z - cam.obj.z\n        };\n      }\n    },\n    persp: function persp(p) {\n      return {\n        x: p.x * cam.dist.z / p.z * cam.zoom,\n        y: p.y * cam.dist.z / p.z * cam.zoom,\n        z: p.z * cam.zoom,\n        p: cam.dist.z / p.z\n      };\n    },\n    disp: function disp(p, _disp) {\n      return {\n        x: p.x + _disp.x,\n        y: -p.y + _disp.y,\n        z: p.z + _disp.z,\n        p: p.p\n      };\n    },\n    steps: function steps(_obj_, sz, rot, pos, disp) {\n      var _args = trans.parts.sz(_obj_, sz);\n\n      _args = trans.parts.rot.x(_args, rot);\n      _args = trans.parts.rot.y(_args, rot);\n      _args = trans.parts.rot.z(_args, rot);\n      _args = trans.parts.pos(_args, pos);\n      _args = trans.pov.plane(_args);\n      _args = trans.pov.theta(_args);\n      _args = trans.pov.set(_args);\n      _args = trans.persp(_args);\n      _args = trans.disp(_args, disp);\n      return _args;\n    }\n  };\n\n  (function () {\n    \"use strict\";\n\n    var threeD = function threeD(param) {\n      this.transIn = {};\n      this.transOut = {};\n      this.transIn.vtx = param.vtx;\n      this.transIn.sz = param.sz;\n      this.transIn.rot = param.rot;\n      this.transIn.pos = param.pos;\n    };\n\n    threeD.prototype.vupd = function () {\n      this.transOut = trans.steps(this.transIn.vtx, this.transIn.sz, this.transIn.rot, this.transIn.pos, cam.disp);\n    };\n\n    var Build = function Build() {\n      this.vel = 0.04;\n      this.lim = 360;\n      this.diff = 200;\n      this.initPos = 100;\n      this.toX = _x;\n      this.toY = _y;\n      this.go();\n    };\n\n    Build.prototype.go = function () {\n      this.canvas = document.getElementById(\"canv\");\n      this.canvas.width = window.innerWidth;\n      this.canvas.height = window.innerHeight;\n      this.$ = canv.getContext(\"2d\");\n      this.$.globalCompositeOperation = 'source-over';\n      this.varr = [];\n      this.dist = [];\n      this.calc = [];\n\n      for (var i = 0, len = num; i < len; i++) {\n        this.add();\n      }\n\n      this.rotObj = {\n        x: 0,\n        y: 0,\n        z: 0\n      };\n      this.objSz = {\n        x: w / 5,\n        y: h / 5,\n        z: w / 5\n      };\n    };\n\n    Build.prototype.add = function () {\n      this.varr.push(new threeD({\n        vtx: {\n          x: rnd(),\n          y: rnd(),\n          z: rnd()\n        },\n        sz: {\n          x: 0,\n          y: 0,\n          z: 0\n        },\n        rot: {\n          x: 20,\n          y: -20,\n          z: 0\n        },\n        pos: {\n          x: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),\n          y: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),\n          z: this.diff * Math.sin(360 * Math.random() * Math.PI / 180)\n        }\n      }));\n      this.calc.push({\n        x: 360 * Math.random(),\n        y: 360 * Math.random(),\n        z: 360 * Math.random()\n      });\n    };\n\n    Build.prototype.upd = function () {\n      cam.obj.x += (this.toX - cam.obj.x) * 0.05;\n      cam.obj.y += (this.toY - cam.obj.y) * 0.05;\n    };\n\n    Build.prototype.draw = function () {\n      this.$.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      cam.upd();\n      this.rotObj.x += 0.1;\n      this.rotObj.y += 0.1;\n      this.rotObj.z += 0.1;\n\n      for (var i = 0; i < this.varr.length; i++) {\n        for (var val in this.calc[i]) {\n          if (this.calc[i].hasOwnProperty(val)) {\n            this.calc[i][val] += this.vel;\n            if (this.calc[i][val] > this.lim) this.calc[i][val] = 0;\n          }\n        }\n\n        this.varr[i].transIn.pos = {\n          x: this.diff * Math.cos(this.calc[i].x * Math.PI / 180),\n          y: this.diff * Math.sin(this.calc[i].y * Math.PI / 180),\n          z: this.diff * Math.sin(this.calc[i].z * Math.PI / 180)\n        };\n        this.varr[i].transIn.rot = this.rotObj;\n        this.varr[i].transIn.sz = this.objSz;\n        this.varr[i].vupd();\n        if (this.varr[i].transOut.p < 0) continue;\n        var g = this.$.createRadialGradient(this.varr[i].transOut.x, this.varr[i].transOut.y, this.varr[i].transOut.p, this.varr[i].transOut.x, this.varr[i].transOut.y, this.varr[i].transOut.p * 2);\n        this.$.globalCompositeOperation = 'lighter';\n        g.addColorStop(0, 'hsla(255, 255%, 255%, 1)');\n        g.addColorStop(.5, 'hsla(' + (i + 2) + ',85%, 40%,1)');\n        g.addColorStop(1, 'hsla(' + i + ',85%, 40%,.5)');\n        this.$.fillStyle = g;\n        this.$.beginPath();\n        this.$.arc(this.varr[i].transOut.x, this.varr[i].transOut.y, this.varr[i].transOut.p * 2, 0, Math.PI * 2, false);\n        this.$.fill();\n        this.$.closePath();\n      }\n    };\n\n    Build.prototype.anim = function () {\n      window.requestAnimationFrame = function () {\n        return window.requestAnimationFrame || function (callback, element) {\n          window.setTimeout(callback, 1000 / 60);\n        };\n      }();\n\n      var anim = function () {\n        this.upd();\n        this.draw();\n        window.requestAnimationFrame(anim);\n      }.bind(this);\n\n      window.requestAnimationFrame(anim);\n    };\n\n    Build.prototype.run = function () {\n      this.anim();\n    };\n\n    var app = new Build();\n    app.run();\n  })();\n\n  window.addEventListener('resize', function () {\n    var canvas = document.querySelector('.canvas');\n    canvas.height = window.innerHeight;\n    canvas.width = window.innerWidth;\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (onHandleCanvas);\n\n//# sourceURL=webpack://Nodejs/./src/helpers/canvas.js?");

/***/ }),

/***/ "./src/helpers/selector.js":
/*!*********************************!*\
  !*** ./src/helpers/selector.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": function() { return /* binding */ $; },\n/* harmony export */   \"$$\": function() { return /* binding */ $$; }\n/* harmony export */ });\nvar $ = document.querySelector.bind(document);\nvar $$ = document.querySelectorAll.bind(document);\n\n//# sourceURL=webpack://Nodejs/./src/helpers/selector.js?");

/***/ }),

/***/ "./src/modules/home.module.js":
/*!************************************!*\
  !*** ./src/modules/home.module.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/selector */ \"./src/helpers/selector.js\");\n/* harmony import */ var _helpers_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/canvas */ \"./src/helpers/canvas.js\");\n\n\nvar rootModule = {\n  // render jsx\n  onRender: function onRender() {},\n  // init function\n  onInit: function onInit() {\n    // run canvas in untils\n    (0,_helpers_canvas__WEBPACK_IMPORTED_MODULE_1__.onHandleCanvas)(); // fixed header when scroll top\n\n    this.onFixedHeaderScrollTop();\n  },\n  onFixedHeaderScrollTop: function onFixedHeaderScrollTop() {\n    var header = (0,_helpers_selector__WEBPACK_IMPORTED_MODULE_0__.$)('.header__box');\n    var banner = (0,_helpers_selector__WEBPACK_IMPORTED_MODULE_0__.$)('.banner__content');\n    window.addEventListener('scroll', function () {\n      if (window.pageYOffset > banner.offsetTop / 2 - 100) {\n        header.classList.add('header__active-scroll');\n      } else header.classList.remove('header__active-scroll');\n    });\n  }\n};\nrootModule.onInit();\nrootModule.onRender();\n\n//# sourceURL=webpack://Nodejs/./src/modules/home.module.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/home.module.js");
/******/ 	
/******/ })()
;