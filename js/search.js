const search = document.getElementById("search")

search.addEventListener("keyup",function(){

const value = search.value.toLowerCase()

document.querySelectorAll(".repo-card").forEach(card => {

const text = card.innerText.toLowerCase()

card.style.display = text.includes(value) ? "block" : "none"

})

})