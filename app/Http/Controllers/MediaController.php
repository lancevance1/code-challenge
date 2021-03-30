<?php

namespace App\Http\Controllers;

use App\Media;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MediaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        return view('welcome',compact('user'));
    }
    public function show(Media $media)
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        return view('media.show',compact('user'));
    }

}
