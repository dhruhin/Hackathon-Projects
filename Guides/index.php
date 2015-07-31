<?php include('result.php');?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include('head.php');?>
    <script src="assets/js/typer.js"></script>
    <script type="text/javascript">
      $(document).ready(function() {

      $('[data-typer-targets]').typer({
  highlightSpeed    : 15,
  typeSpeed         : 15,
  clearDelay        : 2000,
  typeDelay         : 400,
  clearOnHighlight  : true,
  typerDataAttr     : 'data-typer-targets',
  typerInterval     : 8000
});
var mike = document.getElementById('mike');
mike.onfocus = mike.blur;
mike.onwebkitspeechchange = function(e) {
    //console.log(e); // SpeechInputEvent
    $('input#faq_search_input').val(mike.value);
    $("input#faq_search_input").keyup();  
    mike.value="";
};

$("#faq_search_input").keyup(function()
{
var faq_search_input = $(this).val();
var dataString = 'keyword='+ faq_search_input;
if(faq_search_input.length>0)

{
$.ajax({
type: "GET",
url: "ajax-search.php",
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
});
    
</script>
<style type="text/css">
/*This css contains code for the statis loading image in the right of the textbox */
</style>
  </head>
  
  <body>
    <?php 
    if(isset($_SESSION['user']))
      include('navbar.php');
    else
      include('navbar_login.php');?>
    <div class="container">
    <div class="row"><br/><br/><center>
      <h2>What do I do at <i data-typer-targets="a restaurant, an office, a school">a movie theater</i>?</h2>
      <div class="span12" style="background-color:#85e085"><br/><br/>
        <div class="faqsearch">
          <div class="faqsearchinputbox">
            <!-- The Searchbox Starts Here  -->
            <input style="outline:10px solid #9e6ab8; font-size:24px; height:50px;" placehodler: class="input-xxlarge"name="query" type="text" id="faq_search_input" />
            <input x-webkit-speech id="mike">
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
