<?php

namespace App\Http\Controllers;

use App\Models\RequiredField;
use Illuminate\Http\Request;

class RequiredFieldController extends Controller
{
    public function index()
    {
        $fields = RequiredField::all();
        return response()->json($fields);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'field_name' => 'required|string',
            'field_type' => 'required|string',
            'is_required' => 'boolean'
        ]);

        $field = RequiredField::create($data);
        return response()->json($field, 201);
    }

    public function update(Request $request, $id)
    {
        $field = RequiredField::findOrFail($id);
        $data = $request->validate([
            'field_name' => 'sometimes|required|string',
            'field_type' => 'sometimes|required|string',
            'is_required' => 'sometimes|boolean'
        ]);

        $field->update($data);
        return response()->json($field);
    }
}
