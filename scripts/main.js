$(document).ready(function() {

	$( ".burger-menu" ).click(function() {
    
    $(".bar1").toggleClass('bg-bar');
    $(".bar2").toggleClass('bg-bar');
    $(".bar3").toggleClass('bg-bar');
    $(".header-menu" ).toggle();

    var darkBlock = $("div").is("#overlay");

    if (darkBlock) {
      $("#overlay").remove();
    } else {
      $("html,body").css("overflow","hidden");

    var docHeight = $(document).height();

    $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
          'opacity' : 0.4,
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'background-color': 'black',
          'width': '100%',
          'z-index': 1
      });
    }
  });
});



//burger-menu
function myFunction(x) {
  x.classList.toggle("change");
}