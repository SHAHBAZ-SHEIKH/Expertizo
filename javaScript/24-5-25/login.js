

document.getElementById("loginHandler").addEventListener("click",function(){
    var userEmail = document.getElementById("userEmail").value
    var userPassword = document.getElementById("userPassword").value
    var userget =JSON.parse(localStorage.getItem("user"))

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

        setTimeout(()=>{
            window.location.href="index.html"
        },2000)

    }

})