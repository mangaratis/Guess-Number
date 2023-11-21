'use strict';
// Aug 28, 2023
// As we use selector for css we can use it for js too. . for class. # for id.
// Manipulation: Changing of something.
// Entry point to the DOM: document. : document obj
// document.querySelector(): selects the element that we want to change.

// Way to select an element from a page.
// console.log(document.querySelector('.message').textContent);
// Shows entire element: Selecting the entire element.

//Selecting and Manipulating Elements.
//For input: We can get and set the values by
// document.querySelctor().value; (A value)
// document.querySelector().textContent; (A text content): By its name you can understand

// Handling Click Events
// Do something
// Event is something that happens in a page mouse click, mouse moving, or a key press
// Event listener wait for something to happen and react to it.
// Select where the events should happen for event listner to wait and react.
// Look how easy it happen because of inbuild html code. Click: Make you feel click with one line of code.
// Pass an event and reaction after its event: Event handler
// Can pass function in other function argument because at the end function is also a value.
// When will the event handler gonna execute: it will execute when we check it and value will print in console.
//First argument: type of the event (click)
// Second argument: What to do (reaction): Happen after it clicked: Need a function to react: Event Handler
// function: it is doing something.

// Whenever we get something from user interface or input filed the output is usually always string so if you want to claculate number with number then we have to change string to number.

// Storing in variable because later on it's all about variable.

// Define first what if value isn't enter?

/*document.querySelector('.message').textContent = "Correct number";

document.querySelector('.guess').value = 7;
console.log(document.querySelector('.guess').value);
*/
// August 29, Tuesday 2023
// Dom manipulation using css.

// August 30, Wednesday 2023
// "unit": Always need to specify a string.
// Manipulating CSS: selecting: using style property: using css method or property with camel case notation backgroundColor: using = and assigning value in string or what you want in string.

// DOM event listner: Event: a click, or a moushovering. Sothing is taking action so yousing event listner we can manipulate to do something to an element using event listner.
// Syntax: click.addListner("what event", "what to happen: function"){}
// You can have a seperate function too.

//August 31, Thursday 2023
// Only input elements has value.
// Represents the text: textContext

// Refracting Our Code
// Duplicate Code violates don't repeat your code.

//Refactoring: Restructring.

// After correct number: It will be two coditions high and low and it is only used when guess number is not matched to secretnumber.

// How score is increment or decrement?
// Restructring many repeated code with creating function.


//Challenge: Friday Morning this and starting next project
// Not long code to make score ++ and -- acc. to condition
// What if user enter not 20, < 1??
// How score, highscore is connected with again and check click.

//September 2, Saturday 2023
// Make  it check button click once only: Make that user have to enter again and again.
// Make it nice right now or move to next project?

// First read the code and know what's happening, play with code, and then move on.

// Comment what you understand and what's going on.

// High score problem: Intialization and why value is not assigned to new value.

// Two handler are used. For check and again: check got its condition and as well with again.





// Creating a random number: a secret one so it will matched to the input enter by user for correct number.

// Random number between 1 and 20 is created.
let secretNum = Math.trunc(Math.random() * 20) + 1;
// Random number set to secret num which value will compare with user input.
document.querySelector('.number').textContent = secretNum;

// Setting score to 20.
let score = 20;

// We need highscore and change only if it's greater than that?
let highScore = 0;



// Creating function for restructring

// Displaying message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
// Displaying Secret Num
const displaySecretNum = function (number) {
    document.querySelector('.number').textContent = number;
}
// Displaying score incr/decr
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
// Highscore codition num means argument that will take score.
const newHighScore = function (num) {
    if (num > highScore) {
        highScore = num;
        document.querySelector('.highscore').textContent = highScore;
    }
}
document.querySelector('.number').textContent = "?";

//Handler Function: It's for input... check(What happen after it is check or click)
document.querySelector('.check').addEventListener('click', function () {

    //What we input is a string so changing to number so that we can calculate number with number.
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);
    //Question: When game will stop. How many time user can click
    //Click 5 times then high, low, and a score.
    // Start from the end of the same video.

    // When there is no input
    //1.  If there is no guess
    if (!guess) {
        displayMessage("No Number!");

        //2.  When player wins: COnditions after it is matched: background color, width, and score increased to 10(Bonus)
    } else if (guess === secretNum) {
        displayMessage("Correct Number(Score: 10+)");

        displayScore(score + 10);
        // To reset secret num
        displaySecretNum(secretNum);

        document.querySelector('body').style.backgroundColor = '#64CCC5';
        document.querySelector('.number').style.width = '30rem';







        //Don't need this because ofcourse score is higher than highscore as highscore is initialized as 0.
        // document.querySelector('.highscore').textContent = score;
        displayScore(score + 10);
        newHighScore(score + 10); // function(function()),

        // When guess is wrong: When to score dec/inc.
    } else if (guess !== secretNum) {
        if (score > 1) {
            if (guess == secretNum + 1) {
                score++;
                displayMessage('Too high!!');
                displayScore(score);
            } else if (guess == secretNum - 1) {
                score--;
                displayMessage('Too high!!');
                displayScore(score);
            } else {
                if (guess > secretNum) {
                    score--;
                    displayMessage('Too low!! with ABOVE');
                    displayScore(score);
                } else {
                    score--;
                    displayMessage('Too low!! with BELOW');
                    displayScore(score);
                }
            }
            // displayMessage(guess > secretNum ? "Too high!!" : "Too low!!!");
            // score++;
            // document.querySelector('.score').textContent = score;

            // displayMessage(guess < secretNum ? "Too low!!" : "Too high!!");
            // score--;
            // document.querySelector('.score').textContent = score;
        }
    } else { // Why this is not working(Come back!! and conditions for input number exceed or less.)
        displayMessage('You lost the game.');
        document.querySelector('.score').textContent = 0;
    }




});
document.querySelector('.again').addEventListener('click', function () {
    // State varialbes: Remain constant through out a program.

    //let score = 20;// You creating new value
    // But you just need to assign it.

    score = 20;
    // New secret num or random num should be created continuously.
    secretNum = Math.trunc(Math.random() * 20) + 1;


    displayMessage("Start guessing...");
    displayScore(score);

    //document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';


    //You don't need this.
    //document.querySelector('.number').textContent = secretNum;


    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';

    displaySecretNum(secretNum);
    displaySecretNum("?");
})

//console.log('aa');

//SO when it will stop and what will be the final score?

// else if (guess > secretNum) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = "High Probabiltiy!!!";
//         score++;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = "You lost the Game!!!";
//         document.querySelector('.score').textContent = 0;
//     }

// } else if (guess < secretNum) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = "Low Probabiltiy!!!";
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = "You lost the Game!!!";
//         document.querySelector('.score').textContent = 0;
//     }
// }



// } else if (guess == secretNum + 1 || guess == secretNum - 1) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = "High Probabiltiy!!!";
//         score++;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = "You lost the Game!!!";
//     }

// } else {

//     document.querySelector('.message').textContent = "Low Probability!!!";
//     score--;
//     document.querySelector('.score').textContent = score;

// }