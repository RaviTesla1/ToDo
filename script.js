
const button = document.getElementById("button");
const task = document.getElementById("inputBox");
const parentUl = document.getElementById("listContainer");

function addTask(){
    if(task.value === ""){
        alert("Enter task to add");
    }
    else{
        const list = document.createElement("li");
        list.textContent = task.value;
        parentUl.appendChild(list);

        const spanItem = document.createElement("span");
        spanItem.textContent =  "\u274C";
        list.appendChild(spanItem);
    }
    task.value = "";  
    addData();
}

parentUl.addEventListener("click",function remove(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        addData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        addData();
    }
})


function addData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();