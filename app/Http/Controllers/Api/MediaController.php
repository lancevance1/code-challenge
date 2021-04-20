<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MediaRequest;
use App\Http\Resources\MediaResource;
use App\Models\Media;
use App\Repositories\Interfaces\MediaRepositoryInterface;
use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\MediaRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MediaController extends Controller
{
    private $mediaRepository, $userRepository;
  
   public function __construct(MediaRepository $mediaRepository, UserRepository $userRepository)
   {
       $this->mediaRepository = $mediaRepository;
       $this->userRepository = $userRepository;
   }

    //Returns a list of media items in the current user.
    public function index()
    {
        
        return $this->userRepository->index();
    }

    //Returns a media item by id in the current user.
    public function show($media)
    {
        return $this->userRepository->show($media);
    }

    public function store(MediaRequest $request)
    {
      
    }

    //Updates a media item by id in the current user.
    public function update(MediaRequest $request, $media)
    {
       
    }

    //Deletes a media item by id in the current user.
    public function destroy($media)
    {
       
    }
}
