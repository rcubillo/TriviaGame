$(document).ready(function () {

  //Variables
  var intervalId;
  var number = 5;
  var correct = 0;
  var incorrect = 0;
  var selected = [];
  var rightanswers = ["#myCheck1,#myCheck4,#myCheck7,#myCheck11,#myCheck15,#myCheck16,#myCheck20,#myCheck24,#myCheck25"]
  var incorrectanswers = ["#myCheck2", "#myCheck2", "#myCheck5", "#myCheck6", "#myCheck8", "#myCheck9", "#myCheck10", "#myCheck12", "#myCheck13", "#myCheck14", "#myCheck17", "#myCheck18", "#myCheck19", "#myCheck21", "#myCheck22", "#myCheck23", "#myCheck26", "#myCheck27"];
  var unanswered = 0;
  var correctanswers =



    //Hidden the form and div when the page loads.
    $("form").addClass("hidden");
  $(".results").addClass("hidden");


  //Timer
  function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The stop function
  function stop() {
    //  Clears the intervalId
    clearInterval(intervalId);
  }

  function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #time-left tag.
    $("#time-left").html("<h2>" + number + "</h2>");
    //  Once number hits zero...
    if (number === 0) {
      //  ...run the stop function.
      stop();
      //  Alert the user that time is up.
      alert("Time Up!");
      $("form").hide();
      $(".results").show();
      counting();
      $
    }
  }

  function restart() {
    number = 5;
    correct = 0;
    incorrect = 0;
    $("form").show();
    $(".results").addClass("hidden");
    $(".results").hide();
    timer();
  }

  $('.question input:checked').each(function () {
    selected.push($(this).attr('name'));
    console.log(selected);
  });

  //Allowing to choose only one checkbox.
  $("input:checkbox").on('click', function () {
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
    //var correctopt = document.querySelectorAll("#myCheck1, #myCheck4").checked;
    //var wrongopt = document.querySelectorAll("#myCheck2, #myCheck4, #myCheck3, #myCheck5, #myCheck6");
    // if (document.querySelectorAll("#myCheck1, #myCheck4").checked) {
    //   correct++;
    //   console.log("correct " + correct);
    // }

    // else if (document.querySelectorAll("#myCheck2, #myCheck4, #myCheck3, #myCheck5, #myCheck6")){
    //   incorrect++;
    //   console.log("incorrect " + incorrect);
    // }

    //$("#log").html($("input:checked").val() + " is checked!");
    // if (document.getElementById('myCheck1').checked) {
    //   correct++;
    //   console.log("correct " + correct);
    // } else if (document.getElementById('myCheck2').checked) {
    //   incorrect++;
    //   console.log("incorrect " + incorrect);
    // }
    // else if (document.getElementById('myCheck3').checked) {
    //   incorrect++;
    //   console.log("incorrect " + incorrect);
    // }
    // console.log(correct);
    // console.log(incorrect);
  });

   function counting() {    
    if (document.getElementById('myCheck1').checked) {
      correct++;
      $("#correct").html("Correct answers: " + correct);
      console.log("correct " + correct);
    } else if (document.getElementById('myCheck2').checked) {
      incorrect++;
      $("#incorrect").html("Incorrect answers: " + incorrect);
      console.log("incorrect " + incorrect);
    }
  };




  $("#donebtn").on("click", function () {
    counting();
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

  $("#restartbtn").on("click", function () {
    restart();
  });
});




