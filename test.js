function guessAge(res) {
    var num = 30;
    //res = prompt('Guess my age?');
    if (res !== num) {
        for (var i = 0; i < 3; i++) {
            //res = prompt('Guess again?');
            if (num === res) {
                i = 3;
                return res = 'You finally got it';
            }
        }
        return res = 'You did not get my age!';
    } else {
        return res = 'Wow got it first try';
    }
}

//Question 6
var num = 30;
var count = 0;
var res = prompt('Guess my age?');
count++;
if (res !== num) {
    while (res !== num || count < 3) {
        if (num > res) {
            res = prompt('Too low! guess again.');
            count++;
        } else {
            res = prompt('Too high! guess again.');
            count++;
        }
    };
} else if (res === num) {
    if (count === 1) {
        res = alert('Wow you got it first try');
    } else if (count <= 4) {
        res = alert('Finally guessed it');
    } else {
        res = alert('Sorry you are out of guesses');
    }
}

//Question 7 What countries have I visited?
var counter = 0;
var guesses = 6 - counter;
var correctAns = [];
var countries = ['canada', 'mexico', 'germany', 'luxembourg', 'netherlands', 'france', 'spain', 'italy', 'greece', 'turkey'];
var res = prompt('What countries have I traveled to?');
counter++;
for (var i = 0; i < 8; i++) {
    if (counter < 6 || correctAns.length < 2) {
        if (answers[i] === res) {
            prompt('You guessed ' + correctAns.length + ' of them right, keep guessing.');
            correctAns.push(res);
            counter++;
        } else {
            prompt('Sorry, that wasnt right you have ' + guesses + ' left.');
            counter++;
        }
    } else {
        if (correctAns.length === 2) {
            alert('You guessed 2 of the Countries I have visited.' + correctAns[0] + ' ' + correctAns[1]);
        } else {
            alert('Sorry you didnt get a single country I have visited!');
        }
    }
}