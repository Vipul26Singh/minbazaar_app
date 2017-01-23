<?php

include '../_common.php';


if(auth($app, $secret) === false){
    
   setHeader(401); //from _func.php
    
}else{
     
setHeader(200);
     
     $customer = $woocommerce->get('customers/' .$params['userId']);
    // $customer['0'][gravatar] = get_gravatar($customer['email']); //get customer gravatar
     echo json_encode($customer['0']);
}


?>