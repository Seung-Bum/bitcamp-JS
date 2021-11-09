const arr = []

while(true) {
    //숫자를 생성 1~45
    const num = parseInt(Math.random() * 45) + 1 //0~1미만의 난수 0.9999 * 45 = 49.999

    //slice(num, 1)

    //검사
    const index = arr.indexOf(num)

    console.log(`NUM: ${num} INDEX: ${index}`)

    if(index >= 0){
        continue //바로 다시시작
    }
    const newLenght = arr.push(num)

    if(newLenght === 6){
        break // 바로 종료
    }
}

console.log(arr)

