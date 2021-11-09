//배열예제 MDN 예제 응용

let fruits = ['사과', '바나나']
console.log(fruits.length)
// 2

const fruits = ['사과', '바나나', '수박', '참외']
console.log(fruits.length)
// 에러발생

const MY_ARRAY = [];
// 배열에 아이템을 삽입하는 건 가능합니다
MY_ARRAY.push('A'); // ["A"]
// 하지만 변수에 새로운 배열을 배정하면 에러가 발생합니다
MY_ARRAY = ['B']



