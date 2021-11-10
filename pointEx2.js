const readlineSync = require('readline-sync');

//어떤 영화를 보았는지
const userMovie = readlineSync.question('Please enter a memorable movie  ');

//사용자가 생각하는 해당영화의 키스씬 횟수
const kissNum = readlineSync.question('How many kissing scenes have you seen?  ');

//사용자가 생각하는 해당영화의 액션씬 횟수
const actionNum = readlineSync.question('How many action scenes have you seen?  ');


const movie = {userKiss: kissNum, userAction: actionNum}

const pointArr = [
    {name:'암살', kiss: 2 ,action: 12 },
    {name:'어바웃타임', kiss: 14 ,action: 2 },
    {name:'토이스토리', kiss: 2 ,action: 7 },
    {name:'노팅힐', kiss: 10 ,action: 2 },
    {name:'타이타닉', kiss: 15 ,action: 6 }
]

//서로의 최단거리를 비교하면서 정렬됨 오름차순
pointArr.sort((a,b) => {
    const distanceA =  Math.sqrt(Math.pow( a.kiss - movie.userKiss  ,2) +  Math.pow(a.action - movie.userAction,2 ) )
    const distanceB =  Math.sqrt(Math.pow( b.kiss - movie.userKiss  ,2) +  Math.pow(b.action - movie.userAction,2 ) )

    return distanceA - distanceB

})

console.log(pointArr)

if(pointArr[0].kiss > pointArr[0].action) {
    console.log("당신이본 영화"+ userMovie +"은 로맨스 영화입니다.")
}else{
    console.log("당신이본 영화"+ userMovie +"은 액션 영화입니다.")
}

