# bit_20211116_v2 :running::running::running::running::running::running:

## 20211116 비트캠프 공부내용 입니다.

### 중요함수 체크

* filter 함수 -> 특정값을 걸러준다.</br>
```
 function removeTodo(num){
        console.log("remove Todo...")

        //특정값이 아닌것만 빼고 나머지를 걸러서 result에 저장
       const result = arr.filter(todo => todo.idx !== num)

        arr = result;
    }
```

</br>

* onclick 함수 -> 클릭을 하게되면 지정해둔 함수가 실행된다.</br>
```
    <div>
        <label>저장</label>
        <button onclick="saveTodo()">Save</button>
    </div>
```

</br>

* js파일을 따로 만들어서 지저분하지 않게 정리가능(클로저 개념)</br>
outer함수는 todo2.js에 따로 만든 함수이다.
```
<script src="todo2.js"></script>
<script>

  const todoService = outer()
```

</br>

* document.querySelector로 데이터를 받아서 다시 필요한</br>
부분만 변수로 저장하는 방법을 잘기억해야 할 듯 하다.:hand:
```
  function saveTodo() {

      //입력한 할일의 정보를 받아옴
      const titleEle = document.querySelector("input[name='title']")
      const contentEle = document.querySelector("textarea[name='content']")
      const dueDateEle = document.querySelector("input[name='dueDate']")
      console.log(titleEle,contentEle,dueDateEle)

      //받아온 할일을 변수로 저장
      const title = titleEle.value
      const content = contentEle.value
      const dueDate = dueDateEle.value
      const complete = false //체크박스 표시시 필요값

      //출력하여 확인
      console.log(title, content, dueDate)

      //배열에 정보 저장
      todoService.add({title,content,dueDate,complete})

      //갱신된 배열 모두 화면에 출력
      showList()

  }
``` 
</br>

* 배열의 정보를 필요한 부분을 분해하여 할당이 가능함(구조 분해 할당):hand:</br>
HTML태그를 추가하는 방법도 체크
```
  function showList() {

      const todoArr = todoService.getAll()

      let str =''

      for (let i = 0; i < todoArr.length ; i++) {

          //구조 분해 할당
          const {idx,title,dueDate,complete} = todoArr[i]

          str += `<tr>
                    <td><input type="checkbox" name="complete" ${complete?'checked':''}></td>
                    <td>${idx}</td>
                    <td>${title}<button onclick="deleteTodo(${idx})">DEL</button></td>
                    <td>${dueDate}</td>
                </tr>`
      }
      console.log(str)
      //저장된 str 화면출력
      document.querySelector("tbody").innerHTML = str
  }
```
  
  
  
  
