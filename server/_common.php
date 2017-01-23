<?php


header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header('Access-Control-Allow-Headers: Content-Type');

include '../$authorise.php'; // .. url as they are used inside partials folder
include '../_func.php';




$params = getParams();
$app = $params['appId'];
$secret = $params['appSecret'];
//echo $secret;

?>