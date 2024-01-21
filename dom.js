function handleClick() {
    const mainheading = document.getElementsByClassName("para")
    mainheading.innerText = "Heading changed"
}

const heading = document.getElementById("heading")

const button = document.getElementById("btn")
button.addEventListener("mouseover", () => {
    heading.innerHTML = "New heading"
    console.log("clicked")
})