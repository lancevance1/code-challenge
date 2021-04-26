<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MediaRequest;
use App\Http\Resources\Collections\MediaCollection;
use App\Http\Resources\MediaResource;
use App\Models\Media;
use App\Repositories\MediaRepository;
class MediaController extends Controller
{
    private $mediaRepository;
  
   public function __construct(MediaRepository $mediaRepository)
   {
       $this->mediaRepository = $mediaRepository;
   }

    public function index()
    {
        $result = $this->mediaRepository->index();

        return new MediaCollection($result);
    }

    public function store(MediaRequest $request)
    {
        $result = $this->mediaRepository->store($request);

        return new MediaResource($result);
    }

    public function show(Media $medium)
    {
        $result = $this->mediaRepository->show($medium);

        return new MediaResource($result);
    }

    public function update(MediaRequest $request, Media $medium)
    {
        $result = $this->mediaRepository->update($request, $medium);
    
        return new MediaResource($result);
    }

    public function destroy(Media $medium)
    {
        $result = $this->mediaRepository->destroy($medium);

        return response()->json(['success' => $result]);
    }
}
