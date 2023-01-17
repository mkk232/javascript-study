const midterms = { danielle: 96, thomas: 78 }

console.log(midterms); // { danielle: 96, thomas: 78 }

// 점수 업데이트

midterms.thomas = 79;

console.log(midterms); // { danielle: 96, thomas: 79 }

midterms.thomas = 'C+'; // 문자열로 변경 !

midterms['danielle'] = 'A' // 문자열로 변경 !

console.log(midterms); // { danielle: 'A', thomas: 'C+' } , 문자열로 변경 가능함.

// 객체의 새로운 프로퍼티 생성

midterms.ezra = 'B+'

console.log(midterms) // { danielle: 'A', thomas: 'C+', ezra: 'B+' }

midterms['antonio'] = 'A-';

console.log(midterms) // { danielle: 'A', thomas: 'C+', ezra: 'B+', antonio: 'A-' }

