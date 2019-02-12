<?php
	require_once('../../../../config.php');
	$data = array(
		'$name' => optional_param('$name', '', PARAM_TEXT),
		'$email' => optional_param('$email', '', PARAM_EMAIL),
		'$date' => optional_param('$date', '', PARAM_TEXT),
		'$x' => optional_param('$x', 0, PARAM_INT),
		'$y' => optional_param('$y', 0, PARAM_INT),
		'$active' => optional_param('$active', '', PARAM_TEXT),
		'$duration' => optional_param('$duration', 0, PARAM_FLOAT),
		'$current_url' => optional_param('$current_url', '', PARAM_URL),
		'$ip_address' => optional_param('$ip_address', '', PARAM_HOST),
		'$samplingmode' => optional_param('$samplingmode', '', PARAM_TEXT),
		'$leftclick' => optional_param('$leftclick', '', PARAM_TEXT),
		'$rightclick' => optional_param('$rightclick', '', PARAM_TEXT),
		'$middleclick' => optional_param('$middleclick', '', PARAM_TEXT),
		'$mTouch' => optional_param('$mTouch', '', PARAM_TEXT),
		'$keyboardtype' => optional_param('$keyboardtype', '', PARAM_TEXT),
		'$scrollleft' => optional_param('$scrollleft', '', PARAM_INT),
		'$scrolltop' => optional_param('$scrolltop', '', PARAM_INT),
		'$windowwidth' => optional_param('$windowwidth', 0, PARAM_INT),
		'$windowheight' => optional_param('$windowheight', 0, PARAM_INT),
		'$screenwidth' => optional_param('$screenwidth', 0, PARAM_INT),
		'$screenheight' => optional_param('$screenheight', 0, PARAM_INT),
		'$zoom' => optional_param('$zoom', 0, PARAM_INT),
		'$restrictedfocusviewer' => optional_param('$restrictedfocusviewer', '', PARAM_TEXT),
		'$bubbleview' => optional_param('$bubbleview', '', PARAM_TEXT),
		'$fingertracinglearningsystem' => optional_param('$fingertracinglearningsystem', '', PARAM_TEXT),
		'$cursorreminder' => optional_param('$cursorreminder', '', PARAM_TEXT),
		'$transparency' => optional_param('$transparency', '', PARAM_TEXT),
		'$magnifier' => optional_param('$magnifier', '', PARAM_TEXT),
		'$textcolor' => optional_param('$textcolor', '', PARAM_TEXT),
		'$backgroundcolor' => optional_param('$backgroundcolor', '', PARAM_TEXT)
	);
	$file = optional_param('$file', '', PARAM_TEXT);
	file_put_contents($file, json_encode($data));
