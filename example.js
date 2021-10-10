const form = document.querySelector(".js-todo_form__new"),
    input = document.querySelector(".js-todo_new"),
    pendingItems = document.querySelector(".js-todo-list__pending"),
    finishedItems =  document.querySelector(".js-todo-list__deleting");

let pendingList = [];
let checkedList = [];

const PENDING = "PENDING";
const FINISHED = "FINISHED";

function pendingListsAdded(toDo) {
    pendingList.push(toDo);
}
function finishedListsAdded(toDo) {
    checkedList.push(toDo);
}
function pendingListsDeleted(toDo) {
    pendingList.splice(toDo,1);
}
function finishedListsDeleted(toDo) {
    checkedList.splice(toDo,1);
}
function localStorageUpdate() {
    localStorage.setItem(PENDING, JSON.stringify(pendingList));
    localStorage.setItem(FINISHED, JSON.stringify(checkedList));
}
function handleCheckBtnClicked(e) {
    const btn = e.target.parentElement;
    const targetList = btn.parentElement;
    const value = targetList.firstChild.innerHTML;
    const listIndex = pendingList.indexOf(value);
       
    targetList.remove();
    showingFinishedItem(value);
    pendingListsDeleted(listIndex);
    finishedListsAdded(value);
    localStorageUpdate();
}
function handleBackBtnClicked(e) {
    const btn = e.target.parentElement;
    const targetList = btn.parentElement;
    const value = targetList.firstChild.innerHTML;
    const listIndex = checkedList.indexOf(value);
       
    targetList.remove();
    showingPendingItem(value);
    finishedListsDeleted(listIndex);
    pendingListsAdded(value);
    localStorageUpdate();
}
function handlePendingDeleteBtnClicked(e) {
    const btn = e.target.parentElement;
    const targetList = btn.parentElement;
    const value = targetList.firstChild.innerHTML;
    const listIndex = pendingList.indexOf(value);

    targetList.remove();
    pendingListsDeleted(listIndex);
    localStorageUpdate();
}
function handleFinishedDeleteBtnClicked(e) {
    const btn = e.target.parentElement;
    const targetList = btn.parentElement;
    const value = targetList.firstChild.innerHTML;
    const listIndex = checkedList.indexOf(value);

    targetList.remove();
    finishedListsDeleted(listIndex);
    localStorageUpdate();
}
function showingPendingItem(value) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    span.innerHTML = value;
    checkBtn.innerHTML = "<i class='fas fa-check fa-2x check'></i>";
    deleteBtn.innerHTML = "<i class='fas fa-times fa-2x delete'></i>";

    checkBtn.addEventListener("click", handleCheckBtnClicked);
    deleteBtn.addEventListener("click", handlePendingDeleteBtnClicked);
    
    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);

    pendingItems.appendChild(li);
}
function showingFinishedItem(value) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const backBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    span.innerHTML = value;
    backBtn.innerHTML = "<i class='fas fa-undo fa-2x back'></i>";
    deleteBtn.innerHTML = "<i class='fas fa-times fa-2x delete'></i>";

    backBtn.addEventListener("click", handleBackBtnClicked);
    deleteBtn.addEventListener("click", handleFinishedDeleteBtnClicked);
    
    li.appendChild(span);
    li.appendChild(backBtn);
    li.appendChild(deleteBtn);

    finishedItems.appendChild(li);
}
function handleToDoSubmit(e) {
    e.preventDefault();
    const value = input.value;
    input.value = "";
    showingPendingItem(value);
    pendingListsAdded(value);
    localStorageUpdate();  
}
function loadListItems() {
    pendingList = JSON.parse(localStorage.getItem(PENDING)) || [];
    checkedList = JSON.parse(localStorage.getItem(FINISHED)) || [];
}
function showingLists() {
    pendingList.forEach((i) => {
        showingPendingItem(i);
    });
    checkedList.forEach((i) => {
        showingFinishedItem(i);
    });
}
function init() {
    loadListItems();
    showingLists();
    form.addEventListener("submit", handleToDoSubmit);
}

init();
