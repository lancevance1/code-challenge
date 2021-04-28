<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $guarded = [];

    protected $casts = [
        'urls' => 'object'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
