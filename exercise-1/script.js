jQuery(function(){

  $("article").hide();
$("#home").show();
$("nav a").click(function() {
   var x = $(this).attr("href");
    $("article").hide();
    $(x).show();
    $("nav a").css("background-color", "#FAFAFA");
$(this).css("background-color", "yellow");

});

});

