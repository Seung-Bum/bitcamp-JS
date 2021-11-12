//이벤트처리의 가장 표준적인방법
//콜백함수
//함수전달할때 변수로 전달해도 좋지만 그냥 화살표함수나 파라미터안에서 함수만드는게 좋음
//첫번재 파라미터 클릭하면(이거는 다른걸로도 설정가능)

//어디에 출력할 것인가?
//get이 있다면 create도 있다.
//내가 태그를 하나 만들게됨, 어디엔가 붙여야됨(어디에다 표현할지)
//자바스크립트로 자료구조(dom)를 핸들링함
const btn = document.getElementById("btn")

btn.addEventListener("click",(event)=> {

    //어디에 출력 할 것인가
    const target = document.getElementById("resultDiv")// resultDiv에 담김 <h3> 태그 지워야함

    const balls = makeLottoNum()

    //clear all <h3> tags
    target.innerHTML =''


    //dom핸들링
    for (const num of balls) {

        //메모리상에 h3 태그를 하나 만들었다.
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(num)

        //h3의 Child로 num을 출력
        tag.appendChild(textNode)
        target.appendChild(tag)

    }

}, false)


function makeLottoNum (){
    let lotto_select = []

    const lottoNum = []
    for(let i = 1; i<= 45; i++){
        lottoNum.push(i)
    }

    for (let i = 1; i < 7; i++){
        const idx = parseInt(Math.random() * lottoNum.length)+1
        lotto_select.push(idx)
        lottoNum.splice(idx,1)
    }

    return lotto_select
}

