# bit_20211112  :running::running::running::running:

## 20211112 비트캠프 공부내용 입니다.

### 파일설명

* Simple Sidebar 다운로드 링크
  
  * https://startbootstrap.com/template/simple-sidebar

* index.html
  * 페이지 기본구조

* lotto.html
  * index.html과 같은 구조이고 lotto번호 출력하여 화면에 띄움
  * "btn btn-primary" 부트스트랩에서 가져옴 버튼을 누르면 실행
  * `<script src="js/lotto.js"></script>` lotto.js 파일 불러옴
  * `<div id="resultDiv"></div>` target 설정, 어디에 로또번호를 출력할것인지

* lotto.js:raising_hand:
  * 콜백함수 작성 -> 이벤트 실행시 지정된 함수 작동
  * dom핸들링 -> 자바스크립트로 dom(HTML 데이터)핸들링
  * 로또번호 생성하여 콜백함수 리턴값으로 설정

* lottos2.js:raising_hand::raising_hand:
  * 로또자판기, 기존 로또 생성기에서 입력한 돈많큼 작동하게함
  * 기존 표준 dom처리에서 query사용으로 변경 
  
  * const btn = document.querySelector(".mybtn") -> querySelector 사용
  
  * const money = document.querySelector("#moneyInput").value 입력값 받기</br>
  -> input에서 id값을 설정함(class로 하는게 좋지만 id값으로 연습)
  
  * const resultDiv = document.querySelector("#resultDiv") -> 출력할 위치설정

* test.js
  * 로또번호 생성 부분만 테스트하기 위해 만듬

#### * assets와 css파일들이 같이있음
