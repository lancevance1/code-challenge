<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('users')->insert([
        //     'name' => Str::random(10),
        //     'email' => 'admin@test.com',
        //     'password' => Hash::make('password'),
        // ]);

        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => 'test@test.com',
            'password' => Hash::make('password'),
        ]);

        // User::factory()
        // ->count(2)
        // ->hasMedia(1)
        // ->create();
    }
}
