var dice = function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }



$(document).ready(function() {

  document.getElementById("rollPlayerTwo").disabled = true;
  document.getElementById("storePlayerTwo").disabled = true;


    var p1scoreTotal = 0
    var p1score = 0

$("#rollPlayerOne").click(function(){
    var result = dice();

    if (result != 1) {
      p1score += result
      $("#p1turnTotal").html(p1score)
    }

    else {
      $("#result").html(0);
      $("#p1turnTotal").html(0);
      document.getElementById("rollPlayerOne").disabled = true;
      document.getElementById("storePlayerOne").disabled = true;
      document.getElementById("rollPlayerTwo").disabled = false;
      document.getElementById("storePlayerTwo").disabled = false;
      }

    $("#result").html(result);

  });

$("#storePlayerOne").click(function() {
    p1scoreTotal += p1score;

    $("#playerOneScore").html(p1scoreTotal);
    $("#result").html(0);
    $("#p1turnTotal").html(0);
    p1score = 0;
    document.getElementById("rollPlayerOne").disabled = true;
    document.getElementById("storePlayerOne").disabled = true;
    document.getElementById("rollPlayerTwo").disabled = false;
    document.getElementById("storePlayerTwo").disabled = false;
    if (p1scoreTotal >= 100){
    alert("Player 1 Wins!")
    location.reload();
    }
  });




  var p2scoreTotal = 0
  var p2score = 0

  $("#rollPlayerTwo").click(function(){
  var result = dice();

  if (result != 1) {
    p2score += result
    $("#p2turnTotal").html(p2score);
  }

  else {
    $("#result").html(0);
    $("#p2turnTotal").html(0);
    document.getElementById("rollPlayerTwo").disabled = true;
    document.getElementById("storePlayerTwo").disabled = true;
    document.getElementById("rollPlayerOne").disabled = false;
    document.getElementById("storePlayerOne").disabled = false;

    }

  $("#result").html(result);

  });

  $("#storePlayerTwo").click(function() {
    p2scoreTotal += p2score;

    $("#playerTwoScore").html(p2scoreTotal);
    $("#result").html(0);
    $("#p2turnTotal").html(0);
    p2score = 0;
    document.getElementById("rollPlayerTwo").disabled = true;
    document.getElementById("storePlayerTwo").disabled = true;
    document.getElementById("rollPlayerOne").disabled = false;
    document.getElementById("storePlayerOne").disabled = false;
    if (p2scoreTotal >= 100){
    alert("Player 2 Wins!")
    location.reload();
    }
  });


});
