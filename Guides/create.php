<?php include('result.php');
	function convert($string){
		$string = str_replace("'","\'",$string);
		return $string;
	}
	  if($_REQUEST['username']){
	  	$images = array();
	  	$texts = array();
	  	for($i = 0; $i<$_REQUEST['num'];$i++){
	  		$j=$i+1;
	  		array_push($texts, $_REQUEST['text'.$j]);
	  		array_push($images, $_REQUEST['image'.$j]);
	  	}
			$user = $_REQUEST['username'];
			$tags = $_REQUEST['tags'];
			$title = convert($_REQUEST['title']);
			$description = convert($_REQUEST['description']);
			$phone = $_REQUEST['phone'];
			$request = $_REQUEST['request'];
			$text = convert(serialize($texts));
			$image = convert(serialize($images));

			$created = false;
			$test = mysql_query("INSERT INTO `guides`(`title`, `user`, `guide`, `pics`, `categories`, `description`, `request`) VALUES ('$title','$user','$text','$image','$tags','$description','$request')");
			if($test){
				$created = true;
				if($request>0){
					$results = mysql_query("SELECT * FROM `request` WHERE `id`='$request' LIMIT 1");
					$result = mysql_fetch_array($results);
					$str = "guide.php?id=".mysql_insert_id();
					//$result['originalphone'];
				}
			}
		}

?>
<!DOCTYPE html>
<html lang="en">
	  <head>
	  <?php include('head.php');?><script type="text/javascript" src="//api.filepicker.io/v1/filepicker.js"></script>
	<script>
		$(document).ready(function(){
			add();
		});
		var pos = 0;
		filepicker.setKey('AXomZfRblQdW6NQMBY4kFz');
		function add(){
			pos++;
			$("<div class='row' style='background-color: #85e085;' id='card"+pos+"'/><br/>").appendTo('#divs');
			$("<br/><h3 id='theading"+pos+"'>Step "+pos+"</h3>")
		     .appendTo("#card"+pos);
			$("<button class='btn btn-small' onclick='upload("+pos+");' id='img"+pos+"'>Upload an Image</button><br/><br/>")
		     .appendTo("#card"+pos);
			$("<img src='http://placehold.it/256x256' style='padding-right:10px;' id='img"+pos+"'></img>")
		     .appendTo("#card"+pos);
			$("<input hidden value='http://placehold.it/256x256' form='form1' id='image"+pos+"' name='image"+pos+"'></input>")
		     .appendTo("#card"+pos);
			$("<textarea form='form1' placeholder='Provides details here' class='input-xlarge' rows='5' id='text"+pos+"' name='text"+pos+"' required></textarea><br/><br/><br/>")
		     .appendTo("#card"+pos);
		     $("input#num").val(pos);
		}
		function removeLast(){
			if(pos>1){
				$("#card"+pos).remove();
				pos--;
			}
		}
		function upload(pos){
			filepicker.pick(function(InkBlob){
			  $("img#img"+pos).attr('src', InkBlob.url+"/convert?w=256&h=256");
			  $("input#image"+pos).val(InkBlob.url+"/convert?w=256&h=256");
			});
		}
	</script> 
	</head>

<body>
<?php include('navbar.php');?>
<br/><br/>
<div class="container">
	<div class="row">
			<form id="form1" name="form1" method="post" action="create.php?target=<?= $_GET['target'] ?>">
				<?php if(isset($created)&&$created)
						echo '<div class="alert alert-success">Your guide has been created.</div>';
					else if(isset($created)&&!$created)
						echo '<div class="alert alert-error">Your guide has not been created.</div>';
				?>
				<input id="num" name='num' hidden/>
				<center><h2>Let's make a guide</h2></center>
				<br/><center>
				<label>Title</label>
				<input maxlength="40" required type="text" name="title" placeholder="Title"/>
				</br>
				<label>Description</label>
				<textarea maxlength="300" class="input-xxlarge"name="description" form="form1" required></textarea>
				<label>Tags (Seperated by commas)</label>
				<input required class="input-xlarge" type="text" name="tags" placeholder="Movies, games, etc."/>
				<input hidden name="username" value="<?=$result['username']?>"></input>
				<input hidden name="request" value="<?=$_GET['id']?>"></input>
				</center>
				<center><h2>Step by Step Guide</h2>
				<div id="divs" class="span8 offset2">
				</div></center>
    </div>
<center><br/>
<a class="btn btn-large btn-warning" onclick="removeLast();">Delete Step</a>
<button class="btn btn-large btn-primary input-large" type="submit">Create</button>
<a class="btn btn-large btn-success" onclick="add();">Add Step</a></center>
</form>
</div>
</body>
</html>
