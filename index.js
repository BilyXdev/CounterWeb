let counterContent = document.querySelector("#counter-content")
let addBtn = document.querySelector("#add-btn")
let removeBtn = document.querySelector("#remove-btn")
let resetBtn = document.querySelector("#reset-btn")
let counter = 0

addBtn.addEventListener("click", function addCounter() {
    counter += 1
    counterContent.textContent = counter
})
removeBtn.addEventListener("click",function removeCounter() {
    counter -= 1
    if(counter === 0){
        counter = 0
        counterContent.textContent = counter
    }    
    counterContent.textContent = counter
})
resetBtn.addEventListener("click", function resetCounter() {
    counter -= counter
    counterContent.textContent = counter
})
