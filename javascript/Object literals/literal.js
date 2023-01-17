// 객체 리터럴 생성하기
const person = {
    firstName: 'Mick',
    lastName: 'Jagger'
}

console.log(person); // { firstName: 'Mick', lastName: 'Jagger' }

const kitchenSink = {
    favNum: 98319023,
    isFunny: true,
    colors: ['red', 'orange']
}

console.log(person['firstName']) // Mick
console.log(person['lastName']) // Jagger

console.log(kitchenSink['colorssda']); // undefined, Key가 올바르지 않음. 객체에 없는 key

console.log(person.firstName); // Mick

// console.log(person.'firstName'); // error !

const years = { // 숫자로 key를 만들었음.
    1999: 'GOOD',
    2020: 'BAD'
}

// console.log(years.1999) // year.1999 불가능.
console.log(years['1999']) // GOOD

const dumbdumb = {
    true: 'dat',
    null: 'askgjkl'
}

console.log(dumbdumb) // { true: 'dat', null: 'askgjkl' }

console.log(dumbdumb['true']) // dat

console.log(dumbdumb['null']) // askgjkl

// console.log(person[firstName]) // error

console.log(person.firstName) // Mick

console.log(person['first' + 'Name']) // Mick

let birthYear = 2020

console.log(years[birthYear]) // BAD, 변수를 사용해도 된다 !

// 객체에서 key를 사용하고 싶으면 대괄호를 쓴다.


//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:

let fullAddress = `${restaurant['address']}, ${restaurant['city']}, ${restaurant['state']}, ${restaurant['zipcode']}`;