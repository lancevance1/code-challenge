<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UnsplashSearchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
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
            'search' => 'required|min:1|string',
            'page' => 'nullable|numeric',
            'perPage' => 'nullable|numeric|min:10'
        ];
    }
}
