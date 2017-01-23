<?php

include '../_common.php';


if(auth($app, $secret) === false){
    
   setHeader(401); //from _func.php
    
}else{
    
    $productId = $params['productId'];
     
    try{
        setHeader(200);

        echo json_encode($woocommerce->get('products/' .$productId, $parameters = []));
    } catch (HttpClientException $e){
        echo "e";
        
        setHeader(404);
        echo "Not found";
    }
}


?>