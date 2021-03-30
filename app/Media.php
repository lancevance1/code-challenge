<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable = [
        'imageId','title','altText','user_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User','user_id');
    }
}
