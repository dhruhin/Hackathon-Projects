<?php include("includes.php");
	  if($_REQUEST['username']){
			$user = $_REQUEST['username'];
			$password = $_REQUEST['password'];

			$results = mysql_query("SELECT * FROM `users` WHERE `username`='$user' LIMIT 1");
			$result = mysql_fetch_array($results);
			if(sha1($password) == $result['password']){
				$_SESSION['user'] = $user;
			}else{
				$_SESSION['user']=null;
			}
			
	  }
	  if($_SESSION['user'])
		    echo "<meta http-equiv=\"REFRESH\" content=\"0;url=index.php\">";

?>
<!DOCTYPE html>
<html lang="en">
	  <head>
	  <?php include('head.php');?>
	</head>

<body>
<?php include('navbar_login.php');?>
<br/><br/><center>
<div id="wrapper">
    <div id="container">
			<form id="form1" name="form1" method="post" action="login.php?target=<?= $_GET['target'] ?>">
				<p>
					<label for="username">Username</label>
					<br/>
					<input type="text" name="username"/>
				</p>
				<p>
					<label for="password">Password</label>
					<br />
					<input type="password" name="password"/>
				</p>
				<p>
					<button class="btn btn-large btn-primary" type="submit">Login</button>
				</p> 
			</form>
		</div>
    </div>
    <br/>
    <br/>
</div></center>
</body>
</html>
