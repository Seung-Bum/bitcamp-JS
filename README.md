# bit_20211117_v2 :running::running::running::running::running::running::running:

## 20211117 비트캠프 공부내용 입니다.

### 수업내용 정리

* 카카오 지도 api 링크 :earth_asia:
  
  * https://apis.map.kakao.com/web/sample/ </br>
  * infoWindow </br>
  https://apis.map.kakao.com/web/documentation/#InfoWindow </br>

* 데이터가 이런식으로 필요함, json파일로 저장</br>
```
[{"name":"계림닭도리탕","lat":37.5699741,"lng":126.994085,"menu":"한식", "img":"https://d2uja84sd90jmv.cloudfront.net/posts/EBqMdB1OjByTm8Yd55u5pA/m.jpg"}]
```
</br>

* url주소를 입력하면 store정보를 loadData로 가져옴 :star2::star2:</br>

* 실제로 fetch는 서버에서 데이터 가져올때 많이 사용된다고함</br>
```
const storeService = (function (){

    let storeArr = []

    function loadData(url, callback){
        fetch(url)
            .then(  response => response.json())
            .then(  data => {
                //console.log(data)
                storeArr = data
                callback(data)
            })
    }

    function getDataByIndex(index){

        return storeArr[index]
    }

    return {loadData, getDataByIndex}

})()
```
</br>
-> loadData 실행하면 Data를 이런식으로 가져와 준다.</br>
0: {name: '세종문화회관', lat: 37.57258565, lng: 126.97547742, category: '공연장'}</br>
1: {name: '블루스퀘어', lat: 37.5411186, lng: 127.002446, category: '공연장'}</br>
2: {name: '한전아트센터', lat: 37.4859395, lng: 127.0282784, category: '공연장'}</br>
3: {name: '충무아트센터', lat: 37.5664243, lng: 127.0146529, category: '공연장'}</br>
4: {name: '샤롯데씨어터', lat: 37.5111126, lng: 127.0998268, category: '공연장'}</br>

</br>

* storeService 활용</br>
```
    function changeData(url){

        storeService.loadData(url, (arr) => {
            //console.log("callback............")
            //console.log(arr)
            makeList(arr)
            showMarkers(arr)
        })
    }

```
</br>

* `<li data-idx="${i}">${arr[i].name}</li>` 이부분이 중요한 부분, 태그에 정보를 넣을 수 있다.</br>
-> data-idx="${i}"출력되는 정보가 아님</br>
-> 나중에 li를 통해 idx값을 확인 할 수 있다.</br>

```
    function makeList(arr){
        const storeULEle = document.querySelector(".storeList")
        let str = ''

        for (let i = 0; i < arr.length ; i++) {
            //console.log(arr[i])
            str += `<li data-idx="${i}">${arr[i].name}</li>`
        }//end for

        storeULEle.innerHTML = str
    }
 ```
 </br>
 
* store마커를 생성하고 지도에 찍어줌</br>
 ```
     const markerArr = []

    function showMarkers(stores){

        //기존 마커들은 지워야 한다.
        for (let i = 0; i < markerArr.length; i++) {
            markerArr[i].setMap(null)
        }

        for (let i = 0; i <stores.length ; i++) {
            const store = stores[i]
            const latLng = new kakao.maps.LatLng(store.lat, store.lng);
            const marker = new kakao.maps.Marker({
                map:map,
                position: latLng,
                title: store.name
            })
            markerArr.push(marker)
        }//end for
    }
```
</br>
 
* 가게목록 중에 특정 가게를 클릭하면 해당 가게의 마커만 지도에 찍어줌:star2::star2:</br>
e.preventDefault() 기본기능 작동 못하게해줌</br>
e.stopPropagation() 함수 전파를 막아줌</br>
const target = e.target 직접적으로 클릭한 태그를 집어줌</br>
target.getAttribute("data-idx") 태그안의 같이 저장된 데이터 속성을 가져옴</br>
-> idx 값은 각 가게마다 고유한 번호이다.</br>

```
    document.querySelector(".storeList").addEventListener("click",(e) => {
        e.preventDefault()
        e.stopPropagation()
        const target = e.target

        const idx = target.getAttribute("data-idx")
        const store = storeService.getDataByIndex(idx)
        //console.log(store)

        showMarkers([store])

    },false)
```

 
 
