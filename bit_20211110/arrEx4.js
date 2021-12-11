const arr = [54, 33, 12, 80, 95]

// 배열의 첫번째 값을 비교값으로

// 최저점수
let min = arr[0]
for (let i = 1; i <= arr.length; i++) {

    //만일 min이 arr[i] 보다 크다면 swap
    if(min > arr[i]){
        min = arr[i]
    }
}
console.log(`MIN : ${min}`)


// 최고고점수
let max = arr[0]
for (let i = 1; i <= arr.length; i++) {

    //만일 max가 arr[i] 보다 작다면 swap
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(`MAX : ${max}`)
