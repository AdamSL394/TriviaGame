// Button that starts the game 
// Loads next page with a timer that counts down 
// loads questions that will be buttons 
//  each question will be a if statement determining what to do if the user answers
// 

var startGame;
var correctAnswers = 0;
var incorrectAnswers = 0;
var timeRemaining = false;
var number = 15;
var questionIndex = 0;

var question = [
    {
        q: "Which are National Parks ? ",
        a: ["Yosemite", "Angel Island", "Ahjumawi Lava Springs", "Antelope Valley California Poppy "],
        c: "Yosemite",
        d: "hello",
        image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        q: "Places to go skydiving ",
        a: ["Go Jump","IFly", "We Soar", "Eagal"],
        c: "Go Jump",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOugwIt8_a_WdFfwY34-CfnxziuWcUvFEy4z3sdw8mKpmMwrao9Q"

    },
    {
        q: " Best TV show ",
        a: [" Ronald McDonald "," Big Mac ", "Game of Thrones ", " Jersey Shore "],
        c: " Jersey Shore ",
        image: "http://townsquare.media/site/252/files/2018/05/jersey-shore.jpg"


    }
]


$("#start").on("click", run);


$("#stop").on("click", stop);


function renderQuestion() {
    $("#answers").empty();
    
    if (questionIndex !== 3) {
        $("#q").html("<p>" + question[questionIndex].q + "</p>");
        for(var i= 0; i < question[questionIndex].a.length; i++){
            var button = $("<button>");
            button.append(question[questionIndex].a[i])
            button.attr("class", "answer-button")
            button.attr("data-name", question[questionIndex].a[i])
            $("#answers").append(button)

        }
      
    }
    else if (questionIndex === 3){
         $(".endGame").html("Final Score " + correctAnswers + " out of " + 3) 
    }
    stop()
}
    

function run() {
    clearInterval(startGame);
    renderQuestion();
    startGame = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#answerImages").empty();
    $("#showNumber").html(number);
    if (number === 0) {
        stop();
        alert("Time Up!");
        questionIndex++
        renderQuestion()
        restartTimer()
        incorrectAnswers++

    }
}

function restartTimer() {
    number = 3
    run()

}

function stop() {
    clearInterval(startGame);
} 

var correctImage = $("<img>")

$("#answers").on("click", ".answer-button", function(){
    var userClicked = $(this).data("name")
  
        if(userClicked === question[questionIndex].c){
       
        var correctImage = $("<img>")    

        correctImage = $("<img>")
        

        correctImage.attr("src", question[questionIndex].image)
        $("#answerImage").html(correctImage)
       
        correctAnswers++;
        questionIndex++;
        renderQuestion();
        restartTimer()
        
       
    }
    else {
        incorrectAnswers++
        questionIndex++;
        renderQuestion();
        run()
        console.log("incorrect")
    }
})
console.log(correctImage)
