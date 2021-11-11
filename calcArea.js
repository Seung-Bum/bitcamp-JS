//원의 넓이
function getArea(radius){
    const area = Math.pow(radius, 2)*Math.PI
    return area
}

//도넛 넓이
function getTotal(r1, r2){
    return Math.abs(getArea(r1)-getArea(r2))
}

console.log(getTotal(10, 20))
