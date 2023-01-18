let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII';
}

console.log(radius);

// block scope
// console.log(PI); // PI is not defined
// console.log(msg) // msg is not defined

for (var i = 0; i < 5; i++) {
    var msg = "SADKjkaslgf";
    console.log(msg);
}

console.log(msg); // let msg = msg is not defined // var msg = 출력
console.log(i); // let i = i is not defined // var i = 출력
/*
    let, const를 쓰면 블록 내에서만 사용할 수 있게 된다.
    block scope는 block문 안에서 정의된 변수는 해당 block에서만 존재하게 된다.
*/





