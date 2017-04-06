var player1 = "X";
var player2 = "O";
var counter = 0;
var player;

$(document).ready(function(){
  // $("#00").on("click", "td", function() {
  //   alert($(this).text());
  // });
  $(".matrix").click(function(event) {
   $(event.currentTarget).attr('id');
    var clickId = event.currentTarget.id;

    counter ++;
    console.log(counter);
    if (counter %2 === 0)
    {
       player = "O";
    }
    else
    {
      player = "X";
    }
    $("#"+ clickId).text(player);


    console.log(clickId);
    // alert ("you clicked me!");
  })

});
