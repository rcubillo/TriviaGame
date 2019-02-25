//Variables
var intervalId;
var number = 15;

//Hidden the form when the page loads.
$("form").addClass("hidden");


function restart() {
  $("#startbtn").addClass("hidden");
}

function timer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#time-left").html("<h2>" + number + "</h2>");
  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    alert("Time Up!");
  }
}


function capturingvalues() {
  var x = document.getElementById("myRadio").value;
  document.getElementById("demo").innerHTML = x;
  console.log();

}


//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}

function InsertingQuestions() {

}

$("#donebtn").on("click", function () {
  capturingvalues();
});

$("#startbtn").on("click", function () {
  $("form").show();
  //a.setAttribute("hidden");
  //$( "a" ).hide();
  timer();
  restart();
});






