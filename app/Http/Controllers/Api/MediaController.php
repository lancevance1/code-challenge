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
    private MediaRepository $mediaRepository;
  
   public function __construct(MediaRepository $mediaRepository)
   {
       $this->mediaRepository = $mediaRepository;
   }

    public function index(): MediaCollection
    {
        $result = $this->mediaRepository->index();

        return new MediaCollection($result);
    }

    public function store(MediaRequest $request): MediaResource
    {
        $result = $this->mediaRepository->store($request);

        return new MediaResource($result);
    }

    public function show(Media $medium): MediaResource
    {
        $result = $this->mediaRepository->show($medium);

        return new MediaResource($result);
    }

    public function update(MediaRequest $request, Media $medium): MediaResource
    {
        $result = $this->mediaRepository->update($request, $medium);
    
        return new MediaResource($result);
    }

    public function destroy(Media $medium): \Illuminate\Http\JsonResponse
    {
        $result = $this->mediaRepository->destroy($medium);

        return response()->json(['success' => $result]);
    }
}
