

document.getElementById("signupHandler").addEventListener("click",function(){
    var userName = document.getElementById("userName").value
    var userEmail = document.getElementById("userEmail").value
    var userPassword = document.getElementById("userPassword").value
    var userConfirm = document.getElementById("userConfirm").value
    var userImage = document.getElementById("userImage").files[0]

    console.log(userName,userEmail,userPassword,userConfirm,userImage)

    var uservalue = JSON.parse(localStorage.getItem("user")) || []

    var userExst = uservalue.find((item)=>{
        return item.userEmail ==userEmail

    })

    console.log("userExst====>",userExst)

    if(userExst){
        alert("this user Already Exst")
        return
    }



    if(!userName || !userEmail || !userPassword || !userConfirm || !userImage){
        alert("All field are Require")
        return
    }

    if(userPassword.length <8){
        alert("Password lenght must be 8 character long")
        return
    }

    if(userPassword !==userConfirm){
        alert("password must be same confirm password")
        return
    }

    var userSet = {
        userName:userName,
        userEmail:userEmail,
        userPassword:userPassword,
        
        
    }

    setTimeout(()=>{
        uservalue.push(userSet)

    localStorage.setItem("user",JSON.stringify(uservalue))

    alert("Signup SuccessFully")

    window.location.href="login.html"

    },1000)


    
    

    
//   const reader = new FileReader();
//   reader.onloadend = (e) => {
//     var imageUrl = e.target.resut

//     console.log(imageUrl)

//     

    

    
//     reader.readAsDataURL(imageUrl);

  
  




})