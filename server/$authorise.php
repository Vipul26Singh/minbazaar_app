<?php

require '../vendor/autoload.php';
use Automattic\WooCommerce\Client;

include '_variable.php';

$woocommerce = new Client(
    $site_url, 
    $consumer_key,
    $consumer_secret,
    [
        'wp_api' => true,
        'version' => 'wc/v1',
    ]
);


 //print_r($params);

function auth($app, $secret){
    

    
    global $app_id;
    global $app_secret;
    global $woocomerce;
    if($app === $app_id && $secret === $app_secret){
        
        return $woocomerce;
    }else{
        return false;
    }
}
?>