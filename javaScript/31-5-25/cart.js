

let getCartitem = JSON.parse(localStorage.getItem("cart"))

console.log(getCartitem)

function loadCart(){
    let addtocart  = document.getElementById("addtocart")
    let prodcutPrice = document.getElementById("prodcutPrice")
    let total = 0
    addtocart.innerHTML = ""

    getCartitem.forEach((item)=>{
        addtocart.innerHTML += `

        <div class="cart">
        <div class="cartImag">
          <img
            src=${item.image}
            alt=""
          />
        </div>
        <div class="category">${item.category}</div>
        <div class="price">${item.price}Pkr</div>
        <button>Remove Item</button>
      </div>


        `

    total += item.quantity * item .price
    })
    prodcutPrice.innerText = total
}

loadCart()