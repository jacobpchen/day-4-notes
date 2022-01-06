console.log("Hello from scripts.js")

const secondDiv = document.getElementById("second-div")
secondDiv.style.border = "solid magenta"

// select first div
const firstDiv = document.querySelector(".first-div")
console.log(firstDiv.children)


// change h1 to blue
const header = firstDiv.children[0]
header.style.color = "blue"

// target class fruit-list
const list = document.querySelector(".fruit-list")
// get the fruit-list children
const listItems = list.children
console.log(listItems)
// console log the typeof (fruit-list children)
console.log("typeof listItems", typeof (listItems))

//listItems.forEach(element => console.log(element))

const listItemsArray = Array.from(listItems)
console.log("typeof listItemsArray ", typeof (listItemsArray))
console.log("is this an array ", Array.isArray(listItemsArray))

const colorArr = ["red", "blue", "green", "yellow"]

listItemsArray.forEach((element) => {
    // Get a random number from 0 - 3
    let random = Math.floor(Math.random() * colorArr.length)
    console.log(typeof (random))

    element.style.color = colorArr[random]
})

let getCount = () => {
    console.log("Hello from getCount")

    let size = listItemsArray.length

    // target the first div
    const theDiv = document.querySelector(".first-div")
    // create a dom element
    const newPara = document.createElement("p")
    newPara.innerText = size

    // append the newPara to first-div
    theDiv.append(newPara)
}
