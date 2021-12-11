//좌표찍기
//Math.sqrt 제곱근 구해주는 함수

//객체리터럴 내가 원하는값 키로 마음대로 담을 수 있다. -> 다차원 배열과 비슷하더라 -> 자바 클래스도 비슷
//구조화된 정보
const pointArr = [
    {name:'A' , xpos:3 ,ypos:10},
    {name:'B' , xpos:7 ,ypos:6},
    {name:'C' , xpos:3 ,ypos:2},
    {name:'D' , xpos:6 ,ypos:2}
]

const target = {xpos:2, ypos:8}



for (const pointArrElement of pointArr) {
    console.log(pointArrElement)

    //target과 pointerArrElement의 거리 계산
    const distance = Math.sqrt(Math.pow(pointArrElement.xpos - target.xpos, 2)
        + Math.pow(pointArrElement.ypos - target.ypos, 2))

    console.log(distance)
}


pointArr.sort((a, b)=>{

    //target과의 최단거리 구하는공식
    const distance = Math.sqrt(Math.pow(pointArr.xpos - target.xpos, 2)
        + Math.pow(pointArr.ypos - target.ypos, 2) )

})


//A가 타겟과 제일 가깝다.

//거리가 제일 가까운애가 제일 앞으로 제일 먼애는 제일 뒤로





