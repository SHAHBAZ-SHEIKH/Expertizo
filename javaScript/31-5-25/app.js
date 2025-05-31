
// console.log("fisrt")
// for(var i=0; i<5; i++){
//     console.log(i)
// }

// console.log("end")


// console.log("Start")

// setTimeout(()=>{
//     console.log("runs AFter 5 sec")

// },5000)

// console.log("ENd")

// let pro  = new Promise((res,rej)=>{
//     let pakistanWin = "Bangladesh"

//     if(pakistanWin == "indaa"){
//         res("Yes series jeet chuuky hai")
//     }
//     else{
//         rej("No Series Win")
//     }
// })

// pro.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// const fecthAPi = ()=>{
//     let res =fetch("https://jsonplaceholder.typicode.com/posts")
    
//     res
//     .then((data)=>data.json())
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))
// }

// fecthAPi()

// const hello = ()=> "Shahbaz"

// console.log(hello)



// async function fecthAPi(){

//     try {
//         let result = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let response = await result.json()
//     console.log("response===>",response)
        
//     } 
//     catch (error) {
//         console.log(error)
        
//     }
    
// }

// fecthAPi()



// const githubProfile =async ()=>{
//     let profileget = document.getElementById("profileget")
//     let githubProfile = document.getElementById("githubProfile").value

//     try {
//         let result = await fetch(`https://api.github.com/users/${githubProfile}`)
//         let response = await result.json()

//         profileget.innerHTML = `
//         <div class="card" style="width: 18rem;">
//   <img src=${response.avatar_url} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${response.name}</h5>
//     <p class="card-text">${response.bio}</p>
//     <a href=${response.html_url} target="_blank" class="btn btn-primary">Go Github</a>
//   </div>
// </div>

//         `

//         console.log("response",response)
        
//     } catch (error) {
//         console.log(error)
        
//     }

// }

let allprouducts = []

async function displayproduct(){

    let productDisplay = document.getElementById("productDisplay")

    try {
        
        let reseult = await fetch("https://fakestoreapi.com/products/")
        let response = await reseult.json()

        allprouducts = response

        productDisplay.innerHTML = ""

        response.forEach((item)=>{
            
            productDisplay.innerHTML += `
            <div class="col-12 col-sm-12 col-lg-4 col-md-4">
          <div class="card" style="width: 18rem">
            <img src=${item.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.category}</h5>
              <p class="card-text">
                ${item.description.slice(0,10)}
              </p>
              <p class="card-text">
               Price: ${item.price}
              </p>
              <button onclick="addtoCart(${item.id})" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
            `
        })
        console.log("response",response)
    } catch (error) {
        console.log(error)
        
    }

}

displayproduct()

function addtoCart(productId){
    console.log(productId)

    let product = allprouducts.find((data)=> data.id == productId)
    let findsvalue = JSON.parse(localStorage.getItem("cart")) || []

    console.log('product===>',product)

    let existingProduct = findsvalue.find((data)=>data.id == productId)

    if(existingProduct){
        existingProduct.quantity +=1
    }
    else{
        findsvalue.push({...product,quantity:1})
    }

    localStorage.setItem("cart",JSON.stringify(findsvalue))

    alert("ADD to Cart Successfully")




}