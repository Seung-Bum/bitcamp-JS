# bit_20211118 :running::running::running::running::running::running::running::running:

## 20211118 비트캠프 공부내용 입니다.

### 음료주문 키오스크 제작

* v1_1.html을 중점으로 코드를 살펴봐주세요.</br>

* 해당코드를 실제 웹페이지와 함께 참고 필요</br>
-> 상품메뉴 </br>
```
    .mdiv {
        width: 130px;
        height: 200px;
        border: 1px solid #00749b;
        margin: 20px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding-top: 10px;
    }
```

-> 상품메뉴 클릭시 팝업창</br>
```
    .pop {
        background-color: white;
        width: 100%;
        height: 100vh;
        position: absolute;
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: center;
        border: 1px solid #00592d;
        transform: scale(0.5);
    }
```

* 기능구현 순서
1. 메뉴배열, 주문배열 생성
2. 메뉴 리스트 만들기
3. li에 클릭이벤트 설정, 메뉴창에서 메뉴 클릭이벤트 설정
4. 팝업창에서 클릭한 메뉴의 정보를 addCart에 추가
4.1 첫주문, 중복되는 주문 더하기
5. 선택된 아이템 order창에 보여주기
