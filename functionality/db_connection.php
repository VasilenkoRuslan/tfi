<?php
include 'credentials.php';
//global $cred;
//
//$cred_name= ($_SERVER['HTTP_HOST'] === 'tfi.loc') ? 'dev' : 'prod';
//
//$dbHost = $cred[$cred_name]['DB_HOST'];
//$dbUser = $cred[$cred_name]['DB_USER'];
//$dbPassword = $cred[$cred_name]['DB_PASSWORD'];
//$dbName = $cred[$cred_name]['DB_NAME'];
//
//$mysqlConnect = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
function mysqlConnect () {

    global $mysqlConnect;
    if (!isset($mysqlConnect)){
        global $cred;

        $cred_name= ($_SERVER['HTTP_HOST'] === 'tfi.loc') ? 'dev' : 'prod';

        $dbHost = $cred[$cred_name]['DB_HOST'];
        $dbUser = $cred[$cred_name]['DB_USER'];
        $dbPassword = $cred[$cred_name]['DB_PASSWORD'];
        $dbName = $cred[$cred_name]['DB_NAME'];

        $mysqlConnect = mysqli_connect ($dbHost, $dbUser, $dbPassword, $dbName);

        if (!$mysqlConnect) {
            die("Connection failed: ".mysqli_connect_error());
        }
    }
    return $mysqlConnect;
}

//if (!$mysqlConnect) {
//    die("Connection failed: ".mysqli_connect_error());
//}

//mysqli_set_charset($mysqlConnect, "utf8");

//function mysqlQuery($query)
//{
//    global $mysqlConnect;
//    return mysqli_query($mysqlConnect, $query);
//}