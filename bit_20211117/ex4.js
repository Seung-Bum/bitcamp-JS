const storeService = (function (){

    let storeArr = []

    //반드시 있어야 할 기능 -> JSON 데이터 가져오기
    function loadData(url, callback){

        //fetch 데이터를 읽어옴, 비동기, 외부에서 가져옴 자바스크립트에서
        fetch(url)
            .then(  response => response.json())
            .then(  data => {
                //console.log(data)
                storeArr = data
                callback(data)
            })
    }

    return {loadData}
})()