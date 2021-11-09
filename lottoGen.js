const arr = []

while(true) {
    //숫자를 생성 1~45
    const num = parseInt(Math.random() * 45) + 1 //0~1미만의 난수 0.9999 * 45 = 44.999

    //중복되는 숫자가 있는지 검사
    //중복되는 숫자가 없을경우 -1
    //중복되는 숫자 있을 경우 중복되는 숫자의 인덱스 저장
    const index = arr.indexOf(num)

    console.log(`NUM: ${num} INDEX: ${index}`)

    if(index >= 0){ // 중복되는 숫자가 있는 경우이므로 다시 숫자 생성부터 시작됨
        continue
    }
    const newLenght = arr.push(num)

    if(newLenght === 6){
        break // 바로 종료
    }
}

console.log(arr)

