const startingScore = 200

const addNameButton = document.querySelector('#add-button')
const nameTextbox = document.querySelector('#name-textbox')
const nameRow = document.querySelector('#name-row-container')
const remainingScoreRow = document.querySelector('#remaning-score-row-container')
const subtractRow = document.querySelector('#subtract-row-container')

addNameButton.addEventListener('click', () => {

    createNameDiv()

})

function createNameDiv(){
    let newName = nameTextbox.value
    if(checkBlankName(newName)){
        alert('Please enter a name')
        return
    }

    let newNameDiv = document.createElement('div')
    newNameDiv.innerText = newName
    nameRow.appendChild(newNameDiv)

}



function checkBlankName(name){
    if(name === ""){
        return true
    } else {
        return false
    }
}