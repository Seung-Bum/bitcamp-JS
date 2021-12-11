//함수로 만들어보기
//원의 넓이
function getArea(radius){
    const area = Math.pow(radius, 2)*Math.PI
    return area
}

//도넛 넓이
function getTotal(r1, r2){
    return Math.abs(getArea(r1)-getArea(r2))
}

console.log(getTotal(10, 20))


//절차지향적 방법
//원의 넓이
// const area1 = Math.pow(r1, 2)*PI
// const area2 = Math.pow(r2, 2)*PI
//
// let gap = area1 - area2
//
// //삼항연산자
// gap = gap < 0 ? gap * -1 : gap
//
// gap = gap.toFixed(2)
//
// console.log(`이 도형의 넓이는 ${gap} 입니다.`)
