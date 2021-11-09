//로또바구니
const arr = []
const selectArr = []

//로또공 준비
for (let i = 1; i <= 45; i++) { //1~45
    arr.push(i)

}

//6개 공뽑기 배열에서
for (let i = 0; i < 6; i++) {
    const idx = parseInt(Math.random() * arr.length)+1
    //1. arr.lenght === 45
    //2. arr.lenght === 44
    //3. 43 ...
    arr.splice(idx, 1)
    selectArr.push(idx)

    console.log(arr)
}

console.log(selectArr)//선택된 숫자 6개 출력






