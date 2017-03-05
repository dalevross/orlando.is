@extends('layouts.master')

@section('content')
    <div class="main-container">
        @include('layouts.partials.alerts')

        <div class="page-header">
            <h2><i style="color: #f00" class="fa fa-female"></i>People</h2>
        </div>

        <div id="people">
        </div>
    </div>
@stop