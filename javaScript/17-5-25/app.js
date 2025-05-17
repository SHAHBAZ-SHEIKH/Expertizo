


// function abc(name){
//     return `Hello ${name}`
// }



// console.log(abc("Shhbaz"))

// function callByOneMin(faisal){
//     faisal()
    
// }


// function callByTwoMin(){
//     console.log("Kaam Hogaaya")
// }


// callByOneMin(callByTwoMin)


// 
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// var add = name=> cons`Hello ${name}`


// console.log(add("Shhbaz"))



// var arr = ["Apple","Bananan","mango","Graphes"]

//Array Methods

//forEach
//Map
//Filter
//Find



//arr.forEach((myValue,index)=> console.log(myValue,index))

// var newArr = arr.map((item)=>{
//     console.log(item)
//     return item + " is a fruit"

// })

// console.log(newArr)


// var num = [1,2,3,4,5,6,7,8,9]

// var addNum = num.map((item)=>item + 4)

// console.log(addNum)


// var students = [
//     {
//         id:1,
//         name:"Shahbaz",
//         age:22

//     },
//     {
//         id:2,
//         name:"Faisal",
//         age:22

//     },
//     {
//         id:3,
//         name:"Umer",
//         age:24

//     },
//     {
//         id:4,
//         name:"Hunain",
//         age:23

//     },
//     {
//         id:5,
//         name:"Ali Raza",
//         age:22

//     },

// ]

// var fliterItem = students.filter((item)=>{
//     return item.age <=22 && item.name === "Nasir"
// })
// console.log(fliterItem)

// var findValue = students.find((item)=>{
//     return item.id ===3
// })

// console.log(findValue)


const products = [
  // Electronics
  { id: 1, brand: "Apple", name: "iPhone 14", price: 999, category: "Electronics" },
  { id: 2, brand: "Samsung", name: "Galaxy S23", price: 899, category: "Electronics" },
  { id: 3, brand: "Sony", name: "PlayStation 5", price: 499, category: "Electronics" },
  { id: 4, brand: "Canon", name: "EOS M50 Camera", price: 649, category: "Electronics" },
  { id: 5, brand: "LG", name: "OLED TV", price: 1299, category: "Electronics" },

  // Computers
  { id: 6, brand: "Dell", name: "XPS 13", price: 1199, category: "Computers" },
  { id: 7, brand: "HP", name: "Pavilion 15", price: 749, category: "Computers" },
  { id: 8, brand: "Apple", name: "MacBook Air", price: 999, category: "Computers" },
  { id: 9, brand: "Lenovo", name: "ThinkPad X1", price: 1349, category: "Computers" },
  { id: 10, brand: "Asus", name: "ROG Strix", price: 1499, category: "Computers" },

  // Accessories
  { id: 11, brand: "Sony", name: "WH-1000XM5", price: 399, category: "Accessories" },
  { id: 12, brand: "JBL", name: "Flip 6 Speaker", price: 129, category: "Accessories" },
  { id: 13, brand: "Logitech", name: "MX Master 3 Mouse", price: 99, category: "Accessories" },
  { id: 14, brand: "Apple", name: "AirPods Pro", price: 249, category: "Accessories" },
  { id: 15, brand: "Anker", name: "Power Bank 20000mAh", price: 49, category: "Accessories" },

  // Fashion
  { id: 16, brand: "Nike", name: "Air Max 270", price: 150, category: "Fashion" },
  { id: 17, brand: "Adidas", name: "Ultraboost", price: 180, category: "Fashion" },
  { id: 18, brand: "Levi's", name: "Men's Jeans", price: 60, category: "Fashion" },
  { id: 19, brand: "Puma", name: "Graphic Hoodie", price: 70, category: "Fashion" },
  { id: 20, brand: "Zara", name: "Women's Jacket", price: 120, category: "Fashion" },

  // Home Appliances
  { id: 21, brand: "KitchenAid", name: "Stand Mixer", price: 379, category: "Home Appliances" },
  { id: 22, brand: "Philips", name: "Air Fryer", price: 199, category: "Home Appliances" },
  { id: 23, brand: "Dyson", name: "Vacuum Cleaner", price: 499, category: "Home Appliances" },
  { id: 24, brand: "Panasonic", name: "Microwave Oven", price: 150, category: "Home Appliances" },
  { id: 25, brand: "Whirlpool", name: "Refrigerator", price: 899, category: "Home Appliances" }
];


 var productsList = document.getElementById("productsList")

// products.forEach((item)=>{
//     console.log(item.category)
//     productsList.innerHTML += `
//     <p>${item.brand} </p>
//     <p>${item.name} </p>
//     <p>${item.price} </p>
//     `
// })


function flterValue(btn){
    console.log(btn.innerHTML)
    var filterProducts = products.filter((item)=>{
    return item.category === btn.innerHTML
}).forEach((item)=>{
    console.log(item.category)
    productsList.innerHTML += `
    <p>${item.brand} </p>
    <p>${item.name} </p>
    <p>${item.price} </p>
    `
})
}



