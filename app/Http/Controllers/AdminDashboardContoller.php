<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboardContoller extends Controller
{
    public function index(){
        return Inertia::render('Admins/Dashboard');
    }
}
