<?php

use function Termwind\render;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return inertia('Home');
// });
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::get('user/', [UserController::class, 'index'])->name('user.index');
Route::get('user/create', [UserController::class, 'create']);
Route::post('user/create', [UserController::class, 'store']);
Route::get('user/edit/{id}', [UserController::class, 'edit']);
Route::put('user/edit/{id}', [UserController::class, 'update']);
Route::get('user/{id}', [UserController::class, 'show']);
Route::delete('user/{id}', [UserController::class, 'destroy']);
