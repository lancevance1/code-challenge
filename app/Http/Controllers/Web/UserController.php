<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function edit(): \Inertia\Response
    {
        return Inertia::render('editUser', [
            'urls' => [
                'index' => route('api.users.index'),
                'store' => route('api.users.store'),
                'show' => route('api.users.show', ':id'),
                'update' => route('api.users.update', ':id'),
                'destroy' => route('api.users.destroy', ':id')
            ],
            


        ]);
    }
}
