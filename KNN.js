const readlineSync = require('readline-sync');

const aCount = readlineSync.question('Action Count? ');
const kCount = readlineSync.question('Kiss Count? ');

const movies=[
    {action: 12, kiss: 2, category: 'A'},//암살
    {action: 2, kiss: 14, category: 'M'},//아바웃타임
    {action: 7, kiss: 2, category: 'A'},//토이스토리
    {action: 2, kiss: 10, category: 'M'},//노팅힐
    {action: 6, kiss: 15, category: 'M'},//타이타닉
]

const actionCut = parseInt(aCount)

const kissCut = parseInt(kCount)


const target = {action: actionCut, kiss: kissCut} //반지의 제왕


//모든 함수는 똥을 싼다
//화살표 함수
movies.sort((a, b) => {

    const disA = Math.sqrt(Math.pow(a.action - target.action, 2) + Math.pow(a.kiss - target.kiss, 2))
    const disB = Math.sqrt(Math.pow(b.action - target.action, 2) + Math.pow(b.kiss - target.kiss, 2))

    return disA - disB > 0 ? 1:-1
})

console.log(movies)

const knum = 3

const result = {actionCount: 0, kissCount: 0}

for (let i = 0; i < knum; i++) {
    const movie = movies[i]
    if(movie.category === 'A'){
       result.actionCount += 1
    }else if(movie.category === 'M'){
        result.kissCount += 1
    }
}

console.log(result)

const str = result.actionCount > result.kissCount ? '액션' : '멜로'

console.log(`이 영화는 ${str} 영화인 것 같습니다.`)

//중괄호가 없으면 값 바로 반환
//movies.sort((a, b) => 1)
