//이벤트처리의 가장 표준적인방법
//콜백함수
//함수전달할때 변수로 전달해도 좋지만 그냥 화살표함수나 파라미터안에서 함수만드는게 좋음
//첫번재 파라미터 클릭하면(이거는 다른걸로도 설정가능)

//어디에 출력할 것인가?
//get이 있다면 create도 있다.
//내가 태그를 하나 만들게됨, 어디엔가 붙여야됨(어디에다 표현할지)
//자바스크립트로 자료구조(dom)를 핸들링함
// const btn = document.getElementById("btn")
//
// btn.addEventListener("click",(event)=> {
//
//     //어디에 출력 할 것인가
//     const target = document.getElementById("resultDiv")// resultDiv에 담김 <h3> 태그 지워야함
//
//     const balls = makeLottoNum()
//
//     //clear all <h3> tags
//     //내용을 삭제하거나 변경가능
//     //dom처리는 가능한 한번에 끝내면 좋다.
//     // target.innerHTML =''
//
//
//     //dom핸들링
//     let str = ''
//     for (const num of balls) {
//
//         str += `<h3>${num}</h3>`
//
//         target.innerHTML = str
//         // //메모리상에 h3 태그를 하나 만들었다.
//         // const tag = document.createElement("h3")
//         // const textNode = document.createTextNode(num)
//         //
//         // //h3의 Child로 num을 출력
//         // tag.appendChild(textNode)
//         // target.appendChild(tag)
//
//     }
//
// }, false)


// function makeLottoNum (){
//     let lotto_select = []
//
//     const lottoNum = []
//     for(let i = 1; i<= 45; i++){
//         lottoNum.push(i)
//     }
//
//     for (let i = 1; i < 7; i++){
//         const idx = parseInt(Math.random() * lottoNum.length)+1
//         lotto_select.push(idx)
//         lottoNum.splice(idx,1)
//     }
//
//     return lotto_select
// }

function makeLottoNum(){
    let arr = []

    for (let i = 0; i < 6; i++) {
        const tempNum = parseInt(Math.random() * 45) + 1
        //arr안에 tempNum이 있다면
        if(arr.indexOf(tempNum) >= 0){
            console.log("중복")
            //숫자 -안해주면 중복될 경우 예를들어 5개만 나올 수도 있음
            i--
            continue
        }
        arr.push(tempNum)
    }

    // arr.sort(function (a,b){
    //     // return a - b //(양수 아니면 음수로 처리 혹은 0)
    // })

    arr.sort((a,b) => a - b )

    return arr

}
