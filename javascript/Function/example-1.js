/*
    문자열을 인자로 받고 첫글자를 대문자로 바꾸기
*/

function capitalize(str) {
    let newStr = '';
    newStr = str[0].toUpperCase() + str.slice(1);
    console.log(newStr);
}

capitalize('element');