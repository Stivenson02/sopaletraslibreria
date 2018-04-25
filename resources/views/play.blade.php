@extends('layouts.app')

@section('content')
<form id="iniciar">
    <input id="nombre" type="text"  placeholder="Nombre"><br>
    <input id="dimencion" type="number" max="20" min="9" placeholder="Dimencion"><br>
    <select id="tema">
        <option value="0">Juego Rapido</option>
        <option value="1">Animales</option>
        <option value="2">Programacion</option>
        <option value="3">Hogar</option>
    </select>
    <br><br>
    <input type="submit" id="crear" onclick="ir()" value="JUGAR">

</form>
<section id="onejuego">
    <table class="blueTable">
        <thead id="play">
        </thead>
    </table>
    <form id="solution">
        <input  type="hidden" id="solucionando" onclick="juegosolucion()" value="SOLUCION">
    </form>
    <div id="arraypalaras" ></div>
    <table class="blueTable">
        <thead id="todaslasencontradas">
        </thead>
    </table>
    <table class="blueTable">
        <thead id="todaslaspalabras">
        </thead>
    </table>
</section>
<section id="twojuego">
    <table class="blueTable">
        <thead id="solutionplay">
        </thead>
    </table>
    <div id="volver"></div>
    <form id="solution">
        <input  type="hidden" id="solucionando" onclick="juegosolucion()" value="SOLUCION">
    </form>
</section>
@endsection
