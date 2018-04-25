/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {


_.getID('iniciar').noSubmit();

function ir() {

    $('#iniciar').hide();
    $('#twojuego').hide();
    var array = _.crear($('#nombre').val(), $('#dimencion').val(), $('#tema').val());
    //SOLUCION
    var dimension = array[0];
    var cont = 1;
    var imprime;
    var aumentodim = dimension;
    $("#solutionplay").append("<tr id='soluline'></tr>");
    $.each(array[1], function (index, value) {
        imprime = 0;
        if (index >= 1) {
            while (imprime == 0) {
                if (index <= aumentodim) {
                    $("#soluline").append("<td><p>" + value + "</p></td>");
                    imprime = 1;
                } else {
                    aumentodim = dimension * cont;
                    cont = cont + 1;
                    $("#soluline").removeAttr("id");
                    $("#solutionplay").append("<tr id='soluline'></tr>");
                }
            }
        }
    });
    //PALABRAS

    $("#arraypalaras").append("<input type='hidden' value='" + array[3] + "' id='palabrashid' >");
    $("#todaslaspalabras").append("<tr id='pbuscar'></tr>");
    $.each(array[3], function (index, value) {
        $("#pbuscar").append("<td><input type='text' id='" + value + "' value='" + value + "' redonly> </td>");
    });

    $("#todaslasencontradas").append("<tr id='pencontrada'></tr>");
    $.each(array[3], function (index, value) {
        $("#pencontrada").append("<td><p>" + value + " </p></td>");
    });

    $('#solucionando').removeAttr("type");
    $('#solucionando').attr("type", "submit");
    //SOPA
    var dimension = array[0];
    var cont = 1;
    var imprime;
    var aumentodim = dimension;
    var completotablero = _.letraRam(array[1], array[1].length);

    $("#play").append("<tr id='line'></tr>");
    $.each(completotablero[0], function (index, value) {
        imprime = 0;
        if (index >= 1) {
            while (imprime == 0) {
                if (index <= aumentodim) {
                    $("#line").append("<td> <input type='button' value='" + value + "'id='" + index + "' onclick='myFunction(" + index + ", this.value)'> </td>");
                    imprime = 1;
                } else {
                    aumentodim = dimension * cont;
                    cont = cont + 1;
                    $("#line").removeAttr("id");
                    $("#play").append("<tr id='line'></tr>");
                }
            }
        }
    });

    console.log(completotablero[0]);
}

/***/ })

/******/ });