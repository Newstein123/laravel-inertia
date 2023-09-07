<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\UserCollection;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index() {
        $users = User::orderBy('id', 'desc')->get();
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
