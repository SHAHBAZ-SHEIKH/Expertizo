var rashionList = ["Atta","Rice","Milk",12,false]

 console.log(rashionList)
// rashionList.push("Daal")

// console.log("push Method array===>",rashionList)

// console.log(rashionList.pop())

// console.log("pop Method array===>",rashionList)


// rashionList.shift()

// console.log("shift Method array===>",rashionList)

// rashionList.unshift("Chicken")

// console.log("unshift array Methdo",rashionList)


// console.log(rashionList[2])

// console.log(rashionList[4])


//rashionList.splice(2,2)

//console.log("splice Method array===>",rashionList)

var raslistCopy  =rashionList.slice(1,2)
console.log("original  array===>",rashionList)
console.log("slice Method array===>",raslistCopy)


console.log(rashionList.indexOf("Dall"))

console.log(rashionList.includes("Rice"))
// var name = "Shahbaz,Ahmed"
// console.log(name.split(","))
// console.log(rashionList.join(" "))


for(var i=1; i<=100; i=i+10){
    console.log("Outer Loop")
    for(var j=i; j<i+10; j++){
        console.log("Inner Loop")
        document.write(j)
    }
    
    document.write("<br>")

}