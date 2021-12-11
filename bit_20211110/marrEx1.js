const arr =[
    //분기별 데이터
    [90, 87, 140],//arr[0]
    [120, 130, 150],//arr[1]
    [180, 240, 200],//arr[2]
    [180, 140, 190],//arr[3]
]

// 가장 매출이 좋았던 분기
// 각 분기별로 매출의 평균 만들기
const parr = []
for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]

    let sum = 0
    let avg = 0

    for (let j = 0; j < tempArr.length; j++) {
        sum += tempArr[j]
        avg = (sum / tempArr.length).toFixed(2) //toFixed하면 문자열로 바뀜
    }
    console.log(tempArr)
    console.log(avg)
    parr.push(parseFloat(avg)) //다시 숫자로 변경
}

// 그 중에서 최대 평균 찾기
// 각분기 평균 저장하는 공간이 필요하다. 어디에 선언을 해야하는가?
// 유지해야 하는 데이터는 바깥쪽

//최고 매출분기
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
