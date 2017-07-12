<?php
	$type = $_GET['type'];
	$str = file_get_contents('data.json');
	$str_json = json_decode($str, 1);
	$str1 = array(
			'data' => $str_json[$type],
			'errno' => 0
		);
	echo json_encode($str1);
?>