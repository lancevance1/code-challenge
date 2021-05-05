<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function edit(): \Inertia\Response
    {
        return Inertia::render('editUser', [
            'urls' => [
                'update' => route('users.update', ':id'),
            ],
//            'apis' => [
//                'index' => route('api.users.index'),
//                'store' => route('api.users.store'),
//                'show' => route('api.users.show', ':id'),
//                'update' => route('api.users.update', ':id'),
//                'destroy' => route('api.users.destroy', ':id')
//            ],
        ]);
    }

    public function update(UserRequest $request, User $user)
    {
        $this->userRepository->update($request, $user);

        return Redirect::back()->with('success', 'User updated.');

    }


}
