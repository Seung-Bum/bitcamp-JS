# bit_20211109  :running:

## 20211109 비트캠프 공부내용 입니다.

### 파일설명

* arrEX1
  * 배열 생성, 배열 인덱스, 배열에 요소 추가방법 그리고<BR/>
  배열과 반복문, 제어문과의 응용에 대해서 테스트함<BR/>
  [arr.push->배열에 항목추가<BR/>
  arr.indexOf("캡틴아메리카")->배열안의 요소 확인]

* arrInfo
  * 배열생성<BR/>const 변수에 배열 생성시 아이템 삽입은 가능하나<BR/>
  변수에 새로운 배열 배정시 에러발생 확인
  * 배열추가<BR/>
    배열의 끝에 요소를 추가, push<BR/>
    배열의 앞쪽에 요소를 추가, unshift<BR/>
    특정위치 요소 추가, splice<BR/>
  * 배열삭제<BR/>
    빈배열 할당<BR/>
    배열의 길이 0<BR/>
    배열의 첫번째 값 삭제, shift<BR/>
    배열의 뒤에서 삭제하기<BR/>
    배열의 뒤에서 삭제하기 pop<BR/>
    splice로 삭제<BR/>
  * 배열변경<BR/>
    인덱스를 이용하여 변경<BR/>
    splice 이용하여 변경<BR/>
* donut
  * 절차 지향 방식으로 도넛 모양의 도형넓이를 구함<BR/>
  [삼항연산, Math.pow->제곱계산, Math.PI->원주율]

* forEx
  * for문 예제<BR/>
    - 1부터 100까지 짝수 출력하기<BR/>

* forArr
  * for문 예제<BR/>
    - for문으로 배열 구성하기

* lottoGen
  * 1부터 45의 랜덤한 숫자를 중복되는 수 없이 6개 뽑음<BR/>
  [Math.random()->0~1미만의 난수 생성<BR/>
  parseInt()->소수를 정수로 변경, while문,<BR/>
  if문 사용(continue, break)]

* lottoGen2
  * lottoGen과는 다르게 중복되는 숫자를 아예 없애버림<BR/>
  arr.splice(idx, 1) -> idx를 1개지움<BR/>
  첫번째 파라미터로 특정값을 추가하거나 삭제할 위치 index를 입력받습니다.<BR/>
  두번째 파라미터로 삭제할 원소의 개수를 입력받습니다.

* rebarCalc
  * 1feet에 3.5dollar이고 사용자 입력값을<BR/>
  feet, 길이는 cm로 가로, 세로 입력받을때<BR/>
  총길이 대비 가격 구하기<BR/>
  [Math.ceil()->소수점 올림]
  
  * 설치필요 <BR/>
  npm i readline-sync<BR/>

* whileEx
  * while문 예제<BR/>
    - 1부터 100까지 홀수 출력하기

* whileEx1
  * while문 예제<BR/>
    - 1부터 10까지 반복으로 숫자 출력하다가 숫자 7이 나오면 종료

* dowhileEx
  * do while문 예제<BR/>
    - MDN예제, 12345 출력하기
