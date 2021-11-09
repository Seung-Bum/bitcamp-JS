//배열생성
console.log('arr create')
let fruits = ['사과', '바나나']
console.log(fruits)

// 에러발생 예문
//const fruits = ['사과', '바나나', '수박', '참외']
//console.log(fruits.length)

// const MY_ARRAY = [];
// // 배열에 아이템을 삽입하는 건 가능합니다
// MY_ARRAY.push('A'); // ["A"]
// // 하지만 변수에 새로운 배열을 배정하면 에러가 발생합니다
// MY_ARRAY = ['B']


//배열추가
console.log('push')
let arr = ['a', 'b', 'c'];
// arr = ['a', 'b', 'c', 'd']
arr.push('d'); // 배열의 끝에 요소를 추가
console.log(arr)


console.log('unshift')
let arr1 = ['a', 'b', 'c'];
// arr1 = ['d', 'a', 'b', 'c']
arr1.unshift('d'); // 배열의 앞쪽에 요소를 추가
console.log(arr1)


console.log('splice')
var arr2 = ['a', 'b', 'c'];
// arr2 = ['a', 'b', 'd', 'c']
arr2.splice(2, 0, 'd'); // index 2 ('c')의 위치에 요소를 추가
console.log(arr2)

// arr2 = ['a', 'b', 'd', 'c', 'e', 'f']
arr2.splice(4, 0, 'e', 'f'); // index 4의 위치에 2개의 요소를 추가
console.log(arr2)


//배열삭제
console.log('빈배열 할당')
let arr3 = ['a', 'b', 'c']

// 배열 값 전체 삭제, 빈배열 할당
arr3 = []
console.log(arr3.length)


console.log('배열의 길이 0')
let arr4 = ['a', 'b', 'c']
let arr5 = arr4

// 배열 값 전체 삭제
arr4.length = 0
console.log(arr4.length)
console.log(arr5.length)


console.log('배열의 첫번째 값 삭제')
let arr6 = ['a', 'b', 'c'];

// 배열의 첫번째 값 삭제
arr6.shift();
console.log(arr6)


console.log('배열의 뒤에서 삭제하기')
let arr7 = ['a', 'b', 'c', 'd'];

// 배열의 뒤에서 삭제하기
arr7.length = 2;
console.log(arr7)


console.log('배열의 뒤에서 삭제하기 pop')
let arr8 = ['a', 'b', 'c', 'd'];
// 배열의 뒤에서 삭제하기
arr8.pop();
console.log(arr8)


console.log('splice로 삭제')
let arr9 = ['a', 'b', 'c', 'd'];

// index 1부터 2개 삭제
arr9.splice(1, 2);
console.log(arr9)


//배열변경
//인덱스를 이용하여 변경
let hero = ['superman', 'batman', 'pororo']
hero[0] = 'ionman'
console.log(hero) //["ionman", "batman", "pororo"]


//splice 이용하여 변경
var hero = ['superman', 'batman', 'pororo'];
hero.splice(1, 2, 'ionman', 'spiderman'); //인덱스 1부터 2개 변경
console.log(hero); //["superman", "ionman", "spiderman"]
