function outer(){

    let arr = []
    let idx = 0

    function add(todo) {
        todo.idx = idx++
        arr.push(todo)
    }
    function removeTodo(num){
        console.log("remove Todo...")

        //특정값이 아닌것만 빼고 나머지를 걸러줌
       const result = arr.filter(todo => todo.idx !== num)

        arr = result;
    }
    function getTodo(idx){
        console.log("get Todo......")
    }
    function getAll(){
        return arr
    }

    //전체선택
    //초기 complete = false로 지정 되어있음
    function changeAll(){
        for (let i = 0; i < arr.length ; i++) {
            arr[i].complete = !arr[i].complete // true면 false로, false면 true로 저장
        }
    }

    const obj = {add, removeTodo, getTodo, getAll, changeAll}

    return obj
}
