// for .... of
// Internet Explorer 지원 x
// for loop에서 개선됨.

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'basketball', 'tennis'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

// 더욱 깔끔하게 !?

// Java의 상향된 for문과 비슷한듯..

// for .... of
for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

// seatingChart 요소 모두 출력하기.
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

// 배열이 아닌 String 반복 단, 배열이랑 많이 쓰임. 
for (let char of "hello world") {
    console.log(char);
}