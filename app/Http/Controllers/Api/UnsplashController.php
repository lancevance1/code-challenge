<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UnsplashRequest;
use App\Http\Requests\UnsplashSearchRequest;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Response;

class UnsplashController extends Controller
{
    public function search(UnsplashSearchRequest $request)
    {
        $response = Http::get('https://api.unsplash.com/search/photos', [
            'client_id' => config('unsplash.ACCESS_KEY'),
            'query' => $request->search,
            'page' => $request->page ?? 1,
            'per_page' => $$request->perPage ?? 30
        ]);

        if ($response->failed()) {
            $response->throw()->json();
        }

        return Response::json($response->json(), 200);
    }


    public function show(UnsplashRequest $request)
    {

        $response = Http::get('https://api.unsplash.com/photos/' . $request->imageId, [
            'client_id' => config('unsplash.ACCESS_KEY'),
        ]);

        if ($response->failed()) {
            $response->throw()->json();
        }

        return Response::json($response->json(), 200);
    }
}
