function Board(){
  this.board= [[0,0,0],
              [0,0,0],
              [0,0,0]]
  this.winnerName;
}

Board.prototype.winner = function() {
  for (var k=0; k<3; k++) {
    if ((this.board[k][k]==="X") && (this.board[k][k+1]==="X") && (this.board[k][k+2]=== "X"))
    {
      alert ("you win!");
      this.winnerName = "X";
      return true;
    }
    else if ((this.board[k][k]==="X") && (this.board[k+1][k]==="X") && (this.board[k+2][k] === "X"))
    {
      alert ("you win!");
      this.winnerName = "X";
      return true;
    }
  }
}

$(document).ready(function(){
  var counter = 0;
  var player;
  var oClickId = "";
  var oClickArray = [];
  var xClickId = "";
  var xClickArray = [];
  var newBoard = new Board();

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
      newBoard.board[i][j]= "O";
    }
    else
    {
      player = "X";
      newBoard.board[i][j]= "X";
    }

      $("#"+ clickId).text(player);
      $( "#"+ clickId).unbind( "click" );
      console.log(newBoard.board);
      console.log(newBoard.winner());
  })

});
