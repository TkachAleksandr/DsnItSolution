<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserAddRequest;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            "data" => User::all(),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UserAddRequest|Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserAddRequest $request)
    {
        $user = new User();

        $user->surname = $request->input("surname");
        $user->name = $request->input("name");
        $user->middle_name = $request->input("middle_name");
        $user->birthday = $request->input("birthday");
        $user->position = $request->input("position");
        $user->salary = $request->input("salary");
        $user->save();

        return response()->json([
            "message" => "createUserSuccess",
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
