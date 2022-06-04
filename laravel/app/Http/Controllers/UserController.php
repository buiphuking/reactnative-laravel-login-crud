<?php

namespace App\Http\Controllers;

use App\Helper\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;

class UserController extends Controller
{
    public function register(Request $request){
        $response = (new UserService($request->email, $request->password))->register($request->devicename);
        return response()->json($response);
    }

    public function login(Request $request){
        // $mssv =  $request->input('mssv');
        // $password = $request->input('password');
        // $user = DB::table('users')->where('mssv',$mssv)->where('password', $password)->first();
        // if($user->count()>0){
        //     return Response()->json(
        //         [
        //         'status'=> 200,
        //         'student' => $user,
        //         ]
        //     );
        // }else{
        //     return response()->json([
        //         'status'=> 404,
        //         'message' => 'No Student ID Found',
        //     ]);
        // }
        $loginDetails = $request->only('mssv', 'password');

        if(Auth::attempt($loginDetails)){
            return response()->json(
                [
                    'message'=>'login successful',
                    'status'=>200
                ]
            );
        }else{
            return response()->json(
                [
                    'message'=>'wrong login details',
                    'status'=>501
                ]
            );
        }


    }
}
