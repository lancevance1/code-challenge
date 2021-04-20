<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Collections\MediaCollection;
use App\Models\Media;
use App\Models\User;
use Inertia\Inertia;

class MediaController extends Controller
{
    public function index()
    {
        return Inertia::render('welcome', [
            'urls' => [
                'index' => route('api.media.index'),
                'store' => route('api.media.store'),
                'show' => route('api.media.show', ':id'),
                'update' => route('api.media.update', ':id'),
                'destroy' => route('api.media.destroy', ':id')
            ],
            'user' => User::all()->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ];
            }),
            'media' => new MediaCollection(Media::all()),
        ]);
    }
}
