<?php 

namespace App\Providers;

use App\Repositories\Interfaces\MediaRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\MediaRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\ServiceProvider; 

/** 
* Class RepositoryServiceProvider 
* @package App\Providers 
*/ 
class RepositoryServiceProvider extends ServiceProvider 
{ 
   /** 
    * Register services. 
    * 
    * @return void  
    */ 
   public function register() 
   { 
       $this->app->bind(MediaRepositoryInterface::class, MediaRepository::class);
       $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
   }
}