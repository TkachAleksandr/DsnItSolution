<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ParserExcelController extends Controller
{
    public function importFile(Request $request)
    {
        $file = $request->file('file');

        if (!is_null($file)) {

            User::truncate();

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
        $path = 'app/public/';
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
        })->store($format, storage_path($path), true);

        return response()->download(storage_path($path . $newFileName . "." . $format))->deleteFileAfterSend(true);
    }
}
