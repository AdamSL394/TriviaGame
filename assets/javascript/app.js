// Button that starts the game 
// Loads next page with a timer that counts down 
// loads questions that will be buttons 
//  each question will be a if statement determining what to do if the user answers
// 

var startGame;
var correctAnswers=0;
var incorrectAnswers=0;
var timeRemaining=false;
var number = 5;
var questionIndex = 0;

var question= [{
    q:"Which are National Parks ? ",
    a:"Yosemite",
    a:"Green",
    a:"Red",
    a:"Yellow",

},{
    q:"Places to go skydiving ",
    a:"yes",
    a:"No",
    a:"Maybe",
    a:"So",

},{
    q:"Actual States",
    a:"California",
    a:"Blah",
    a:"Yes",
    a:"No",

}

]




$("#start").on("click", run);
 

$("#stop").on("click",stop);


     function renderQuestion (){
       if ( questionIndex <= question.length){
       ($("#q1").html(question[questionIndex].q))
        }
        else {$(".endGame").text("Final Score " + correctAnswers + " out of " + 5)}
     }

    function run(){
        clearInterval(startGame);
        renderQuestion();
        startGame = setInterval(decrement, 1000);
    }


    function decrement (){
        number--;
        $("#showNumber").html(number);
        console.log(number);
        if (number === 0){
            stop();
            alert("Time Up!");
            questionIndex++
            renderQuestion()
            restartTimer()
            incorrectAnswers ++
            console.log(incorrectAnswers);
        }
    }

    function restartTimer(){
        number=1
        run()

    }

    function stop (){
        clearInterval(startGame);
    } 
