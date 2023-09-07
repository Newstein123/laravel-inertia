<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard/Index', [
            'users_count' => User::count(),
        ]);
    }
}
