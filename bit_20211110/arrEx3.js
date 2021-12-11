const arr = [54, 33, 12, 80, 95]

// 평균점수 => 모든 점수의 합 / 개수
//계속 쓰는 변수는 바깥쪽, sum은 계속 누적
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(`SUM : ${sum}`)

let avg = (sum / arr.length).toFixed(3)

console.log('AVG : ' + avg)


// 최저점수
let min = 101

for (let i = 0; i < arr.length; i++) {
    const score = arr[i]
    //만일 score가 min 보다 작으면 swap
    if(score < min){
        min = score
    }
}
console.log(`MIN : ${min}`)


// 최고점수
let max = -1

for (let i = 0; i < arr.length; i++) {
    const score = arr[i]
    // 만일 score가 max 보다 크면 swap
    if(score > max){
        max = score
    }
}
console.log(`MAX : ${max}`)

