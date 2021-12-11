// 이름, 입력값, 출력, 순서


// 1.정해진 숫자만큼 출력하는 함수
function selected_Number (start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i)
    }
}


// selected_Number(1,10)
let a = selected_Number(1,10) // undefined 안 뜨는 이유? console.log 안에 선언할 때와 차이
// console.log(a)
console.log("-------------------")


// 2. 로또 번호 생성 함수 만들기
const lotto_Num = []
for(let i = 1; i<= 45; i++){
    lotto_Num.push(i)
}
function lotto2 (lotto_Num){
    for (let i = 0; i < 6; i++){
//    const idx = 9
        const idx = parseInt(Math.random() * lotto_Num.length)
        console.log(lotto_Num.splice(idx,1))
//    console.log(arr)
    }
}
lotto2(lotto_Num)
console.log("-------------------")


// 3. 배열 주면 Max 값 찾기
const num = [54,302,14,101,95,85]

function find_max(num) {
    let max = -1

    for (let i = 0; i < num.length ; i++) {
        const score = num[i]
        //만일 score 가 max 크면 swap
        if(score > max){
            max = score
        }
    }
    console.log(max)
}
find_max(num)
console.log("-------------------")


// 4. 배열 주면 Min 값 찾기

function find_min(num) {
    let min = 300

    for (let i = 0; i < num.length ; i++) {
        const score = num[i]
        //만일 score 가 max 크면 swap
        if(score < min){
            min = score
        }
    }
    console.log(min)
}
find_min(num)


// 5. 매출/월