const inputBox = document.querySelector(".addTodo input");
const addBtn = document.querySelector(".addTodo button");
const todoList = document.querySelector(".todoList");
var date = new Date().toISOString().slice(0, 10);


showTask();

addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}

inputBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addBtn.click();
    }
});

function showTask(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<input onclick="deleteTask(${index})"; type="checkbox" class="userCheck"> <span class="todoTask"> ${element} </span> <span class="todoDate"> ${date} </span> <br>`;

    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}


// newLiTag += `<input onclick="deleteTask(${index})"; type="checkbox" class="userCheck"> <span class="todoTask"> ${element} </span> <span class="todoDate"> ${date} </span> <br>`;

// newLiTag += `<button class="btn" onclick="deleteTask(${index})";>X</button><p class="userCheck"> <span class="todoTask"> ${element} </span> <span class="todoDate"> ${date} </span> <br>`;