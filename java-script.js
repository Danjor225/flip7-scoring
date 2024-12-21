const startingScore = 200

const addNameButton = document.querySelector('#add-button')
const nameTextbox = document.querySelector('#name-textbox')
const nameRow = document.querySelector('#name-row-container')
const remainingScoreRow = document.querySelector('#remaning-score-row-container')
const subtractRow = document.querySelector('#subtract-row-container')

addNameButton.addEventListener('click', () => {

    createNameDiv()
    let remainingScoreReference = createAnElement(startingScore, remainingScoreRow, "div")
    createScoreContainer(remainingScoreReference)
})


function createNameDiv(){

    let newName = nameTextbox.value
    if(checkBlankName(newName)){
        alert('Please enter a name')
        return
    }
    nameTextbox.value=""
   let newNameDiv = createAnElement(newName, nameRow, "div")
   newNameDiv.classList.add("name")

}

function createScoreContainer(remainingScoreReference){

   let subtractContainer = createAnElement("",subtractRow, "div")
   
   let textbox = createAnElement("", subtractContainer, "input")
   textbox.style.width = "50px"
   textbox.style.marginRight="10px"
    let subtractButton = createAnElement("Subtract",subtractContainer, "button")
    subtractButton.addEventListener("click", () => {
        subtractRoundScore(remainingScoreReference, textbox)})

}

function subtractRoundScore(remainingScoreElement, toSubtractText){

    let remainingScoreNumber = parseInt(remainingScoreElement.innerText)
    let toSubtract = parseInt(toSubtractText.value)

    remainingScoreNumber -= toSubtract

    remainingScoreElement.innerText = remainingScoreNumber
    toSubtractText.value = ""
    
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