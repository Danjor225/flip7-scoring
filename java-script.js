const startingScore = 200

const addNameButton = document.querySelector('#add-button')
const nameTextbox = document.querySelector('#name-textbox')
const nameRow = document.querySelector('#name-row-container')
const remainingScoreRow = document.querySelector('#remaning-score-row-container')
const subtractRow = document.querySelector('#subtract-row-container')

addNameButton.addEventListener('click', () => {

    createNameDiv()
    let remaingScoreReference = createAnElement(startingScore, remainingScoreRow, "div")
    createScoreContainer()
})


function createNameDiv(){

    let newName = nameTextbox.value
    if(checkBlankName(newName)){
        alert('Please enter a name')
        return
    }

    createAnElement(newName, nameRow, "div")

}

function createScoreContainer(){

   let subtractContainer = createAnElement("",subtractRow, "div")
   let textbox = createAnElement("", subtractContainer, "input")
    let subtractButton = createAnElement("Subtract",subtractContainer, "button")
  

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