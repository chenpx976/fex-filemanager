@extends('filemanager.layout')

@section('content')
<div class="container">


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
					<td><a href="{{ route('getPath', $directory) }}">{{ showFileName($directory) }}</a></td>
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


<div class="modal fade" id="createFloder">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">创建文件夹</h4>
			</div>
			<div class="modal-body">
				<form action="{{ route('postDirectory') }}" method="POST" role="form">
					{!! csrf_field() !!}
					<div class="form-group">
						<label for="">文件夹名称</label>
						<input type="text" name="folderName" class="form-control" id="" placeholder="">
					</div>
					<button type="submit" class="btn btn-primary algin-left">Submit</button>
				</form>
			</div>
		</div>
	</div>
</div>

@stop
