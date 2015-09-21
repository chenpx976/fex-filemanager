<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
$router->get('/', ['as' => 'home', 'uses' => 'FileManger@index']);
$router->get('path/{path?}', ['as' => 'getPath', 'uses' => 'FileManger@getPath'])->where('path', '(.*)');
$router->get('file/{file}', ['as' => 'getFile', 'uses' => 'FileManger@getFile'])->where('file', '(.*)');

$router->post('manager/post/directory', ['as' => 'postDirectory', 'uses' => 'FileManger@postDirectory']);
$router->put('manager/put/directory', ['as' => 'putDirectory', 'uses' => 'FileManger@putDirectory']);
$router->put('manager/put/file', ['as' => 'putFile', 'uses' => 'FileManger@putFile']);
$router->post('manager/move', ['as' => 'moveFile', 'uses' => 'FileManger@moveFile']);
$router->delete('manager/delete', ['as' => 'deleteFile', 'uses' => 'FileManger@deleteFile']);

$router->group(['prefix' => 'api'], function($router)
{
	$router->get('path/{path?}', ['uses' => 'FileApiManger@getPath'])->where('path', '(.*)');
});
