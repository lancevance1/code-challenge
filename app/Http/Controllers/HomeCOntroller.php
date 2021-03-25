<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

class HomeCOntroller extends Controller
{
    public function index()
    {
//        $response = Http::get('https://api.unsplash.com/search/photos', [
//            'query' => 'haha',
//            'page' => 1,
//            'client_id'=>'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI,'
//        ]);

//        $client = new Client;
//        $request = $client->get('https://api.unsplash.com/search/photos', [
//            'query' => 'haha',
//            'page' => 1,
//            'client_id'=>'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI,'
//        ]);
//        $response = $request->getBody();
//
//        dd($body = $response->body);
        return view('welcome');
    }
}
