
// 메뉴배열
const menus = [
    {name:'Ice americano', price:3500, picture:'img/c1.jpg'},
    {name:'ice latte', price:4500, picture:'img/c2.jpg'},
    {name:'caramel latte', price:6000, picture:'img/c3.jpg'},
    {name:'Choco Mocha', price:6500, picture:'img/c4.jpg'},
    {name:'strawberry Smoothie', price:9500, picture:'img/c5.jpg'},
    {name:'mint chocolate', price:5000, picture:'img/c6.jpg'},
    {name:'Pitch', price:5500, picture:'img/c7.jpg'},
    {name:'vanilla smoothie', price:7000, picture:'img/c8.jpg'},
]

// 메뉴 리스트 만들기
const menuList = document.querySelector("#menuList")
let str =''
for (let i = 0; i < menus.length; i++) {
    const menu = menus[i]

    // data-idx값(getAttribute으로 나중에 활용용)을 부여해서주문처리할때 사용
    str += `
                <div id="menuCard" class="col" data-idx="${i}" data-name="${menu.name}" data-price="${menu.price}">
                    <div class="card h-100">
                        <img src=${menu.picture} class="card-img-top" alt="...">
                        <div class="menu-body" >
                            <h5 class="card-title">${menu.name}</h5>
                            <p class="card-text">${menu.price}&#8361;</p>
                        </div>
                    </div>
                </div>`
}
menuList.innerHTML = str


//모달창
const popEle = document.querySelector("#modalDiv")

//모달 백그라운드
const popMb = document.querySelector(".modal-back-hide")

//메뉴클릭
menuList.addEventListener('click', function (e) {

    //클릭한 요소값을 가져옴
    const target = e.target

    //div의 #menuCard 가까이 클릭
    const liEle = target.closest("#menuCard")

    //상품의 저장되 있던 idx값을 idx변수에 저장
    const idx = liEle.getAttribute("data-idx")
    // console.log("IDX: " + idx)


    //메뉴를 클릭하면 메뉴index 값이 targetMenu로 저장됨
    const targetMenu = menus[idx]

    //선택한 메뉴의 사진
    const targetPicture = targetMenu.picture


    //모달창의 img를 targetPicture으로 변경
    popEle.querySelector("img").setAttribute("src", targetPicture)

    //모달의 h5 title을 요소값 name으로 변경
    const modalH5 = popEle.querySelector("h5")
    modalH5.innerHTML = menus[idx].name

    //모달 p에 price값 저장, innerHTML로 내용 변경
    const modalP = popEle.querySelector("p")
    modalP.innerHTML = `<div style="text-align: right"><h4>${menus[idx].price} &#8361;</h4></div>`

    //모달창 button에 idx, name, price값 저장
    const modalAddCart = popEle.querySelector("button")
    modalAddCart.setAttribute("data-idx", idx)
    console.log(modalAddCart.setAttribute("data-idx", idx)+" Modal IDX SAVE")

    //모달창의 클래스를 pop show로 변경
    popEle.setAttribute("class", "pop show")

    //모달창 back hide -> show
    popMb.setAttribute("class", "modal-back-show")


    //주문목록창에 idx set
    // const order = document.querySelector("#count")
    // order.setAttribute("data-idx", idx)
    // console.log(idx + 'check')


},false)

//모달창 나왔을때 한번더 클릭하면 pop hide로 변경
popEle.addEventListener("click", () => {
    popEle.setAttribute("class", "pop hide")
},false)

//모달창 클릭시 모달창 백그라운드 -> hide로 변경
popEle.addEventListener("click", () => {
    popMb.setAttribute("class", "modal-back-hide")
},false)



// 주문배열
const orders = []

