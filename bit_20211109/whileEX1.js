//1부터 10까지 반복으로 숫자 출력하다가 숫자 7이 나오면 종료

let num;

while (true){
    num = Math.ceil(Math.random() * 10)+1

    console.log(`num : ${num}\n`)

    if (num==7){
        break;
    }
}