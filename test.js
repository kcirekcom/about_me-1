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


var num = 30;
var count = 0;
var res = prompt('Guess my age?');
count++;
if (res !== num) {
    while (res !== num || count < 3) {
        if(num > res){
            res = prompt('Too low! guess again.');
            count++;
        } else {
            res = prompt('Too high! guess again.');
            count++; 
        }
    };
}
else if (res === num) {
    if( count === 1){
        res = alert('Wow you got it first try');
    } 
    else if (count <= 4) {
        res = alert('Finally guessed it');
    } 
    else {
        res = alert('Sorry you are out of guesses');
    }
}