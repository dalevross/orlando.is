<?php

namespace App\Http\Controllers;
use App\People;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;

class PeopleController extends Controller
{
    public function people()
    {
        //$people = People::all();

        return view('people');
    }
    //
}
