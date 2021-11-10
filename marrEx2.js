//객체리터럴로 바꾸기
//분기별 매출 확인후 제일 매출이 좋은분기 확인하기

const arr =[
    //분기별 데이터
    [{month: 1, total: 90}, {month: 2, total: 87}, {month: 3, total: 140}], // 1분기
    [{month: 4, total: 120}, {month: 5, total: 130}, {month: 6, total: 150}], // 2분기
    [{month: 7, total: 180}, {month: 8, total: 240}, {month: 9, total: 200}], // 3분기
    [{month: 10, total: 180}, {month: 11, total: 140}, {month: 12, total: 190}] // 4분기
]

// 가장 매출이 좋았던 분기
// 각 분기별로 매출의 평균 만들기
const parr = []
for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]

    let sum = 0
    let avg = 0

    //분기별 총합계산
    for (let j = 0; j < tempArr.length; j++) {
        sum += tempArr[j].total //tempArr[j] -> 분기
    }

    avg = (sum / tempArr.length).toFixed(2)//toFixed하면 문자열로 바뀜
    parr.push(parseFloat(avg))//다시 숫자로 변경
}

// 최고 매출분기
let max = 0
let period = 0

for (let i = 0; i < parr.length; i++) {
    if(parr[i] > max){
        max = parr[i]
        period = i
    }
}
console.log("max: " + max)
console.log("period: " + (period + 1) + "분기입니다.")