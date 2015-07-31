<?php

session_start();

$hostname='localhost';
$username='root';
$password='admin';
$dbname='autism';

mysql_connect($hostname,$username, $password) OR DIE ('Unable to connect to database! Please try again later.');
mysql_select_db($dbname);
?>

