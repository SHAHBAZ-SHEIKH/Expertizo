//console.log(window.alert("Hello"))

// var myHeading = document.getElementById("head");

// console.log(myHeading);

// var myPara = document.getElementsByClassName("myPara")
// console.log(myPara)
// for(var i=0;  i<myPara.length; i++){
//     myPara[i].style.backgroundColor =  "green"

// }

// var arr  = ["ashabaz","Nasir","Ali"]
// console.log(arr.length)

// var p = document.getElementsByTagName("p");
// console.log(p)

// var h = document.querySelector("#head");
// console.log(h)

// var p = document.querySelectorAll(".myPara")
// console.log(p)

// var h = document.querySelector(".myPara")
// h.setAttribute("class","box")

// var btn = document.getElementById("btn");
// function getAttributesValue(){
//     var link = document.getElementById("link")
//     var href =link.getAttribute("href")
//     console.log("href",href)
    
// }


// btn.addEventListener("click",getAttributesValue)



// var student =[ 
//     {
//     name: "Shahbaz",
//     email:"ashabaz845@gmail.com",
//     phone:"0313345565",
//     active:true,
//     classDays:["Saturday","Sunday"],
//     schoolName:{
//         school:"Expertizo"
//     },
//     getData: function(){
//         console.log(this.name)
//         return this.email
//     }

// },

// ]

// console.log(this)

// function abc(){
//     console.log(this)
// }

//console.log(student.getData())

// abc()

//console.log(student.classDays[student.classDays.length - 1])
//unde
// student.rollNO = 12344
// student.schoolName.address = "Bahadurabad"

// console.log(student.schoolName.contactNo.address)

// console.log(student.classDays.push("Monday"))
// console.log(student)

var cricketData = [
    {
       name:"Virat" ,
       image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/364400/364495.6.jpg",
       country:"India",
       description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
       name:"babar" ,
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPB3xv4W9J5hZR4tbhtgGT_r8Fr_0FXeG7WA&s",
       country:"Pakistan",
       description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
       name:"Saim" ,
       image:"https://c.ndtvimg.com/2024-12/9fqddj4o_saim-ayub-afp_625x300_23_December_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
       country:"Pakistan",
       description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
       name:"Shahid Afridi" ,
       image:"https://resources.cricket-australia.pulselive.com/cricket-australia/photo/2023/05/04/1884cd1e-25ad-465b-b168-6961943828bc/eQoLHKwy.ashx",
       country:"Pakistan",
       description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
       name:"Amir" ,
       image:"https://www.pakistantoday.com.pk/wp-content/uploads/2021/06/1497928670-mohammad-amir-ct-2017-india-vs-pakistan.jpeg",
       country:"Pakistan",
       description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }

]
var count = 0

function nextHandler(){
    if(count == cricketData.length -1){
        count=0
        count++
        var img = document.getElementById("img")
        var name = document.getElementById("name")
        var country = document.getElementById("country")
        var description = document.getElementById("desc")
        img.src = cricketData[count].image
        name.innerHTML = cricketData[count].name
        country.innerHTML = cricketData[count].country
        description.innerHTML = cricketData[count].description

    }
    else{

        count++
        var img = document.getElementById("img")
        var name = document.getElementById("name")
        var country = document.getElementById("country")
        var description = document.getElementById("desc")
        img.src = cricketData[count].image
        name.innerHTML = cricketData[count].name
        country.innerHTML = cricketData[count].country
        description.innerHTML = cricketData[count].description
    }
    
}


function prevoiusHandler(){
    console.log("done")
    if(count <=0 ){
        count = cricketData.length - 1
        var img = document.getElementById("img")
        var name = document.getElementById("name")
        var country = document.getElementById("country")
        var description = document.getElementById("desc")
        img.src = cricketData[count].image
        name.innerHTML = cricketData[count].name
        country.innerHTML = cricketData[count].country
        description.innerHTML = cricketData[count].description
    }
    else{
        count--
        var img = document.getElementById("img")
        var name = document.getElementById("name")
        var country = document.getElementById("country")
        var description = document.getElementById("desc")
        img.src = cricketData[count].image
        name.innerHTML = cricketData[count].name
        country.innerHTML = cricketData[count].country
        description.innerHTML = cricketData[count].description
    }
}