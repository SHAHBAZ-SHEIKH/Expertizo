// function myImage(event){
//     console.log(event)
//     // event.target.src = "https://sherbrotherpakistan.com/wp-content/uploads/2024/01/rent-a-car-karachi-1024x768.jpeg"
//     // if(type == "over"){
//     //     event.target.src = "https://sherbrotherpakistan.com/wp-content/uploads/2024/01/rent-a-car-karachi-1024x768.jpeg"
//     // }
//     // else{
//     //     event.target.src = "https://deinfa.com/wp-content/uploads/2024/06/A-Guide-to-Electric-Cars-in-Pakistan-Featured-Image.png"  
    

//     // }
// }


function myInput(event){
    var list = document.getElementById("list")
     console.log(event)
     if(event.keyCode === 13){
        console.log("Hello Good")
        var elem = event.target.value
        
        list.innerHTML += "<li>" + elem + "</li>"

        if(["hello","Hi","hey"].indexOf(elem) !==-1){
            setTimeout(function(){
                list.innerHTML += "<li>Hi, How are you?</li>"

            },1000)
        }

        else if(["Assalam-o-alaikum","kaesy hai aap"].indexOf(event.target.value) !== -1){
            setTimeout(function(){
                list.innerHTML += "<li>Wa-alaikum-assalam, Khair maqdam hai aap ka</li>"
            },1000)
        }
        
     }
    
}