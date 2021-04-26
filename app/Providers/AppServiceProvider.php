<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Inertia::share('access_key', config('unsplash.ACCESS_KEY'));
        Inertia::share('search_url', config('unsplash.search_url'));
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //disable the wrapping of the outermost resource like "data"
        // JsonResource::withoutWrapping();
    }
}
