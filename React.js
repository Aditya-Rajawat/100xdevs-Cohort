const taskname = document.getElementById("taskname")
const taskbio = document.getElementById("taskbio")
const taskbutton = document.getElementById("taskbutton")

const taskdata = document.getElementById("taskdata")

taskbutton.addEventListener("click", () => {
    taskdata.innerHTML = taskname.value + " " + taskbio.value 
})