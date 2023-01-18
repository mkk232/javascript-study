/*
    인자를 받는 함수 생성
    여러개의 인자를 받는 함수 생성
*/

function rant(message) {
    console.log(message.toUpperCase());
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}!`);

}

greet('George', 'Clooney');

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }

    console.log(result);
}
repeat(122, 3);


