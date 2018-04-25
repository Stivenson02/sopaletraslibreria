@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Register</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('insertar_paht') }}">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="nombre" class="col-md-4 control-label">Nombre</label>
                            <div class="col-md-6">
                                <input id="nombre" type="text" class="form-control" name="nombre"  required autofocus>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="sueldo" class="col-md-4 control-label"> Sueldo Basico </label>
                            <div class="col-md-6">
                                <input id="fiscal" type="number" min="1"  class="form-control" name="fiscal"  required autofocus>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="telefono" class="col-md-4 control-label">Horas Extras</label>
                            <div class="col-md-6">
                                <div class="col-md-3 text-center">
                                    <input  type="radio" class="form-control" name="gender" value="Dia">Diurno <br>
                                    <input  type="radio" class="form-control" name="gender"  value="Noche">Nocturno
                                </div>
                                <div class="col-md-9">
                                    <label for="fiscal" class="col-md-4 control-label"> Horas Extras </label>
                                    <input id="telefono" type="number" class="form-control" min="1"  name="telefono"  required autofocus>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="tarjeta" class="col-md-4 control-label">Pago de Horas</label>
                            <div class="col-md-6">
                                <input id="tarjeta" type="number" class="form-control" name="tarjeta" max="999999999999" min="1"    required autofocus>
                            </div>
                        </div>                 
                        <div class="form-group">

                            <label for="tarjeta" class="col-md-4 control-label">Renta</label>
                            <div class="col-md-2">
                                <input  type="checkbox" class="form-control"  >
                            </div>
                            <div class="col-md-4">
                                <input id="tarjeta" min="1"  type="number" class="form-control" name="tarjeta" max="999999999999"   required autofocus>
                            </div>
                        </div>
                        <div class="form-group">

                            <label for="tarjeta" class="col-md-4 control-label">Fonavi</label>
                            <div class="col-md-2">
                                <input  type="checkbox" class="form-control"  >
                            </div>
                            <div class="col-md-4">
                                <input id="tarjeta" type="number" min="1"  class="form-control" name="tarjeta" max="999999999999"   required autofocus>
                            </div>
                        </div>
                        <div class="form-group">

                            <label for="tarjeta" class="col-md-4 control-label">AFP</label>
                            <div class="col-md-2">
                                <input  type="checkbox" class="form-control"  >
                            </div>
                            <div class="col-md-4">
                                <input id="tarjeta" type="number" min="1"  class="form-control" name="tarjeta" max="999999999999"   required autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button  id="btn" type="submit" class="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

                    <p></p>
                    <script>


window.onload = (function () {
    $(function () {
        var regex = new RegExp('[^ 0-9a-zA-Zàèìòùáéíóúâêîôûãõ\b-]', 'g');
        // repare a flag "g" de global, para substituir todas as ocorrências
        $('input').bind('input', function () {
            $(this).val($(this).val().replace(regex, ''));
        });
    });
    $(function () {
        var regex = new RegExp('[0123456789]', 'g');
        // repare a flag "g" de global, para substituir todas as ocorrências
        $('#nombre').bind('input', function () {
            $(this).val($(this).val().replace(regex, ''));
        });
    });
    try {
        $("#telefono").on('keyup', function () {
            var value = $(this).val().length;
            if (value == 9) {
                $("#bnspantelefono").removeClass("hidden");
            } else {
                $("#bnspantelefono").addClass("hidden");
            }
            if (value > 9) {

                $("#spantelefono").removeClass("hidden");
            } else {
                $("#spantelefono").addClass("hidden");
            }
        }).keyup();

        $("#fiscal").on('keyup', function () {
            var value = $(this).val().length;
            if (value == 2) {
                $("#bnspanfiscal").removeClass("hidden");
            } else {
                $("#bnspanfiscal").addClass("hidden");
            }
            if (value > 2) {
                $("#spanfiscal").removeClass("hidden");

            } else {
                $("#spanfiscal").addClass("hidden");
            }
        }).keyup();
        $("#tarjeta").on('keyup', function () {
            var value = $(this).val().length;
            if (value == 12) {
                $("#bnspantarjeta").removeClass("hidden");
            } else {
                $("#bnspantarjeta").addClass("hidden");
            }
            if (value > 12) {
                $("#spantarjeta").removeClass("hidden");

            } else {
                $("#spantarjeta").addClass("hidden");
            }
        }).keyup();
        $("#codigo").on('keyup', function () {
            var value = $(this).val().length;
            if (value == 3) {
                $("#bnspancodigo").removeClass("hidden");
            } else {
                $("#bnspancodigo").addClass("hidden");
            }
            if (value > 3) {
                $("#spancodigo").removeClass("hidden");

            } else {
                $("#spancodigo").addClass("hidden");
            }
        }).keyup();
        $("#pin").on('keyup', function () {
            var value = $(this).val().length;
            if (value == 4) {
                $("#bnspanpin").removeClass("hidden");
            } else {
                $("#bnspanpin").addClass("hidden");
            }
            if (value > 4) {
                $("#spanpin").removeClass("hidden");

            } else {
                $("#spanpin").addClass("hidden");
            }
        }).keyup();
    } catch (e) {


    }
});
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
