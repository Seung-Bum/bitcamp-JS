//정렬은 음수, 양수 아니면 0밖에없다.
const arr = [4, 3,21,43,77,22,11,45]

arr.sort((a,b) => {

    a-b

})
console.log(arr)


arr.sort(function (a, b){
    return b-a
})
console.log(arr)
