const arr = ['타노스', '아이언맨', '블랙위도우']

console.log(arr[2]) //블랙위도우

//맨마지막에 넣고싶을때
//push를하면 변경내용 최종
const changeLenght = arr.push("블랙팬서")

console.log(changeLenght)//arr 총길이 출력

console.log(arr.indexOf("캡틴아메리카")) //배열 안에 있는지, 있으면 인덱스 위치나옴, 없으면 -1

// splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
// 자바에서는 배열 길이변경 안됨

for (let i = 0; i < arr.length; i++) {
    //console.log(i)
    //console.log(arr[1])

    if(arr[i] === '블랙위도우'){
         continue
    }
    //console.log(i)
    //console.log(arr[i])
}