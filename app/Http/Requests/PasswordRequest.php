<?php

namespace App\Http\Requests;

use App\Rules\MatchOldPassword;
use Illuminate\Foundation\Http\FormRequest;

class PasswordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "password" =>  ['required', 'string', new MatchOldPassword],

            "new_password" =>   'required|string|min:8',

            "new_password_confirmation" => 'required_with:new_password|same:new_password'
        ];
    }
}
