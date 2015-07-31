
<?php include('result.php');?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include('head.php');?>
  <script src="assets/js/timelinr.js"></script>
  <link rel="stylesheet" href="css/style.css" media="screen" />
  <script>
    $(function(){
      $().timelinr({
        arrowKeys: 'true'
      })
    });
  </script>
  </head>
  
  <body>

    <?php 
    if(isset($_SESSION['user']))
      include('navbar.php');
    else
      include('navbar_login.php');
    $id = $_GET['id'];
    $results = mysql_query("SELECT * FROM `guides` WHERE `id`='$id' LIMIT 1");
    $result = mysql_fetch_array($results);

    $images = unserialize($result['pics']);
    $guides = unserialize($result['guide']);
    $cols = count($images);
    ?>
    <div class="container">

      <center>
        <h2><?=$result['title'];?></h2>
        <h4>Written by <?=$result['user'];?> on <?php 
          $timestamp = strtotime($result['timestamp']);
          echo date("F j, Y", $timestamp);;?></h4>
      </center>
      <div style="background-color: #85e085;" id="timeline">
    <ul id="dates">
      <?php 
      for($i=0; $i<$cols; $i++){
        $j = $i+1;
        echo '<li><a href="#'.$j.'">'.$j.'</a></li>';
      }
      ?>
    </ul>
    <ul id="issues">
       <?php 
      for($i=0; $i<$cols; $i++){
        $j = $i+1;
        echo '<li id="'.$j.'">
        <img src="'.$images[$i].'"/>
        <h1>'.$j.'</h1>
        <p>'.$guides[$i].'</p>
      </li>';
      }
      ?>
    </ul>
    <div id="grad_left"></div>
    <div id="grad_right"></div>
    <a href="#" id="next">+</a>
    <a href="#" id="prev">-</a>
  </div>
    </div>
  }
  </body>
</html>
