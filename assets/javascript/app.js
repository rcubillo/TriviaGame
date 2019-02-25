//Variables
var intervalId;
var number = 15;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//Hidden the form when the page loads.
$("form").addClass("hidden");


//Timer
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

$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

$( "input" ).on( "click", function() {
  $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );

  if(document.getElementById('myCheck1').checked) {
    console.log("you are the bomb");
  }else if(document.getElementById('myCheck2').checked) {
    console.log("you lost");
  }
  else if(document.getElementById('myCheck3').checked){
    console.log("you lost");
  }
  
});


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






