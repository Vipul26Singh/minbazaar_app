<?php

include '../_common.php';






if(auth($app, $secret) === false){
    
    setHeader(401); //from _func.php
    
} else{
    //echo "true";
    setHeader(200);
    $postdata = file_get_contents("php://input");
$request = json_decode($postdata, TRUE);

 echo json_encode($woocommerce->put('orders/' . $request['id'], $request));
}
?>