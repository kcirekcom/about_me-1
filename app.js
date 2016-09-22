'use strict';

//global vars
//objects
//functions
//function invocation or code execution

var questions, answersYes, answersNo;

questions = {
    name: 'What is your name?',
    rain: 'Do you enjoy the rain in Washington? Yes or No?',
    hiking: 'Are you avid about hiking the many beautiful trails in washington? Yes or No?',
    brewery: 'Are you a fan of the many micro breweries in the Seattle area? Yes or No?',
    seattle: 'Do you live in the greater Seattle area? Yes or No?',
    pokemon: 'Do I play pokemon go? Yes or No?',
    age: 'Can you guess my age? I will give you 3 tries.',
};

answersYes = {
    ansRainYes: 'Well I hope you do. It rains alot here.',
    ansHikingYes: 'I love hiking! Should try out Burroughs Mountain.',
    ansBreweryYes: 'So many awesome beers to try!',
    ansSeattleYes: 'Hmmm are you going to give me the Seattle Freeze?',
    ansPokemonYes: 'Sorry, I dont have time to play that game.',
    ansAgeYes: 'Good job you got it right.'
};

answersNo = {
    ansRainNo: 'The rain isnt that bad.',
    ansHikingNo: 'Missing out on alot of beautiful views',
    ansBreweryNo: 'Well you are behind the cruve, should stop by Fremont Brewing or Stone.',
    ansSeattleNo: 'Then I need to show you around.',
    ansPokemonNo: 'You got it right, I dont play this game.',
    ansAgeYes: 'Sorry that isnt how old I am.'
};

//prompt input validation
function validate(input) {
    var yes = ['Yes', "YES", 'yes', 'y', 'Y'];
    var no = ['No', 'NO', 'no', 'n', 'N'];
    for (var i = 0; i < yes.length; i++) {
        if (yes[i] === input) {
            input = 'yes';
            i = yes.length;
        }
        if (no[i] === input) {
            input = 'no';
            i = yes.length;
        }
    };
    console.log(input);
    return input;
}
// Guessing my number
function guessAge(res) {
    var num = 30;
    var count = 0;
    res = prompt('Guess my age?');
    count++;
    if (res !== num) {
        while (res !== num || count < 3) {
            console.log(res);
            res = prompt('Guess again?');
            count++;
        };
        if (res === num) {
            console.log(res);
            res = 'Finally guessed it';
        } else {
            console.log(res);
            res = 'Sorry you are out of guesses';
        }
    } else {
        console.log(res);
        return res = 'Wow got it first try';
    }
}

//prompting user with questions from the question object
function prompting() {
    var correct = 0;
    var ans = [];

    //Mapping questions and answers to an arrray
    var questArr = Object.keys(questions).map(key => questions[key]);
    var ansYesArr = Object.keys(answersYes).map(key => answersYes[key]);
    var ansNoArr = Object.keys(answersNo).map(key => answersNo[key]);

    //Loop through question array and provide response
    for (var i = 0; i <= questArr.length - 1; i++) {
        var ans = [];
        if (i !== 0) {
            ans[i] = prompt(questArr[i]);
            ans[i] = validate(ans[i]);
            console.log(ans[i]);
        } else if (i === 6) {
            ans[i] == prompt(questArr[i]);
            guessAge(ans[i]);
        } else {
            ans[i] = prompt(questArr[i]);
        }

        //TODO: get element to append the answers to the prompts
        //var el = document.createElement('li');
        //console.log(el);
        //var parent = document.getElementById('guessing_game');
        //console.log(parent);
        //el.innerHTML = msg; use msg variable to build html
        //parent.document.appendChild(el);

        if (i === 0 || i === 6) {
            document.write('<li>' + ans[i] + '</li>');
        } else {
            if (ans[i] === 'yes') {
                correct++;
                document.write('<li>' + ansYesArr[i] + '</li>');
            } else if (ans[i] === 'no') {
                document.write('<li>' + ansNoArr[i] + '</li>');
            } else {
                document.write('<li>' + validate(ans[i]) + ' is not a valid input.' + '</li>')
            }
        }
    }
};

//dynamically genereate a div 
function addElement(id) {
    var inputText = '<input type="text" name ="response">';
    var inputSubmit = '<input type="submit" value="SUBMIT">';
    var newDiv = document.createElement('div');
    newDiv.style.display = 'none';
    newDiv.innerHTML = inputText + '<br>' + inputSubmit;
    var parent = document.getElementById('form1');
    parent.appendChild(newDiv);
    document.body.insertBefore(newDiv, parent.nextSibling);
}

// Showing or Hiding Div elements
function showHideForm(show, id) {
    if (show == 'yes') {
        addElement(id);
        document.getElementById(newDiv).style.display = 'block';
        //document.getElementById(newDiv).style.display = 'none'; 
    }
    if (show == 'no') {
        addElement(id);
        document.getElementById(div).style.display = 'none';
        //document.getElementById(div).style.display = 'block';
    }
}

//function invocation
//prompting();