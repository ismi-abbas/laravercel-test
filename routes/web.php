<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrdersController;

Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'Laravel with Inertia.js']);
});
Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/orders', function () {
    return Inertia::render('Orders');
});
Route::get('/customers', function () {
    return Inertia::render('Customers');
});

Route::resource('orders', OrdersController::class)->except('index');
