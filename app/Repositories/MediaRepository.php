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
          'imageId' => $request->imageId,
          'title' => $request->title,
          'altText' => $request->altText,
          'url_raw' => $request->url_raw,
          'url_full' => $request->url_full,
          'url_regular' => $request->url_regular,
          'url_small' => $request->url_small,
          'url_thumb' => $request->url_thumb,
          
        ]);
   }

   public function show($medium)
   {
        return $medium;
   }

   public function update($request, $medium)
   {
     
     // $medium = $request->validated();
     
        $medium = $medium->update([
          'imageId' => $request->imageId,
          'title' => $request->title,
          'altText' => $request->altText,
            'url_raw' => $request->url_raw,
            'url_full' => $request->url_full,
            'url_regular' => $request->url_regular,
            'url_small' => $request->url_small,
            'url_thumb' => $request->url_thumb,
            
        ]);
        
        
        return $medium;
   }

   public function destroy($medium)
   {
        return $medium->delete();
   }
}