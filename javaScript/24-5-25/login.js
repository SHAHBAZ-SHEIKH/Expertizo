

document.getElementById("loginHandler").addEventListener("click",function(){
    var userEmail = document.getElementById("userEmail").value
    var userPassword = document.getElementById("userPassword").value
    var userget =JSON.parse(localStorage.getItem("uservalue"))

    if(!userEmail || !userPassword){
        alert("please All Field are required")
        return
    }

    var userExst = userget.find((item)=>{
        return item.userEmail == userEmail && item.userPassword ==userPassword
    })

    console.log(userExst)
    

    if(userExst){
        alert("login Successfully")
        localStorage.setItem("islogInUser",JSON.stringify(userExst))

        setTimeout(()=>{
            window.location.href="index.html"
        },2000)

    }

})