<?php

include("includes.php");

if($_SESSION['user']!=null && $_SESSION['user']!=""){
	session_unset($_SESSION['user']);
	echo "
<meta http-equiv=\"REFRESH\" content=\"0;url=login.php\">";
}

?>