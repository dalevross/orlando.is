@extends('layouts.master')

@section('content')
    <div class="main-container">
         <h1>Who am I</h1>
         <p class="lead">An application to show who we are. Together we are ONE Orlando</p>

         <hr>

         <div class="row">
            <div class="col-sm-6">
                <h2>People</h2>
                <p>This is you, your voice, your opportunity to share with the world who you are. This is not about where you work or what you earn. This is YOU, your passion, your love.</p>
                <p><a href="{{ route('people') }}" role="button" class="btn btn-success"><i class="fa fa-male"> See them!</i></a></p>
            </div>
            <div class="col-sm-6">
                <h2>Places</h2>
                <p>This is the physical structure of Orlando, that which has been, will be and now IS. Communities, Historical buildings</p>
                <p><a href="{{ route('places') }}" role="button" class="btn btn-success"><i class="fa fa-building"></i> See them!</a></p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <h2>Animals</h2>
                <p>Awe, they're so cute and cuddly. Don't we just love the little buggers. #rufflife</p>
                <p><a href="{{ route('animals') }}" role="button" class="btn btn-success"><i class="fa fa-bug"></i> See them!</a></p>
            </div>
            <div class="col-sm-6">
                <h2>Things</h2>
                <p>This is everything else that isn't one of the above. Meetups, Events, etc. And remember, thoughts are things</p>
                <p><a href="{{ route('things') }}" role="button" class="btn btn-success"> <i class="fa fa-briefcase"></i> See them!</a></p>
            </div>
        </div>
    </div>
@stop