<?php

$router->get('/', ['as' => 'home', 'uses' => 'FileManger@index']);

$router->group(['prefix' => 'api', 'as' => 'api'], function ($router) {
	$router->get('path/{path?}', ['as' => 'getPath', 'uses' => 'FileApiManger@getPath'])->where('path', '(.*)');
	$router->post('manager/post/directory', ['as' => 'postDirectory', 'uses' => 'FileApiManger@postDirectory']);
	$router->post('manager/delete/directory', ['as' => 'deleteDirectory', 'uses' => 'FileApiManger@deleteDirectory']);
	$router->post('manager/put/directory', ['as' => 'putDirectory', 'uses' => 'FileApiManger@putDirectory']);
	$router->post('manager/post/file', ['as' => 'postFile', 'uses' => 'FileApiManger@postFile']);
	$router->post('manager/put/file', ['as' => 'putFile', 'uses' => 'FileApiManger@putFile']);
	$router->post('manager/delete/file', ['as' => 'deleteFile', 'uses' => 'FileApiManger@deleteFile']);
});
