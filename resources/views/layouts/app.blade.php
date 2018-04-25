<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <style>
            table.blueTable {
                border: 1px solid #5592bb;
                background-color: #EEEEEE;
                width: 100%;
                text-align: left;
                border-collapse: collapse;
            }
            table.blueTable td, table.blueTable th {
                border: 1px solid #AAAAAA;
                padding: 3px 2px;
            }
            table.blueTable tbody td {
                font-size: 13px;
            }
            table.blueTable tr:nth-child(even) {
                background: #5592bb;
            }
            table.blueTable thead {
                background: #5592bb;
                background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #5592bb 100%);
                background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #5592bb 100%);
                background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #5592bb 100%);
                border-bottom: 2px solid #444444;
            }
            table.blueTable thead th {
                font-size: 15px;
                font-weight: bold;
                color: #FFFFFF;
                border-left: 2px solid #5592bb;
            }
            table.blueTable thead th:first-child {
                border-left: none;
            }

            table.blueTable tfoot {
                font-size: 14px;
                font-weight: bold;
                color: #FFFFFF;
                background: #5592bb;
                background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #5592bb 100%);
                background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #5592bb 100%);
                background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #5592bb 100%);
                border-top: 2px solid #444444;
            }
            table.blueTable tfoot td {
                font-size: 14px;
            }
            table.blueTable tfoot .links {
                text-align: right;
            }
            table.blueTable tfoot .links a{
                display: inline-block;
                background: #5592bb;
                color: #FFFFFF;
                padding: 2px 8px;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <nav class="navbar navbar-default navbar-static-top">
                <div class="container">
                    <div class="navbar-header">

                        <!-- Collapsed Hamburger -->
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                            <span class="sr-only">Toggle Navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <!-- Branding Image -->
                        <a class="navbar-brand" href="{{ url('/') }}">
                            {{ config('app.name', 'Laravel') }}
                        </a>
                    </div>

                    <div class="collapse navbar-collapse" id="app-navbar-collapse">
                        <!-- Left Side Of Navbar -->
                        <ul class="nav navbar-nav">
                            &nbsp;
                        </ul>

                        <!-- Right Side Of Navbar -->
                        <ul class="nav navbar-nav navbar-right">
                            <!-- Authentication Links -->
                            @if (Auth::guest())
                            <li><a href="{{ route('login') }}">Login</a></li>
                            <li><a href="{{ route('register') }}">Register</a></li>
                            @else
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                           onclick="event.preventDefault();
                                                   document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            @endif
                        </ul>
                    </div>
                </div>
            </nav>

            @yield('content')
        </div>
        <!-- Scripts -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="{{ asset('js/app.js') }}"></script>
        <!-- SCRIP PARA COMPLEMENTARIOS -->
        @include('scrips')

    </body>
</html>
