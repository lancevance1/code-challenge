<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function edit(): \Inertia\Response
    {
        return Inertia::render('editUser', [
            'urls' => [
                'index' => route('api.user.index'),
                'store' => route('api.user.store'),
                'show' => route('api.user.show', ':id'),
                'update' => route('api.user.update', ':id'),
                'destroy' => route('api.user.destroy', ':id')
            ],


        ]);
    }
}
