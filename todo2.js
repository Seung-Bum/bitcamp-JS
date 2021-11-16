function outer(){

    const arr = []
    let idx = 0

    function add(todo) {
        todo.idx = idx++
        arr.push(todo)
    }
    function removeTodo(num){
        console.log("remove Todo...")
    }
    function getTodo(idx){
        console.log("get Todo......")
    }
    function getAll(){
        return arr
    }

    const obj = {add, removeTodo, getTodo, getAll}

    return obj
}