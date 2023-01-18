/*
    고차 함수
    함수 인자로 함수가 오는것을 말함.
    어떠한 함수가 다른 함수와 같이 쓰이거나 다른 함수에서 작동되는 함수를 의미함.
*/

function callTwice(func) {
    func();
    func();
}

// callTwice(1); // func is not a function

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie); // 2 
// 3

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

callTenTimes(rollDie);
/*
    6
    3
    5
    4
    2
    6
    3
    5
    3
    1
*/