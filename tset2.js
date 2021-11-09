const readlineSync = require('readline-sync');

//철근문제
//데이터를 처음에 전부 변수 지정해주기

//1ft = 3.5$
//const perFeet = 3.5
console.log('What is the price of a sash per feet?')
console.log('Please enter a value')
const perFeet = readlineSync.question('what is the feet?')


//300cm * 200cm
const width = readlineSync.question('what is the width?')
const height = readlineSync.question('what is the height?')

// 창문 => 가로 * 2, 세로 * 2 전체 샤시 길이
const totalLenght = (width * 2) + (height * 2)

// 길이 cm -> ft
//m 단위로만 판매한다
const totalFeet = Math.ceil(totalLenght / 30.48)

// 가격 계산
const totalpay  = parseInt(totalFeet * perFeet)

console.log(`총 ${totalpay} 달러입니다.`)


//Math.round() 반올림
//Math.ceil() 올림



