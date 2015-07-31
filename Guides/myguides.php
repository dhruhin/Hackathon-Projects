<?php include('result.php');?>
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
url: "myguides-search.php",
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
<style type="text/css">
/*This css contains code for the statis loading image in the right of the textbox */
</style>
  </head>
  
  <body>
    <?php 
      include('navbar.php');?>
    <div class="container">
    <div class="row"><br/><br/><center>
      <h2>My Guides</h2>
      <div class="span12" style="background-color:#85e085"><br/><br/>
        <div class="faqsearch">
          <div class="faqsearchinputbox">
            <!-- The Searchbox Starts Here  -->
            <input value="<?=$result['username'];?>" style="outline:10px solid #9e6ab8; font-size:24px; height:50px;" name="query" type="hidden" id="faq_search_input"/>
            <!-- The Searchbox Ends  Here  -->
          </div>
        </div>
        <div class="row">
            <div id="searchresultdata" class="faq-articles"> </div>
          </div>
      <br/><br/>
    </div></center>
    </div>
  </div>
  </body>
</html>
