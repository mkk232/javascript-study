
function makeMysteryFunc() {
    const rand = Math.random();
    console.log(rand);
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION");
            console.log("YOU WIN A MILLION DOLLARS!!");
        }
    } else {
        return function () {
            alert("YOU HAVE BENN INFECTED BY A COMPUTER VIRUS");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
        }
    }
}

const mystery = makeMysteryFunc();
console.log(mystery());



function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const testRange = function (num) {
    return num >= min && num <= max;
}

/* 여기서 makeBetweenFunc 은
function (num) {
    return num >= 0 && num <= 18;
} 
*/
const isChild = makeBetweenFunc(0, 18);

/*
    isChild = function(num) {
        return num >= 0 && num <= 18;
    }
*/

console.log(isChild(40)); // false

console.log(isChild(7)); // true

const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

console.log(isAdult(50)); // true
console.log(isSenior(100)); // true

console.log(isAdult(90)); // false
console.log(isAdult(18)); // false