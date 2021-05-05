<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails{
        sendResetLinkEmail as sendResetLinkEmail;
    }


    public function showLinkRequestForm()
    {
        return Inertia::render('Auth/ForgotPassword.vue');
    }


    public function sendLinkEmail(Request $request)
    {
//dd($request->session());
         return $this->sendResetLinkEmail($request);
//        return Redirect::back()->sessio
    }
}
