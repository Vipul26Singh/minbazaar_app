<?php

include '../_common.php';


if(auth($app, $secret) === false){
    
   setHeader(401); //from _func.php
    
}else{
     
setHeader(200);
     echo json_encode($woocommerce->get('orders/' .$params['orderId']));
}


?>