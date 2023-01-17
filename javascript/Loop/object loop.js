const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

/*
for (let person of testScores) {
    console.log(person); // testScores is not iterable
}
*/

for (let person in testScores) { // 객체를 사용할 땐 in
    console.log(`${person} scored ${testScores[person]}`);
    /*
    keenan scored 80
    damon scored 67
    kim scored 89
    shawn scored 91
    marlon scored 72
    dwayne scored 77
    nadia scored 83
    elvira scored 97
    diedre scored 81
    vonnie scored 60
    */

}

// 객체를 출력하는 다른 방법은 ?
console.log(Object.keys(testScores));
/* key만 출력
[
  'keenan', 'damon',
  'kim',    'shawn',
  'marlon', 'dwayne',
  'nadia',  'elvira',
  'diedre', 'vonnie'
]
*/

console.log(Object.values(testScores))
/* value만 출력
[
  80, 67, 89, 91, 72,
  77, 83, 97, 81, 60
]
*/


console.log(Object.entries(testScores))
/* key와 value 모두 출력
[
  [ 'keenan', 80 ],
  [ 'damon', 67 ],
  [ 'kim', 89 ],
  [ 'shawn', 91 ],
  [ 'marlon', 72 ],
  [ 'dwayne', 77 ],
  [ 'nadia', 83 ],
  [ 'elvira', 97 ],
  [ 'diedre', 81 ],
  [ 'vonnie', 60 ]
]
*/

// for ... of 사용
// testScores의 모든 합계를 구한다면 ?

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score
}
console.log(total / scores.length);