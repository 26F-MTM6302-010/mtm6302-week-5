// console.log("JS File Connected")

const $bodyTag = document.querySelector('body')

const $newSection = document.createElement('section')
$newSection.id = "groceries"

$bodyTag.appendChild($newSection)

$newSection.insertAdjacentHTML("afterbegin", '<h2>Groceries</h2>')

$newSection.insertAdjacentHTML("beforeend", '<ul id="grocery-list"></ul>')

let $groceryItems = ["apples", "bananas", "dog food", "milk", "eggs", "bread"]
const $groceryUl = document.getElementById("grocery-list")

// for($item of $groceryItems){
//     $groceryUl.insertAdjacentHTML("beforeend", `<li>${$item}</li>`)
// }

// $groceryItems.forEach(function ($item){
//     $groceryUl.insertAdjacentHTML("beforeend", `<li>${$item}</li>`)
// })

// $groceryItems.forEach($item =>$groceryUl.insertAdjacentHTML("beforeend", `<li>${$item}</li>`)
// )

// use this syntax for the next assignment
let $listItems = []
 $groceryItems.forEach($item =>$listItems.push(`<li>${$item}</li>`))

 $groceryUl.insertAdjacentHTML("beforeend", $listItems.join(''))

//  create an addItem function that allows us to add a new item to the list and display it on the page
// create a function that accepts the new item
function addItem(item){
 // add the item to the grocery array   
    $groceryItems.push(item)
// display the new item on the page
$groceryUl.insertAdjacentHTML("afterbegin", `<li>${item}</li>`)
}

// add a removeItem function that accepts the item to be removed as parameter
function removeItem(thing){
    // filter the array based on the thing 
    $groceryItems = $groceryItems.filter(item => item !== thing)
    // map each item from the $groceryItems array inside $listItems array by adding the HTML template
    $listItems = $groceryItems.map(item => `<li>${item}</li>`)
    // display the filtered array on the page
    $groceryUl.innerHTML = ""
    $groceryUl.insertAdjacentHTML("beforeend", $listItems.join(""))
}


