/*
    1-7 사이의 인자를 받고 요일을 반환하는 함수 생성
    예상하는 인자가 아닐경우 null을 반환
*/

function returnDay(day) {
    if (!(day > 7 || day < 1)) {
        const dayObj = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
            7: "Sunday"
        }
        return dayObj[day];
    } else {
        return null;
    }
}