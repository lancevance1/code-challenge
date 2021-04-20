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
            'title' => $request->title,
            'altText' => $request->altText,
        ]);
    }

   public function show($user){

   }

   public function update($request, $user){
    $user = $user->update([
        'title' => $request->title,
        'altText' => $request->altText,
        
    ]);
    return $user->fresh();
   }

   public function destroy($user){
    return $user->delete();
   }

    
    
}