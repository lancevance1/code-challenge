<?php   

namespace App\Repositories;   

use App\Repositories\Interfaces\UserRepositoryInterface; 
use App\Models\User;   
use Inertia\Inertia;

class UserRepository implements UserRepositoryInterface 
{     


    public function index(){

        return User::all();
     
    }

    public function create($request){
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);
    }

   public function show($user){
        return $user;
   }

   public function update($request, $user){
    $user = $user->update([
        'name' => $request->name,
        'email' => $request->email,
        
    ]);
    return $user->fresh();
   }

   public function destroy($user){
    return $user->delete();
   }

    
    
}