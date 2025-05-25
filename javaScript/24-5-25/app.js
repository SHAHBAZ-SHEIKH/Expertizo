// var userget = JSON.parse(localStorage.getItem("islogInUser"))
// var postget = JSON.parse(localStorage.getItem("allpost")) || []

// console.log("userget======>", userget)


// function displayPost() {
//     var postSection = document.getElementById("postSection")

//     postSection.innerHTML = ""

//     postget.forEach((item,index) => {
//         console.log(item)
//         postSection.innerHTML += `
//         <div>
//         <p>${item.postValue}</p>
//         <img id="displayImage" src=${item.postImage} alt="" />
//         <button onclick=edtHandler(${index})>edit</button>
//         <button onclick=deleteHandler(${index})>delete</button>
//       </div>
        
//         `
//     })

//     console.log(postget)
// }




// document.getElementById("postHandler").addEventListener("click", function () {
//     console.log("test")
//     var postValue = document.getElementById("postValue").value.trim()
//     var postImage = document.getElementById("postImage").value.trim()






//     if (!postValue || !postImage) {
//         alert("All filed are required")
//         return
//     }

//     var post = {
//         postValue,
//         postImage,
//         author: userget.userName,
//         date: new Date().toLocaleString()

//     }

//     postget.unshift(post)
//     localStorage.setItem("allpost", JSON.stringify(postget))

//     setTimeout(() => {
//         alert("post craeted Successfully")
//         document.getElementById("postValue").value = ""
//         document.getElementById("postImage").value = ""
//         displayPost()
//     }, 1000)



//     console.log(postImage, postValue)
// })


// function edtHandler(index){
//     console.log(postget[index])
//     var newContent = prompt("edt post value",postget[index].postValue)
//     var newImage = prompt("edit Image",postget[index].postImage)

//     console.log(newContent,newImage)

//     if(!newContent || !newImage){
//         alert("all filed are Reuired")
//         return
//     }

//     if(newContent !==null || newImage!==null){
//         postget[index].postValue = newContent
//         postget[index].postImage = newImage

//         localStorage.setItem("allpost", JSON.stringify(postget))

//     setTimeout(()=>{
//         alert("post updated")
//         displayPost()
//     },1000)

        
//     }
// }

// function deleteHandler(index){
//     console.log(index)

//     postget.splice(index,1)
//     localStorage.setItem("allpost", JSON.stringify(postget))

//     setTimeout(()=>{
//         alert("post Deleted")
//         displayPost()
//     },1000)
// }




























// var userImage = document.getElementById("userImage")
// var userName = document.getElementById("userName")

// userImage.src = userget.userImage
// userName.innerHTML = userget.userName
// displayPost()




// console.log(a)
// var a = 10

// console.log(y)

// const y=10


// const marks= 50

// console.log(marks >=70 ? "pass" : "fails")

const arr = ["shhbaz","zubar","babar"]

console.log(arr)

const arrCopy = [...arr,"Ahmed","nasir"]

console.log(arrCopy)

const obj = {
    name:'Shabz',
    id:'1'
}

console.log(obj)

const obj1 = {...obj,educton:"BSCS"}

console.log(obj1)

// let a = 10
// let b=a

// b=20

// console.log(a)
// console.log(b)




const student = {
    name:'Shabz',
    id:'1',
    educton:"matrc",
    address:{
        cty:"karachi"
    }
}

const studnet1 = {...student}

studnet1.name = "Fasal"

console.log(student)

console.log(studnet1)

const {address:{cty}} = student

console.log(cty)


function sum(a,b,c,...nums) {
  console.log(a,b,c,nums)
}
console.log(sum(1,2,3,4,5,6,7)); // 10



