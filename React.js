const taskname = document.getElementById("taskname");
const taskbio = document.getElementById("taskbio");
const taskbutton = document.getElementById("taskbutton");

const taskdata = document.getElementById("taskdata");
const taskdone = document.getElementById("taskdone");

taskbutton.addEventListener("click", () => {
  taskdata.innerHTML = taskname.value + " " + taskbio.value;
  console.log("taskdata.innerHTML:", taskdata.innerHTML);

  if (taskdata.innerHTML == "") {
    taskdone.style.visibility = "hidden";
    console.log("Mark as done button is hidden");
  } else if (taskdata.innerHTML !== "") {
    taskdone.style.visibility = "visible";
    console.log("Mark as done button is visible");
  }
});
