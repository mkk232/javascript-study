/*
    함수의 인자로 배열을 받고 배열의 요소를 모두 더하는 함수 생성
*/

function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    console.log(total);
}

sumArray([1, 2, 3, 5, 6, 7]);