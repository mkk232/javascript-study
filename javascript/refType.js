// 참조타입과 동일성 테스트

'hi' === 'hi' // true

['hi', 'bye'] == ['hi', 'bye'] // false

console.log([1] === [1]) // false

console.log([1] == [1]) // false

console.log([] == []) // false

let luckyNum = 87; // 메모리 어딘가에 저장될 것이다.

let luckyNums = [2, 235, 62]; // 여기서 저장되는건 참조다. 

[1, 2, 3] // 이 배열의 고유한 주소를 저장한다.

[1, 2, 3] === [1, 2, 3] // 서로 주소가 다르기 때문에 false가 나옴.

let nums = [1, 2, 3];

let numsCopy = nums;

console.log(nums) // [1, 2, 3]

console.log(numsCopy) // [1, 2, 3]

nums.push(4);


console.log(nums) // [1, 2, 3, 4]

console.log(numsCopy) // [1, 2, 3, 4]

// 같은 주소를 참조하기 때문에 !!

numsCopy.pop();

console.log(nums) // [1, 2, 3]

console.log(numsCopy) // [1, 2, 3]

nums === numsCopy // true