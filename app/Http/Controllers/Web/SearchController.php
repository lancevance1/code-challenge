<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class SearchController extends Controller
{
    

    public function index(): \Inertia\Response
    {
        return Inertia::render('search', [
            'urls' => [
                'index' => route('api.media.index'),
                'store' => route('api.media.store'),
                'show' => route('api.media.show', ':id'),
                'update' => route('api.media.update', ':id'),
                'destroy' => route('api.media.destroy', ':id')
            ],

        ]);
    }
}
