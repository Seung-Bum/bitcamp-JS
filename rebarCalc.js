const readlineSync = require('readline-sync');

//철근문제
//데이터를 처음에 전부 변수 지정해주기
//1ft = 30.48cm
//1ft = 0.3048m

//1ft = 3.5$
//const perFeet = 3.5
console.log('What is the price of a sash per feet?')
console.log('Please enter a value')
const perFeet = readlineSync.question('what is the feet?')

//가로, 세로 높이 입력
const width = readlineSync.question('what is the width?')
const height = readlineSync.question('what is the height?')

// 창문 => 가로 * 2, 세로 * 2 전체 샤시 길이
//m 단위로만 판매하기 때문에 단위 변경
const totalLenght = ((width * 2) + (height * 2)) * 0.01

// 길이 m -> ft
const totalFeet = Math.ceil(totalLenght / 0.3048)

// 가격 계산
const totalpay  = parseInt(totalFeet * perFeet)

console.log(`총 ${totalLenght}m가 필요합니다.`)
console.log(`총 ${totalpay} 달러입니다.`)


//Math.round() 반올림
//Math.ceil() 올림



