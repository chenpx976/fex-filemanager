@extends('filemanager.layout')

@section('content')

<div class="container">
	<div class="row">
		<ol class="breadcrumb">
			<li>
				<a href="{{ route('home') }}">Home</a>
			</li>
			@foreach ($path as $index => $element)
			@if ($index<count($path) - 1)
				<li>
					<a href="{{ route('getPath', $element) }}">{{ $element }}</a>
				</li>
			@else
				<li class="active">{{ $element }}</li>
			@endif
			@endforeach
		</ol>
	</div>
	<div class="row">
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-cloud-upload"></span>上传</button>
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-folder-open"></span>创建文件夹</button>
	</div>
	<div class="row">
		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th style="width: 1em;">type</th>
					<th>name</th>
					<th>action</th>
				</tr>
			</thead>
			<tbody>
			@foreach ($data['directories'] as $directory)
				<tr>
					<td><span class="glyphicon glyphicon-folder-close" aria-hidden="true"></span></i></td>
					<td><a href="{{ route('getPath', $directory) }}">{{ $directory }}</a></td>
					<td>
						<a href="{{ route('deleteFile', $directory) }}"><span class="glyphicon glyphicon-trash"></span></a>
						<a href="{{ route('putDirectory', $directory) }}"><span class="glyphicon glyphicon-pencil"></span></a>
						<a href="{{ route('moveFile', $directory) }}"><span class="glyphicon glyphicon-move"></span></a>
					</td>
				</tr>
			@endforeach
			@foreach ($data['files'] as $file)
				<tr>
					<td><span class="glyphicon glyphicon-file"></span></td>
					<td><a href="{{ route('getFile', $file) }}">{{ $file }}</a></td>
					<td>
					<a href="{{ route('deleteFile', $directory) }}"><span class="glyphicon glyphicon-trash"></span></a>
					<a href="{{ route('putFile', $directory) }}"><span class="glyphicon glyphicon-pencil"></span></a>
					<a href="{{ route('moveFile', $directory) }}"><span class="glyphicon glyphicon-move"></span></a>
					</td>
				</tr>
			@endforeach
			</tbody>
		</table>
	</div>
</div>

@stop
