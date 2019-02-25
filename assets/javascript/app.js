$(document).ready(function () {

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

  $("input").one("click", function () {
    $("#log").html($("input:checked").val() + " is checked!");

    if (document.getElementById('myCheck1' || 'myCheck4' || 'myCheck7' || 'myCheck11' || 'myCheck15' || 'myCheck16' || 'myCheck20' || 'myCheck24' || 'myCheck25').checked) {
      correct++;
      console.log("correct " + correct);
    } else if (document.getElementById('myCheck2' || 'myCheck3' || 'myCheck5' || 'myCheck6' || 'myCheck8' || 'myCheck9' || 'myCheck10' || 'myCheck12' || 'myCheck14' || 'myCheck13' || 'myCheck17' || 'myCheck18' || 'myCheck19' || ' myCheck21' || 'myCheck22' || 'myCheck23' || 'myCheck26'|| 'myCheck27').checked) {
      incorrect++
      console.log("incorrect " + incorrect);
    }

    // else if(document.getElementById('myCheck4').checked){
    //   correct++
    //   console.log("incorrect" + incorrect);
    // }

  });


//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}



$("#donebtn").on("click", function () {
  $("form").addClass("hidden");

});

$("#startbtn").on("click", function () {
  $("form").show();
  //a.setAttribute("hidden");
  //$( "a" ).hide();
  timer();
  restart();
});

});




