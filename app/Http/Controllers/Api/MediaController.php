<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;
use App\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MediaController extends Controller
{
    private $rules = [
        "imageId" => 'required',
        "title" => '',
        "altText" => '',

    ];

    //Returns a list of media items in the current user.
    public function index()
    {
        //to do: pagination

        return MediaResource::collection(Media::all());
    }

    //Returns a media items by id in the current user.
    public function show($id)
    {
        return new MediaResource(Media::findOrFail($id));
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), $this->rules);

        if ($validator->fails()) {
            $response['response'] = $validator->messages();
        } else {
            //process the request
            Media::create($request->all());
            $response['success'] = true;
            $response['response'] = "successfully created";
        }
        return $response;

//        return response()->json($tmp, 201);
    }

    public function update(Request $request, Media $media)
    {
        $response = array('response' => '', 'success' => false);
        $validator = Validator::make($request->all(), $this->rules);

        if ($validator->fails()) {
            $response['response'] = $validator->messages();
        } else {
            //process the request

            $media->update($request->all());
            $media->save();

            $response['success'] = true;
            $response['response'] = "successfully updated";
        }
        return $response;
    }

    public function destroy( Media $media)
    {
        $response = array('response' => '', 'success' => false);
        try {
            $media->delete();
            $response['success']=true;
            $response['response'] = "successfully delete";
        } catch (\Exception $e) {
            $response['response'] = $e->getMessage();
        }
        return $response;
    }
}
