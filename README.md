# bit_20211109  :running:

## 20211109 비트캠프 공부내용 입니다.

### 파일설명

* arrEX1
  * 배열 생성, 배열 인덱스, 배열에 요소 추가방법 그리고<BR/>
  배열과 반복문, 제어문과의 응용에 대해서 테스트함<BR/>
  [arr.push->배열에 항목추가<BR/>
  arr.indexOf("캡틴아메리카")->배열안의 요소 확인]

* arrInfo
  * const 변수에 배열 생성시 아이템 삽입은 가능하나<BR/>
  변수에 새로운 배열 배정시 에러발생 확인

* donut
  * 절차 지향 방식으로 도넛 모양의 도형넓이를 구함<BR/>
  [삼항연산, Math.pow->제곱계산, Math.PI->원주율]

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



출처: https://hianna.tistory.com/489 [어제 오늘 내일]

* rebarCalc
  * 1feet에 3.5dollar이고 사용자 입력값을<BR/>
  feet, 길이는 cm로 가로, 세로 입력받을때<BR/>
  총길이 대비 가격 구하기<BR/>
  [Math.ceil()->소수점 올림]
  
  * 설치필요 <BR/>
  npm i readline-sync  
