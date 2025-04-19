///Comparison Operators

//console.log(!false)

//console.log(5 > 6)

//console.log(6 > 7 && 10 > 12 )
//console.log(8 > 7 || 10 > 12 )
///         true  && false = false
 //            1     && 0    = 0


//  function calculateBMI(){
//     var weight = document.getElementById("weight")
//     var height = document.getElementById("height")
//     console.log(weight.value)
//     console.log(height.value)
//     var bmi = weight.value / (height.value * height.value)

//     console.log(bmi)
//  }


//var firstName = prompt("Enter your first name")
//var lastName = prompt("Enter your last name")


// var userName = ""

// if(userName){
//     alert("valid user name")
// }
// else{
//     alert("Not Valid user name")
// }

// if(firstName == "Shahbaz" && lastName == "Ahmed"){
//     alert("Welcome Shahbaz Ahmed")
// }
// else{
//     alert("You are not Shahbaz Ahmed")
// }

// var shirtsName = "Polo"
// var color = "red"

// if(shirtsName == "Polo"){
//     console.log("Polo shirt")
//     if(color == "blue"){
//         console.log("Polo red shirt")
//     }

// }
// else{
//     console.log("Not Available")
// }

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var operators = prompt("Enter operator  (+,-,*,/,%)")

if(operators == "+"){
    var result = num1 + num2
    console.log("The sum of " + num1 + " and " + num2 + " is " +  result)
}
else if(operators == "-"){
    var result = num1 - num2
    console.log("The substraction of " + num1 + " and " + num2 + " is " +  result)

}

else if(operators == "*"){
    var result = num1 * num2
    console.log("The multiplication of " + num1 + " and " + num2 + " is " +  result)

}
else if(operators == "/"){
    var result = num1 / num2
    console.log("The division of " + num1 + " and " + num2 + " is " +  result)

}
else if(operators == "%"){
    var result = num1 % num2
    console.log("The modulus of " + num1 + " and " + num2 + " is " +  result)
}
else{
    console.log("Invalid operator")
}
