//로또바구니
const arr = []

//로또공 준비
for (let i = 1; i <= 45; i++) { //1~45
    arr.push(i)

}

//6개 공뽑기 배열에서
for (let i = 0; i < 6; i++) {
    const idx = parseInt(Math.random() * arr.length) //1.45 44 43
    arr.splice(idx, 1)

    //console.log(arr)
}





