$(document).ready(function () {

//Variables
var intervalId;
var number = 150;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var correctanswers =

//Hidden the form when the page loads.
$("form").addClass("hidden");
$(".results").addClass("hidden");



//Timer

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

function restart(){
  number = 150;
  $("form").show();
  $(".results").addClass("hidden");
  $(".results").hide();
  timer();
}

//let me choose only one checkbox.
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
    console.log(group);
  } else {
    $box.prop("checked", false);
  }
});



  $("input").one("click", function () {
    //$("#log").html($("input:checked").val() + " is checked!");

    if (document.getElementById('myCheck1').checked) {
      correct++;
      console.log("correct " + correct);
    } else if (document.getElementById('myCheck2').checked) {
      incorrect++;
        console.log("incorrect " + incorrect);
      }
    // else if (document.getElementById ('myCheck3').checked){
    //   incorrect++;
    //   console.log("incorrect " + incorrect);
    // }
   else if (document.getElementById('myCheck3').checked) {
    incorrect++;
      console.log("incorrect " + incorrect);
    }
  });

//  The stop function
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}



$("#donebtn").on("click", function () {
  $("form").hide();
  $(".results").show();
  stop();
});

$("#startbtn").on("click", function () {
  $("#startbtn").addClass("hidden");
  $("form").show();
  //a.setAttribute("hidden");
  //$( "a" ).hide();
  timer();
});

$("#restartbtn").on("click",function (){
restart();
});


});




