<?php include("includes.php");
	  if($_REQUEST['username']){
			$user = $_REQUEST['username'];
			$password = sha1($_REQUEST['password']);
			$first = $_REQUEST['first'];
			$last = $_REQUEST['last'];
			$email = $_REQUEST['email'];
			$phone = $_REQUEST['phone'];

			$created = false;

			$results = mysql_query("SELECT * FROM `users` WHERE `username`='$user' LIMIT 1") or die(mysql_error());
			if(mysql_num_rows($results)==0){
				$created = true;
				mysql_query("INSERT INTO `users`(`username`, `email`, `first`, `last`, `phone`, `password`, `points`, `guides`) VALUES ('$user','$email','$first','$last','$phone','$password','0','')")or die(mysql_error());
	  		}
		}

?>
<!DOCTYPE html>
<html lang="en">
	  <head>
	  <?php include('head.php');?>
	<script>
		function validate(){
			if($("input#password").val()==$("input#password2").val())
				return true;
			alert("The passwords do not match!");
			return false;
		}		
	</script> 
	</head>

<body>
<?php include('navbar_login.php');?>
<br/><br/>
<div class="container">
	<div class="row">
			<form id="form1" name="form1" onsubmit="return validate();" method="post" action="register.php?target=<?= $_GET['target'] ?>">
				<?php if(isset($created)&&$created)
						echo '<div class="alert alert-success">Your account has been created. Proceed to the login page.</div>';
					else if(isset($created)&&!$created)
						echo '<div class="alert alert-error">There has been an error creating your accout. Please try again with a different username.</div>';
				?>
				<center><h2>Create an account here</h2></center>
				<br/>
				<div class = "span4">
					<label>Username</label>
					<input required type="text" name="username"/>
					<br/>
					<label>Password</label>
					<input required type="password" id="password" name="password"/>
					<br />
					<label>Confirm Password</label>
					<input required type="password" id="password2" name="password2"/>
					<br />
				</div>
				<div class = "span4">
					<br/>
					<label>First Name</label>
					<input required type="text" name="first"/>
					<br/>
					<label>Last Name</label>
					<input required type="text" name="last"/>
					<br/>
				</div>
				<div class="span3">
					<br/>
					<label>Email</label>
					<input required type="text" name="email"/>
					<br/>
					<label>Phone Number</label>
					<input required type="text" name="phone"/>
				</div>
    </div>
<center><button class="btn btn-large btn-primary" type="submit">Register</button></center>
</form>
</div>
</body>
</html>
