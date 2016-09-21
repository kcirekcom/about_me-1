'use strict';

var questions = {
    rain: 'Do you enjoy the rain in Washington? Yes or No?',
    hiking: 'Are you avid about hiking the many beautiful trails in washington? Yes or No?',
    brewery: 'Are you a fan of the many micro breweries in the Seattle area? Yes or No?',
    seattle: 'Do you live in the greater Seattle area? Yes or No?'
};

var answersYes = {
    ansRainYes: 'Well I hope you do. It rains alot here.',
    ansHikingYes: 'Woot',
    ansBreweryYes: 'Woot',
    ansSeattleYes: 'Woot'
};

var answersNo = {
    ansRainNo: 'Shucks',
    ansHikingNo: 'Shucks',
    ansBreweryNo: 'Shucks',
    ansSeattleNo: 'Schucks'
};

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
    return input;
}

function prompting() {
    var correct = 0;
    var ans = [];
    //var valid = [];

    //Mapping questions and answers to an arrray
    var questArr = Object.keys(questions).map(key => questions[key]);
    var ansYesArr = Object.keys(answersYes).map(key => answersYes[key]);
    var ansNoArr = Object.keys(answersNo).map(key => answersNo[key]);

    //Loop through question array and provide answer
    for (var i = 0; i <= questArr.length - 1; i++) {
        var ans = [];
        ans[i] = prompt(questArr[i]);
        ans[i] = validate(ans[i]);
        console.log(ans[i]);

        if (ans[i] === 'yes') {
            correct++;
            document.write('<p>' + ansYesArr[i] + '</p>');
        } else if (ans[i] === 'no') {
            document.write('<p>' + ansNoArr[i] + '</p>');
        } else {
            document.write('<p>' + validate(ans[i]) + '</p>')
        }
    }
};



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