$(document).ready(function() {
    $('div').css('border', '3px solid red');
});
$(document).GetElementById("secNav").addEventListener("mouseover", function( event ) {
	event.target.style.color = "red";}, true);
});
/*      $('td').hover(function() {
	/*$(this).addClass('highlight');
	ja poka ne soobrazhu, kak posvetit' ego -- pustj polzaet*/
/*	  $(this).animate({top: "+=15px", height: "toggle"}, 450, function() {
	  $(this).addClass('red')}, function() {
	      $(this).toggleClass('red');
	  });
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });*/
/*{{top: '+=5px'}, 450}, {{top: '-=5px'}, 450});*/
//});

let bulletPoint = document.GetElementById("secNav");
bulletPoint.addEventListener("mouseover", function( event ) {
    event.target.style.color = "orange";}, false);
