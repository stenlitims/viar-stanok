<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/config.php';

header('Access-Control-Allow-Origin: *'); 
//header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, Application');

if($_GET['get'] == 'date'){
    echo time();
}


if($_GET['get'] == 'settings'){
    echo json_encode($settings);
}


if($_GET['get'] == 'list'){
    $row = 1;
    $arr = [];
    $head = [];
    
    if (($handle = fopen($_SERVER['DOCUMENT_ROOT'].$conf['catalog'], "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
            if($row == 1){
				//print_r($data );
                $head = array_map('strtolower', $data);
            } else {
                $temp = [];
                $i = 0;
                foreach($data as $item){
                   $temp[$head[$i]] = $item;
                   $i++;
                }
                $arr[] = $temp;
            }
            $row++;
        }
        fclose($handle);
    }
	
	//print_r($head );
    
    echo json_encode($arr);
}




$cache_file = $_SERVER['DOCUMENT_ROOT'].$conf['cache'];

if($_GET['get'] == 'data'){

    if(!$xml = @file_get_contents($_SERVER['DOCUMENT_ROOT'].$conf['web_tablo'])){
       echo file_get_contents($cache_file);
       die();
    }

    libxml_use_internal_errors(true);
    $sxe = simplexml_load_string($xml);
    if (!$sxe) {
        echo file_get_contents($cache_file);
        die();
    }

    $data = new SimpleXMLElement($xml);

    $out = array();
    foreach($data->equipment as $item){
        $queue = 1;
        $d = (array)$item;
        $d = $d['@attributes'];
        $out[] = $d;
    }
    
    $out = json_encode($out);
    $f = fopen($cache_file, 'w');
	fwrite ($f, $out, strlen($out));
	fclose($f);

    echo $out;
}

