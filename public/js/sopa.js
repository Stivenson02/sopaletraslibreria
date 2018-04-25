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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

(function (window, document) {
    var inicio = function inicio() {

        var elemento = null,

        // tema1 = ["vaca,perro,gato,raton,oso,hormiga,tejon,ardilla,pollo,gallina"],
        tema1 = ["vaca", "perro", "gato", "raton", "oso", "hormiga", "tejon", "ardilla", "panda", "ballena"],
            tema2 = ["java", "html", "objetos", "scrip", "linux", "mysql", "red", "ingenia", "htmlfive", "nulleable"],
            tema3 = ["casa", "cocina", "sala", "comedor", "garage", "control", "cobija", "hogar", "familia", "televisor"],
            palabras = [],
            tablero = [],
            juego = [],
            solucion = [],
            palabraentablero = [],
            palabravalidada = [],
            campmin = 0,
            campmax = 0,
            aumentodim = 0,
            palabrainser = 0,
            posision = 1,
            words = 0,
            espaciomax = 0,
            aLetras = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'),
            controladores = {},
            ctrlActual = null,
            libreria = {
            getID: function getID(id) {
                elemento = document.getElementById(id);
                return this;
            },
            get: function get(id) {
                return document.getElementById(id);
            },
            noSubmit: function noSubmit() {
                elemento.addEventListener('submit', function (event) {
                    event.preventDefault();
                }, false);
                return this;
            },
            crear: function crear(nombre, dimension, tema) {
                if (tema == 0) {
                    var ran = Math.round(Math.random() * (3 - 1) + parseInt(1));
                    if (ran == 1) {
                        palabras = tema1;
                    } else if (ran == 2) {
                        palabras = tema2;
                    } else {
                        palabras = tema3;
                    }
                } else if (tema == 1) {
                    palabras = tema1;
                } else if (tema == 2) {
                    palabras = tema2;
                } else if (tema == 3) {
                    palabras = tema3;
                }
                //Tablero
                var totaldimension = dimension * dimension;

                for (var i = 1; i <= totaldimension; i++) {
                    tablero[i] = "";
                }
                //Palabras
                posision = Math.floor(Math.random() * dimension + 5);
                aumentodim = dimension;
                campmin = 1;
                palabrainser = 0;
                if (dimension >= 9 && dimension <= 18) {

                    for (var i = 0; i < palabras.length; i++) {

                        // busca la linea vertical en donde sera incrustada la plabra
                        while (palabrainser == 0) {
                            console.log("aumento: " + aumentodim + "total: " + totaldimension);
                            if (aumentodim == totaldimension) {
                                palabrainser = 1;
                            } else {
                                if (posision <= aumentodim) {
                                    espaciomax = aumentodim - palabras[i].length; //15
                                    //validar si la palabra encaja
                                    if (posision <= espaciomax) {
                                        //Validar si el tablero aun tiene espacio
                                        for (var g = 0; g < palabras[i].length; g++) {
                                            tablero[posision] = palabras[i].charAt(g);
                                            solucion[posision] = posision;
                                            posision = posision + 1;
                                        }
                                        palabraentablero[i] = palabras[i];
                                        palabrainser = 1;
                                    } else {
                                        posision = posision + 1;
                                    }
                                } else {
                                    //salta a la siguiente linea vertical y declara el extreme menor y el mayor
                                    aumentodim = dimension * campmin;
                                    campmin = campmin + 1;
                                }
                            }
                        }
                        palabrainser = 0;
                        posision = posision + Math.floor(Math.random() * dimension + 5);
                    }
                } else {

                    tablero[0] = "Error";
                    solucion[0] = "Error";
                    palabraentablero[0] = "Error";
                }
                return [dimension, tablero, solucion, palabraentablero];
            },
            letraRam: function letraRam(completotablero, todimension) {
                juego = completotablero;
                for (var i = 1; i <= todimension; i++) {
                    if (completotablero[i] == "") {
                        juego[i] = aLetras[Math.floor(Math.random() * aLetras.length)];
                    }
                }
                return [juego];
            },
            validandoletra: function validandoletra(letra, ubicacion) {
                words = 0;
                for (var i = 0; i < solucion.length; i++) {
                    if (ubicacion == solucion[i]) {

                        words = 1;
                    }
                }
                return words;
            },
            palabraSopa: function palabraSopa() {
                return palabraentablero;
            },
            actualPalabras: function actualPalabras(palabraentre, nuevapalabra) {
                var palabranew = "";
                for (var i = 0; i < palabraentablero.length; i++) {
                    if (palabraentablero[i] == palabraentre) {

                        if (palabravalidada[i]) {

                            for (var j = 0; j < nuevapalabra.length; j++) {
                                if (nuevapalabra.charAt(j) == '-') {
                                    palabranew = palabranew + "-";
                                } else {
                                    palabranew = palabranew + palabravalidada[i].charAt(j);
                                }
                            }
                            palabravalidada[i] = palabranew;
                        } else {
                            palabravalidada[i] = nuevapalabra;
                        }
                    }
                }
                return palabravalidada;
            },
            encontrando: function encontrando() {
                return palabravalidada;
            }
        };
        return libreria;
    };
    if (typeof window.libreria === 'undefined') {
        window.libreria = window._ = inicio();
    } else {
        console.log('Se esta cargando la libreria');
    }
})(window, document);

/***/ })

/******/ });