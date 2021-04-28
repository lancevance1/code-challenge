<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Collections\MediaCollection;
use App\Models\Media;
use App\Models\User;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class MediaController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('welcome', [
            'urls' => [
                'index' => route('api.media.index'),
                'store' => route('api.media.store'),
                'show' => route('api.media.show', ':id'),
                'update' => route('api.media.update', ':id'),
                'destroy' => route('api.media.destroy', ':id')
            ],

            // 'create_url' => URL::route('media.create'),

            // 'user' => User::all()->map(function ($user) {
            //     return [
            //         'id' => $user->id,
            //         'name' => $user->name,
            //         'email' => $user->email,
            //     ];
            // }),

            'media' => Media::all()->map(function ($media) {
                return [
                    'id' => $media->id,
                    'imageId' => $media->imageId,
                    'title' => $media->title,
                    'altText' => $media->altText,
                    'urls' => $media->urls,
                    'width' => $media->width,
                    'height' => $media->height,

                ];
            }),
            // 'media' => new MediaCollection(Media::all()),
        ]);
    }



    public function create(): \Inertia\Response
    {
        return Inertia::render('addImage', [
            'urls' => [
                'index' => route('api.media.index'),
                'store' => route('api.media.store'),
                'show' => route('api.media.show', ':id'),
                'update' => route('api.media.update', ':id'),
                'destroy' => route('api.media.destroy', ':id')
            ],

        ]);
    }


    public function edit(): \Inertia\Response
    {
        return Inertia::render('editImage', [
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
