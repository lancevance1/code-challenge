<?php

namespace App\Repositories;

use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserRepository implements UserRepositoryInterface
{


    public function index()
    {

        return User::all();
    }

    public function store($request)
    {
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);
    }

    public function show($user)
    {
        return $user;
    }

    public function update($request, $user)
    {
        $user->update(
            Request::only(['name', 'email'])
        );
        if ($request->password != null) {
            $user->update(['password' => Hash::make($request->new_password_confirmation)]);
        }
        return $user->fresh();
    }

    public function destroy($user)
    {
        return $user->delete();
    }

}