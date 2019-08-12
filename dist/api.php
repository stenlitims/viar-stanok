<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/config.php';

header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, Application');


function writeFile($data, $file)
{
    if (is_array($data)) {
        $data = json_encode($data);
    }

    $f = fopen($file, 'w');
    fwrite($f, $data, strlen($data));
    fclose($f);
}

function getList($p)
{
    $row = 1;
    $arr = [];
    $head = [];

    if (($handle = fopen($p, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
            if ($row == 1) {
                //print_r($data );
                $head = array_map('strtolower', $data);
            } else {
                $temp = [];
                $i = 0;
                foreach ($data as $item) {
                    $temp[$head[$i]] = $item;
                    $i++;
                }
                $arr[] = $temp;
            }
            $row++;
        }
        fclose($handle);
    }

    return $arr;
}

$cache_file = $_SERVER['DOCUMENT_ROOT'] . $conf['cache'];
$catalog = $_SERVER['DOCUMENT_ROOT'] . $conf['catalog'];
$times_weekend = $_SERVER['DOCUMENT_ROOT'] . $conf['times_weekend'];

function findId($id, $data)
{
    if (!is_array($data)) {
        return false;
    }
    $f = 0;
    foreach ($data as $k => $item) {
        if ($id == $item['id']) {
            $f = 1;
            break;
        }
        $f = 0;
    }
    if ($f) {
        return $k;
    }
    return false;
}

if ($_GET['get'] == 'date') {
    echo time();
}


if ($_GET['get'] == 'settings') {
    echo json_encode($settings);
}

if ($_GET['get'] == 'weekend') {
    if ($t = @file_get_contents($times_weekend)) {
        echo $t;
    } else {
        echo json_encode([]);
    }
}


if ($_GET['get'] == 'list') {
    $list = getList($catalog);
    echo json_encode($list);
}






if ($_GET['get'] == 'data') {

    if (!$xml = @file_get_contents($_SERVER['DOCUMENT_ROOT'] . $conf['web_tablo'])) {
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
    $list = getList($catalog);
    if (!$wk = @json_decode(file_get_contents($times_weekend), true)) {
        $wk = [];
    }

    $out = array();
    $w = array();
    $writeWk = 0;
    foreach ($data->equipment as $item) {
        $queue = 1;
        $d = (array) $item;
        $d = $d['@attributes'];
        $out[] = $d;
        $fId = findId($d['id'], $wk);
        if ($fId !== false) {
            unset($wk[$fId]);
            $writeWk = 1;
        }
    }

    foreach ($list as $t) {
        $f = 0;
        foreach ($out as $t2) {
            if ($t['id'] == $t2['id']) {
                $f = 1;
                break;
            }
        }
        $f2 = findId($t['id'], $wk);
        if ($f == 0 and $f2 === false) {
            $w[] = ['id' => $t['id'], 'time' => date("H.i-d.m.Y")];
        }
    }


    if (count($w) or $writeWk) {
        $w = array_merge($w, $wk);
        writeFile($w, $times_weekend);
    }

    $out = json_encode($out);
    writeFile($out, $cache_file);

    echo $out;
}
