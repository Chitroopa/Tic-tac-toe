$(document).ready(function(){
  var counter = 0;
  var player;
  var oClickId = "";
  var oClickArray = [];
  var xClickId = "";
  var xClickArray = [];
  var board = [[0,0,0],
              [0,0,0],
              [0,0,0]]
  $(".matrix").click(function(event) {
   $(event.currentTarget).attr('id');
    var clickId = event.currentTarget.id;
    var clickId1 = event.currentTarget.id.split("");
    var i = clickId1[0];
    var j = clickId1[1];
    console.log("i=" + i);
    console.log("j=" + j);

    counter ++;
    console.log(counter);
    if (counter %2 === 0)
    {
      player = "O";
      board[i][j]= "O";
    }
    else
    {
      player = "X";
      board[i][j]= "X";
    }

      $("#"+ clickId).text(player);
      $( "#"+ clickId).unbind( "click" );
      console.log(board);


    // alert ("you clicked me!");
  })

});
