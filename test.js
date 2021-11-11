//자바에서는 파라미터 개수가 맞아야한다
function printName(str1, str2="111", str3="222"){//파라미터 없으면 기본값으로 들어감
    console.log(str1)
    console.log(str2)
    console.log(str3)
}

//printName()
//printName("AAA")


//파라미터로 함수전달하는것
function calc(a, b, fn){
    console.log('A: '+a)
    console.log('B: '+b)

    const result = fn(a+1, b+1)

    return result
}

console.log(calc(10, 20, (x,y) => x+y))
console.log(calc(10, 20, (x,y) => x-y))

//리턴값으로 함수전달
