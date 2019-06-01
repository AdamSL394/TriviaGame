// Button that starts the game 
// Loads next page with a timer that counts down 
// loads questions that will be buttons 
//  each question will be a if statement determining what to do if the user answers


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
        image: "https://photos.smugmug.com/USA/California/Yosemite-National-Park/i-w2x67H8/0/644eb760/500x500!/Roll%2032%20-%2017-500x500!.jpg",
        fact: (" Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.Yosemite National Park is best known for its waterfalls, towering granite monoliths, deep valleys and ancient giant sequoias ")
    },
    {
        q: "Places to go skydiving ",
        a: ["We Soar","IFly", "Go Jump", "Eagle"],
        c: "Go Jump",
        image: "https://capeadventurezone.com/wp-content/uploads/2018/08/sport-800x567.jpg",
        fact: ("GoJump Santa Cruz is the closest skydiving center to San Francisco that can offer breathtaking coastal views. We are located in beautiful Santa Cruz County, California and specialize in first time tandem skydives.Experience range between 4000 and 15000 jumps. ")

    },
    {
        q: " Most NBA Titles in a Row ",
        a: [" Lakers  "," Warriors ", " Heat ", "Celtics"],
        c: "Celtics",
        image: "https://sportsfly.cbsistatic.com/fly-248/bundles/sportsmediacss/images/team-logos/nba/light/BOS.svg",
        fact:" The Boston Celtics hold the record for the most victories, having won the competition 17 times, as well as winning the competition the most times in a row, winning it eight times from 1959 to 1966. The Los Angeles Lakers have contested the NBA Finals the most times, with 31 appearances. "


    },
]

// starts the game and calls on the run function
$("#start").on("click", run);

// stops the clock and calls the run function
$("#stop").on("click", stop);

// Picking a question function 
// Emptys Answer
function renderQuestion() {
    restartTimer();
    $("#answerFact").empty();
    $("#answerImage").empty();
    $("#answers").empty();
    $("#incorrectAnswer").empty();
    // If Question index is not 3 it will render next question
    if (questionIndex < 3 ) {
        // Go on page and grab question at question index which starts at 0 
        $("#q").html("<p>" + question[questionIndex].q + "</p>");
        // Looping through question answer index 
        for(var i= 0; i < question[questionIndex].a.length; i++){
            // we make a button for each iteration " each answer "
            var button = $("<button>");
            // we append the answer index to the button 
            button.append(question[questionIndex].a[i])
            // we set attribute of a class answer button 
            button.attr("class", "answer-button")
            // we set an attribute of data name the answer name at each answeer index 
            button.attr("data-name", question[questionIndex].a[i])
            // we append the buttons to the answer id 
            $("#answers").append(button)

        }
    }
    // if there are no more question to render *** question index = 3 
    else {
        // Print to the screen 
        $(".endGame").html(" Final Score " + "correct: " + correctAnswers + " incorrect: " + incorrectAnswers  )
        // stops the game
        stop()
        console.log("hi")
    }
    
}
//listener for click on answer button 
$("#answers").on("click", ".answer-button", function(){
    
    //creates a variable for to store button " (this) which was click on " the data of name
    var userClicked = $(this).data("name");
        // correct answer clicked 
        if(userClicked === question[questionIndex].c){
        
        $("#answers").empty();
        $("#q").empty();
       
        
        // renders the correct choice image
       
        correctChoice()
        console.log("hi")
        
        
        // score goes up one
        // correctAnswers++;
        
      
    }
    else {
        // if user picks a wrong chice 
    
        // brings up correct image & tells them they selected an incorrect image 
        wrongChoice();
        // inceases incorrect answers by one
        incorrectAnswers++

        $("#answers").empty();
        $("#q").empty();

        
    }
})

function run() {
    // clears the start game timer 
    clearInterval(startGame);
    renderQuestion();
    startGame = setInterval(decrement, 1000);
  
}

function decrement() {
    number--;
   
    $("#showNumber").html(number);
    if (number === 0) { 
        wrongChoice();
        incorrectAnswers++
        
    }
}

function restartTimer() {
    number = 15

}

function stop() {
    clearInterval(startGame);
} 

function correctChoice(){
    var correctImage = $("<img>");    
        correctImage = $("<img>");
        correctImage.attr("src", question[questionIndex].image);
        $("#answerImage").html(correctImage);
        $("#answerFact").text(question[questionIndex].fact)
    
         questionIndex++;
        correctAnswers++
         number=6
        setTimeout(renderQuestion,5000)
        setTimeout(restartTimer,5000)
         $("#incorrectAnswer").text("  Thats the correct answer !!");
       

}

function wrongChoice(){
    
    var correctImage = $("<img>");    
        correctImage = $("<img>");
        correctImage.attr("src", question[questionIndex].image);
        $("#answerImage").html(correctImage);
        $("#answerFact").text(question[questionIndex].fact)
        
         number=6
         questionIndex++;
        incorrectAnswers++
         setTimeout(renderQuestion,5000)
         setTimeout(restartTimer,5000)
         
         $("#incorrectAnswer").text("  Thats was the incorrect answer ! ");
   

    
}