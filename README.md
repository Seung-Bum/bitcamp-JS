# bit_20211119 :running::running::running::running::running::running::running::running::running:

## 20211119 비트캠프 공부내용 입니다.

### 파일설명

* ex1.html</br>
기본 query 사용연습</br>
```
<script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>
```
```
const bbb = $("h1")
    console.log(bbb.innerHTML) //undifined가 나온다

    bbb.get(0).innerHTML = "h1 change" // h1의 DDD 변경
```
```
$("a").attr("href", "mp3/aaa.mp3").addClass("red").hide('slow') //jquery에서 제공하는 기능
```

* ex2_1.html</br>
기본 query 사용연습</br>
```
    $(document).ready(function (){

        const result = $('#result') // 이렇게하면 window오염 x, 제이쿼리를 계속 안찾게 해줘야함
        let count = 1

        $(".btn").on("click", (e)=> {
            //alert("click")
            result.append(`<li>AAA  ${count++}</li>`)
        })

        // document 출력, this 넣으면, 화살표써서
        // remove가 제이쿼리 객체
        result.on("click", "li", function (e) { // documnet는 , "li" 이런식으로 접근 할 수  없음
            console.log(e.target)//AAA  ${count++}, AAA 8 숫자 그대로 찍힘
            e.target.remove()
        })

    })
```

* ex3_1.html</br>
기본 query 사용연습</br>
-> 아래 정렬코드 사용시 보통 보기좋게 정렬이됨
```
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
  }
```

* ex4_1.html</br>
기본 query 애니메이션 사용연습</br>
```
  $(document).ready(function() {
    $(".btn").on("click", function(e){

      const cardImg = $(e.target).closest(".cardImg") // e.target == .btn

      cardImg.animate({
        left: "+=100vw",
        'opacity': "0.1"
      }, 1000, function() {
        cardImg.animate({
          left: "-=100vw",
          'opacity': "1"
        },1000)
      })

    })
  })
```

* music.html</br>
iframe 사용연습</br>


