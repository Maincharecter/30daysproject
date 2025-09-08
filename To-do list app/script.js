const taskInput = document.querySelector(".taskInput")
const textContainer = document.querySelector(".textContainer")
const Addbutton = document.querySelector(".Addbutton")
Addbutton.addEventListener("click", () => {
    const list = document.createElement("li")
    list.style.listStyle = "none"
    list.style.display = "flex"
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    const text = document.createElement("p")
    text.innerHTML = taskInput.value
    text.classList.add("faraway")
    text.style.whiteSpace = "normal";
text.style.wordWrap = "break-word";
text.style.maxWidth = "300px";
    const removebtn = document.createElement("button")
    removebtn.innerHTML= '<i class="hgi hgi-stroke hgi-cancel-01"></i>'
    removebtn.classList.add("faraway");
    list.append(checkbox, text, removebtn)
    textContainer.appendChild(list);
    savedata();
taskInput.innerHTML= "";

})
//this is how to edit in Created element by js
// you have to acess through ul/div your putting data

textContainer.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {

        const parentLi = e.target.closest("li");
        const text = parentLi.querySelector("p");
        //cause li r bhitore p ase
        if (e.target.checked) {
            text.style.textDecoration = "line-through";
            savedata();

        } else {
            text.style.textDecoration = "none";
            savedata();
        }
    }

    if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
        const parentLi = e.target.closest("li");
        parentLi.remove();
        savedata()
    }
});
function savedata(){
    localStorage.setItem("data",textContainer.innerHTML)
}
function showdata() {
    textContainer.innerHTML = localStorage.getItem("data")
}
showdata();