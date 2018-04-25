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