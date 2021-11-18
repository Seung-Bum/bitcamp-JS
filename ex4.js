const storeService = (function (){

    const storeArr = []


    //반드시 있어야 할 기능 -> JSON 데이터 가져오기
    function loadData(url){
        fetch(url)
            .then(  response => response.json())
            .then(  data => {

                console.log(data)

            })
    }

    return {loadData}
})()