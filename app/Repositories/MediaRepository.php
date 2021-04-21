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
            
        ]);
        
        
        return $medium;
   }

   public function destroy($medium)
   {
        return $medium->delete();
   }
}