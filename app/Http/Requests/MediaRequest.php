<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MediaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
     public function authorize()
     {
//         return auth()->check();
         return true;
     }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "imageId" => 'required|string',
            "title" => 'string|nullable',
            "altText" => 'string|nullable',
            "width" => 'numeric|required',
            "height" => 'numeric|required',
        ];
    }
}
