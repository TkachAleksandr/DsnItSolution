<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class ParserExcelController extends Controller
{
    public function importFile(Request $request)
    {
        $file = $request->file('file');

        if (!is_null($file)) {
            Excel::load($file, function($reader) {

                foreach ($reader->get() as $row) {
                    $user = new User();

                    $user->surname = $row->surname;
                    $user->name = $row->name;
                    $user->middle_name = $row->middle_name;
                    $user->birthday = $row->birthday;
                    $user->position = $row->position;
                    $user->salary = $row->salary;
                    $user->save();
                }

            });

            $data = [
                "status" => 1,
            ];
        } else {
            $data = [
                "status" => 0,
                "errors" => "translation.haveNotFile",
            ];
        }
        return response()->json($data);
    }

    public function exportFile()
    {
        $users = User::all();
        $newFileName = Carbon::now()->toDateString();
        $path = 'files/';
        $format = 'xls';

        Excel::create($newFileName, function($excel) use ($users) {
            $excel->sheet('firstSheet', function($sheet) use ($users) {

                $sheet->row(1, ['surname', 'name', 'middle_name', 'birthday', 'position', 'salary']);

                $row = 2;
                foreach ($users as $user) {
                    $sheet->row($row++, [
                        $user->surname,
                        $user->name,
                        $user->middle_name,
                        $user->birthday,
                        $user->position,
                        $user->salary,
                    ]);
                }

            });
        })->store($format, storage_path($path));

        $file = Storage::url($path . $newFileName . "." . $format);

        $data = [
            "status" => 1,
            "data" => $file,
        ];

        return response()->json($data);
    }
}
