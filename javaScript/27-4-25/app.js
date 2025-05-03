// console.log(Math.random() * 5)
// var num =23.8;

// console.log(Math.ceil(75.0))
// console.log(Math.floor(23.3))
// console.log(Math.round(23.4))


// function abc(){
//     for(var i=0; i<=10; i++){
//         console.log(i)
//     }
// }

// abc()
// abc()


// function mySum(num1=5,num2=7){
//     var resuult = num1 + num2
//     return resuult

// }

// console.log(mySum(14,16))

// // var result = mySum(10,7) //hello
// // console.log(result)


// function checkPalindrome(){
//     var input = document.getElementById("input").value
//     var hide = document.getElementById("hide")

//     console.log("userValue====>",input)
//     var resultValue = ""
//     var isCheck = false

//     for(var i=input.length -1; i>=0; i--){
//         //console.log(input[i])
//         resultValue = resultValue +input[i]

//         if(resultValue === input){
//             isCheck = true
//         }
//     }

//     if(isCheck){
//         console.log("it is Palindrome")
//         hide.style.display = "block"
//         hide.innerHTML = "it is " + input + " Palindrome"
//     }
//     else{
//         console.log("it is not Palindrome")
//         hide.style.display = "block"
//         hide.innerHTML = "it is not " + input + " Palindrome"
//     }

//     //console.log(resultValue)
// }


function backgroundChanger(){
    var arrayColor = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    var hexCode = ""

    for(var i=0; i<6; i++){
        var randomColor = Math.floor(Math.random()* arrayColor.length)
        console.log(randomColor)

            hexCode += arrayColor[randomColor]
    }

    document.body.style.backgroundColor = "#" + hexCode

    console.log("hexcode ===>",hexCode)

    

}


function check(){
    var lorem = document.getElementById("lorem")
    lorem.innerHTML = "Rizwan"
}