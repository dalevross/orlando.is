<?php

    namespace App\Http\Controllers;

    use App\Book;
    use App\Http\Requests;
    use App\Http\Controllers\Controller;

    class PageController extends Controller
    {
        
        /**
         * Return the homepage view
         * @return mixed
         */   
        public function home()
        {
            return view('welcome');

        }

        /**
         * Return the places view
         * @return mixed
         */   
        public function places()
        {
            return view('places');

        } 

        /**
         * Return the places view
         * @return mixed
         */   
        public function animals()
        {
            return view('animals');

        }

         /**
         * Return the places view
         * @return mixed
         */   
        public function things()
        {
            return view('things');
        } 

        /**
         * Return the api dashboard view listing available apis
         * @return mixed
         */ 
        public function api()
        {
            return view('apidashboard');

        }    

        /**
         * Return the contact page view
         * @return mixed
         */ 
        public function contact()
        {
            return view('contact');

        }
    }
