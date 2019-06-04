# TriviaGame
This repo shows the use of Javascript and Jquery used together to make <a href="https://www.w3schools.com/jquery/jquery_dom_add.asp">dynamic elements</a>. We have classified out question variable into an object that has the answers as an array. We cycle throughout the answers array and create a button for each index. We are creating, adding attributes, classes, and bringing them to the page in Javascript.After the start button is pressed we  follow the question index brining up each question and rendering text depending on the users choice (right or wrong) or indecision. We take the data-name on from <a href="https://stackoverflow.com/questions/12481439/jquery-this-keyword">this</a> click and match it to the object key and the correct answer value. The game incorporates a timer that is <a href="https://www.w3schools.com/jsref/met_win_setinterval.asp">set to an Interval</a>  of 1 second and refreshed on every question. In between we <a href="https://www.w3schools.com/jsref/met_win_settimeout.asp">set a timeout</a>  to show the correct answer before we render the next question. At the end the users score is displayed and a restart game button pops up 

## Perquisites
You need to git pull this repo to your desktop using git clone . and the url from git hub. 

## Running Tests/Instructions
Open the file in  your browser (preferably google chrome) to test the code.
This will show a Trivia game that runs on the click of a start button. The timer will start automatically and your score will be calculated depending on a correct or incorrect answer. As the game runs you will be shown the correct answer and given the ability to restart at the end. 

## Built with:
<ol>
<li> HTML 
<li> CSS 
<li> Javascript
<li> JQuery
</ol>

### Local Development Environment for website Repo
The following will get up and running locally.

Author
Adam Lehrer

![Trivia Game](/assets/images/Trivia_Game.png)
