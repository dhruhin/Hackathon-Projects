<?php include("result.php");
	  if($_REQUEST['title']){
			$title = $_REQUEST['title'];
			$description = $_REQUEST['description'];
			$user = $result['username'];
			$phone = $result['phone'];

			$created = false;

			$suc = mysql_query("INSERT INTO `request`(`title`, `description`, `user`, `originalphone`) VALUES ('$title','$description','$user', '$phone')")or die(mysql_error());
	  		
			if($suc){
				$created = true;}
		}

?>
<!DOCTYPE html>
<html lang="en">
	  <head>
	  <?php include('head.php');?>    
	  <script type="text/javascript">
      $(document).ready(function() {
$("#faq_search_input").keyup(function()
{
var faq_search_input = $(this).val();
var dataString = 'keyword='+ faq_search_input;
if(faq_search_input.length>0)

{
$.ajax({
type: "GET",
url: "issues-search.php",
data: dataString,
beforeSend:  function() {

$('input#faq_search_input').addClass('loading');

},
success: function(server_response)
{

$('#searchresultdata').html(server_response).show();

if ($('input#faq_search_input').hasClass("loading")) {
 $("input#faq_search_input").removeClass("loading");
        } 

}
});
}return false;
});
    $("input#faq_search_input").keyup();  
});
    
</script>
	</head>

<body>
<?php include('navbar.php');?>
<br/><br/>
    <div class="container">
    <div class="row"><br/><br/><center>
      <h2>Create a Guide for an Issue</h2>
      <div class="span12" style="background-color:#85e085"><br/><br/>
        <div class="faqsearch">
          <div class="faqsearchinputbox">
            <!-- The Searchbox Starts Here  -->
            <input value=" " style="outline:10px solid #9e6ab8; font-size:24px; height:50px;" name="query" type="hidden" id="faq_search_input"/>
            <!-- The Searchbox Ends  Here  -->
          </div>
        </div>
        <div class="row">
            <div id="searchresultdata" class="faq-articles"> </div>
          </div>
      <br/><br/>
    </div></center>
    </div>
<div class="container">
	<div class="row">
			<form id="form1" name="form1" method="post" action="issues.php?target=<?= $_GET['target'] ?>">
				<?php if(isset($created)&&$created)
						echo '<div class="alert alert-success">Your issue has been posted.</div>';
					else if(isset($created)&&!$created)
						echo '<div class="alert alert-error">Your issue has not been posted. Try again later.</div>';
				?>
				<center><h2>Request help by posting an issue</h2>
				<br/>
				<label>Title</label>
				<input maxlength="40" required type="text" name="title" placeholder="Title"/>
				<br/>
				<label>Description</label>
				<textarea maxlength="200" rows="5" class="input-xxlarge" name="description" form="form1" required></textarea>
				<br/>
				<button class="btn btn-large btn-primary" type="submit">Post an issue</button>
				</form>
				</center>
    </div>
</div>
</body>
</html>
