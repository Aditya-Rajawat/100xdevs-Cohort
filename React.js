const taskaddbutton = document.getElementById('taskaddbutton')
const taskname = document.getElementById("taskname").value
const taskinfo = document.getElementById("taskinfo").value
const newdata = document.getElementById("newdata")

function handlechange(e){
    const inputvalue = e.target.value
    console.log(inputvalue)
}
taskaddbutton.addEventListener("click", () => {
    console.log("clicked")
    newdata.innerHTML = `${inputvalue}`
})