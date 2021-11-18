# bit_20211115  :running::running::running::running::running:

## 20211115 비트캠프 공부내용 입니다.

### 파일설명

* 싱글페이지 애플리케이션(영화정보)
  
  * https://startbootstrap.com/theme/freelancer</br>
  -> 부트스트랩
  
  * 페이지 제작 순서 체크</br>
  영화정보 담을 배열생성 -> 영화추가 함수 만들기(각영화 인덱스 생성) -></br>
  영화 화면에 보여주기 함수 만들기 -> 영화 등록함수 만들기
  </br>
  * 중요코드 -> 영화배열을 화면에 출력해줌
  </br>
  
  ```
  function showList(){
        const targetDiv = document.querySelector("#moviesDiv")
        let str = ''
        for (let i = 0; i < arr.length ; i++) {

            str += `<div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal${i+1}">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/${arr[i].poster}" alt="..." />
                        </div>
                    </div>`

        }//end for

        targetDiv.innerHTML = str

        console.log(str)
   }
   ```
    
  </br>
  </br>
  * 중요코드 -> 영화등록 버튼에 이벤트 생성하기
  
  ```
  document.querySelector(".registerBtn").addEventListener("click",()=> {

        //input 태그의 내용들을 가져온다
        const title = document.querySelector("#title").value
        const category = document.querySelector("#category").value
        const poster = document.querySelector("#poster").value

        const movieObj = {title:title, category:category ,poster:poster}

        console.log(movieObj)
        addMovie(movieObj)

    },false)
  

