const arr =[
    //분기별 데이터
    [90, 87, 140],//arr[0]
    [120, 130, 150],//arr[1]
    [180, 240, 200],//arr[2]
    [180, 140, 190],//arr[3]
]

// 가장 매출이 좋았던 분기
// 각 분기별로 매출의 평균 만들기
let sum = 0
let avg = 0
for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]
    for (let j = 0; j < tempArr.length; j++) {
        sum += tempArr[j]
        avg = (sum / tempArr.length).toFixed(2)
    }
    console.log(tempArr)
    console.log(avg)
}
//각분기 평균 저장하는 공간이 필요하다.



// 극 중에서 최대 평균 찾기


//최고 매출을 찍은 월

//