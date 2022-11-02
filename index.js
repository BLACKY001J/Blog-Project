

let input = document.getElementById('inputField');
let btn = document.getElementById('submit');

btn.addEventListener('click', ()=>{
    inputValue = input.value;
    let toSend = localStorage.getItem("localItem");
    if(toSend==null){
        arr =[];
    }
    else{
        arr = JSON.parse(toSend);
    }
    arr.push(inputValue);
    localStorage.setItem("localItem", JSON.stringify(arr));
    input.value = '';
    display();
});

function display(){
    let toSend = localStorage.getItem("localItem");
    if(toSend==null){
        arr =[];
    }
    else{
        arr = JSON.parse(toSend);
    }
    let html = '';
    let toAdd = document.getElementById("todolists");
    arr.forEach((input, index) => {
        html +=`
        <div class="todoList">
        <p class="pText">${input}</p>
        <button class="deleteTask" onClick="deleteItem(${index})">x</button>
        </div>`
    });

    toAdd.innerHTML = html;
};

function deleteItem(index){
    let reviews = localStorage.getItem("reviews");
    if (reviews == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(reviews);
    }

    arr.splice(index,1);
    localStorage.setItem('reviews',JSON.stringify(arr));
    display();
}


/*

<div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">x</button>
    </div>

<div class="container">
        <div class="myTodo">
            <div class="inputvalue">
                <input class="inputVal" type="text" placeholder="Add your task" value="">
                <button class="btn">Add Task</button>
            </div>
            
           
            <div class="todoLists">
                
            </div>
            <button class="clearTask" onclick="clearTask()">Clear all Task</button>
        </div>

        

        document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

*/