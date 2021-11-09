//배열생성
let fruits = ['사과', '바나나']
console.log(fruits.length)
// 2

// 에러발생 예문
//const fruits = ['사과', '바나나', '수박', '참외']
//console.log(fruits.length)

// const MY_ARRAY = [];
// // 배열에 아이템을 삽입하는 건 가능합니다
// MY_ARRAY.push('A'); // ["A"]
// // 하지만 변수에 새로운 배열을 배정하면 에러가 발생합니다
// MY_ARRAY = ['B']


//배열추가
let array = ['a', 'b', 'c'];
// array = ['a', 'b', 'c', 'd']
array.push('d'); // 배열의 끝에 요소를 추가


let array1 = ['a', 'b', 'c'];
// array1 = ['d', 'a', 'b', 'c']
array1.unshift('d'); // 배열의 앞쪽에 요소를 추가


let array2 = ['a', 'b', 'c'];
// array2 = ['a', 'b', 'd', 'c']
array2.splice(2, 0, 'd'); // index 2 ('c')의 위치에 요소를 추가
// array2 = ['a', 'b', 'd', 'c', 'e', 'f']
array2.splice(4, 0, 'e', 'f'); // index 4의 위치에 2개의 요소를 추가


//배열삭제
let arr = ['a', 'b', 'c']
// 배열 값 전체 삭제
arr = []
console.log(arr.length)
//0

let arr1 = ['a', 'b', 'c'];
let arr2 = arr1;
// 배열 값 전체 삭제
arr1.length = 0;
console.log(arr1.length)//0
console.log(arr2.length)//0


let arr3 = ['a', 'b', 'c'];
let arr4 = arr3;
// 배열 값 전체 삭제
arr3 = [];
console.log(arr3.length)//0
console.log(arr4.length)//3


let arr5 = ['a', 'b', 'c'];
// 배열의 첫번째 값 삭제
arr5.shift();
console.log(arr5) // ['b', 'c']


let arr6 = ['a', 'b', 'c', 'd'];
// 배열의 뒤에서 삭제하기
arr6.pop();
console.log(arr6) // ['a', 'b', 'c']


let arr7 = ['a', 'b', 'c', 'd'];
// index 1부터 2개 지우기
arr7.splice(1, 2);
console.log(arr7)// ['a', 'd']


//배열변경
//인덱스 이용하여 변경
let hero = ['superman', 'batman', 'pororo'];
hero[0] = 'ionman';
console.log(hero); //["ionman", "batman", "pororo"]


//splice 이용하여 변경
//splice(변경값이 들어갈 위치, 그 위치에서 배열에서 지울 개수, 값, 값,,,,)
let hero1 = ['superman', 'batman', 'pororo'];
hero1.splice(1, 2, 'ionman', 'spiderman');
console.log(hero1); //["superman", "ionman", "spiderman"]