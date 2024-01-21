function handleClick() {
  const mainheading = document.getElementsByClassName("para");
  mainheading.innerText = "Heading changed";
}

const heading = document.getElementById("heading");

const button = document.getElementById("btn");
button.addEventListener("mouseover", () => {
  heading.innerHTML = "New Heading hovered!!";
  heading.style.color = "black";
  heading.style.backgroundColor = "lightblue";
  console.log("clicked");
});
