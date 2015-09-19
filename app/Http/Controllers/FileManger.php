<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Storage;
use \File;

class FileManger extends Controller {
	// var_dump(Storage::allFiles('./'));
	// var_dump($contents = Storage::get('file.txt'));
	// var_dump(Storage::disk('local')->exists('file.txt'));
	// var_dump(Storage::size('file.txt'));
	// // 创建文件
	// var_dump(Storage::put('app/file.txt', 'contents'));
	// // 创建文件夹
	// // Storage::makeDirectory('app/dasdsa/ffewa');
	// var_dump(Storage::allDirectories(''));
	// var_dump(Storage::allDirectories('app'));
	// var_dump(Storage::directories('test'));
	// var_dump(Storage::directories('app'));
	// var_dump(Storage::files(''));
	// var_dump(Storage::files('app'));
	public function pathFile($path)
	{
		$directories = Storage::directories($path);
		$files = Storage::files($path);
		$data['directories'] = $directories;
		$data['files'] = $files;
		return $data;
	}
	/**
	 * Display a listing of the resource.
	 * 返回主目录下文件夹和文件列表
	 * @return Response
	 */
	public function index() {
		return redirect()->action('FileManger@getPath');
	}
	public function getPath($path = '') {
		$data = $this->pathFile($path);
		$paths = showCurrentLinks($path);
		return view('filemanager.home',compact('data','paths'));
	}
	public function getFile($file)
	{
		$data = Storage::get($file);
		return $data;
	}
	public function postDirectory()
	{
		return response()->json($request->all());
	}
	public function putDirectory() {
		return "putDirectory";
	}
	public function putFile() {
		return "putFile";
	}
	public function moveFile() {
		return "moveFile";
	}
	public function deleteFile() {
		return "deleteFile";
	}
	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create() {
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  Request  $request
	 * @return Response
	 */
	public function store(Request $request) {
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  Request  $request
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request, $id) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id) {
		//
	}
}
