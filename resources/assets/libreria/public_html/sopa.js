(function (window, document) {
    var inicio = function () {
        
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
              getID: function (id) {
                  elemento = document.getElementById(id);
                  return this;
              },
              get: function (id) {
                  return document.getElementById(id);
              },
              noSubmit: function () {
                  elemento.addEventListener('submit', function (event) {
                      event.preventDefault();
                  }, false);
                  return this;
              },
              crear: function (nombre, dimension, tema) {
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
                  posision = Math.floor((Math.random() * dimension) + 5);
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
                          posision = posision + Math.floor((Math.random() * dimension) + 5);
                      }


                  } else {


                      tablero[0] = "Error";
                      solucion[0] = "Error";
                      palabraentablero[0] = "Error";
                  }
                  return [dimension, tablero, solucion, palabraentablero];

              },
              letraRam: function (completotablero, todimension) {
                  juego = completotablero;
                  for (var i = 1; i <= todimension; i++)
                  {
                      if (completotablero[i] == "") {
                          juego[i] = aLetras[Math.floor(Math.random() * aLetras.length)];
                      }
                  }
                  return [juego];
              },
              validandoletra: function (letra, ubicacion) {
                  words = 0;
                  for (var i = 0; i < solucion.length; i++) {
                      if (ubicacion == solucion[i]) {

                          words = 1;
                      }
                  }
                  return words
              },
              palabraSopa: function () {
                  return palabraentablero;
              },
              actualPalabras: function (palabraentre, nuevapalabra) {
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
              encontrando: function () {
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

