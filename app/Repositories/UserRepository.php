<?php   

namespace App\Repositories;   

use App\Repositories\Interfaces\UserRepositoryInterface; 
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserRepository implements UserRepositoryInterface 
{     


    public function index(){

        return User::all();
    }

    public function store($request){
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);
    }

   public function show($user){
        return $user;
   }

   public function update($request, $user){
    $user->update([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),

    ]);
    return $user->fresh();
   }

   public function destroy($user){
    return $user->delete();
   }
    
}