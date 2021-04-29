<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\Collections\UserCollection;
use App\Http\Resources\UserResource;
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

    public function index(): UserCollection
    {
        $result = $this->userRepository->index();

        return new UserCollection($result);
    }

    public function store(UserRequest $request): UserResource
    {
        $result = $this->userRepository->store($request);

        return new UserResource($result);
    }

    public function show(User $user): UserResource
    {
        $result = $this->userRepository->show($user);

        return new UserResource($result);
    }

    public function update(UserRequest $request, User $user)
    {
        $result = $this->userRepository->update($request, $user);

        // return new UserResource($result);
         return Redirect::back()->with('success', 'User updated.');
         
    }

    public function destroy(User $user): \Illuminate\Http\JsonResponse
    {
        $result = $this->userRepository->destroy($user);

        return response()->json(['success' => $result]);
    }
}
