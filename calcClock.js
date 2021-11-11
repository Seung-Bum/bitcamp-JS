//12:38
//자바스크립트는 함수안의 함수가능
function calcTotal(hourValue, minValue){

    //시침의 각도-->입력12 출력 : 각도
    function calcHour(hour){

        const result = (360 / 12) * (hour % 12)

        return result
    }

    //분침의 각도
    //화살표 함수
    //파라미터 하나일때는 가로 안해도됨
    //조금더 변수도 넣고 복잡한식이 들어가면 {}해야함
    const calcMin = min => (360/60) * min

    //분침에 이동에 따른 시침의 이동각도
    function getExtra(min){
        return ((360/12) / 60) * min
    }

    //가로 잘 확인하기
    const result =  Math.abs((calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue))

    return result > 180 ? 360-result : result
}

console.log(calcTotal(12, 38))

