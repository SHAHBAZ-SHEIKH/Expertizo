// console.log("Shahbaz");
// console.log("Shahbaz");

// for(var i=10; i>0; i--){

//     console.log("Shahbaz",i)

// }

// var i=0;
// while(i<10){
//     console.log("Shahbaz",i);
//     i++;
// }


// let i = 7;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);


// for (var i =1; i<=100; i=i +10) {
//     document.write("outer Loop" ,i , "<br>");

//     for (var j=i; j <i+10; j++) {

//         document.write(j, "<br>")
//     }

//     document.write("<br>")

    
// }

// var tableNum = Number(prompt("Enter Table Number"))
// var tableLenght = Number(prompt("Enter Table Lenght"))

// for(var i=1; i <=tableLenght; i++){
//     document.write(tableNum + " * " + i + " = " + i*tableNum + "<br>")
// }

var isSearchingValue= false
var studnetsName = ["Shahbaz","Salman","Rizwan"]

//console.log(studnetsName[1])

//console.log(studnetsName.length)

// for(var i=0; i<studnetsName.length; i++){
//     if(studnetsName[i] === "ALi"){
//         isSearchingValue=true
//         break
//     }
// }
// if(isSearchingValue){
//     console.log("Value Found")
// }
// else{
//     console.log("Value Not Found")
// }


// var reverSe= "BOB"
// var valueRever =""
// for(var i=reverSe.length-1; i>=0; i--){
//     valueRever += reverSe[i]
    
// }

// console.log(valueRever)

// var name = "Shahbaz"
// console.log(name.indexOf("a"))

// var myName = "S"
// console.log(myName.charCodeAt(0))
// var userInput = prompt("enter a Single Character")
// var isCharCode = userInput.charCodeAt(0)

// if(isCharCode >=65 && isCharCode <=90){
//     console.log("Uppercase")
// }
// else if(isCharCode >=97 && isCharCode<=122){
//     console.log("Lowercase")
// }

// else if(isCharCode >=48 && isCharCode<=57){
//     console.log("Number")
// }
// else{
//     console.log("Invalid Character")
// }

// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));

// if(num1 > num2){
//     console.log(num1 + " is greater than " + num2)

// }
// else if(num2 > num1){
//     console.log(num2 + "is Greater Then " + num1)
// }

var studentName = ["Faisal Bhai","Hunain Bhai","Sufyan Bhai"]
var studnetScore = [430,400,450]
var totaLMarks = 500
for(var i=0; i<studentName.length; i++){
    var percentage = (studnetScore[i]/totaLMarks)*100
    document.write("Score of " + studentName[i] + " " + "is " + studnetScore[i] + " "  + "percenatge " + percentage + "% <br>")

}

