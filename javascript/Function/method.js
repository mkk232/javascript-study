/*
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}
*/

/*
    굳이 square: function()을 안해도 된다.
*/
const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}


console.log(myMath.PI);
console.log(myMath.square);
console.log(myMath.square(2)); // 4
console.log(myMath.cube(2)); // 8

console.log(myMath["cube"](4)); // 64 보통 이렇게 안씀

