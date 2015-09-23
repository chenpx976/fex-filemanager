<?php

$router->get('/', ['as' => 'home', 'uses' => 'FileManager@index']);

$router->group(['prefix' => 'api', 'as' => 'api'], function ($router) {
	$router->get('path/{path?}', ['as' => 'getPath', 'uses' => 'FileApiManager@getPath'])->where('path', '(.*)');
	$router->post('manager/post/directory', ['as' => 'postDirectory', 'uses' => 'FileApiManager@postDirectory']);
	$router->post('manager/delete/directory', ['as' => 'deleteDirectory', 'uses' => 'FileApiManager@deleteDirectory']);
	$router->post('manager/put/directory', ['as' => 'putDirectory', 'uses' => 'FileApiManager@putDirectory']);
	$router->post('manager/post/file', ['as' => 'postFile', 'uses' => 'FileApiManager@postFile']);
	$router->post('manager/put/file', ['as' => 'putFile', 'uses' => 'FileApiManager@putFile']);
	$router->post('manager/delete/file', ['as' => 'deleteFile', 'uses' => 'FileApiManager@deleteFile']);
});
