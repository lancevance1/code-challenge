<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;
use App\Media;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MediaController extends Controller
{
    private $rules = [
        "imageId" => 'required',
        "title" => '',
        "altText" => '',

    ];


    // api auth
    public function __construct()
    {
        $this->middleware('auth:api');

    }



    //Returns a list of media items in the current user.
    public function index()
    {
        $id=Auth::id();
        $user=User::findOrFail($id);
        $results=$user->media;
        return MediaResource::collection($results);
    }

    //Returns a media item by id in the current user.
    public function show($id)
    {
        return new MediaResource(Media::findOrFail($id));
    }

    public function store(Request $request)
    {
        $id=Auth::id();
        $validator = Validator::make($request->all(), $this->rules);

        if ($validator->fails()) {
            $response['success'] = false;
            $response['response'] = $validator->messages();

        } else {
            //process the request
            $media = Media::create($request->all());
            $media->user_id = $id;
            $media->push();
            $response['success'] = true;
            $response['response'] = "successfully created";
        }
        return $response;

//        return response()->json($tmp, 201);
    }

    //Updates a media item by id in the current user.
    public function update(Request $request, $id)
    {
        $response = array('response' => '', 'success' => false);
        $validator = Validator::make($request->all(), $this->rules);

        if ($validator->fails()) {
            $response['response'] = $validator->messages();
        } else {
            //process the request
            $media = Media::findOrFail($id);
            $media->update($request->all());
            $media->save();
            $response['success'] = true;
            $response['response'] = "successfully updated";
        }
        return $response;
    }

    //Deletes a media item by id in the current user.
    public function destroy($id)
    {
        $response = array('response' => '', 'success' => false);
        try {
            $media = Media::findOrFail($id);
            $media->delete();
            $response['success']=true;
            $response['response'] = "successfully delete";
        } catch (\Exception $e) {
            $response['response'] = $e->getMessage();
        }
        return $response;
    }
}
