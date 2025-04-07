<?php

namespace App\Http\Controllers;

use App\Models\RequiredField;
use Illuminate\Http\Request;

class RequiredFieldController extends Controller
{
    public function index()
    {
        $fields = RequiredField::orderBy('order')->get();
        return response()->json($fields);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'field_name' => 'required|string',
            'field_type' => 'required|string',
            'is_required' => 'boolean',
            'order' => 'nullable|integer',
            'category' => 'nullable|string'
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
            'is_required' => 'sometimes|boolean',
            'order' => 'sometimes|integer',
            'category' => 'sometimes|string'
        ]);

        $field->update($data);
        return response()->json($field);
    }

    public function destroy($id)
    {
        $field = RequiredField::findOrFail($id);
        $field->delete();
        return response()->json(null, 204);
    }
}
