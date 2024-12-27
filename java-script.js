const startingScore = 200

const addNameButton = document.querySelector('#add-button')
const nameTextbox = document.querySelector('#name-textbox')
const nameRow = document.querySelector('#name-row-container')
const remainingScoreRow = document.querySelector('#remaning-score-row-container')
const subtractRow = document.querySelector('#subtract-row-container')

addNameButton.addEventListener('click', () => {
    let newName = nameTextbox.value
    if(checkBlankName(newName)){
        alert('Please enter a name')
        return
    } else {
        createNameDiv(newName)
        let remainingScoreReference = createAnElement(startingScore, remainingScoreRow, "div")
        createScoreContainer(remainingScoreReference)
    }
  
})


function createNameDiv(newName){
    
    nameTextbox.value=""
   let newNameDiv = createAnElement(newName, nameRow, "div")
   newNameDiv.classList.add("name")
}

function createScoreContainer(remainingScoreReference){

   

   let subtractContainer = createAnElement("",subtractRow, "div")
   subtractContainer.classList.add("subtract-container")
   let textbox = createAnElement("", subtractContainer, "input")
   textbox.classList.add("subtract-textbox")

    let subtractButton = createAnElement("Subtract",subtractContainer, "button")
    subtractButton.classList.add("subtract-button")
    subtractButton.addEventListener("click", () => {
        subtractRoundScore(remainingScoreReference, textbox)})

}

function checkValidNumberInput(value){
    return !isNaN(value)
        
    
}

function subtractRoundScore(remainingScoreElement, toSubtractText){
 
    let remainingScoreNumber = parseInt(remainingScoreElement.innerText)
    let toSubtract = parseInt(toSubtractText.value)
    if( checkValidNumberInput(toSubtract)){
    remainingScoreNumber -= toSubtract

    remainingScoreElement.innerText = remainingScoreNumber
    toSubtractText.value = ""
   } else {
    toSubtractText.focus()
    toSubtractText.value = "A Number!"
   }
    
    
}

function createAnElement(text, parent, type){
    div = document.createElement(type)
    div.innerText = text
    parent.appendChild(div)

    return div
}

function checkBlankName(name){
    if(name === ""){
        return true
    } else {
        return false
    }
}

