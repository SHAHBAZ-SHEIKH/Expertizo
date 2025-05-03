// function changeColor(){
//     var colorArray = ["0","1","2","3",'4',"5","6","7","8","9","A","B","C","D","E","F"];
//     var hexCode = ""
//     for(var i=0; i<6; i++){
//         var colorIndex = Math.floor(Math.random() * colorArray.length)
//         console.log("colorIndex",colorIndex)
//         hexCode = hexCode + colorArray[colorIndex]
//     }
//     console.log("hexCode",hexCode)

//     document.body.style.backgroundColor = "#" + hexCode
// }

// var userName = ["Shahbaz","umer","Asif"]
// console.log(userName[1])




// var days =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// console.log(date.getFullYear())


function eidCountDown(){
    var nowDate = new Date()
    var eidDate = new Date("7 June 2025")
    var diff = eidDate.getTime() - nowDate.getTime()

    if(diff<0){
        document.getElementById("title").innerHTML = "Eid Mubarak"
        document.getElementById("month").style.display = "none"
    document.getElementById("days").innerHTML  = days
    document.getElementById("hours").innerHTML  = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
        clearInterval(eidEnd)
    }

    var months = Math.floor((diff/(1000 * 60 * 60 * 24 * 30)))
    var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 *24)))
    var hours = Math.floor((diff % (1000 * 60 * 60 *24) / ( 1000 * 60 * 60)))

    var minutes = Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)))

    var seconds = Math.floor((diff % (1000 * 60) / (1000)))

    if(hours <10){
        hours = "0" + hours
    }

    if(days <10){
        days = "0" + days
    }
    document.getElementById("month").innerHTML  = months
    document.getElementById("days").innerHTML  = days
    document.getElementById("hours").innerHTML  = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

}


var eidEnd = setInterval(eidCountDown,1000)





//console.log("start")

// setTimeout(function (){

//     console.log("after 5 sec")

// },5000)

//console.log("ENd")


// setInterval(function(){
//     document.write("<h1>Expertizo</h1>")

// },2000)