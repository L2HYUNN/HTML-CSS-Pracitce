const jsFormApp = document.querySelector(".js-todo_form__new"),
    jsInputApp = document.querySelector(".js-todo_new"),
    pendingItems = document.querySelector(".js-todo-list__pending"),
    deletingItems =  document.querySelector(".js-todo-list__deleting");

let itemList = [],
    checkedList = [];

const handleCheckClick = (e) => {
    const checkItem = e.target.parentElement.parentElement;
    const checkLocalStorageItem = checkItem.firstChild.innerHTML;
    checkItem.remove();

    const doList = localStorage.getItem('list');
    const newDoList = JSON.parse(doList);

    const filterDoList = newDoList.filter((i) => {
        return i !== checkLocalStorageItem;
    })
    localStorage.setItem('list', JSON.stringify(filterDoList));
    // ToDo 리스트에서 해당 내용 삭제 및 로컬스토리지에서 삭제
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = checkLocalStorageItem;
    li.appendChild(span);   
    deletingItems.appendChild(li);
    const backBtn = createBackBtn();
    const deleteBtn = createDeleteBtn();
    li.appendChild(backBtn);
    li.appendChild(deleteBtn); 
    // Finished 리스트 생성 및 checkList 로컬스토리지에 저장
    const itemIndex = itemList.indexOf(checkLocalStorageItem);
    itemList.splice(itemIndex, 1);
    console.log(itemList);
    saveCheckedList(checkLocalStorageItem,'checkList');
};

const handleBackClick = (e) => {
    const backItem = e.target.parentElement.parentElement;
    const backLocalStorageItem = backItem.firstChild.innerHTML;
    backItem.remove();

    const doList = localStorage.getItem('checkList');
    const newDoList = JSON.parse(doList);

    const filterDoList = newDoList.filter((i) => {
        return i !== backLocalStorageItem;
    })
    localStorage.setItem('checkList', JSON.stringify(filterDoList));
    // ToDo 리스트에서 해당 내용 삭제 및 로컬스토리지에서 삭제
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = backLocalStorageItem;
    li.appendChild(span);   
    pendingItems.appendChild(li);
    const checkBtn = createCheckBtn(); 
    const deleteBtn = createDeleteBtn();
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn); 
    // Finished 리스트 생성 및 backList 로컬스토리지에 저장
    const itemIndex = checkedList.indexOf(backLocalStorageItem);
    checkedList.splice(itemIndex, 1);
    console.log(checkedList);
    saveToDoList(backLocalStorageItem,'list');

}

const handleDeleteClick = (e) => {
    const removeItem = e.target.parentElement.parentElement;
    const removeLocalStorageItem = removeItem.firstChild.innerHTML;
    const parentName = removeItem.parentElement.classList[1];
    const localStorageName = parentName === 'js-todo-list__pending' ? 'list' : 'checkList';
    removeItem.remove();

    const doList = localStorage.getItem(localStorageName);
    const newDoList = JSON.parse(doList);

    const filterDoList = newDoList.filter((i) => {
        return i !== removeLocalStorageItem;
    })
    localStorage.setItem(localStorageName, JSON.stringify(filterDoList));
    
};

const createCheckBtn = () => {
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check fa-2x check"></i>';
    checkBtn.addEventListener("click", handleCheckClick);
    return checkBtn;
};

const createBackBtn = () => {
    const backBtn = document.createElement('button');
    backBtn.innerHTML = '<i class="fas fa-undo fa-2x back"></i>';
    backBtn.addEventListener("click", handleBackClick);
    return backBtn;
};

const createDeleteBtn = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-times fa-2x delete"></i>';
    deleteBtn.addEventListener("click", handleDeleteClick);
    return deleteBtn;
};

const loadToDoList = (name,list) => {
    const doList = localStorage.getItem(name);
    const newDoList = JSON.parse(doList) || [];
    if(name==='list'){
        itemList = newDoList;
    } else {
        checkedList = newDoList;
    }
    newDoList.forEach( (item) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerHTML = item;
        li.appendChild(span);   
        list.appendChild(li); 

        if(name ==='list') {
            const checkBtn = createCheckBtn();
            li.appendChild(checkBtn); 
        } else {
            const backBtn = createBackBtn();
            li.appendChild(backBtn);
        }
        const deleteBtn = createDeleteBtn();
        li.appendChild(deleteBtn); 
    });
};

const saveToDoList = (item, list='list') => {
    itemList.push(item);
    newItemList = JSON.stringify(itemList);
    localStorage.setItem(list, newItemList);
};

const saveCheckedList = (item,list='checkList') => {
    checkedList.push(item);
    newcheckedList = JSON.stringify(checkedList);
    localStorage.setItem(list, newcheckedList);
};

const handleSubmitApp = (e) => {
    e.preventDefault();
    const toDoList = jsInputApp.value

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = toDoList;
    li.appendChild(span);   
    pendingItems.appendChild(li); 

    const checkBtn = createCheckBtn();
    const deleteBtn = createDeleteBtn();

    li.appendChild(checkBtn); 
    li.appendChild(deleteBtn); 

    saveToDoList(toDoList, 'list');
    jsInputApp.value = '';
};
jsFormApp.addEventListener("submit", handleSubmitApp);
loadToDoList('list', pendingItems);
loadToDoList('checkList', deletingItems);
