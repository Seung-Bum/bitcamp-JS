//자바에서는 파라미터 개수가 맞아야한다.
//자바에서는 파라미터의 개수를 맞출 필요가 없다.
function printName(str1, str2="111", str3="222"){//파라미터 없으면 기본값으로 들어감
    console.log(str1)
    console.log(str2)
    console.log(str3)
}

printName()// undefined 111 222
console.log('--------------------------------------------')
printName("AAA")// AAA 111 222
console.log('--------------------------------------------')
printName("AAA","BBB")// AAA BBB 222
console.log('--------------------------------------------')
printName("AAA","BBB","CCC")// AAA BBB CCC

console.log('--------------------------------------------')


//파라미터로 함수전달하는것
function calc(a, b, fn){
    console.log('A: '+a)
    console.log('B: '+b)

    const result = fn(a, b) // 함수를 변수 result에 담을 수 있음

    return result
}

console.log(calc(10, 20, (x,y) => x+y))
console.log('--------------------------------------------')
console.log(calc(10, 20, (x,y) => x-y))

