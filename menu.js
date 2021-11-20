//jquery
src="https://code.jquery.com/jquery-3.6.0.min.js"
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossOrigin="anonymous"


//1단계 메뉴배열, 주문배열 생성
const orders = []

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

//2단계 메뉴 리스트 만들기
const menuList = document.querySelector("#menuList")
let str =''
for (let i = 0; i < menus.length; i++) {
    const menu = menus[i]

    // data-idx값(getAttribute으로 나중에 활용용)을 부여해서주문처리할때 사용
    str += `
                <div id="modal" class="col" data-idx="${i}" data-name="${menu.name}" data-price="${menu.price}">
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


//모달창 실행
//생성된 개별 메뉴 div에서 id값 받음
const popEle = document.querySelector("#modalDiv")

//모달 백그라운드
const popMb = document.querySelector(".modal-back-hide")

menuList.addEventListener('click', function (e) {

    //클릭한 요소값을 가져옴
    const target = e.target

    //li와 근접한 곳을 클릭할 경우 li 값을 가져옴
    const liEle = target.closest("#modal")

    //상품의 저장되 있던 idx값을 idx변수에 저장
    const idx = liEle.getAttribute("data-idx")
    console.log("IDX: " + idx)

    const name = liEle.getAttribute("data-name")
    console.log("NAME: " + name)

    const price = liEle.getAttribute("data-price")
    console.log("PRICE: " + price)


    //메뉴를 클릭하면 메뉴index 값이 targetMenu로 저장됨
    const targetMenu = menus[idx]

    //선택한 메뉴의 사진
    const targetPicture = targetMenu.picture


    //팝업창의 img를 targetPicture으로 변경
    popEle.querySelector("img").setAttribute("src", targetPicture)

    //모달의 h5 title을 요소값 name으로 변경
    popEle.querySelector("h5").setAttribute("data-name", name)
    popEle.querySelector("h5").innerHTML = name

    popEle.querySelector("p").setAttribute("data-price", price)
    popEle.querySelector("p").innerHTML = `<div style="text-align: right"><h4>${price} &#8361;</h4></div>`


    //팝업창 h3에 idx값 저장
    popEle.querySelector("p").setAttribute("data-idx", idx)

    //팝업창의 클래스를 pop show로 변경
    popEle.setAttribute("class", "pop show")

    //모달창 back hide -> show
    popMb.setAttribute("class", "modal-back-show")

},false)



//모달창 나왔을때 한번더 클릭하면 pop hide로 변경
popEle.addEventListener("click", () => {
    popEle.setAttribute("class", "pop hide")
},false)

//모달창 클릭시 모달창 백그라운드 -> hide로 변경
popEle.addEventListener("click", () => {
    popMb.setAttribute("class", "modal-back-hide")
},false)





