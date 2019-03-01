//this will ensure that jQuery functions won't fail due to unloaded pages.
$(document).ready(function () {
  //Hiding the answerScreen when the page loads.
  $("#answerScreen").hide();
  //Hiding the container when the page loads.
  $(".container").hide();

  //array with the questions and answers
  var triviaQuestions = [
    {
      question: "Name the largest freshwater lake in the world?",
      answers: ["Lake Superior", "Lake Tahoe", "Lake  Powel"],
      name: "freshwater",
      class: ".freshwater",
      correct: "Lake Superior"
    },
    {
      question: "What does CSS stands for?",
      answers: ['Cascading Style Sheet', 'Compress  Style Sheet', 'Compact Solid Source'],
      name: "css",
      class: ".css",
      correct: 'Cascading Style Sheet'
    },
    {
      question: "What is the seventh planet from the sun?",
      answers: ['Uranus', 'Mercury', 'Neptune'],
      name: "planet",
      class: ".planet",
      correct: 'Uranus'
    },
    {
      question: "Name the world's largest ocean?",
      answers: ['Atlantic', 'Pacific', 'Indian'],
      name: "world",
      class: ".world",
      correct: 'Pacific'
    },
    {
      question: "What is the diameter of Earth?",
      answers: ['50,000 miles', '24,000 miles', '8,000 miles'],
      name: "diameter",
      class: ".diameter",
      correct: '8,000 miles'
    },
    {
      question: "What colour jersey is worn by the winners of each stage of the Tour De France?",
      answers: ['Yellow', 'Pink', 'Purple'],
      name: "jersey",
      class: ".jersey",
      correct: 'Yellow'
    },
    {
      question: "Which sport does Constantino Rocca play?",
      answers: ['Soccer', 'Golf', 'Volleyball'],
      name: "sport",
      class: ".sport",
      correct: 'Golf'
    },
    {
      question: "Which chess piece can only move diagonally?",
      answers: ['A  pawn', 'A knight', 'A bishop'],
      name: "chess",
      class: ".chess",
      correct: 'A bishop'
    }
  ]
  var labels = ["a", "b", "c"];

  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;
  //  Set our number counter to 100.
  var number = 4;

  //  Variable that will hold our interval ID when we execute
  //  the "run" function
  var intervalId;

  // click to start then display quesions
  var startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    $('#answerScreen').hide();
    $('#timesUp').hide();
    //  Execute the run function.
    run();
    questionDisplay();
  });

  // function for displaying triviaQuestions
  var questionDisplay = function () {
    $(".questions :not('#sub-but')").empty();
    // loops through the 8 triviaquestions
    for (var j = 0; j < 8; j++) {
      $('.questions').prepend('<div class="' + triviaQuestions[j].name + '"></div>');
      $(triviaQuestions[j].class).append('<div class ="ques-title">' + triviaQuestions[j].question + '</div>');
      // loops through answers for each radio button
      for (var i = 0; i <= 2; i++) {
        $(triviaQuestions[j].class).append('<input type="radio"  name="' + triviaQuestions[j].name + '" value="' + triviaQuestions[j].answers[i] + '"/><label for="' + labels[i] + '">' + triviaQuestions[j].answers[i] + '</label>');
      }
      $('.questions').prepend('<hr/>');
    }
  }

  // Timer run function
  function run() {
    number = 4;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  Timer decrement function.
  function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#time-remain").html("<h5>" + number + "</h5>");
    //  Once number hits zero...
    if (number === 0) {
      //  ...run the stop function.
      stop();
      //  Alert the user that time is up.
      alert("Time Up!");
      $('.container').hide();
      thevida();
      $('#answerScreen').show();
      $('#correctScreen').text(`Correct Answers: ${correctAnswers}`);
      $('#wrongScreen').text(`Incorrect or Unanswered Answers: ${wrongAnswers}`);
      correctAnswers = 0;
      wrongAnswers = 0;
    }
  }

  // Timer stop function
  function stop() {
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  var gradeQuiz = $('#sub-but').on('click', function () {
    correctAnswers = 0;
    wrongAnswers = 0;
    unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    // for (var i = 0; i < 8; i++) {
    //   if ($('input:radio[name="' + triviaQuestions[i].name + '"]:checked').val() === triviaQuestions[i].correct) {
    //     correctAnswers++; //1
    //     if ($('input:radio[name="' + triviaQuestions[i].name + '"]:checked').val() !== triviaQuestions[i].correct){
    //       wrongAnswers++;
    //       console.log("wrong " + wrongAnswers);
    //     }
    //   }
    //   else if ($("input:radio:not(:checked)")) {
    //     unAnswered++;
    //   }
    // else { 
    //   wrongAnswers++;
    //   console.log('here')
    // }
    // for (var i = 0; i < 8; i++) {
    //   if ($('input:radio[name="' + triviaQuestions[i].name + '"]:checked').val() === triviaQuestions[i].correct) {
    //     correctAnswers++;
    //   } else if ($('input:radio[name="' + triviaQuestions[i].name + '"]:checked').val() != triviaQuestions[i].correct) {
    //     wrongAnswers++;
    //   }
    // };
    thevida();
    stop();

    $('#correctScreen').text(`Correct Answers: ${correctAnswers}`);
    $('#wrongScreen').text(`Incorrect Answers: ${wrongAnswers}`);
    $("#unaswered").text(`Unanswered ${unAnswered}`);
    $('#answerScreen').show();
    $('.container').hide();
  });

  function thevida(){
    for (var i = 0; i < 8; i++) {
      if ($('input:radio[name="' + triviaQuestions[i].name + '"]:checked').val() === triviaQuestions[i].correct) {
        correctAnswers++;
      } else if ($('input:radio[name="' + triviaQuestions[i].name + '"]:checked').val() != triviaQuestions[i].correct) {
        wrongAnswers++;
      }
    };
  }


  function restart() {
    number = 100;
    run();
    $('.container').show();
    $('#answerScreen').hide();
    $('input[type =radio]').prop('checked', false);
  }

  //restartbtn
  $("#restartbtn").on("click", function () {
    restart();
  });
});
