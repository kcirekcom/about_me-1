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

console.log(guessAge(3));

function guessAge2(res) {
    var num = 30;
    var count = 0;
    //res = prompt('Guess my age?');
    count++;
    if (res !== num) {
        while (res !== num || count < 3) {
            //res = prompt('Guess again?');
            count++;
        };
        if (res === num) {
            res = 'Finally guessed it';
        } else {
            res = 'Sorry you are out of guesses';
        }
    } else {
        return res = 'Wow got it first try';
    }
}

var arr = [22, 20, 30]
var guess = function(arr) {
    arr.forEach(function(item, index, array) {
        cosole.log(guessAge2(index));
    })
}

guess();