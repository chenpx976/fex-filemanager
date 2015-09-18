<?php

if (! function_exists('friendly_date')) {
    /**
     * 友好的日期输出
     * @param  string|\Carbon\Carbon $theDate 待处理的时间字符串 | \Carbon\Carbon 实例
     * @return string                         友好的时间字符串
     */
    function friendly_date($theDate)
    {
        // 获取待处理的日期对象
        if (! $theDate instanceof \Carbon\Carbon)
            $theDate = \Carbon\Carbon::createFromTimestamp(strtotime($theDate));
        // 取得英文日期描述
        $friendlyDateString = $theDate->diffForHumans(\Carbon\Carbon::now());
        // 本地化
        $friendlyDateArray  = explode(' ', $friendlyDateString);
        $friendlyDateString = $friendlyDateArray[0]
            .Lang::get('friendlyDate.'.$friendlyDateArray[1])
            .Lang::get('friendlyDate.'.$friendlyDateArray[2]);
        // 数据返回
        return $friendlyDateString;
    }
}

function showFileName($name)
{
	$name = explode('/', $name);
	if (!end($name)) {
		array_pop($name);
	}
	return end($name);
}

function showCurrentLinks($path)
{
	$paths = explode('/', $path);
	$currentLinks = [];
	$currentLink = "";
	foreach ($paths as $key => $value) {
		$currentLink.= $value."/";
		$currentLinks[] = $currentLink;
	}
	return $currentLinks;
}
