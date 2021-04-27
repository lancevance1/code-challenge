<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Collections\MediaCollection;
use App\Models\Media;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
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

            
            'media' => Media::all()->map(function ($media) {
                return [
                    'id' => $media->id,
                    'imageId' => $media->imageId,
                    'title' => $media->title,
                    'altText' => $media->altText,
                    'url_raw' => $media->url_raw,
                    'url_full' => $media->url_full,
                    'url_regular' => $media->url_regular,
                    'url_small' => $media->url_small,
                    'url_thumb' => $media->url_thumb,
                ];
            }),
        
            // 'media' => new MediaCollection(Media::all()),
        ]);
    }
}
