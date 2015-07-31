<?php
include('includes.php');
$user = $_SESSION['user'];
$results = mysql_query("SELECT * FROM `users` WHERE `username`='$user' LIMIT 1");
$result = mysql_fetch_array($results);
?>