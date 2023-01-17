// 객체와 배열을 같이 쓰는 예제

const comments = [
    {
        username: 'Tammy',
        text: 'lolololololololol',
        votes: 9
    },
    {
        username: 'FishBoi',
        text: 'glub glub',
        votes: 126457
    }
]

console.log(comments); /* 
[
    { username: 'Tammy', text: 'lolololololololol', votes: 9 },
    { username: 'FishBoi', text: 'glub glub', votes: 126457 }
]
*/

console.log(comments[1]) // { username: 'FishBoi', text: 'glub glub', votes: 126457 }
console.log(comments[1].text); // glub glub