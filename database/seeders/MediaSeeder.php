<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tmp = '{"raw": "https://images.unsplash.com/photo-1614670521939-b600cc054a44?ixid=MnwyMTc0OTl8MHwxfGFsbHx8fHx8fHx8fDE2MTk1MDU5Nzg&ixlib=rb-1.2.1",
        "full": "https://images.unsplash.com/photo-1614670521939-b600cc054a44?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTc0OTl8MHwxfGFsbHx8fHx8fHx8fDE2MTk1MDU5Nzg&ixlib=rb-1.2.1&q=85",
        "regular": "https://images.unsplash.com/photo-1614670521939-b600cc054a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc0OTl8MHwxfGFsbHx8fHx8fHx8fDE2MTk1MDU5Nzg&ixlib=rb-1.2.1&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1614670521939-b600cc054a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc0OTl8MHwxfGFsbHx8fHx8fHx8fDE2MTk1MDU5Nzg&ixlib=rb-1.2.1&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1614670521939-b600cc054a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc0OTl8MHwxfGFsbHx8fHx8fHx8fDE2MTk1MDU5Nzg&ixlib=rb-1.2.1&q=80&w=200"}';
//        $faker = Faker\Factory::create();
        DB::table('media')->insert([
            'title' => Str::random(5),
            'altText' => Str::random(20),
            'imageId' => Str::random(10),
//            'urls' => json_encode($tmp),
            'height' => 1000,
            'width' => 3000,
        ]);
    }
}
