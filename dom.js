const domheading = document.getElementsByClassName("dom")
const btn = document.getElementById("btn")

const newData = document.addEventListener("click", () => {
    domheading.innerHTML = "Heading has changed"
})
