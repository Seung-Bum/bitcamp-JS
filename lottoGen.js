const arr = []

while(true) {
    //숫자를 생성 1~45
    const num = parseInt(Math.random() * 45) + 1 //0~1미만의 난수 0.9999 * 44 = 44.999

    //중복되는 수 있는지 검사, 없으면 -1
    const index = arr.indexOf(num)

    console.log(`NUM: ${num} INDEX: ${index}`)

    if(index >= 0){//중복되는 수가 있는 경우 다시 숫자 생성
        continue
    }
    const newLenght = arr.push(num)

    if(newLenght === 6){
        break // 바로 종료
    }
}

console.log(arr)

