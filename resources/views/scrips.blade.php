<script>
    (function (window, document) {
        _.getID('iniciar').noSubmit();

    }
    )(window, document);

    function ir() {
        (function (window, document) {
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
        )(window, document);
    }
</script>
<script>
    (function (window, document) {
        _.getID('solution').noSubmit();

    }
    )(window, document);

    function juegosolucion() {
        (function (window, document) {
            $('#twojuego').show();
            $('#onejuego').hide();

            $("#volver").append("<a href='play'><input type='submit' value='Jugar Nuevo'></a>");

        }
        )(window, document);
    }

    var palbraensopa = _.palabraSopa();

    function myFunction(val, letra) {
        (function (window, document) {


            var word = _.validandoletra(letra, val);

            if (word == 1) {
                var styles = {
                    color: "#fff",
                    background: "#000"
                };
                $("#" + val).css(styles);
                for (var i = 0; i < palbraensopa.length; i++) {
                    var newpal = " ";

                    console.log($("#" + palbraensopa[i]).val());
                    for (var j = 0; j < palbraensopa[i].length; j++) {
                        if (palbraensopa[i].charAt(j) == letra) {

                            newpal = newpal + "-";
                            console.log("letra: " + letra + "palabra: " + palbraensopa[i]);
                        } else {
                            newpal = newpal + palbraensopa[i].charAt(j);
                        }

                    }
                    _.actualPalabras(palbraensopa[i], newpal);

                }
                var nuevovalues = _.encontrando();

                for (var i = 0; i < nuevovalues.length; i++) {
                    $("#" + palbraensopa[i]).val(nuevovalues[i]);
                }
            }
        }
        )(window, document);

    }
</script>