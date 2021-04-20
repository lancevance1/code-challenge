<?php   

namespace App\Repositories;   

use App\Repositories\Interfaces\MediaRepositoryInterface; 
use App\Models\Media;   

class MediaRepository implements MediaRepositoryInterface 
{     
    public function index()
    {
        return Media::all();
    }


   public function store($request)
   {
        return Media::create([
            'title' => $request->title,
            'altText' => $request->altText,
        ]);
   }

   public function show($media)
   {
        return $media;
   }

   public function update($request, $media)
   {
        $media = $media->update([
            'title' => $request->title,
            'altText' => $request->altText,
            
        ]);

        return $media->fresh();
   }

   public function destroy($media)
   {
        return $media->delete();
   }
}