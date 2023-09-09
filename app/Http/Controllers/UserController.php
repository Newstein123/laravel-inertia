<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\UserCollection;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index(Request $request) {
        $name = $request->query('name');
        $email = $request->query('email');
        $start_date = $request->query('start_date');
        $end_date = $request->query('end_date');
        $query = User::orderBy('id', 'desc');

        if ($name) {
            $query->where(function ($query) use ($name) {
                $query->where('name', 'like', '%' . $name . '%');
            });
        }
        
        if ($email) {
            $query->where(function ($query) use ($email) {
                $query->where('email', 'like', '%' . $email . '%');
            });
        }
        
        if ($start_date) {
            $query->whereDate('created_at', '>', $start_date);
        }
        
        if ($end_date) {
            $query->whereDate('created_at', '<', $end_date);
        }

        $users = $query->get();
        
        return Inertia::render('User/Index', [
            'users' => $users->map(function ($item) {
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'created_at' => $item->created_at->toFormattedDateString(),
                ];
            }),
        ]);
    }

    public function create() {
        return Inertia::render('User/Create');
    }

    public function store(Request $request) {

        $request->validate([
            'name' => 'required| min:6',
            'email' => 'required| unique:users',
            'password' => 'required',
            'confirm_password' => 'required|same:password'
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return to_route('user.index')->with('message', 'User created successfully');
    }

    public function edit($id) {
        $user = User::select('id', 'name', 'email')->where('id', $id)->first();
        return Inertia::render('User/Edit', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, $id) {
        $user = User::findOrFail($id);
        $user->update($request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', Rule::unique('users')->ignore($id)]
        ]));

        return to_route('user.index')->with('message', 'User Updated Successfully');
    }

    public function show($id) {
        $user = User::findOrFail($id);
        return Inertia::render('User/Show', [
            'user' => $user,
        ]);
    }

    public function destroy($id) {
        $user = User::findOrFail($id);
        $user->delete();
        return to_route('user.index')->with('message', 'User deleted successfully');
    }
}
