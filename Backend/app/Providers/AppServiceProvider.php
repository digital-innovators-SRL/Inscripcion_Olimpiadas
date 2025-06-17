<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
public function register()
{
    $this->app->bind('path.public', function () {
        return base_path('public_html'); // o lo que corresponda
    });
}


    /**
     * Bootstrap any application services.
     *
     * @return void
     */
public function boot()
{
    $this->app->bind('path.public', function() {
        return base_path().'/public_html'; // Cambia 'public_html' por la carpeta pública de tu hosting
    });
}

}
