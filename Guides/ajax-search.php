<?php


include_once ('database_connection.php');

if(isset($_GET['keyword'])){
    $keyword = 	trim($_GET['keyword']) ;
$keyword = mysqli_real_escape_string($dbc, $keyword);



$query = "select title,description,id from guides where title like '%$keyword%' or description like '%$keyword%' or categories like '%$keyword%'";

//echo $query;
$result = mysqli_query($dbc,$query);
$int = 0;
if($result){
    if(mysqli_affected_rows($dbc)!=0){
          while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
	if($int%3==0)
     	echo '<br/>&nbsp;<br/><br/><br/>';
     echo '<span style="background-color:Azure; max-height:200px;" class="span4"><p> <a style="color: #9e6ab8;" href="guide.php?id='.$row['id'].'"><h2>'.$row['title'].'</h2></a> '.$row['description'].'</p><br/><br/><br/><br/><br/><br/></span>';
  	$int++;
    }
    }else {
        echo '<h4>No Results for :"'.$_GET['keyword'].'"</h4>';
    }
}
}else {
    echo 'Parameter Missing';
}




?>