<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Storage;
use File;
class FileApiManger extends Controller
{
    public function pathFile($path)
    {
        $directories = Storage::directories($path);
        $files = Storage::files($path);
        $data['directories'] = $directories;
        $data['files'] = $files;
        return $data;
    }
    public function getPath($path = '') {
        $data = $this->pathFile($path);
        $links = showCurrentLinks($path);
        return response()->json(compact('data', 'path', 'links'));
    }
    public function postDirectory(Request $request)
    {
        $createFloder = Storage::makeDirectory($request->input('folderName'));
        $responseMsg = ['status'=>$createFloder,'time'=>date('Y-m-d H:i:s'),'floderName'=>$request->input('folderName')];
        return response()->json($responseMsg);
    }
    public function deleteDirectory(Request $request)
    {
        $deleteFloder = Storage::deleteDirectory($request->input('folderName'));
        $responseMsg = ['status'=>$deleteFloder,'time'=>date('Y-m-d H:i:s'),'floderName'=>$request->input('folderName')];
        return response()->json($responseMsg);
    }
    public function putDirectory(Request $request)
    {
        $moveFloder = Storage::move($request->input('oldFolder'),$request->input('newFolderName'));
        $responseMsg = ['status'=>$moveFloder,'time'=>date('Y-m-d H:i:s'),'floderName'=>$request->input('newFolderName')];
        return response()->json($responseMsg);
    }
    public function postFile(Request $request)
    {
        $destinationPath = storage_path().'/app/'.$request->input('path');
        $file = $request->file('file');
        $fileName = $file->getClientOriginalName();
        $fileUpload = $request->file('file')->move($destinationPath, $fileName);
        $responseMsg = ['status'=>true,'time'=>date('Y-m-d H:i:s'),'fileName'=>$request->input('path').'/'.$fileName];
        return response()->json($responseMsg);
    }
    public function deleteFile(Request $request)
    {
        $deleteFile = Storage::delete($request->input('fileName'));
        $responseMsg = ['status'=>$deleteFile,'time'=>date('Y-m-d H:i:s'),'floderName'=>$request->input('fileName')];
        return response()->json($responseMsg);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
