<?php

namespace App\Http\Controllers;

use App\Media;
use App\User;
use Illuminate\Support\Facades\Auth;

class MediaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * show welcome page after passing user authentication
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        return view('welcome',compact('user'));
    }

    /**
     * show media item page after passing user authentication
     * @param Media $media
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(Media $media)
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        return view('media.show',compact('user'));
    }

}
