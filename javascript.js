const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
let myList = []

let listFromLocalStorage =  JSON.parse(localStorage.getItem("myList"))

if (listFromLocalStorage) {
    myList = listFromLocalStorage
    renderList()
}

inputBtn.addEventListener("click", function() {
    myList.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myList", JSON.stringify(myList))
    renderList()
})

function renderList() {
    let listItems = ""
    for (let i = 0; i < myList.length; i ++) {
        listItems += `<li id="li-el" class = "list-item"  > ${myList[i]} </li>`
    }
    ulEl.innerHTML = listItems
}

let liEl = document.querySelector("#li-el")





/*
let liEl = document.querySelector("#li-el")
liEl.forEach(item => {
    item.addEventListener('click', e => {
        console.log("clicked")
        liEl.classList.toggle('active')
    })
})
*/