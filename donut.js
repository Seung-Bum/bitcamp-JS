//절차지향적 방법
//도넛 모양의 넓이 구하기
//r1 10, r2 20
//원의 넓이 반지름제곱*원주율
//원A의 넓이 - 원B의 넓이
//주어진 데이터 확인하기
//반지름 2개
//연산 -> 원A의 넓이, 원B의 넓이, 넒이의 차이
//사용자의 입력도 변수로 넣어서 처리

//주어진 데이터
const PI = Math.PI
const r1 = 10
const r2 = 20

//원의 넓이
const area1 = Math.pow(r1, 2)*PI
const area2 = Math.pow(r2, 2)*PI

let gap = area1 - area2

//if문
// if(gap < 0){
//     gap = gap * -1
// }

//삼항연산자
gap = gap < 0 ? gap * -1 : gap

gap = gap.toFixed(2)

console.log(`이 도형의 넓이는 ${gap} 입니다.`)












