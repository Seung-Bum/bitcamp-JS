
function pigSave(){

    let money = 0

    return function (coin){

        return money += coin

    }
}

const s1 = pigSave()

console.log(s1(500))
console.log(s1(400))
console.log(s1(100))