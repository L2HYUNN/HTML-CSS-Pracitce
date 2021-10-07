const jsForm = document.querySelector(".js-todo_form"),
    jsInput = document.querySelector(".js-todo"),
    newJsForm = document.querySelector(".js-todo_form__new"),
    toDoList = document.querySelector(".js-todo-list__pending"),
    finishedList = document.querySelector(".js-todo-list__deleting");

const handleSubmit = () => {
    const myName = jsInput.value;
    saveMyName(myName);
    loadMyName();
}

const createHelloName = (name) => {
    const span = document.createElement("span");
    span.innerHTML = `Hello This Beautiful ${name}!`;
    jsForm.appendChild(span);
}

const createToDoList = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Write Your to Do List!!");
    input.classList.add("js-todo_new");
    newJsForm.appendChild(input);

    const toDoSpan = document.createElement("span");
    toDoSpan.innerHTML = 'To Do';
    toDoList.appendChild(toDoSpan);


    const finishedSpan = document.createElement("span");
    finishedSpan.innerHTML = 'Finshed';
    finishedList.appendChild(finishedSpan);
}

const loadMyName = () => {
    const myName = localStorage.getItem('MyName');
    if(myName) {
        jsInput.remove();
        createHelloName(myName);
        createToDoList();
    }
}

const saveMyName = (name) => {
    localStorage.setItem('MyName', name );
}


jsForm.addEventListener("submit", handleSubmit);
loadMyName();