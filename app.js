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
    ansRainNo: 'Well I hope you do. It rains alot here.',
    ansHikingNo: 'Shucks',
    ansBreweryNo: 'Shucks',
    ansSeattleNo: 'Schucks'
};


var ansYesArr = Object.keys(answersYes).map(key => answersYes[key]);
var ansNoArr = Object.keys(answersNo).map(key => answersNo[key]);

function validateAns(req, res) {
    console.log(req + ' user input');
    if (req === ('YES' || 'yes' || 'y')) {
        return res = 'yes';
    } else if (req === ('NO' || 'no' || 'n')) {
        return res = 'no';
    } else {
        return res = 'Incorrect Input must be a yes or no answer';
    }
}

function prompting() {
    var correct = 0;
    var ans = [];
    var questArr = Object.keys(questions).map(key => questions[key]);
    for (var i = 0; i < questArr.length; i++) {
        var ans = [];
        ans[i] = prompt(questArr[i]);
        console.log(ans[i]);

        var validAns = validateAns(ans[i]);
        console.log(validAns);

        if (validAns === 'yes') {
            correct++;
            document.write('<p>' + ansYesArr[i] + '</p>');
        } else {
            document.write('<p>' + ansNoArr[i] + '< /p>');
        }
    }
}

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