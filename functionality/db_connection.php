<?php
$cred = include '../credentials.php';

$cred_name= ($_SERVER['HTTP_HOST'] === 'tfi.loc') ? 'dev' : 'prod';

$dbHost = $cred[$cred_name]['DB_HOST'];
$dbUser = $cred[$cred_name]['DB_USER'];
$dbPassword = $cred[$cred_name]['DB_PASSWORD'];
$dbName = $cred[$cred_name]['DB_NAME'];

$mysqlConnect = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);

if (!$mysqlConnect) {
    die("Connection failed: ".mysqli_connect_error());
}

mysqli_set_charset($mysqlConnect, "utf8");

return $mysqlConnect;