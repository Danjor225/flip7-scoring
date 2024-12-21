const startingScore = 200

const addNameButton = document.querySelector('#add-button')
const nameTextbox = document.querySelector('#name-textbox')
const nameRow = document.querySelector('#name-row-container')
const remainingScoreRow = document.querySelector('#remaning-score-row-container')
const subtractRow = document.querySelector('#subtract-row-container')

addNameButton.addEventListener('click', () => {

    createNameDiv()
    let remaingScoreReference = createDiv(startingScore, remainingScoreRow)
    
})


function createNameDiv(){

    let newName = nameTextbox.value
    if(checkBlankName(newName)){
        alert('Please enter a name')
        return
    }

    createDiv(newName, nameRow)

}

function createDiv(text, parent){
    div = document.createElement('div')
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