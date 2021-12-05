function lotto (){
    let lotto_select = []

    const lottoNum = []
    for(let i = 1; i<= 45; i++){
        lottoNum.push(i)
    }

    for (let i = 0; i < 6; i++){
        const idx = parseInt(Math.random() * lottoNum.length)+1
        lotto_select.push(idx)
        lottoNum.splice(idx,1)
    }

    return lotto_select
}


console.log(lotto())