// 모달창에서 클릭한 메뉴의 정보를 addCart에 추가 -> orders 배열로
document.querySelector("#modalDiv #addCart-Btn").addEventListener("click", e => {
    e.stopPropagation()
    e.preventDefault()

    //모달창 addCart에 저장된 값을 가져옴
    const target = e.target


    //번호만가지고 menus의 배열값을 가져옴
    const menu = menus[target.getAttribute("data-idx")]
    console.log(`ORDER MENU: ${menu.name}`)

    // 선택된 메뉴를 addCart로
    addCart(menu)

    // 모달창 종료료
    popEle.setAttribute("class", "pop hide")
    popMb.setAttribute("class", "modal-back-hide")

}, false)


function addCart(menu){

    // orders 배열에 중복되는 값이 있으면 result에 저장
    // oi는 order의 내용, menu에 같은값이 있으면 menu의 값을 result에 저장
    // 첫주문이라면 result는 [] 빈배열
    // oders에 menu.name이 있다면 menu가 result가 됨
    const result = orders.filter(oi => oi.name === menu.name)

    console.log("-------check result-----------")
    console.log(result)

    //result.length가 0보다 크다면 -> 주문목록에 상품이 있다면
    //카트에 상품이 늘어나면 result.lenght가 늘어남
    if(result.length > 0){
        //result 변수는 지정된 목록 하나임 필터로 거러짐
        result[0].qty += 1

    }else {
        // 처음 주문들어왔을때 qty 1생성
        // ...전개 연산자, 메뉴배열에 자연스럽게 qty 더함
        orders.push({...menu, qty: 1})
        console.log(orders)
    }
    showOrderItems()
}


function subCart(menu){

    const result = orders.filter(oi => oi.name === menu.name)

    console.log("-------check result-----------")
    console.log(result)

    if(result[0].qty > 0){
        result[0].qty -= 1
    }else{
        console.log('dont push this button')
    }
    showOrderItems()
}




// 선택된 아이템 order창에 보여주기
function showOrderItems() {

    const orderListEle = document.querySelector("#order")

    //orders배열 주문목록에 있는 정보를 화면 출력
    let str = ''

    for (let i = 0; i < orders.length ; i++) {
        const orderItem = orders[i]

        // console.log(orderItem)
        sum = orderItem.price * orderItem.qty

        str += `<li id="orderLi" class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div id ="orderName"class="fw-bold">${orderItem.name}</div>
                        <h6>${sum}&#8361;</h6>
                    </div>
                    <div id="count">
                        <span class="badge bg-primary rounded-pill">${orderItem.qty}</span>
                        <button id="plus"type = "button" class="btn btn-outline-dark plus">+</button>
                        <button id="minus" type = "button" class="btn btn-outline-dark minus">-</button>
                    </div>
                </li>`

    }//end for

    //for문으로 주문목록 출력이 끝나고 총가격의 계산이 끝나면 마지막으로 한줄 총가격 출력
    // str += `<hr/><h1>${sum}</h1>`
    orderListEle.innerHTML = str
}



nameArr = []
function orderFilter(name, orders){
    console.log(name.indexOf(orders.name))
    // const result = orders.filter(oi => oi.name === name)
    // return result[0]
}


//Order info add button
$(document).ready(function() {
    $(document).on("click",'#plus', function(e){
        e.stopPropagation()
        e.preventDefault()

        // const target = e.target
        // const orderName = target.closest("li")
        // const name = orderName.querySelector('.fw-bold')

        const innerText = document.getElementById('orderName').innerText
        console.log(innerText)

        //필터링 하면됨
        const result = orders.filter(oi => oi.name === name)


        //클릭해서 얻은 네임값하고 주문배열에 있는 네임갑하고 같은거를 if로 거르기

        // console.log(menus[idx].name)
        // console.log("BUTTON: "+`${idx}`)


        const menu = name
        addCart(menu)

    })
})

// Order info Subtract button
$(document).ready(function() {
    $(document).on("click",'#minus', function(e){
        e.stopPropagation()
        e.preventDefault()

        const orderInfo = document.querySelector("#modalDiv #addCart-Btn")
        const orderIdx = orderInfo.getAttribute("data-idx")
        const menu = menus[orderIdx]

        subCart(menu)
    })
}, false)