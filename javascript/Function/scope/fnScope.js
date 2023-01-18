let totalEggs = 0; // 전역변수
function collectEggs() {
    totalEggs = 6;
}

console.log(totalEggs); // 0
collectEggs();
console.log(totalEggs); // 6


function helpMe() {
    let msg = "I'm on fire"; // 지역변수
}

helpMe();
// console.log(msg); // msg is not defined !

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';

    /*
        함수 내 bird 변수가 있으면 Great Blue Heron를 출력하고
        함수 내 bird 변수를 주석처리 한다면 전역변수인 Scarlet Macaw를 출력한다.
    */
    console.log(bird); // Great Blue Heron

}

birdWatch();
console.log(bird); // Scarlet Macaw 
