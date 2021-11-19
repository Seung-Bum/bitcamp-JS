//자바스크립트
src="https://code.jquery.com/jquery-3.6.0.min.js"
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossOrigin="anonymous"


const popEle = document.querySelector(".modal-dialog")

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
                <div class="col" data-idx="${i}">
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


// 3단계 li에 클릭이벤트 설정, 메뉴창에서 메뉴 클릭이벤트 설정
menuList.addEventListener("click", (e)=> {

    //클릭한 요소값을 가져옴
    const target = e.target

    //li와 근접한 곳을 클릭할 경우 li 값을 가져옴
    const liEle = target.closest(".col")

    //상품의 idx값을 idx변수에 저장
    const idx = liEle.getAttribute("data-idx")
    console.log("IDX: " + idx)

    //메뉴를 클릭하면 메뉴index 값이 targetMenu로 저장됨
    const targetMenu = menus[idx]

    //선택한 메뉴의 사진
    const targetPicture = targetMenu.picture

    //팝업창의 img를 targetPicture으로 변경
    popEle.querySelector("img").setAttribute("src", targetPicture)

    //팝업창 h3에 idx값 저장
    popEle.querySelector("h3").setAttribute("data-idx", idx)

    popEle.setAttribute("class", "pop hide")
},false)
